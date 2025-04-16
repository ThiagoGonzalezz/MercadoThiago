import React from "react";

export const Badge = ({ children, className = "" }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`inline-block rounded-[8px] bg-[#ededed] text-[#333] text-xs font-medium px-3 py-1 ${className}`}>
    {children}
  </div>
);
