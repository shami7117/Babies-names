import React from "react";
interface IconProps {
  color: string;
}
function CircleIcon({ color }: IconProps) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="16" height="16" rx="8" fill={color} />
    </svg>
  );
}

export default CircleIcon;
