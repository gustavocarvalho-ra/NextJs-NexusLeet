"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "applicaation/json" },
      body: JSON.stringify({ name, email, password }),
    })

    const data = await res.json();

    if (!res.ok) {
      setError(data.error || "Erro de cadastro")
    } else {
      setSuccess("Cadastro realizado com sucesso");
      setEmail("");
      setName("");
      setPassword("");

      setTimeout(() => router.push("/login"), 1500)
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
              onChange={(e) => setName(e.target.value)}
              className="bg-red-700 rounded-sm p-2 h-2/13 w-2/3 border-2 border-amber-50"
              />
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-red-700 rounded-sm p-2 h-2/13 w-2/3 border-2 border-amber-50"
              />
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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