import React from "react";

const DashboardFill = ({
  className,
  width = "18",
  height = "18",
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      className={className}
    >
      <path
        d="M0 10H8V0H0V10ZM0 18H8V12H0V18ZM10 18H18V8H10V18ZM10 0V6H18V0H10Z"
        fill="#1F2B3D"
      />
    </svg>
  );
};

export default DashboardFill;
