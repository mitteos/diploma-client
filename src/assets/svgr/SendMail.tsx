import * as React from "react";
import {SVGProps} from "react";

const SvgSendMail = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={22}
        height={20}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
    >
        <path
            d="M17.9231 19H4.07692C2.38462 19 1 17.5273 1 15.7273V4.27273C1 2.47273 2.38462 1 4.07692 1H17.9231C19.6154 1 21 2.47273 21 4.27273V15.7273C21 17.5273 19.6154 19 17.9231 19Z"
            stroke={props.fill}
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"/>
        <path
            d="M1 5.09082L11 11.6363L21 5.09082"
            stroke={props.fill}
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"/>
    </svg>
);
export default SvgSendMail;
