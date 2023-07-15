"use client";

import { useHydration } from "@/hooks/useHydration";
import { ThemeProvider } from "next-themes";
import { HTMLAttributes } from "react";

interface BodyProps extends HTMLAttributes<HTMLBodyElement> {
  className: string;
}

const Body = ({ children, ...rest }: BodyProps) => {
  const ready = useHydration();
  return (
    <body {...rest}>
      <ThemeProvider attribute="class">{children}</ThemeProvider>
    </body>
  );
};

export default Body;
