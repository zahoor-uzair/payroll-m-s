const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require('../modal/user')

const loginUser = async (req, res) => {
  console.log(req.body)
  // Our login logic starts here
  try {
    // Get user input
    const { email, password } = req.body;
    // Validate user input

    if (!(email && password)) {
      res.status(400).send("All input is required");
    }
    // Validate if user exist in our database
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      // Create token
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );
      user.token = token;
      res.status(200).json(user);
    }
    if (!user || (await bcrypt.compare(password, user.password))) {
      console.log("invalid credentials")
      res.status(401).send("Invalid Credentials");
    }

  } catch (err) {
    console.log(err);
    return err;
  }
}
module.exports = loginUser
