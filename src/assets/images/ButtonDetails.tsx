import { SVGProps } from "react";

export const TransparencySvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={288}
    height={33}
    viewBox="0 0 288 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    {...props}
  >
    <path
      d="M0 22C0 9.84974 9.84974 0 22 0H265.422C277.716 0 287.548 10.215 287.079 22.5C287.079 22.5 251.087 11.8084 143.111 26.4795C35.1351 41.1506 0 22 0 22Z"
      fill="white"
      fillOpacity={0.2}
    />
  </svg>
);

export const Reflection1Svg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={11}
    viewBox="0 0 20 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <ellipse
      cx={3.57101}
      cy={10.3402}
      rx={3.57101}
      ry={10.3402}
      transform="matrix(0.828695 0.5597 -0.894056 0.447955 16.0847 -1)"
      fill="white"
      fillOpacity={0.3}
    />
  </svg>
);

export const Smallreflection1Svg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={8}
    height={3}
    viewBox="0 0 8 3"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <ellipse
      cx={0.898093}
      cy={3.07561}
      rx={0.898093}
      ry={3.07561}
      transform="matrix(-0.32208 -0.946712 0.993438 -0.114371 1.24023 2.40399)"
      fill="white"
      fillOpacity={0.3}
    />
  </svg>
);

export const Reflection2Svg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={9}
    viewBox="0 0 16 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <ellipse
      cx={3.55003}
      cy={8.07418}
      rx={3.55003}
      ry={8.07418}
      transform="matrix(-0.822775 -0.568367 0.898036 -0.439922 3.69724 10.1395)"
      fill="white"
      fillOpacity={0.3}
    />
  </svg>
);

export const Smallreflection2Svg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={6}
    height={6}
    viewBox="0 0 6 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <ellipse
      cx={2.20917}
      cy={2.95186}
      rx={2.20917}
      ry={2.95186}
      transform="matrix(-0.986505 -0.163728 0.440341 -0.89783 3.68552 6.02399)"
      fill="white"
      fillOpacity={0.3}
    />
  </svg>
);

export const StarSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={5}
    height={5}
    viewBox="0 0 5 5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.5 0L3.06129 1.72746H4.87764L3.40818 2.79508L3.96946 4.52254L2.5 3.45492L1.03054 4.52254L1.59182 2.79508L0.122359 1.72746H1.93871L2.5 0Z"
      fill="white"
    />
  </svg>
);
