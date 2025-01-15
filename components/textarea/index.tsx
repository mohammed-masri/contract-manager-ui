import clsx from "clsx";
import React from "react";
type Props = {
  label?: string;
  errorMessage?: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;
export default function TextArea({
  label,
  errorMessage,
  className,
  id,
  ...props
}: Props) {
  return (
    <div className="grid grid-cols-2 gap-1">
      {label && (
        <label htmlFor={id} className="col-span-2 sm:col-span-1">
          {label}
        </label>
      )}
      <div
        className={clsx(
          " flex flex-col gap-1",
          label ? "col-span-2 sm:col-span-1" : "col-span-2"
        )}
      >
        <textarea
          id={id}
          placeholder="Write Here..."
          className={clsx(
            "px-2 py-1 w-full border border-text-secondary rounded-md focus:outline-none focus:border-primary resize-none",
            className
          )}
          rows={2}
          {...props}
        />
        {errorMessage && <p className="text-sm text-error">{errorMessage}</p>}
      </div>
    </div>
  );
}
