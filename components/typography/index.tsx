import clsx from "clsx";
import React from "react";

type Props = {
  content: string;
} & React.HTMLAttributes<HTMLParagraphElement>;
export default function Typography({ content, className, ...props }: Props) {
  return (
    <p
      className={clsx("text-xl font-semibold text-text-primary", className)}
      {...props}
    >
      {content}
    </p>
  );
}
