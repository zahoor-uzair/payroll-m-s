import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
const stl = {
  marginY: 1,
};
const ModalForm = ({ onClose, onSubmit, prefill }: any) => {
  const [name, setName] = useState(prefill?.name || "");
  const [fname, setFatherName] = useState(prefill?.fname || "");
  const [email, setEmail] = useState(prefill?.email || "");
  const [age, setAge] = useState(prefill?.age || "");
  const [phoneNo, setPhoneNo] = useState(prefill?.phoneNo || "");
  const [salary, setSalary] = useState(prefill?.salary || "");
  const handleClose = () => {
    onClose(false);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formData = {
      name,
      fname,
      email,
      age: parseInt(age),
      phoneNo,
      salary: parseInt(salary),
    };
    onSubmit(formData);
    // Clear the form fields
    setName("");
    setFatherName("");
    setEmail("");
    setAge("");
    setPhoneNo("");
    setSalary("");
    onClose();
  };

  return (
    <Modal open={true} onClose={handleClose}>
      <Paper
        sx={{
          padding: 3,
          width: 400,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Typography variant="h6" gutterBottom>
          Add Employee
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            fullWidth
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={stl}
            size="small"
          />
          <TextField
            label="Father Name"
            fullWidth
            required
            value={fname}
            onChange={(e) => setFatherName(e.target.value)}
            sx={stl}
            size="small"
          />
          <TextField
            label="Email"
            fullWidth
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={stl}
            size="small"
          />
          <TextField
            label="Age"
            fullWidth
            required
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            sx={stl}
            size="small"
          />
          <TextField
            label="Phone No."
            fullWidth
            required
            value={phoneNo}
            onChange={(e) => setPhoneNo(e.target.value)}
            sx={stl}
            size="small"
          />
          <TextField
            label="Salary"
            fullWidth
            required
            type="number"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            sx={stl}
            size="small"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ marginTop: 2 }}
          >
            Add Employee
          </Button>
        </form>
      </Paper>
    </Modal>
  );
};

export default ModalForm;
