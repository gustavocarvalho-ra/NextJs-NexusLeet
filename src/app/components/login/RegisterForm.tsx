"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { signIn } from 'next-auth/react';
import { Input } from "../ui/Input";
import { DivInputIcon } from "../ui/DivInputIcon";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { PiEye } from "react-icons/pi";
import { PiEyeClosedLight } from "react-icons/pi";


export default function RegisterForm() {

  const [form, setForm] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (form.password !== form.confirmPassword) {
      setError("As senhas não coincidem!");
      return;
    }

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })

    // const data = await res.json();

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
    <div className="w-full h-full flex items-center justify-center">
      <div className="border-double rounded-lg p-3 w-xl bg-slate-500/15 h-5/12 flex flex-col justify-center">
        <h1 className="flex justify-center text-(--text-amber) text-3xl font-semibold">Cadastro</h1>
        <div className="h-full w-full">
          <form onSubmit={handleSubmit} className="gap-5 flex flex-col items-center h-full justify-center">
            <DivInputIcon
              id="name"
              type={"text"}
              placeholder="Nome"
              required
              value={form.name}
              onChange={(e) => setForm({...form, name: e.target.value})}
              icon={FaRegUser}
              />
            <DivInputIcon
              id="email"
              type="email"
              placeholder="E-mail"
              required
              value={form.email}
              onChange={(e) => setForm({...form, email: e.target.value})}
              icon={MdOutlineMail}
            />
            <div className="bg-(--color-sec) rounded-sm p-2 h-2/13 w-2/3 border-2 flex items-center">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Senha"
                required
                value={form.password}
                onChange={(e) => setForm({...form, password: e.target.value})}
              />
              <button
                type="button"
                className=""
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "👁️" : "👁️‍🗨️"}
              </button>
            </div>
            <div className="bg-(--color-sec) rounded-sm p-2 h-2/13 w-2/3 border-2 flex items-center">
              <Input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirme sua senha"
                required
                value={form.confirmPassword}
                onChange={(e) => setForm({...form, confirmPassword: e.target.value})}
                />
              <button
                type="button"
                className=""
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? "👁️" : "👁️‍🗨️"}
              </button>
            </div>
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