import * as React from "react";
import { SVGProps } from "react";
const SvgDecoration2 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={132}
    height={132}
    fill="#fff"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={66} cy={66} r={66} fill="url(#decoration2_svg__a)" />
    <defs>
      <linearGradient
        id="decoration2_svg__a"
        x1={0}
        y1={64.755}
        x2={132}
        y2={64.755}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#306EEA" />
        <stop offset={0} stopColor="#306EEA" />
        <stop offset={1} stopColor="#A200DB" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgDecoration2;
