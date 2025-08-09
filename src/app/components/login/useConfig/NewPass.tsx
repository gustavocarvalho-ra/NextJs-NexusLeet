"use client"

import { useState } from "react";

export default function ChangePasswordForm() {
  // const [currentPassword, setCurrentPassword] = useState("");
  // const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [form, setForm] = useState({ currentPassword: "", newPassword: "", confirmNewPassword: ""});
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/auth/userConfig/change-password", {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    });

    if (form.newPassword !== form.confirmNewPassword) {
      setError("As senhas não coincidem!")
      return;
    }

    const data = await res.json();
    setMessage(data.message || data.error);
  }

  return (
    <form onSubmit={handleSubmit} className="absolute">
      <input
        type="password" 
        placeholder="Senha atual"
        value={form.currentPassword}
        onChange={(e) => setForm({...form, currentPassword: e.target.value})}
      />
      <input
        type="password"
        placeholder="Nova senha"
        value={form.newPassword}
        onChange={(e) => setForm({...form, newPassword: e.target.value})}
      />
      <button type="submit" className="bg-blue-600 text-amber-400 rounded-lg">
        Alterar senha
      </button>
      {message && <p>{message}</p>}
    </form>
  );
}