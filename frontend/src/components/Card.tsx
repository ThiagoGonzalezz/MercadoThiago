// components/ui/card.tsx
import React from "react";

export const Card = ({ children, className = "" }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`rounded-[12px] bg-white shadow-md border border-[#f0f0f0] ${className}`}>
    {children}
  </div>
);

export const CardContent = ({ children, className = "" }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`px-4 py-3 ${className}`}>
    {children}
  </div>
);