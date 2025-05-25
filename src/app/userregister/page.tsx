"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function RegisterPage() {
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
    <div className="w-screen h-screen bg-amber-100 flex items-center justify-center">
      <div className="border-double w-xl bg-blue-700">
        <h1>Cadastrar nova conta</h1>
        <div>
          <form onSubmit={handleSubmit} className="gap-5 flex flex-col items-center">
            <input
              type="text"
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-red-700 rounded-sm py-9"
              />
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className=""
              />
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className=""
              />
            <button type="submit" className="">
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