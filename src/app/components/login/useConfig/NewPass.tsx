"use client"

import { useState } from "react";
import { InputAt } from "../../ui/inputAnim";
import { Button } from "../../ui/ButtonForm";

export default function ChangePasswordForm() {
  const [message, setMessage] = useState("");
  const [form, setForm] = useState({ currentPassword: "", newPassword: "", confirmNewPassword: ""});
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    try {
      if (form.newPassword !== form.confirmNewPassword) {
        setError("As senhas não coincidem!")
        return;
      }

      const res = await fetch("/api/auth/userConfig/change-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      setMessage(data.message || data.error);

    } catch (error) {
      console.log(error)
      setMessage("Erro de conexão")
    }
  }

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="h-1/2 w-1/4 bg-slate-500/15 border-2 border-(--text-amber) p-5 rounded-lg flex flex-col justify-center">
        <form onSubmit={handleSubmit} className="w-full h-full flex flex-col gap-8 items-center" name="formNewPass">
          <h1 className="font-semibold text-3xl text-(--text-amber)">Alterar Senha</h1>
          
          <div className="w-full h-full relative flex flex-col gap-3 justify-items-center">
            <InputAt
              type="password" 
              placeholder="Senha atual"
              value={form.currentPassword}
              onChange={(e) => setForm({...form, currentPassword: e.target.value})}
              className="h-1/6 border-2 hover:border-(--text-amber) bg-(--color-sec)"
            />

            <InputAt
              type="password"
              placeholder="Nova senha"
              value={form.newPassword}
              onChange={(e) => setForm({...form, newPassword: e.target.value})}
              className="h-1/6 border-2 hover:border-(--text-amber) bg-(--color-sec)"
            />

            <InputAt
              type="password"
              placeholder="Confirme a nova senha"
              value={form.confirmNewPassword}
              onChange={(e) => setForm({...form, confirmNewPassword: e.target.value})}
              className="h-1/6 border-2 hover:border-(--text-amber) bg-(--color-sec)"
            />

            <Button type="submit" className="mt-4 rounded-lg w-1/2 static">
              Alterar senha
            </Button>

            {message && <p className="text-(--success-text) font-semibold">{message}</p>}
            {error && <p className="text-(--error-text) font-semibold">{error}</p>}
          </div>
        </form>
      </div>
    </div>
  );
}