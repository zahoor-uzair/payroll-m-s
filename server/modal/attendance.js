const mongoose = require('mongoose');
const { Schema } = mongoose;

const CheckInOutSchema = new Schema({
    userId: String,
    type: String, // "checkin" or "checkout"
    timestamp: Date,
});

const CheckInOut = mongoose.model("CheckInOut", CheckInOutSchema);
module.exports = CheckInOut