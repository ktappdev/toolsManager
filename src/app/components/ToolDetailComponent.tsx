"use client";
import { useQuery } from "@tanstack/react-query";
import { getToolDetail } from "@/app/lib/serverFunctions";
import Image from "next/image";
import Link from "next/link";
import LoadingSpinner from "./LoadingSpinner";

interface ToolDetailProps {
  toolId: string;
}

const ToolDetail = (params: ToolDetailProps): JSX.Element => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["toolDetail"],
    queryFn: () => getToolDetail(params.toolId),
  });

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <p>{error?.toString()}</p>;

  return (
    <div className="overflow-auto border-2 border-red-200 rounded-lg ">
      {/* <div>{data ? data.toolName : null}</div> */}
    </div>
  );
};

export default ToolDetail;
