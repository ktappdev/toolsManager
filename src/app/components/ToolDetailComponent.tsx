"use client";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getToolDetail } from "@/app/lib/serverFunctions";
import Image from "next/image";
import Link from "next/link";
import LoadingSpinner from "./LoadingSpinner";

interface ToolDetailProps {
  toolId: string;
}

const ToolDetail = (params: ToolDetailProps): JSX.Element => {
  const queryClient = useQueryClient();

  queryClient.invalidateQueries({ queryKey: ["toolDetail"] });
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["toolDetail"],
    queryFn: () => getToolDetail(params.toolId),
  });

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <p>{error?.toString()}</p>;

  return (
    <div className=" flex flex-1 flex-col items-center justify-center  p-4  bg-green-400">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4 ">
        {/* Card 1 */}
        <div className="md:col-span-3">
          <div className="bg-white rounded-md shadow-md p-4">
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
              <div className="my-4 bg-amber-400">
                <Image
                  src={data?.toolImage}
                  alt={data?.toolName}
                  width={180}
                  height={180}
                  className="rounded-md object-cover h-80 w-80"
                />
              </div>
            )}
            {/* tool details here */}
          </div>
        </div>

        {/* Card 2 */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-md shadow-md p-4">
            <h3 className="text-lg font-bold mb-4">Status</h3>
            Card 2 content goes here
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
