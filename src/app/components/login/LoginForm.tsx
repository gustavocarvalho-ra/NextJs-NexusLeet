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
    <div className="w-full h-full bg-amber-100 flex items-center justify-center">
      <div className="border-double rounded-lg p-3 w-1/2 bg-amber-950 h-5/12 flex flex-col justify-center">
        <h1 className="flex justify-center text-cyan-200 text-3xl">Login</h1>
        <div className="h-full w-full">
          <form onSubmit={handleLogin} className="gap-5 flex flex-col items-center h-4/5">
            <input 
              placeholder="Email" 
              type="email" 
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="bg-red-700 rounded-sm p-2 h-2/13 w-2/3 border-2 border-amber-50"
            />
            <div className="">
              <span></span>
              <input 
                placeholder="Senha" 
                type="password" 
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="border-b-sky-100 rounded-sm p-2 h-2/13 w-2/3 border-2 border-amber-50"
              />
            </div>
            <button type="submit" className="cursor-pointer">
              Entrar
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}