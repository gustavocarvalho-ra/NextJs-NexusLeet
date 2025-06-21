import React from "react";
import { Input } from "./Input";

interface DivInputIconProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon: React.ComponentType<{ className?: string }>;
}

const DivInputIcon = React.forwardRef<HTMLInputElement, DivInputIconProps>(
  ({ className, icon: IconComponent, ...props }, ref) => {
    return (
      <div className="border-2 hover:border-(--text-amber) bg-(--color-sec) rounded-sm p-2 h-11 w-2/3 flex items-center">
        <Input
          ref={ref}
          className={className}
          {...props}
        />
        <IconComponent className="text-2xl hover:text-(--text-amber) cursor-pointer" />
      </div>
    );
  }
);

DivInputIcon.displayName = "DivInputIcon";

export { DivInputIcon };