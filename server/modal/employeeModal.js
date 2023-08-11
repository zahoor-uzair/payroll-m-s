const mongoose = require('mongoose');
const { Schema } = mongoose;

const employeeSchema = new Schema({
    name: String, // String is shorthand for {type: String}
    fname: String,
    email: String,
    phoneNo: String,
    age: Number,
    salary: Number,
    createdAt: Date,

});

const Employee = mongoose.model('employee', employeeSchema);
module.exports = Employee