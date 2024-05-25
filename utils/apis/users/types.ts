import { z } from "zod";

export const createProfileSchema = z.object({
  name: z.string().min(1),
  birthday: z.date(),
  height: z.number().min(1),
  weight: z.number().min(1),
  interests: z.string().min(1),
});

export const updateProfileSchema = z.object({
  name: z.string().min(1),
  birthday: z.date(),
  height: z.number().min(1),
  weight: z.number().min(1),
  interests: z.string().min(1),
});

export type ResponseProfile = {
  name: string;
  birthday: string;
  height: number;
  weight: number;
  interests: string[];
};

export type getProfile = {
  auth: boolean;
  message: string;
};

export type CreateProfileSchema = z.infer<typeof createProfileSchema>;
export type UpdateProfileSchema = z.infer<typeof updateProfileSchema>;
