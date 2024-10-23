// import clsx from "clsx"
// import { PrismicNextLink, PrismicNextLinkProps } from "@prismicio/next"

// export default function Button({
//     className,
//     ...restProps
// }: PrismicNextLinkProps) {

//     return (
//         <PrismicNextLink 
//             className={clsx(
//                 "block w-fit bg-cyan-700 hover:bg-cyan-800 transition-color duration-200 ease-in-out py-3 px-12 rounded-full font-display text-white font-bold text-base tracking-wider",
//                 className
//             )}
//             {...restProps}
//         /> 
//     )
// }

import { PrismicNextLink } from "@prismicio/next";
import { LinkField } from "@prismicio/client"; // Tipo para el enlace
import clsx from "clsx";

interface MyLinkProps {
  field: LinkField;
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<MyLinkProps> = ({ field, className, children }) => {
  return (
    <PrismicNextLink field={field} className={clsx("block w-fit bg-cyan-700 hover:bg-cyan-800 transition-color duration-200 ease-in-out py-3 px-12 rounded-full font-display text-white font-bold text-base tracking-wider",className)}>
      {children}
    </PrismicNextLink>
  );
};

export default Button;