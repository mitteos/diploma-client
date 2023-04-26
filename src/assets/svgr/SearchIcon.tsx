import * as React from "react";
import { SVGProps } from "react";
const SvgSearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="#fff"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM21 21l-4.35-4.35"
      stroke="#696969"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgSearchIcon;
