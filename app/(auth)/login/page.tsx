import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div className="p-2 overflow-auto bg-gradient-to-tr from-[#09141A] to-[#1F4247] grow">
      <div className="flex gap-2 items-center mt-[2rem]">
        <ChevronLeft color="white" />
        <p className="text-white text-sm">Back</p>
      </div>

      <main className="flex flex-col gap-4">
        <h1 className="text-2xl pl-5 mt-[8rem] font-semibold text-white">
          Login
        </h1>
        <div className="flex flex-col gap-3 px-2">
          <Input
            type="email"
            placeholder="Enter Username/Email"
            className="h-[51px] bg-[rgba(255,255,255,0.06)] border-none text-white"
          />
          <Input
            type="password"
            placeholder="Enter Password"
            className="h-[51px] bg-[rgba(255,255,255,0.06)] border-none text-white"
          />
          <Button className="h-[48px] mt-[1.5rem] bg-gradient-to-tr from-[#62CDCB] to-[#4599DB] w-full font-bold">
            Login
          </Button>
        </div>
        <div className="flex items-center justify-center mt-[2.5rem]">
          <p className="text-sm text-white">
            No Account?{" "}
            <Link href="/register">
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
                Register here
              </span>
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Login;
