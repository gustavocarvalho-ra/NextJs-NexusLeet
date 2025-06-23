"use client"

import { signOut } from "next-auth/react"

export default function Modal() {
  return(
    <div>
      <button onClick={() => signOut()}>
        Sair

      </button>
    </div>
  )
}