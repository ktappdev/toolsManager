"use client";
import usePreventZoom from "@/app/lib/preventZoom";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { iTool } from "@/app/lib/interfaces";
import LoadingSpinner from "@/app/components/LoadingSpinner";
import { getToolDetail } from "@/app/lib/serverFunctions";
import { useQuery } from "@tanstack/react-query";

export default function EditTool() {
  usePreventZoom();
  const [tool, setTool] = useState<iTool>();

  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["toolDetail", id],
    queryFn: () => getToolDetail(id!),
    staleTime: 0,
  });

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <p>{error?.toString()}</p>;
  return (
    <div>
      <h1>Edit Tool</h1>
      <form onSubmit={() => {}}>
        {/* Tool Name */}
        <div>
          <label htmlFor="toolName">Tool Name:</label>
          <input
            type="text"
            id="toolName"
            value={tool?.toolName}
            // onChange={(e) => setTool({ ...tool, toolName: e.target.value })}
          />
        </div>

        {/* Tool Description */}
        <div>
          <label htmlFor="toolDescription">Tool Description:</label>
          <textarea
            id="toolDescription"
            value={tool?.toolDescription || ""}
            onChange={
              (e) => {}
              // setTool({ ...tool, toolDescription: e.target.value })
            }
          />
        </div>

        {/* Tool Brand */}
        <div>
          <label className="" htmlFor="toolBrand">
            Tool Brand:
          </label>
          <input
            type="text"
            id="toolBrand"
            value={tool?.toolBrand}
            // onChange={(e) => setTool({ ...tool, toolBrand: e.target.value })}
          />
        </div>

        {/* Tool Model */}
        <div>
          <label htmlFor="toolModel">Tool Model:</label>
          <input
            type="text"
            id="toolModel"
            value={tool?.toolModel || ""}
            // onChange={(e) => setTool({ ...tool, toolModel: e.target.value })}
          />
        </div>

        {/* ... Add more input fields for other properties of the iTool interface ... */}

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}
