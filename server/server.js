const express = require('express')
require("dotenv").config();
const multer = require('multer');
const connectDB = require('./utils/mogodbConnect')
const app = express()
const cors = require('cors');
const auth = require("./middleware/auth");
const employeeRoute = require('./routes/employeeRoute')
const registerRoute = require('./routes/registerRoute')
const loginRoute = require('./routes/loginRoute')

const port = process.env.PORT
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './assets/uploads'); // Specify the directory where files will be saved
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname); // Use a unique filename
    },
});

const upload = multer({ storage: storage });


connectDB()
app.use(express.json())
app.use(cors());

app.use('/uploads', express.static('assets/uploads'));
//Routes

app.use('/api/v1/login', loginRoute)
app.use('/api/v1/register', upload.single('image'), registerRoute)
app.use('/api/v1/employee', auth, employeeRoute)


app.listen(port, () => console.log(`Server listening on  http://localhost:${port}`))