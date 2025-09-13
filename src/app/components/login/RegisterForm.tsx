"use client"

import { useState } from "react"
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { PiEyeClosedLight } from "react-icons/pi";
import { PiEye } from "react-icons/pi";
import { signIn } from 'next-auth/react';
import { useRouter } from "next/navigation"
import { Input } from "../ui/Input";
import { Button } from "../ui/ButtonForm";
import { InputAt } from "../ui/inputAnim";


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

    if (res.ok) {
      const loginResult = await signIn("credentials", {
        redirect: false,
        email: form.email,
        password: form.password,
      })

      if (loginResult?.ok) {
        setSuccess("Cadastro realizado com sucesso");
        router.push("/my-account/user")
      } else {
        console.error("Login automático falhou")
      }
    } else {
      console.error("Erro de cadastro")
    }
  }

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="border-2 border-(--text-amber) rounded-lg bg-(--back-alf) p-3 w-xl h-1/2 flex flex-col justify-center">
        <h1 className="flex justify-center text-(--text-amber) text-3xl font-semibold cursor-default">Cadastro</h1>
        <div className="h-full w-full">
          <form onSubmit={handleSubmit} className="gap-5 flex flex-col items-center h-full justify-items-start pt-8 relative">
            <InputAt
              required
              className="w-3/4"
              type="text"
              label="Nome"
              value={form.name}
              onChange={(e) => setForm({...form, name: e.target.value})}
              icon={FaRegUser}
              />
            <InputAt
              required
              className="w-3/4"
              label="E-mail"
              type="email"
              value={form.email}
              onChange={(e) => setForm({...form, email: e.target.value})}
              icon={MdOutlineMail}
            />
            <div className="border-b-2 hover:border-(--text-amber) bg-(--color-sec) rounded-sm p-2 h-11 w-2/3 flex items-center">
              <InputAt
                id="password"
                type={showPassword ? "text" : "password"}
                label="Senha"
                required
                value={form.password}
                onChange={(e) => setForm({...form, password: e.target.value})}
                icon={MdOutlineMail}
              />
              <button
                type="button"
                tabIndex={-1}
                className=""
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <PiEye className="text-2xl hover:text-(--text-amber) cursor-pointer"/> : <PiEyeClosedLight className="text-2xl hover:text-(--text-amber) cursor-pointer"/>}
              </button>
            </div>
            <div className="border-b-2 hover:border-(--text-amber) bg-(--color-sec) rounded-sm p-2 h-11 w-2/3 flex items-center">
              <InputAt
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                label="Confirme sua senha"
                required
                value={form.confirmPassword}
                onChange={(e) => setForm({...form, confirmPassword: e.target.value})}
                icon={MdOutlineMail}
                />
              <button
                type="button"
                tabIndex={-1}
                className=""
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <PiEye className="text-2xl hover:text-(--text-amber) cursor-pointer"/> : <PiEyeClosedLight className="text-2xl hover:text-(--text-amber) cursor-pointer"/>}
              </button>
            </div>
            <Button type="submit">
              Cadastrar
            </Button>
            {error && <p className="text-(--error-text) font-semibold">{error}</p>}
            {success && <p className="">{success}</p>}
          </form>
        </div>
      </div>
    </div>
  )
}