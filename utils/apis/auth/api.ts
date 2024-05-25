import axiosWithConfig from "@/utils/axiosWithConfig";
import { LoginSchema, RegisterSchema } from "./type";

export const loginAccount = async (body: LoginSchema) => {
  try {
    const response = axiosWithConfig.post("/login", body);
    return (await response).data;
    // cek lagi
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const registerAccount = async (body: RegisterSchema) => {
  try {
    const response = axiosWithConfig.post("/register", body);
    return (await response).data;
    // cek lagi
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};
