import { Spinner } from "@chakra-ui/react";
import React from "react";

export default function Loader() {
  return (
    <div className="min-h-screen w-full flex justify-center items-center fixed bg-[#010316]">
      <Spinner />
    </div>
  );
}
