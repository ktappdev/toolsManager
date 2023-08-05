"use client";
//@format
import usePreventZoom from "@/app/lib/preventZoom";
//import { useState } from 'react';
import { useSearchParams } from "next/navigation";
//import { iTool } from '@/app/lib/interfaces';
import LoadingSpinner from "@/app/components/LoadingSpinner";
import { getToolDetail } from "@/app/lib/serverFunctions";
import { useQuery } from "@tanstack/react-query";

export default function EditTool() {
  usePreventZoom();
  // const [tool, setTool = useState<iTool>();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["toolDetail", id],
    queryFn: () => getToolDetail(id!),
    staleTime: 0,
  });

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <p>{error?.toString()}</p>;
  if (data) {
    console.log(data);
  }
  return (
    <div>
      <h1>Edit Tool</h1>
    </div>
  )
}
