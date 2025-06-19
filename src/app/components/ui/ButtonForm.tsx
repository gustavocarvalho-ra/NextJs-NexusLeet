import React, {ButtonHTMLAttributes} from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, type, ...props }, ref) => {
    return(
      <button
        ref={ref}
        type={type}
        className={` ${className}`}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"

export { Button };