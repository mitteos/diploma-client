import * as React from "react";
import type { SVGProps } from "react";
const SvgPosts = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    id="posts_svg__Icons"
    x={0}
    y={0}
    viewBox="0 0 32 32"
    fill="#fff"
    {...props}
  >
    <style>
      {
        `.posts_svg__st0{fill:none;stroke:${props.fill};stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}`
      }
    </style>
    <path
      d="M25 27H7c-2.2 0-4-1.8-4-4V9c0-2.2 1.8-4 4-4h18c2.2 0 4 1.8 4 4v14c0 2.2-1.8 4-4 4z"
      className="posts_svg__st0"
    />
    <path d="M8 11h6v6H8zM18 17h6M8 21h16" className="posts_svg__st0" />
  </svg>
);
export default SvgPosts;
