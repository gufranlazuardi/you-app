import DefaultProfile from "@/components/default-profile";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Ellipsis, PencilLine } from "lucide-react";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const Profile = () => {
  return (
    <div className="flex flex-col pt-[4rem] overflow-auto bg-[#09141A] grow">
      {/* top navigation */}
      <div className="flex justify-between items-center px-[1rem]">
        <div className="flex">
          <ChevronLeft color="white" />
          <p className="text-white font-bold text-[14px]">Back</p>
        </div>
        <p className="text-white font-semibold">@johndoe</p>
        <Button>
          <Ellipsis color="white" />
        </Button>
      </div>

      <main className="flex flex-col gap-4 items-center">
        {/* box */}
        <div
          className="flex w-[359px] h-[190px] bg-[#162329] mt-[1rem] rounded-md relative bg-cover bg-center"
          style={{ backgroundImage: "url('/profile-picture.png')" }}
        >
          <p className="text-white font-bold absolute bottom-[60px] mb-4 ml-2">
            @Johndoe,
          </p>
          <p className="text-[13px] text-white absolute bottom-[55px] ml-2">
            Male
          </p>
          <div className="flex ml-2 gap-2 items-center h-[36px] absolute bottom-[20px] w-auto bg-[#1D221E] rounded-[100px] px-4 py-1">
            <Image
              src="/Horoscope.svg"
              width={15}
              height={15}
              alt="Horoscope"
            />
            <p className="text-white">Virgo</p>
          </div>
          <PencilLine
            size={16}
            color="white"
            className="absolute right-0 mt-2 me-2"
          />
        </div>

        {/* About */}
        <div className="flex flex-col gap-4 justify-center py-5 pl-8 pr-2 bg-[#0E191F] w-[359px] h-auto rounded-xl">
          <div className="flex justify-between">
            <p className="text-white font-bold text-[14px]">About</p>
            <Link href="/profile/about">
              <PencilLine
                size={16}
                color="white"
                className=" right-0 mt-2 mr-2 cursor-pointer"
              />
            </Link>
          </div>
          <p className="text-white text-[14px] opacity-[52%]">
            Add in your about to help others know you better
          </p>
        </div>

        {/* Interest */}
        <div className="flex flex-col gap-4 py-5 bg-[#0E191F] pl-8 pr-2 justify-center w-[359px] h-auto rounded-xl">
          <div className="flex justify-between items-center">
            <p className="text-white text-[14px] font-bold">
              Interest{" "}
            </p>
            <Link href="/profile/interest">
              <PencilLine
                size={16}
                color="white"
                className="right-0 mt-2 me-2"
              />
            </Link>
          </div>
          <p className="text-white text-[14px] opacity-[52%]">
            Add in your interest to help others know you better
          </p>
        </div>
      </main>
    </div>
  );
};

export default Profile;
