const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken");
const User = require('../modal/user')
const transporter = require('../utils/transporter')
require("dotenv").config();

const registerUser = async (req, res) => {

  try {
    console.log(req.body)
    // Get user input
    const { name, fname, email, password } = req.body;
    const imageUrl = req.file ? `${req.protocol}://${req.get('host')}/${req.file.path}` : null;
    console.log(req.file)

    // Validate user input
    if (!(email && password && name && fname)) {
      res.status(400).send("All input is required");
    }
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }

    //Encrypt user password
    encryptedPassword = await bcrypt.hash(password, 10);

    // Create user in our database
    const user = await User.create({
      name,
      fname,
      email: email.toLowerCase(),
      password: encryptedPassword,
      imageurl: imageUrl
    });

    // Create token
    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.TOKEN_KEY,
      {
        expiresIn: "2h",
      }
    );
    // save user token
    user.token = token;
    const mailOptions = {
      from: 'uzairzahoor.pixako@gmail.com',
      to: email,
      subject: 'Welcome to Our App!',
      html: '<p>Thank you for registering on our app!</p>', // Use your email template here
    };
    await transporter.sendMail(mailOptions)
    // return new user
    res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
  // Our register logic ends here
}
module.exports = registerUser