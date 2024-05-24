import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const Register = () => {
  return (
    <div className="p-2 overflow-auto bg-gradient-to-tr from-[#09141A] to-[#1F4247] grow">
      <div className="flex gap-2 items-center mt-[2rem]">
        <ChevronLeft color="white" />
        <p className="text-white text-sm">Back</p>
      </div>

      <main className="flex flex-col gap-4">
        <h1 className="text-2xl pl-5 mt-[4rem] font-semibold text-white">
          Register
        </h1>
        <div className="flex flex-col gap-3 px-2">
          <Input
            type="email"
            placeholder="Enter Email"
            className="h-[51px] bg-[rgba(255,255,255,0.06)] border-none text-white"
          />
          <Input
            type="username"
            placeholder="Enter Username"
            className="h-[51px] bg-[rgba(255,255,255,0.06)] border-none text-white"
          />
          <Input
            type="password"
            placeholder="Create Password"
            className="h-[51px] bg-[rgba(255,255,255,0.06)] border-none text-white"
          />
          <Input
            type="password"
            placeholder="Confirm Password"
            className="h-[51px] bg-[rgba(255,255,255,0.06)] border-none text-white"
          />
          <Button className="h-[48px] mt-[1.5rem] bg-gradient-to-tr from-[#62CDCB] to-[#4599DB] w-full font-bold shadow-button">
            Register
          </Button>
        </div>
        <div className="flex mt-[2.5rem] items-center justify-center">
          <p className="text-sm text-white">
            No Account?{" "}
            <Link href="/login">
              <span
                className="cursor-pointer"
                style={{
                  backgroundImage:
                    "linear-gradient(to top right, #FFE2BE, #D5BE88, #F8FAE5)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textDecoration: "underline",
                }}
              >
                Login here
              </span>
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Register;
