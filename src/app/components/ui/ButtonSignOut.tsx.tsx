"use client"

import { signOut } from "next-auth/react"

export default function Modal() {
  return(
    <button className="cursor-pointer" onClick={() => signOut()}>
      Sair
    </button>
  )
}