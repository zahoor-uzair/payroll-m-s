import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import { Employee, editEmployee, getEmployee } from "./api";
import { Alert, AlertTitle, Typography } from "@mui/material";
import ModalForm from "./form-modal";
import { useRouter } from "next/router";

export default function BasicTable({
  employee,
  error,
  onDelete,
  setError,
  setEmployee,
}: any) {
  const [openDialog, setOpenDialog] = useState(false);
  const [edit, setEdit] = useState({});
  const [editId, setEditId] = useState("");
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const router = useRouter();
  const handleEdit = (data: Employee) => {
    setEditId(data._id);
    setEdit(data);
    setEditModalOpen(true);
  };

  const handleEditEmployee = async (data: any) => {
    try {
      await editEmployee(data, editId);
      // After successfully deleting the employee, fetch the updated employee list
      getEmployee(setEmployee, setError);
    } catch (error: any) {
      setError(("Error deleting employee: " + error.message) as unknown);
    }
  };
  const handleDelete = (id: string) => {
    setOpenDialog(true);
    setDeleteId(id);
  };

  const handleConfirmDelete = () => {
    setOpenDialog(false);
    onDelete(deleteId);
  };

  const handleCancelDelete = () => {
    setOpenDialog(false);
    setDeleteId("");
  };
  const formatDate = (dateString: Date) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
  };
  if (error) {
    return (
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        {error}{" "}
        <Typography
          variant="body1"
          color={"blue"}
          sx={{ textDecoration: "underline", cursor: "pointer" }}
          onClick={() => router.push("/account/login")}
        >
          Goto Log-In Page
        </Typography>
      </Alert>
    );
  }
  return (
    <div>
      {editModalOpen && (
        <ModalForm
          onClose={setEditModalOpen}
          onSubmit={handleEditEmployee}
          prefill={edit}
        />
      )}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="custom table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold", fontSize: "1rem" }}>
                Name
              </TableCell>
              <TableCell
                align="left"
                sx={{ fontWeight: "bold", fontSize: "1rem" }}
              >
                Father Name
              </TableCell>
              <TableCell
                align="left"
                sx={{ fontWeight: "bold", fontSize: "1rem" }}
              >
                Email
              </TableCell>
              <TableCell
                align="left"
                sx={{ fontWeight: "bold", fontSize: "1rem" }}
              >
                Age
              </TableCell>
              <TableCell
                align="left"
                sx={{ fontWeight: "bold", fontSize: "1rem" }}
              >
                Phone No.
              </TableCell>
              <TableCell
                align="left"
                sx={{ fontWeight: "bold", fontSize: "1rem" }}
              >
                Salary
              </TableCell>
              <TableCell
                align="left"
                sx={{ fontWeight: "bold", fontSize: "1rem" }}
              >
                Created At
              </TableCell>
              <TableCell
                align="left"
                sx={{ fontWeight: "bold", fontSize: "1rem" }}
              >
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employee.map((row: Employee) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.fname}</TableCell>
                <TableCell align="left">{row.email}</TableCell>
                <TableCell align="left">{row.age}</TableCell>
                <TableCell align="left">{row.phoneNo}</TableCell>
                <TableCell align="left">{row.salary}</TableCell>
                <TableCell align="left">{formatDate(row.createdAt)}</TableCell>
                <TableCell align="left">
                  <DeleteIcon
                    onClick={() => handleDelete(row._id)} // Call the onDelete handler with the employee data
                    style={{ cursor: "pointer", color: "red" }}
                  />
                  <EditIcon
                    color="primary"
                    onClick={() => handleEdit(row)} // Call the onDelete handler with the employee data
                    style={{ cursor: "pointer", marginLeft: 8 }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog open={openDialog} onClose={handleCancelDelete}>
        <DialogTitle>Delete Confirmation</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this employee?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCancelDelete}
            variant="contained"
            color="primary"
          >
            Cancel
          </Button>
          <Button
            onClick={handleConfirmDelete}
            variant="contained"
            color="error"
          >
            Sure
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
