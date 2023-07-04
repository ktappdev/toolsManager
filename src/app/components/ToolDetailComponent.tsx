"use client";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getToolDetail } from "@/app/lib/serverFunctions";
import Image from "next/image";
import Link from "next/link";
import LoadingSpinner from "./LoadingSpinner";
// import { useEffect } from "react";
// export const revalidate = 0;

interface ToolDetailProps {
  toolId: string;
}

const ToolDetail = (params: ToolDetailProps): JSX.Element => {
  const queryClient = useQueryClient();

  // useEffect(() => {
  //   queryClient.invalidateQueries({ queryKey: ["toolDetail"] });
  // }, [params.toolId]);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["toolDetail"],
    queryFn: () => getToolDetail(params.toolId),
  });

  if (isLoading) return <LoadingSpinner />;
  // if (!data) return <LoadingSpinner />;
  if (isError) return <p>{error?.toString()}</p>;

  // queryClient.invalidateQueries({ queryKey: ["toolDetail"] });
  return (
    <div className=" flex flex-1 flex-col items-center justify-center  p-4 w-full">
      <div
        id="all-items-container"
        className="flex flex-col gap-4 h-full pt-36 md:pt-4 lg:pt-24 w-full"
      >
        <div
          id="top-row-container"
          className="flex flex-col md:flex-row gap-4 w-full"
        >
          {/* Card 1 */}
          <div className="md:w-3/4">
            <div className="bg-white rounded-md shadow-md p-4 w-full">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">{data?.toolName}</h2>
                <span className="text-sm text-gray-500">
                  {data?.toolCondition}
                </span>
              </div>
              <div className="mb-4">
                <p className="text-sm text-gray-500 mb-2">Categories:</p>
                <ul className="flex space-x-2">
                  {data?.toolCategories.map((category) => (
                    <li
                      key={category}
                      className="bg-gray-200 px-2 py-1 rounded-md text-sm"
                    >
                      {category}
                    </li>
                  ))}
                </ul>
              </div>
              {data?.toolImage && (
                <div className="my-4 w-full flex justify-center items-center">
                  <Image
                    src={data?.toolImage}
                    alt={data?.toolName}
                    width={180}
                    height={180}
                    className="rounded-md object-contain xs:h-52 sm:h-80 w-auto"
                  />
                </div>
              )}
              more tools detail goes here
            </div>
          </div>

          {/* Card 2 */}
          <div className="md:w-1/4 h-full bg-c-accent-1 flex flex-col gap-2 items-center justify-evenly px-1 py-4 rounded">
            <div className="bg-white  shadow-md p-4 w-full">
              <h3 className="text-lg font-bold mb-4">Status</h3>
              Card 2 content goes here
            </div>
            <div className="bg-white  shadow-md p-4 w-full">
              <h3 className="text-lg font-bold mb-4">Something</h3>
              Card 2 content goes here
            </div>
            <div className="bg-white  shadow-md p-4 w-full">
              <h3 className="text-lg font-bold mb-4">Other Thing</h3>
              Card 2 content goes here
            </div>
          </div>
        </div>

        {/* Rent Dates Table */}
        <div className="md:col-span-4">
          <div className="bg-white rounded-md shadow-md p-4">
            <h3 className="text-lg font-bold mb-4">Rent Dates</h3>
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  {/* Add more table headers if needed */}
                </tr>
              </thead>
              {/* Add table body content */}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolDetail;
