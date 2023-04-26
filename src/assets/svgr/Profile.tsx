import * as React from "react";
import { SVGProps } from "react";
const SvgProfile = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={27}
    height={27}
    fill="#fff"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.5 13.5a5.906 5.906 0 1 0 0-11.812 5.906 5.906 0 0 0 0 11.812Zm0-10.125a4.219 4.219 0 1 1 0 8.438 4.219 4.219 0 0 1 0-8.438ZM14.344 15.188h-1.688a9.281 9.281 0 0 0-9.281 9.28.844.844 0 0 0 .844.845H22.78a.844.844 0 0 0 .844-.844 9.281 9.281 0 0 0-9.281-9.282Zm-9.23 8.437a7.594 7.594 0 0 1 7.542-6.75h1.688a7.594 7.594 0 0 1 7.543 6.75H5.113Z"
      fill="#686868"
    />
  </svg>
);
export default SvgProfile;
