"use client"

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    })

    if (res?.ok) {
      router.push("/my-account/user")
    } else {
      alert("Erro ao fazer login")
    }
  }

  return (
    <form onSubmit={handleLogin} className="">
      <input 
        placeholder="Email" 
        type="email" 
        value={email}
        onChange={e => setEmail(e.target.value)}
        className=""
      />
      <input 
        placeholder="Senha" 
        type="password" 
        value={password}
        onChange={e => setPassword(e.target.value)}
        className=""
      />
      <button type="submit" className="cursor-pointer">
        Entrar
      </button>
    </form>
  )
}