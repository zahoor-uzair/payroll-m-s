import axios from "axios";

const apiUrl = "http://localhost:3008/api/v1";

const getAccessToken = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user || !user.token) {
    throw new Error("Access token not found in local storage");
  }
  //   userId = user._id;
  return user.token;
};
export const checkIn = async () => {
  console.log("from checkIn");
  try {
    const accessToken = getAccessToken();
    const headers = {
      "x-access-token": accessToken,
    };

    const response = await axios.post(`${apiUrl}/checkin/12`, {
      headers,
    });

    console.log("Employee added successfully:", response);
  } catch (error: any) {
    console.error("Error adding employee:", error.message);
  }
};
