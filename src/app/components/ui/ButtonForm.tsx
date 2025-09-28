import React, {ButtonHTMLAttributes} from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, type, ...props }, ref) => {
    return(
      <button
        ref={ref}
        type={type}
        className={`w-1/3 h-8 border-2 border-(--text-amber) text-(--bg-white) rounded-lg font-normal cursor-pointer bg-transparent hover:bg-(--text-amber) transition-all absolute bottom-0 ${className}`}
        {...props}
      />
    );
  }
);

Button.displayName = "Button"

export { Button };