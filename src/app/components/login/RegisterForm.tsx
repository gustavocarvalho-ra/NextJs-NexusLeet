"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { signIn } from 'next-auth/react';

export default function RegisterForm() {

  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })

    const data = await res.json();

    if (res.ok) {
      const loginResult = await signIn("credentials", {
        redirect: false,
        email: form.email,
        password: form.password,
      })

      if (loginResult?.ok) {
        setSuccess("Cadastro realizado com sucesso");
        router.push("/my-account/user")
        // // setTimeout(() => router.push("/login"), 1500);
      } else {
        console.error("Login automático falhou")
      }
      // setEmail("");
      // setName("");
      // setPassword("");

      // router.push("/my-account/user")
    } else {
      console.error("Erro de cadastro")
    }
  }

  return (
    <div className="w-full h-full bg-amber-100 flex items-center justify-center">
      <div className="border-double w-xl bg-blue-700 h-5/12">
        <h1>Cadastrar nova conta</h1>
        <div className="h-full w-full">
          <form onSubmit={handleSubmit} className="gap-5 flex flex-col items-center h-4/5">
            <input
              type="text"
              placeholder="Nome"
              value={name}
              onChange={(e) => setForm({...form, name: e.target.value})}
              className="bg-red-700 rounded-sm p-2 h-2/13 w-2/3 border-2 border-amber-50"
              />
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setForm({...form, email: e.target.value})}
              className="bg-red-700 rounded-sm p-2 h-2/13 w-2/3 border-2 border-amber-50"
              />
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setForm({...form, password: e.target.value})}
              className="bg-red-700 rounded-sm p-2 h-2/13 w-2/3 border-2 border-amber-50"
              />
            <button type="submit" className="cursor-pointer">
              Cadastrar
            </button>
            {error && <p className="">{error}</p>}
            {success && <p className="">{success}</p>}
          </form>
        </div>
      </div>
    </div>
  )
}