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
      <button onClick={() => setShowModal(true)} className="bg-red-500 text-white px-4 py-2 rounded-lg"
      >
        Deletar Conta
      </button>
      {showModal && (
        <div className="w-1/4 h-1/4 fixed mt-30 flex items-center justify-center bg-black/20 rounded-lg">
          <div className="flex flex-col justify-center">
            <h2 className="text-lg font-medium">Coloque sua senha para confirmar</h2>
            <input className="" type="password" onChange={(e) => setPassword(e.target.value)} />
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