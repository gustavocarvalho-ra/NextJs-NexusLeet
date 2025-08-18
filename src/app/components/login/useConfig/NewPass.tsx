"use client"

import { useState } from "react";
import { Input } from "../../ui/Input";
import { Button } from "../../ui/ButtonForm";

export default function ChangePasswordForm() {
  const [message, setMessage] = useState("");
  const [form, setForm] = useState({ currentPassword: "", newPassword: "", confirmNewPassword: ""});
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (form.newPassword !== form.confirmNewPassword) {
      setError("As senhas não coincidem!")
      return;
    }

    const res = await fetch("/api/auth/userConfig/change-password", {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    });


    const data = await res.json();
    setMessage(data.message || data.error);
  }

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="h-1/2 w-1/4 bg-slate-500/15 border-2 border-(--text-amber) p-5 rounded-lg flex flex-col justify-center">
        <form onSubmit={handleSubmit} className="w-full h-full flex flex-col gap-3 items-center relative" name="formNewPass">
          <h1 className="font-semibold text-3xl text-(--text-amber)">Alterar Senha</h1>

          <Input
            type="password" 
            placeholder="Senha atual"
            value={form.currentPassword}
            onChange={(e) => setForm({...form, currentPassword: e.target.value})}
          />

          <Input
            type="password"
            placeholder="Nova senha"
            value={form.newPassword}
            onChange={(e) => setForm({...form, newPassword: e.target.value})}
          />

          <Input
            type="password"
            placeholder="Confirme a nova senha"
            value={form.confirmNewPassword}
            onChange={(e) => setForm({...form, confirmNewPassword: e.target.value})}
          />
          <Button type="submit" className=" rounded-lg w-1/2">
            Alterar senha
          </Button>
          {message && <p>{message}</p>}
          {error && <p>{error}</p>}
        </form>
      </div>
    </div>
  );
}