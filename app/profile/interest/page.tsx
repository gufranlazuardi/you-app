import { Button } from "@/components/ui/button";
import { ChevronLeft, Ellipsis } from "lucide-react";
import React from "react";

const Interest = () => {
  return (
    <div className="flex flex-col overflow-auto bg-gradient-to-tr from-[#09141A] to-[#1F4247] pt-[4rem] grow">
      {/* Top Navigation */}
      <div className="flex justify-between items-center px-[1.5rem]">
        <div className="flex">
          <ChevronLeft color="white" />
          <p className="text-white font-bold text-[14px]">Back</p>
        </div>
        <p className="text-white font-semibold">@johndoe</p>
        <p className="text-[#4599DB] text-[14px] font-semibold">
          Save
        </p>
      </div>

      {/* Main */}
      <main className="flex flex-col gap-2 px-[2rem] mt-[5rem]">
        <p className="text-[#F3EDA6] font-bold text-[14px]">
          Tell everyone about yourself
        </p>
        <h1 className="text-white font-bold text-[20px]">
          What interest you?
        </h1>
        <div className="h-[46px] flex bg-white rounded-lg mt-4">
          test
        </div>
      </main>
    </div>
  );
};

export default Interest;
