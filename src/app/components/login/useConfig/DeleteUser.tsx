"use client"

import { useState } from "react";
import { signOut } from "next-auth/react"

export default function DeleteAccountModal() {
  const [showModal, setShowModal] = useState(false);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleDeleteUser() {
    if (!password) {
      setError("Digite sua senha para confirmar.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/userConfig/delete-user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      
      if (res.ok) {
        await signOut({ callbackUrl: "/my-account"})
      } else {
        const data = await res.json()
        setError(data.error || "erro ao deletar conta");
      }
    } catch (err) {
      console.error(err);
      setError("Erro de conexão.");
    } finally {
      setLoading(false);
    }
  }


  return (
    <>
      <button 
        onClick={() => setShowModal(true)} 
        className="bg-red-500 text-white px-4 py-2 rounded-lg cursor-pointer"
      >
        Deletar Conta
      </button>
      {showModal && (
        <div className="w-1/4 h-1/4 fixed mt-30 flex items-center justify-center bg-black/20 rounded-lg">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-center gap-3">
              <h2 className="text-lg font-medium">Coloque sua senha para confirmar.</h2>

              <input 
                className="w-3/4 bg-(--bg-white) rounded-lg p-0.5 pl-3" 
                type="password" 
                onChange={(e) => setPassword(e.target.value)} 
              />
                {error && <p className="text-(--error-text) font-semibold">{error}</p>}
            </div>

            <div className=" flex justify-evenly items-center">
              <button 
                className="cursor-pointer p-1 rounded-lg hover:text-white hover:bg-red-500 transition ease-in" 
                onClick={() => setShowModal(false)}
                >
                Cancelar
              </button>

              <p>|</p>
              
              <button 
                className="cursor-pointer p-1 rounded-lg hover:text-white hover:bg-green-500 transition ease-in" 
                onClick={handleDeleteUser}
                >
                {loading ? "Deletando..." : "Confirmar"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}