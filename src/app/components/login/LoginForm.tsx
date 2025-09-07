"use client"

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { DivInputIcon } from "../ui/DivInputIcon";
import { Button } from "../ui/ButtonForm";
import { InputAt } from "../ui/inputAnim";



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
      <div className="border-2 border-(--text-amber) rounded-lg bg-slate-500/15 p-3 w-xl h-2/6 flex flex-col justify-center">
        <h1 className="flex justify-center text-(--text-amber) text-3xl font-semibold cursor-default">Login</h1>
        <div className="h-full w-full">
          <form onSubmit={handleLogin} className="gap-5 flex flex-col items-center h-full justify-items-start pt-8 relative">
            <DivInputIcon
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              icon={MdOutlineMail}
            />
            <DivInputIcon
              id="password"
              type="password" 
              placeholder="Senha" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              icon={RiLockPasswordLine}
            />
            <InputAt
              required
              label="E-mail"
              type="email"
            />
            <Button type="submit">
              Entrar
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}