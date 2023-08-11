import axios from "axios";
import { BehaviorSubject } from "rxjs";
import { toast } from "react-toastify";
import Router from "next/router";

const apiUrl = "http://localhost:3008";
export interface User {
  id: string;
  email: string;
}

const userSubject = new BehaviorSubject(
  typeof window !== "undefined" && JSON.parse(localStorage.getItem("user"))
);

export const userService = {
  user: userSubject?.asObservable(),
  get userValue() {
    return userSubject.value;
  },
  login,
  logout,
  register,
};

async function login(email: string, password: string) {
  try {
    const response = await axios.post(`${apiUrl}/api/v1/login`, {
      email,
      password,
    });
    if (response.status === 200) {
      const currentUser = response.data;
      userSubject.next(currentUser);
      localStorage.setItem("user", JSON.stringify(currentUser));
      return currentUser;
    }
    if (response.status === 401) {
      console.log("invalid");
      toast.error("Invalid Credentials");
    }
  } catch (error) {
    console.error("API error:", error);
    toast.error("Invalid Credentials");
    return error;
  }
}

function logout() {
  localStorage.removeItem("user");
  userSubject.next(null);
  Router.push("/account/login");
}
export async function register(user: any) {
  const response = await axios.post(`${apiUrl}/api/v1/register`, user);
  console.log(response.data);
}
