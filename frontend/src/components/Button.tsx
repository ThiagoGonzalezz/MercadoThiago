import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export const Button = ({ children, className = "", variant = "primary", ...props }: ButtonProps) => {
  const base = "rounded-[6px] font-semibold px-4 py-2 text-sm transition-colors";
  const styles = {
    primary: "bg-[#3483fa] text-white hover:bg-[#2968c8]",
    secondary: "bg-transparent text-[#3483fa] border border-[#3483fa] hover:bg-[#f5faff]"
  };
  return (
    <button className={`${base} ${styles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};
