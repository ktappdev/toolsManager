"use client";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import SearchIcon from "@mui/icons-material/Search";
import CallReceivedIcon from "@mui/icons-material/CallReceived";
import CallMadeIcon from "@mui/icons-material/CallMade";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import ForkRightIcon from "@mui/icons-material/ForkRight";
import Link from "next/link";
import vaultIcon from "/public/assets/app/vault.svg";
import Image from "next/image";
import usePreventZoom from "../lib/preventZoom";

const GridUi = () => {
  usePreventZoom();
  return (
    <div className="h-full w-full flex flex-col justify-start items-center">
      <div className="grid grid-cols-2 justify-center items-center w-full gap-4 px-8 py-4">
        <Link href="/newitem">
          <div className="flex flex-col justify-center items-center bg-neutral-100 w-full min-h-[100px] border-2 hover:cursor-pointer hover:bg-neutral-200 rounded-lg">
            <AddCircleOutlineIcon />
            <div className="text-sm">New Item</div>
          </div>
        </Link>
        <Link href="/search">
          <div className="flex flex-col justify-center items-center bg-neutral-100 w-full min-h-[100px] border-2 hover:cursor-pointer hover:bg-neutral-200 rounded-lg">
            <SearchIcon />
            <div className="text-sm">Find</div>
          </div>
        </Link>
        <Link href="/receivetool">
          <div className="flex flex-col justify-center items-center bg-neutral-100 w-full min-h-[100px] border-2 hover:cursor-pointer hover:bg-neutral-200 rounded-lg">
            <CallReceivedIcon />
            <div className="text-sm">Receive Item</div>
          </div>
        </Link>
        <Link href="/lendtool">
          <div className="flex flex-col justify-center items-center bg-neutral-100 w-full min-h-[100px] border-2 hover:cursor-pointer hover:bg-neutral-200 rounded-lg">
            <CallMadeIcon />
            <div className="text-sm">Lend Item</div>
          </div>
        </Link>
        <Link href="/toolsvault">
          <div className="flex flex-col justify-center items-center bg-neutral-100 w-full min-h-[100px] border-2 hover:cursor-pointer hover:bg-neutral-200 rounded-lg">
            {/* <HomeRepairServiceIcon /> */}
            <Image src={vaultIcon} width={20} height={20} alt="vault icon" />

            <div className="text-sm">Tools Vault</div>
          </div>
        </Link>
        <Link href="/itemsout">
          <div className="flex flex-col justify-center items-center bg-neutral-100 w-full min-h-[100px] border-2 hover:cursor-pointer hover:bg-neutral-200 rounded-lg">
            <ForkRightIcon />
            <div className="text-sm">Items Out</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default GridUi;
