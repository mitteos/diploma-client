import * as React from "react";
import { SVGProps } from "react";
const SvgSendMail = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={22}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.923 19H4.077C2.385 19 1 17.527 1 15.727V4.273C1 2.473 2.385 1 4.077 1h13.846C19.615 1 21 2.473 21 4.273v11.454c0 1.8-1.385 3.273-3.077 3.273Z"
      stroke={props.fill}
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m1 5.09 10 6.546 10-6.545"
      stroke={props.fill}
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgSendMail;
