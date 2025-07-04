"use client"

import { signOut } from "next-auth/react"

export default function ButtonSignOut() {
  return(
    <button className="flex cursor-pointer" onClick={() => signOut()}>
      Sair
    </button>
  )
}