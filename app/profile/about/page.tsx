import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ChevronLeft,
  Ellipsis,
  PencilLine,
  Plus,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div className="flex flex-col pt-[4rem] overflow-auto bg-[#09141A] grow">
      {/* top navigation */}
      <div className="flex justify-between items-center px-[1rem]">
        <div className="flex">
          <ChevronLeft color="white" />
          <p className="text-white font-bold">Back</p>
        </div>
        <p className="text-white font-semibold">@johndoe</p>
        <Button>
          <Ellipsis color="white" />
        </Button>
      </div>

      <main className="flex flex-col gap-4 items-center">
        {/* box */}
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

        {/* About */}
        <div className="flex flex-col gap-4 justify-center py-5 pl-8 pr-2 bg-[#0E191F] w-[359px] h-auto rounded-xl">
          <div className="flex justify-between">
            <p className="text-white font-bold text-[14px]">About</p>
            <Link href="/profile/about">
              <p className="text-[#F3EDA6] text-[12px]">
                Save & Update
              </p>
            </Link>
          </div>

          {/* Add image */}
          <div className="flex flex-col gap-4 justify-center">
            <div className="flex items-center gap-4">
              <div className="w-[57px] h-[57px] rounded-lg bg-white bg-opacity-20 flex items-center justify-center">
                <Plus color="#F3EDA6" className="w-6 h-6" />
              </div>
              <p className="text-white text-[12px]">Add Image</p>
            </div>
          </div>

          <div className="flex items-center">
            <p className="w-full text-[#4C5559] text-[13px]">
              Display name:
            </p>
            <Input
              placeholder="Enter name"
              className="bg-[#1A252A] border-[#4C5559] placeholder:text-[#4C5559] placeholder:text-right"
            />
          </div>
          <div className="flex items-center">
            <p className="w-full text-[#4C5559] text-[13px]">
              Gender:
            </p>
            {/* <Input
              placeholder="Enter name"
              className="bg-[#1A252A] border-[#4C5559] placeholder:text-[#4C5559] placeholder:text-right"
            /> */}
            <Select>
              <SelectTrigger className="w-full bg-[#1A252A] border-[#4C5559] text-[#4C5559]">
                <SelectValue
                  placeholder="Select Gender"
                  className=" placeholder:text-right"
                />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="apple">Male</SelectItem>
                  <SelectItem value="banana">Fenale</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center">
            <p className="w-full text-[#4C5559] text-[13px]">
              Birthday:
            </p>
            <Input
              placeholder="DD MM YYYY"
              className="bg-[#1A252A] border-[#4C5559] placeholder:text-[#4C5559] placeholder:text-right"
            />
          </div>
          <div className="flex items-center">
            <p className="w-full text-[#4C5559] text-[13px]">
              Horoscope:
            </p>
            <Input
              placeholder="--"
              className="bg-[#1A252A] border-[#4C5559] placeholder:text-[#4C5559] placeholder:text-right"
            />
          </div>
          <div className="flex items-center">
            <p className="w-full text-[#4C5559] text-[13px]">
              Zodiac:
            </p>
            <Input
              placeholder="--"
              className="bg-[#1A252A] border-[#4C5559] placeholder:text-[#4C5559] placeholder:text-right"
            />
          </div>
          <div className="flex items-center">
            <p className="w-full text-[#4C5559] text-[13px]">
              Height:
            </p>
            <Input
              placeholder="Add height"
              className="bg-[#1A252A] border-[#4C5559] placeholder:text-[#4C5559] placeholder:text-right"
            />
          </div>
          <div className="flex items-center">
            <p className="w-full text-[#4C5559] text-[13px]">
              Weight:
            </p>
            <Input
              placeholder="Add weight"
              className="bg-[#1A252A] border-[#4C5559] placeholder:text-[#4C5559] placeholder:text-right"
            />
          </div>
        </div>

        {/* Interest */}
        <div className="flex flex-col gap-4 py-5 bg-[#0E191F] pl-8 pr-2 justify-center w-[359px] h-auto rounded-xl">
          <div className="flex justify-between items-center">
            <p className="text-white text-[14px] font-bold">
              Interest{" "}
            </p>
            <PencilLine
              size={16}
              color="white"
              className=" right-0 mt-2 me-2"
            />
          </div>
          <p className="text-white text-[14px] opacity-[52%]">
            Add in your interest to help others know you better
          </p>
        </div>
      </main>
    </div>
  );
};

export default About;
