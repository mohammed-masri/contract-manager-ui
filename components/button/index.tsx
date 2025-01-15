import clsx from "clsx";
import React from "react";
type Props = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
export default function Button({ children, className, ...props }: Props) {
  return (
    <button
      className={clsx(
        "bg-primary disabled:bg-gray-400 hover:bg-opacity-70 min-w-20",
        "transition-all duration-300 ease-in-out text-white px-2 py-1 rounded-md",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
