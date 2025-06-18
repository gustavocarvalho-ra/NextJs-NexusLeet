"use client"

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "../ui/input";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";



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
    <div className="w-full h-full flex items-center justify-center">
      <div className="border-double rounded-lg bg-slate-500/15 p-3 w-xl h-5/12 flex flex-col justify-center">
        <h1 className="flex justify-center text-(--text-amber) text-3xl font-semibold">Login</h1>
        <div className="h-full w-full">
          <form onSubmit={handleLogin} className="gap-5 flex flex-col items-center h-full justify-center">
            <div className="bg-(--color-sec) rounded-sm p-2 h-2/13 w-2/3 border-2 flex items-center">
              <Input 
                id="email"
                placeholder="Email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <MdOutlineMail className="text-2xl" />
            </div>
            <div className="bg-(--color-sec) rounded-sm p-2 h-2/13 w-2/3 border-2 flex items-center">
              <Input 
                id="password"
                placeholder="Senha" 
                type="password" 
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <RiLockPasswordLine className="text-2xl" />
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