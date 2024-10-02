import React from "react";

export function BlurFooterAndHeader() {
  return (
    <>
      {" "}
      <div
        className="backdrop-blur-sm  h-20 fixed bottom-0 left-50 w-full  z-10"
        style={{
          width: "300vw",
        }}
      >
        {""}
      </div>
      <div className="backdrop-blur-sm h-12 fixed top-0 left-49   w-screen z-10">
        {""}
      </div>
    </>
  );
}
