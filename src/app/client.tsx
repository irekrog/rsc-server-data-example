"use client";

import { ReactNode, useState } from "react";

export const Client = ({ children }: { children: ReactNode }) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <button
        onClick={() => setIsShow((prevState) => !prevState)}
        style={{ padding: "16px", cursor: "pointer" }}
      >
        {isShow ? "Hide" : "Show"}
      </button>
      {isShow ? children : null}
    </div>
  );
};
