"use client";
import { FC } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import SearchIcon from "@mui/icons-material/Search";
import CallReceivedIcon from "@mui/icons-material/CallReceived";
import CallMadeIcon from "@mui/icons-material/CallMade";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import ForkRightIcon from "@mui/icons-material/ForkRight";
import Link from "next/link";
interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="grid grid-cols-1 justify-start items-center w-full">
      <div className="text-2xl text-center mb-4 w-full">Dashboard</div>
      <div className="grid grid-cols-2 justify-center items-center w-full gap-12 px-8">
        <Link href="/newitem" prefetch={false}>
          <div className="flex flex-col justify-center items-center bg-neutral-100 w-full min-h-[100px] border-2 hover:cursor-pointer hover:bg-neutral-200">
            <AddCircleOutlineIcon />
            <div className="text-sm">New Item</div>
          </div>
        </Link>
        <div className="flex flex-col justify-center items-center bg-neutral-100 w-full min-h-[100px] border-2 hover:cursor-pointer hover:bg-neutral-200">
          <SearchIcon />
          <div className="text-sm">Find</div>
        </div>
        <div className="flex flex-col justify-center items-center bg-neutral-100 w-full min-h-[100px] border-2 hover:cursor-pointer hover:bg-neutral-200">
          <CallReceivedIcon />
          <div className="text-sm">Receive Item</div>
        </div>
        <div className="flex flex-col justify-center items-center bg-neutral-100 w-full min-h-[100px] border-2 hover:cursor-pointer hover:bg-neutral-200">
          <CallMadeIcon />
          <div className="text-sm">Lend Item</div>
        </div>
        <div className="flex flex-col justify-center items-center bg-neutral-100 w-full min-h-[100px] border-2 hover:cursor-pointer hover:bg-neutral-200">
          <HomeRepairServiceIcon />
          <div className="text-sm">Items Home</div>
        </div>
        <div className="flex flex-col justify-center items-center bg-neutral-100 w-full min-h-[100px] border-2 hover:cursor-pointer hover:bg-neutral-200">
          <ForkRightIcon />
          <div className="text-sm">Items Out</div>
        </div>
      </div>
    </div>
  );
};

export default page;
