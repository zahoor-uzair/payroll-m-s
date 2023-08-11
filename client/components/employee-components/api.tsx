import axios from "axios";

export interface Employee {
  _id: string;
  name: string;
  fname: string;
  email: string;
  age: number;
  phoneNo: string;
  salary: number;
  createdAt: Date;
}

const apiUrl = "http://localhost:3008/api/v1";
const getAccessToken = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user || !user.token) {
    throw new Error("Access token not found in local storage");
  }
  return user.token;
};

export const getEmployee = async (
  setEmployee: React.Dispatch<React.SetStateAction<Employee[]>>,
  setError: React.Dispatch<React.SetStateAction<string>>
) => {
  try {
    const accessToken = getAccessToken();

    const headers = {
      "x-access-token": accessToken,
    };

    const response = await axios.get<Employee[]>(`${apiUrl}/employee`, {
      headers,
    });
    console.log(response);
    if (response.status === 401) {
      // localStorage.removeItem("user");
      console.log(response.status);
    }
    if (response.status === 200) {
      setEmployee(response.data);
    }
  } catch (error: any) {
    setError("Error fetching data: " + error.message);
    // router.push("/account/login");
  }
};

export const AddEmployee = async (formData: Employee) => {
  try {
    const accessToken = getAccessToken();
    const headers = {
      "x-access-token": accessToken,
    };

    const response = await axios.post(`${apiUrl}/employee`, formData, {
      headers,
    });

    console.log("Employee added successfully:", response);
  } catch (error: any) {
    console.error("Error adding employee:", error.message);
  }
};
export const editEmployee = async (formData: Employee, userId: string) => {
  console.log(formData);
  try {
    const accessToken = getAccessToken();
    const headers = {
      "x-access-token": accessToken,
    };

    const response = await axios.put(`${apiUrl}/employee/${userId}`, formData, {
      headers,
    });

    console.log("Employee edited successfully:", response);
  } catch (error: any) {
    console.error("Error editing employee:", error.message);
  }
};

export const deleteEmployee = async (id: any) => {
  console.log(id);
  try {
    const accessToken = getAccessToken();
    const headers = {
      "x-access-token": accessToken,
    };

    const response = await axios.delete(`${apiUrl}/employee/${id}`, {
      headers,
    });

    console.log("Employee added successfully:", response);
  } catch (error: any) {
    console.error("Error adding employee:", error.message);
  }
};
