import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const Logo = ({
  className,
  width = 40,
  height = 40,
}: {
  className: string;
  width?: number;
  height?: number;
}) => {
  return (
    <div className={cn("size-10", className)}>
      <Image
        src="/logo.png"
        alt="logo"
        width={width}
        height={height}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Logo;
