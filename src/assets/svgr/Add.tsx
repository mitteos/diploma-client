import * as React from "react";
import { SVGProps } from "react";
const SvgAdd = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={21}
    height={19}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.5 10.857H12v6.786c0 .746-.675 1.357-1.5 1.357S9 18.39 9 17.643v-6.786H1.5c-.825 0-1.5-.61-1.5-1.357 0-.746.675-1.357 1.5-1.357H9V1.357C9 .611 9.675 0 10.5 0S12 .61 12 1.357v6.786h7.5c.825 0 1.5.61 1.5 1.357 0 .746-.675 1.357-1.5 1.357Z"
      fill={props.fill}
    />
  </svg>
);
export default SvgAdd;
