import { ComponentProps } from "react"

export default function MenuCategoria({ className = '', ...props }: ComponentProps<'div'>) {
  return (
    <div className={`w-44 h-60 bg-amber-700 z-50 relative ${className}`} {...props}>
      <h1>test Menu</h1>
    </div>
  )
}