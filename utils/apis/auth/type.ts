import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email("Invalid email"),
  password: z.string().min(8, {
    message: "Password must be longer than or equal to 8 characters",
  }),
});

export const registerSchema = z
  .object({
    // email, username, password, confirm password
    email: z.string().min(1).email("Invalid email"),
    username: z.string().min(1, { message: "Username is requeired" }),
    password: z.string().min(1, { message: "Password is required" }),
    confirmPassword: z
      .string()
      .min(1, { message: "Confirm password is required" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password don't match",
    path: ["confirmPassword"], // Set the path of the error to confirmPassword
  });

export type LoginSchema = z.infer<typeof loginSchema>;
export type RegisterSchema = z.infer<typeof registerSchema>;
