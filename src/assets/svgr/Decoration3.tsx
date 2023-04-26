import * as React from "react";
import { SVGProps } from "react";
const SvgDecoration3 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={116}
    height={116}
    fill="#fff"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={58} cy={58} r={58} fill="url(#decoration3_svg__a)" />
    <defs>
      <linearGradient
        id="decoration3_svg__a"
        x1={0}
        y1={56.906}
        x2={116}
        y2={56.906}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#306EEA" />
        <stop offset={0} stopColor="#306EEA" />
        <stop offset={1} stopColor="#A200DB" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgDecoration3;
