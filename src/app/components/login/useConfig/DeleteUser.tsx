"use client"

import { useState } from "react";

export default function DeleteAccountModal() {
  const [showModal, setShowModal] = useState(false);
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
      setError(data.error || "erro ao deletar conta");
    }
    setLoading(false);
  }

  return (
    <>
      <button onClick={() => setShowModal(true)} className="bg-red-500 text-white px-4 py-2 rounded-lg">
        Deletar Conta
      </button>
      {showModal && (
        <div className="w-1/4 h-1/4 relative">
          <div>
            <h2></h2>
            <input type="password" onChange={(e) => setPassword(e.target.value)} />
            {error && <p>{error}</p>}

            <div>
              <button onClick={() => setShowModal(false)}>Cancelar</button>
              <button onClick={handleDeleteUser}>
                {loading ? "Deletando..." : "Confirmar"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}