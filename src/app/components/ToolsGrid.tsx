"use client";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getTools } from "@/app/lib/serverFunctions";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import usePreventZoom from "../lib/preventZoom";

const ToolsGrid = (): JSX.Element => {
  usePreventZoom();
  const router = useRouter();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["tools"],
    queryFn: getTools,
  });
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{error?.toString()}</p>;
  //xxs:mt-[26rem]
  return (
    <div className="tools-grid grid xxs:grid-cols-3 md:grid-cols-5 gap-4 py-2 px-2 ">
      {data.map((tool) => (
        <Link href={`/tooldetail/${tool.id}`} key={tool.id}>
          <div className=" hover:bg-gray-100 items-center text-center flex flex-col justify-center w-full h-full shadow-slate-300 shadow-sm rounded-2xl">
            {tool.toolImage && (
              <div className=" relative mb-2 flex w-full h-full rounded-md">
                <Image
                  src={tool.toolImage}
                  alt={tool.toolName}
                  width={65}
                  height={65}
                  // objectFit="cover"
                  className=" object-cover hover:object-contain items-center justify-center w-full h-20 "
                />
              </div>
            )}
            <div className="w-full ">
              <h3 className="text-sm font-bold mb-2 text-slate-700">{tool.toolName}</h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ToolsGrid;
