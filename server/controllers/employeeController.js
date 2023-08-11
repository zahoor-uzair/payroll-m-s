const Employee = require('../modal/employeeModal')

const getEmployees = async (req, res) => {
    try {
        const employeesData = await Employee.find().sort({ createdAt: -1 }); // Sort by 'createdAt' field in descending order (-1)
        res.json(employeesData);
    } catch (error) {
        res.status(500).json({ message: "Error fetching employees", error: error.message });
    }
};


const addEmployee = (req, res) => {
    let { name, fname, email, phoneNo, age, salary } = req.body;
    console.log(req.body)
    const newEmployee = new Employee({
        name: name,
        fname: fname,
        email: email,
        phoneNo: phoneNo,
        age: parseInt(age),
        salary: parseInt(salary),
        createdAt: Date.now()
    })
    newEmployee
        .save()
        .then(() => res.status(201).send("New Employee added successfully"))
        .catch((err) =>
            res
                .status(409)
                .send(`Error occurred while adding a New Employee ${err}`)
        );
}
const deleteEmployee = async (req, res) => {
    console.log(req.params.id)
    try {
        const deletedEmployee = await Employee.findByIdAndDelete(req.params.id);
        if (!deletedEmployee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        res.json({ message: 'Employee deleted successfully' });
    } catch (error) {
        console.error('Error deleting employee', error);
        res.status(500).json({ message: 'Server error' });
    }
}
const updateEmployee = async (req, res) => {
    try {
        const id = req.params.id;
        const updates = req.body;
        delete updates._id;

        const updatedEmployee = await Employee.findByIdAndUpdate(id, updates, {
            new: true,
            runValidators: true,
        });

        if (!updatedEmployee) {
            return res.status(404).json({ message: 'Employee not found' });
        }

        res.json({ message: 'Employee updated successfully', updatedEmployee });
    } catch (error) {
        console.error('Error updating employee', error);
        res.status(500).json({ message: 'Server error' });
    }
}

module.exports = { getEmployees, addEmployee, deleteEmployee, updateEmployee };