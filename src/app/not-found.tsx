"use client";
import { useState } from "react";
import Icon404 from "../public/icons/404/404.svg";
import Loader from "@/components/ui/loader";
export default function Custom404() {
  const [loader, setLoader] = useState(true);
  setTimeout(() => {
    setLoader(false);
  }, 500);
  if (loader) return <Loader />;
  return (
    <div className=" flex justify-center items-center min-h-screen flex-col gap-10">
      <Icon404 />
      <h3 className="text-3xl">No encontrada {":)"}</h3>
    </div>
  );
}
