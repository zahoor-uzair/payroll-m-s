import { useState, useEffect } from "react";
import Head from "next/head";
import { Button, Typography } from "@mui/material";
import Layout from "@/components/layout";
import BasicTable from "@/components/employee-components/listing";
import ModalForm from "@/components/employee-components/form-modal";

import {
  getEmployee,
  Employee,
  AddEmployee,
  deleteEmployee,
  editEmployee,
} from "@/components/employee-components/api";

export default function Home() {
  const [addModalOpen, setAddModalOpen] = useState(false);

  const [employee, setEmployee] = useState<Employee[]>([]);
  const [error, setError] = useState<string>(""); // State to store error messages

  useEffect(() => {
    getEmployee(setEmployee, setError);
  }, []);

  const handleAddEmployee = async (formData: Employee) => {
    try {
      await AddEmployee(formData);
      setAddModalOpen(false);
      getEmployee(setEmployee, setError);
    } catch (error: any) {
      setError("Error adding employee: " + error.message);
    }
  };

  const handleDeleteEmployee = async (id: string) => {
    try {
      await deleteEmployee(id);
      // After successfully deleting the employee, fetch the updated employee list
      getEmployee(setEmployee, setError);
    } catch (error: any) {
      setError("Error deleting employee: " + error.message);
    }
  };
  if (!employee) {
    return (
      <>
        <Typography variant="h4">Loading...</Typography>
      </>
    );
  }
  return (
    <>
      <Head>
        <title>Employee</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <Layout>
          {addModalOpen && (
            <ModalForm onClose={setAddModalOpen} onSubmit={handleAddEmployee} />
          )}

          <Button
            sx={{
              marginBottom: 2,
            }}
            variant="contained"
            color="primary"
            onClick={() => setAddModalOpen(true)}
          >
            Add Employee
          </Button>

          <BasicTable
            employee={employee}
            error={error}
            onDelete={handleDeleteEmployee}
            setError={setError}
            setEmployee={setEmployee}
          />
        </Layout>
      </main>
    </>
  );
}
