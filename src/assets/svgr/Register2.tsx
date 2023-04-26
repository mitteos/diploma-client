import * as React from "react";
import { SVGProps } from "react";
const SvgRegister2 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    fill="#fff"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.5 1.25a6.25 6.25 0 1 1 0 12.5 6.25 6.25 0 0 1 0-12.5Zm0 1.25a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 3.75c.345 0 .625.28.625.625v3.75a.625.625 0 1 1-1.25 0v-3.75c0-.345.28-.625.625-.625Zm0-2.5A.625.625 0 1 1 7.5 5a.625.625 0 0 1 0-1.25Z"
      fill="#B3B3B3"
    />
  </svg>
);
export default SvgRegister2;
