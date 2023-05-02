import * as React from "react";
import { SVGProps } from "react";
const SvgClose = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={21}
    height={21}
    fill="#fff"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m11.482 10.026 8.24-8.194a.992.992 0 0 0 0-1.414 1.016 1.016 0 0 0-1.428 0l-8.232 8.187L1.754.296a1.009 1.009 0 0 0-1.429 0 1.015 1.015 0 0 0 0 1.432l8.303 8.303-8.332 8.286a.994.994 0 0 0 0 1.414 1.016 1.016 0 0 0 1.427 0l8.326-8.279 8.274 8.276a1.009 1.009 0 0 0 1.428 0 1.015 1.015 0 0 0 0-1.432l-8.269-8.27Z"
      fill="#114FEE"
    />
  </svg>
);
export default SvgClose;
