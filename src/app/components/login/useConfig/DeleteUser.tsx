"use client"

import { useState } from "react";

export function DeleteAccountModal({ onClose }: { onClose: () => void }) {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleDeleteUser() {
    setLoading(true);
    setError("");

    const res = await fetch("/api/auth/userConfig/delete-user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    const data = await res.json()

    if (res.ok) {
      alert("Conta deletada com sucesso!");
      window.location.href = "/";
    } else {
      setError(data.error || "erro ao deletar");
    }
    setLoading(false);
  }

  return (
    <button onClick={handleDeleteUser}>
      Deletar usuário
    </button>
  )
}