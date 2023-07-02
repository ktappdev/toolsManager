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
  console.log(data);

  return (
    <div className="overflow-auto">{data ? data.toolName : "Loading..."}</div>
  );
};

export default ToolDetail;
