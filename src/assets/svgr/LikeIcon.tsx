import * as React from "react";
import { SVGProps } from "react";
const SvgLikeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={20}
    fill="#fff"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18.112 10.366c1.98-2.002 1.98-5.258 0-7.26A5.022 5.022 0 0 0 14.517 1.6a5.026 5.026 0 0 0-3.597 1.506l-.92.93-.92-.93A5.024 5.024 0 0 0 5.484 1.6a5.024 5.024 0 0 0-3.596 1.506c-1.98 2.002-1.98 5.258 0 7.26L10 18.569l8.112-8.203ZM2.456 3.668A4.23 4.23 0 0 1 5.484 2.4 4.23 4.23 0 0 1 8.51 3.668L10 5.174l1.489-1.506A4.23 4.23 0 0 1 14.516 2.4a4.23 4.23 0 0 1 3.028 1.268 4.377 4.377 0 0 1 0 6.136L10 17.43 2.456 9.804a4.377 4.377 0 0 1 0-6.136Z"
      fill={props.fill}
    />
  </svg>
);
export default SvgLikeIcon;
