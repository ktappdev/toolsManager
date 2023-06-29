"use client";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { getTools } from "@/app/lib/queries";
import Image from "next/image";

const ToolsGrid = (): JSX.Element => {
  // const queryClient = useQueryClient();
  // queryClient.invalidateQueries(["tools"]);
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["tools"],
    queryFn: getTools,
  });
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{error?.toString()}</p>;

  return (
    <div className="overflow-auto">
      <ul className="grid grid-cols-4 gap-4">
        {data?.map((tool) => (
          <li key={tool.id}>
            <p>{tool.toolName}</p>
            {tool.toolImage && (
              <Image
                src={tool.toolImage}
                width={50}
                height={50}
                alt={tool.toolName}
                className="w-full h-auto  "
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToolsGrid;
