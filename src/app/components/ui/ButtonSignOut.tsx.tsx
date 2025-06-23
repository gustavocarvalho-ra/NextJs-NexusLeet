"use client"

import { signOut } from "next-auth/react"

export default function Modal() {
  return(
    <button onClick={() => signOut()}>
      Sair
    </button>
  )
}