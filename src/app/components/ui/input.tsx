import React, { InputHTMLAttributes } from "react";

export type ImputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, ImputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={`bg-(--color-sec) rounded-sm p-2 h-2/13 w-2/3 border-2 border-amber-50 ${className}`}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };