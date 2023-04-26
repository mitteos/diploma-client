import * as React from "react";
import { SVGProps } from "react";
const SvgLogout = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={27}
    height={27}
    fill="#fff"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#logout_svg__a)">
      <path
        d="M4.5 20.25h2.25v2.25h13.5v-18H6.75v2.25H4.5V3.375A1.125 1.125 0 0 1 5.625 2.25h15.75A1.125 1.125 0 0 1 22.5 3.375v20.25a1.125 1.125 0 0 1-1.125 1.125H5.625A1.125 1.125 0 0 1 4.5 23.625V20.25Zm2.25-7.875h7.875v2.25H6.75V18l-5.625-4.5L6.75 9v3.375Z"
        fill="#686868"
      />
    </g>
    <defs>
      <clipPath id="logout_svg__a">
        <path fill="#fff" d="M0 0h27v27H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLogout;
