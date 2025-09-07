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
      <div className="relative flex flex-col">
        <input 
          ref={ref}
          id={inputId}
          name={inputName}
          type={type}
          required={required}
          placeholder={placeholder || ' '} // Espaço para evitar comportamento inconsistente
          className={`px-4 py-3 text-base outline-none border-2 rounded transition-all duration-200 peer 
            ${error 
              ? 'border-red-500 focus:border-red-700' 
              : 'border-gray-400 hover:border-gray-600 focus:border-blue-600'
            }
            ${className}`}
          {...props}
        />
        
        {label && (
          <label 
            htmlFor={inputId}
            className={`absolute left-3 top-3 px-1 text-base text-gray-600 tracking-wide 
              transition-all duration-200 pointer-events-none peer-focus:top-1 peer-focus:text-sm
              peer-focus:text-blue-600 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
              ${error ? 'text-red-500 peer-focus:text-red-600' : ''}
              bg-white transform -translate-y-1/2 peer-focus:-translate-y-4`}
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
});

InputAt.displayName = "Input";

export { InputAt };