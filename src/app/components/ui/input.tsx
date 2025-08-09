import React, { InputHTMLAttributes } from "react";

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, id, name, ...props }, ref) => {

    const genereteId = React.useId();
    const inputId = id || name || genereteId;

    return (
      <input
        ref={ref}
        type={type}
        id={inputId}
        name={name || inputId}
        className={`bg-(--color-sec) rounded-sm p-2 h-full w-full focus:outline-0 ${className}`}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };