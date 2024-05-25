import React from "react";
import { PencilLine } from "lucide-react";

const DefaultProfile = () => {
  return (
    <div className="flex w-[359px] h-[190px] bg-[#162329] mt-[1rem] rounded-md relative">
      <p className="text-white font-bold absolute bottom-0 mb-4 ml-2">
        @Johndoe,
      </p>
      <PencilLine
        size={16}
        color="white"
        className="absolute right-0 mt-2 me-2"
      />
    </div>
  );
};

export default DefaultProfile;
