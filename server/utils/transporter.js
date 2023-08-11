const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: "uzairzahoor.pixako@gmail.com",
        pass: 'phjwalqwiyxpbqbe',
    },
});

module.exports = transporter;
