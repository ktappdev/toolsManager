"use client";
import { useQuery } from "@tanstack/react-query";
import { getTools } from "@/app/lib/serverFunctions";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Get QueryClient from the context
const ToolsGrid = (): JSX.Element => {
  const router = useRouter();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["tools"],
    queryFn: getTools,
  });
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{error?.toString()}</p>;
  //xxs:mt-[26rem]
  return (
    <div className="grid xxs:grid-cols-3 md:grid-cols-5 gap-4 px-2 h-full overflow-scroll">
      {data.map((tool) => (
        <Link href={`/tooldetail/${tool.id}`} key={tool.id}>
          <div className=" p-2 hover:bg-gray-100 items-center text-center flex flex-col justify-center w-full h-full shadow-slate-300 shadow-sm rounded-2xl">
            {tool.toolImage && (
              <div className="relative mb-2 flex flex-1">
                <Image
                  src={tool.toolImage}
                  alt={tool.toolName}
                  width={60}
                  height={60}
                  className="object-contain items-center justify-center rounded-xl w-auto h-auto"
                />
              </div>
            )}
            <h3 className="text-sm font-medium mb-2">{tool.toolName}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ToolsGrid;
