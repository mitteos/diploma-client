import * as React from "react";
import { SVGProps } from "react";
const SvgSendButton = (props: SVGProps<SVGSVGElement>) => (
  <svg
    id="sendButton_svg__Icons"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    xmlSpace="preserve"
    fill="#fff"
    {...props}
  >
    <style>
      {
        `.sendButton_svg__st1{fill:none;stroke:${props.fill};stroke-width:2;stroke-linejoin:round;stroke-miterlimit:10}`
      }
    </style>
    <path
      className="sendButton_svg__st1"
      d="M28.6 3.4 3.4 12.6l11.7 4.3 4.3 11.7zM20.6 11.4l-5.5 5.5"
    />
  </svg>
);
export default SvgSendButton;
