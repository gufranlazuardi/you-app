import axiosWithConfig from "@/utils/axiosWithConfig";
import {
  CreateProfileSchema,
  ResponseProfile,
  UpdateProfileSchema,
} from "./types";

export const createProfile = async (body: CreateProfileSchema) => {
  // post
  try {
    const response = await axiosWithConfig.post(
      "/createProfile",
      body
    );
    response.data as ResponseProfile;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const getProfile = async () => {
  // get
  try {
    const response = await axiosWithConfig.get("/getProfile");
    response.data as ResponseProfile;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const updateProfile = async (body: UpdateProfileSchema) => {
  // put
  try {
    const response = await axiosWithConfig.put(
      "/updateProfile",
      body
    );
    response.data as ResponseProfile;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};
