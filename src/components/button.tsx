"use client";

import { ButtonHTMLAttributes } from "react";
import { ImSpinner2 } from "react-icons/im";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  ["aria-label"]: string;
}

const Button = ({ children, loading, ...rest }: ButtonProps) => {
  return (
    <button {...rest}>
      {loading && <ImSpinner2 className="h-5 w-5 animate-spin text-white" />}
      {children}
    </button>
  );
};

export default Button;
