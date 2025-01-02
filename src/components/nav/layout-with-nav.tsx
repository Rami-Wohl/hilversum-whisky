"use client";

import { type ReactNode } from "react";
import NavComponents from "./nav-container";
import { NavProvider } from "~/context/nav-context";

export const LayoutWithNav = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <NavProvider>
        <NavComponents />
        <main className="relative flex min-h-screen w-full flex-col items-center bg-amber-950 bg-opacity-30 font-sans text-orange-950">
          {children}
        </main>
      </NavProvider>
    </>
  );
};
