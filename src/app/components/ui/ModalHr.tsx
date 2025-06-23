import { signOut } from "next-auth/react"

export default function Modal() {
  return(
    <div>
      <button onClick={() => signOut()}>
        <p>sair</p>

      </button>
    </div>
  )
}