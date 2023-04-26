import * as React from "react";
import { SVGProps } from "react";
const SvgDecoration1 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={180}
    height={180}
    fill="#fff"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={90} cy={90} r={90} fill="#114FEE" />
  </svg>
);
export default SvgDecoration1;
