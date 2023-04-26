import * as React from "react";
import { SVGProps } from "react";
const SvgDecoration5 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={169}
    height={169}
    fill="#fff"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={84.5} cy={84.5} r={84.5} fill="url(#decoration5_svg__a)" />
    <defs>
      <linearGradient
        id="decoration5_svg__a"
        x1={0}
        y1={82.906}
        x2={169}
        y2={82.906}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#306EEA" />
        <stop offset={0} stopColor="#306EEA" />
        <stop offset={1} stopColor="#A200DB" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgDecoration5;
