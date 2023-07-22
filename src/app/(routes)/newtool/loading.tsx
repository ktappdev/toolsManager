"use client";

import LoadingSpinner from "@/app/components/LoadingSpinner";

export default function Loading() {
  return (
    <div className="flex flex-1 justify-center items-center ">
      <LoadingSpinner />
    </div>
  );
}
