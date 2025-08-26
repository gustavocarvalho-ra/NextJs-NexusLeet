"use client"

import { signOut } from "next-auth/react"

interface ButtonSignOutProps {
  className?: string;
}

export default function ButtonSignOut({ className }:ButtonSignOutProps) {
  return(
    <button 
      className={className} 
      onClick={() => signOut({ callbackUrl: "/"})}
    >
      Sair
    </button>
  )
}