import React, {ButtonHTMLAttributes} from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, type, ...props }, ref) => {
    return(
      <button
        ref={ref}
        type={type}
        className={`w-1/3 h-4 bg-(--color-sec) ${className}`}
        {...props}
      />
    );
  }
);

Button.displayName = "Button"

export { Button };