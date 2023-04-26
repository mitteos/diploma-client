import * as React from "react";
import { SVGProps } from "react";
const SvgCommentIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={20}
    fill="#fff"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.833 9.167h-5a.833.833 0 1 0 0 1.666h5a.833.833 0 0 0 0-1.666Zm3.334-3.334H5.833a.833.833 0 0 0 0 1.667h8.334a.833.833 0 0 0 0-1.667Zm1.666-4.166H4.167a2.5 2.5 0 0 0-2.5 2.5V12.5a2.5 2.5 0 0 0 2.5 2.5h9.658l3.083 3.092a.834.834 0 0 0 1.283-.13.833.833 0 0 0 .142-.462V4.167a2.5 2.5 0 0 0-2.5-2.5Zm.834 13.825-1.909-1.917a.834.834 0 0 0-.591-.242h-10a.833.833 0 0 1-.834-.833V4.167a.833.833 0 0 1 .834-.834h11.666a.833.833 0 0 1 .834.834v11.325Z"
      fill="#444"
    />
  </svg>
);
export default SvgCommentIcon;
