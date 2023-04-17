import * as React from "react";
import { SVGProps } from "react";
const SvgMailPage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={27}
    height={27}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g
      clipPath="url(#mailPage_svg__a)"
      stroke={props.fill}
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m2.531 8.438 10.969 6.75 10.969-6.75" />
      <path d="M5.906 10.547V2.53c0-.928.76-1.687 1.688-1.687h11.812c.928 0 1.688.76 1.688 1.687v8.016" />
      <path d="M21.094 4.219a3.385 3.385 0 0 1 3.375 3.375v11.812a3.385 3.385 0 0 1-3.375 3.375H5.906a3.385 3.385 0 0 1-3.375-3.375V7.594a3.385 3.385 0 0 1 3.375-3.375M9.281 4.219h5.906M9.281 7.594h2.531" />
    </g>
    <defs>
      <clipPath id="mailPage_svg__a">
        <path fill="#fff" d="M0 0h27v27H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMailPage;
