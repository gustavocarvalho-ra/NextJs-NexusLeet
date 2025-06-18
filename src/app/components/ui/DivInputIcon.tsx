import React from "react";
import { Input } from "./Input";

interface DivInputIconProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon: React.ComponentType<{ className?: string }>;
}

const DivInputIcon = React.forwardRef<HTMLInputElement, DivInputIconProps>(
  ({ className, icon: IconComponent, ...props }, ref) => {
    return (
      <div className="bg(--color-sec) rounded-sm p-2 h-2/13 w-2/3 border-2 flex items-center">
        <Input
          ref={ref}
          className={className}
          {...props}
        />
        <IconComponent className="text-2xl" />
      </div>
    );
  }
);

DivInputIcon.displayName = "DivInputIcon";

export { DivInputIcon };