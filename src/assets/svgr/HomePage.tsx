import * as React from "react";
import { SVGProps } from "react";
const SvgHomePage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={25}
    height={23}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.717 21.18v-6.764h5.4v6.764c0 .744.608 1.353 1.35 1.353h4.05c.743 0 1.35-.609 1.35-1.353v-9.47h2.295c.621 0 .918-.772.446-1.177L13.322.345a1.358 1.358 0 0 0-1.81 0L.228 10.533c-.46.405-.176 1.177.445 1.177h2.295v9.47c0 .744.608 1.353 1.35 1.353h4.05c.743 0 1.35-.609 1.35-1.353Z"
      fill={props.fill}
    />
  </svg>
);
export default SvgHomePage;
