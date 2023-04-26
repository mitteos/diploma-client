import * as React from "react";
import { SVGProps } from "react";
const SvgLikePage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={27}
    height={27}
    fill="#fff"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19.125 5.063c-2.363 0-4.444 1.18-5.625 3.037-1.181-1.856-3.262-3.037-5.625-3.037-3.713 0-6.75 3.037-6.75 6.75 0 6.693 12.375 13.5 12.375 13.5s12.375-6.75 12.375-13.5c0-3.713-3.038-6.75-6.75-6.75Z"
      fill="#686868"
    />
  </svg>
);
export default SvgLikePage;
