"use client"

import { useState } from "react";

export default function ChangePasswordForm() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/auth/change-password", {
      method: "POST",
      body: JSON.stringify({ currentPassword, newPassword }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();
    setMessage(data.message || data.error);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="password" 
        placeholder="Senha atual"
        value={currentPassword}
        onChange={(e) => setCurrentPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Nova senha"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <button type="submit" className="bg-blue-600 text-amber-400 rounded-lg">
        Alterar senha
      </button>
      {message && <p>{message}</p>}
    </form>
  );
}