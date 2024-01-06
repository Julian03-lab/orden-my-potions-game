import { SVGProps } from "react";

const DialogContainer = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={323}
    height={310}
    viewBox="0 0 323 310"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 0C8.9543 0 0 8.95432 0 20V216.249C0 231.623 17.1529 242.126 31.7782 237.387C64.2112 226.876 116.092 218.792 161.5 250.792C170.441 257.093 179.632 261.84 188.877 265.32H188.263L202.89 309.779L215.297 272.07C256.471 278.027 294.909 263.957 312.676 255.919C319.202 252.966 323 246.375 323 239.212V20C323 8.95431 314.046 0 303 0H20Z"
      fill="white"
    />
  </svg>
);

export { DialogContainer };
