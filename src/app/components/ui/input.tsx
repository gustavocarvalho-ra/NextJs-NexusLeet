import React, { InputHTMLAttributes } from "react";

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, id, name, children, ...props }, ref) => {

    const genereteId = React.useId();
    const inputId = id || name || genereteId;

    return (
      <div className={`bg-(--color-sec) rounded-sm p-2 w-full focus:outline-0 ${className}`}>
        <input
          ref={ref}
          type={type}
          id={inputId}
          name={name || inputId}
          
          {...props}
        />
        {children}        
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };