import { cn } from "@/lib/utils";
import React from "react";

const DashboardOutline = ({
  className,
  width = "18",
  height = "18",
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={width}
      height={height}
      className={cn(className)}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.25 0.75V9.25H0.75V0.75H7.25ZM7.25 12.75V17.25H0.75V12.75H7.25ZM17.25 8.75V17.25H10.75V8.75H17.25ZM17.25 5.25H10.75V0.75H17.25V5.25Z"
        stroke="#1F2B3D"
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default DashboardOutline;
