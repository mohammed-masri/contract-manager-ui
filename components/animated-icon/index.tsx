import React from "react";
import { Icon as I, IconProps } from "@iconify/react";
import clsx from "clsx";

type Props = {} & IconProps;
export default function AnimatedIcon({ className, ...props }: Props) {
  return (
    <I
      className={clsx(
        "w-5 h-5 text-opacity-70  hover:text-opacity-100 transition-all duration-300 ease-in-out",
        className
      )}
      {...props}
    />
  );
}
