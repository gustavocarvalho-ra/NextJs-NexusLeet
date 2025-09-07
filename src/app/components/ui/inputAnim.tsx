import React, { InputHTMLAttributes } from 'react';

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

const InputAt = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, id, name, ...props }, ref) => {
    
    const genereteId = React.useId();
    const inputId = id || name || genereteId;

    return (
      <div className="relative">
        <input 
          required
          ref={ref}
          id={id}
          name={name || inputId}
          type={type}
          className={`px-4 py-2 text-lg outline-none border-2 border-gray-400 rounded hover:border-gray-600 duration-200 peer focus:border-red-700 bg-inherit ${className}`}
          {...props}
        />
        <label 
          htmlFor={id}
          className={`absolute left-0 top-2 px-1 text-lg tracking-wide peer-focus:text-red-600 pointer-events-none duration-200 peer-focus:text-sm peer-focus:-translate-y-5 bg-gray-200 ml-2 peer-valid:text-sm peer-valid:-translate-y-5 ${className}`}
        >
          test input
        </label>
      </div>
    )
});

InputAt.displayName = "Input";

export { InputAt };
