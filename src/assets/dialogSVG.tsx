import { SVGProps } from "react";

const DialogSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={323}
    height={188}
    viewBox="0 0 323 188"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 0C8.9543 0 0 8.9543 0 20V93.7493C0 109.123 17.1529 119.626 31.7782 114.887C64.2112 104.376 116.092 96.2918 161.5 128.292C170.441 134.593 179.632 139.34 188.877 142.82H188.263L202.89 187.279L215.297 149.57C256.471 155.527 294.909 141.457 312.676 133.419C319.202 130.466 323 123.875 323 116.712V20C323 8.95431 314.046 0 303 0H20Z"
      fill="white"
    />
  </svg>
);

export { DialogSVG };
