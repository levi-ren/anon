import { twMerge } from "tailwind-merge";

interface DividerProps {
  flex?: boolean;
  white?: boolean;
  className?: string;
}

export default function Divider({ flex, white, className }: DividerProps) {
  return (
    <div
      className={twMerge(
        white ? "border-white/30" : "border-black/10",
        flex ? "self-stretch border-r" : "border-t",
        className
      )}
    />
  );
}
