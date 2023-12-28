import {
  Reflection1Svg,
  Reflection2Svg,
  Smallreflection1Svg,
  Smallreflection2Svg,
  StarSvg,
  TransparencySvg,
} from "../assets/images/ButtonDetails";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      className="py-2 w-full rounded-full relative z-10 cursor-pointer boton disabled:pointer-events-none"
      {...props}
    >
      <TransparencySvg className="absolute top-0 right-0 w-full h-3/4" />
      <Reflection1Svg className="absolute top-1 left-2" />
      <Smallreflection1Svg className="absolute top-1 left-8" />
      <Reflection2Svg className="absolute bottom-1 right-2" />
      <Smallreflection2Svg className="absolute bottom-4 right-1" />
      <span className="relative text-[#2B1756] text-2xl z-10 font-bold flex justify-center">
        {children}
        <StarSvg />
      </span>
    </button>
  );
};

export default Button;
