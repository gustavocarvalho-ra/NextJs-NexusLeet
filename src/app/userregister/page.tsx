"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState("");
  // const [success, setSuccess] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // setError("");
    // setSuccess("");

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "applicaation/json" },
      body: JSON.stringify({ name, email, password }),
    })

    // const data = await res.json();

    if (!res.ok) {
      // setError(data.error || "Erro de cadastro")
    } else {
      // setSuccess("Cadastro realizado com sucesso");
      setEmail("");
      setName("");
      setPassword("");

      setTimeout(() => router.push("/login"), 1500)
    }
  }

  return (
    <div className="">
      <h1>Cadastrar nova conta</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className=""
        />
      </form>
    </div>
  )
}