import { SVGProps } from "react";

const HeartSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={50}
    height={50}
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#filter0_d_108_26363)">
      <path
        d="M25 43.75L21.9792 41.0417C18.4722 37.8819 15.5729 35.1562 13.2812 32.8646C10.9896 30.5729 9.16666 28.5156 7.8125 26.6927C6.45833 24.8698 5.51215 23.1944 4.97396 21.6667C4.43576 20.1389 4.16666 18.5764 4.16666 16.9792C4.16666 13.7153 5.26041 10.9896 7.44791 8.80208C9.63541 6.61458 12.3611 5.52083 15.625 5.52083C17.4306 5.52083 19.1493 5.90277 20.7812 6.66666C22.4132 7.43055 23.8194 8.50694 25 9.89583C26.1806 8.50694 27.5868 7.43055 29.2187 6.66666C30.8507 5.90277 32.5694 5.52083 34.375 5.52083C37.6389 5.52083 40.3646 6.61458 42.5521 8.80208C44.7396 10.9896 45.8333 13.7153 45.8333 16.9792C45.8333 18.5764 45.5642 20.1389 45.026 21.6667C44.4878 23.1944 43.5417 24.8698 42.1875 26.6927C40.8333 28.5156 39.0104 30.5729 36.7188 32.8646C34.4271 35.1562 31.5278 37.8819 28.0208 41.0417L25 43.75Z"
        fill="#8626FF"
      />
    </g>
    <defs>
      <filter
        x={-5.83334}
        y={-4.47917}
        width={61.6667}
        height={58.2292}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset />
        <feGaussianBlur stdDeviation={5} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.76 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_108_26363"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_108_26363"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export { HeartSvg };
