import React, { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const InputAt = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, id, name, label, error, placeholder, required, ...props }, ref) => {
    
    const generatedId = React.useId();
    const inputId = id || name || generatedId;
    const inputName = name || inputId;

    return (
      <div className={`${className} relative flex flex-col bg-inherit rounded-tl-[20px] rounded-tr-[2px] rounded-bl-[2px] rounded-br-[20px] border-2 border-(--text-amber)`}>
        <input 
          ref={ref}
          id={inputId}
          name={inputName}
          type={type}
          required={required}
          placeholder={placeholder || ' '}
          className={`px-4 py-3 w-full h-full text-base outline-none border-2 rounded transition-all duration-200 peer border-none`}
          {...props}
        />
        
        {label && (
          <label 
            htmlFor={inputId}
            className={`absolute left-3 top-2 px-1 text-base bg-[#17181a] text-gray-600 tracking-wide 
              duration-200 pointer-events-none peer-focus:top-2 peer-focus:text-sm
              peer-focus:text-blue-600 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
              ${error ? 'text-red-500 peer-focus:text-red-600' : ''}
              transform peer-focus:-translate-y-5 peer-valid:-translate-y-5`}
          >
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        
        {error && (
          <span className="text-red-500 text-sm mt-1">{error}</span>
        )}
      </div>
    )
  }
);

InputAt.displayName = "Input";

export { InputAt };