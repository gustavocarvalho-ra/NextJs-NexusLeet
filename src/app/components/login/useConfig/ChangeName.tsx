"use client"

import { useState } from "react";
import Form from 'next/form';

export default function UpdateName() {
  const [newName, setNewName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {

    try {
      const res = await fetch("/api/auth/userConfig/change-name", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ newName }),
      });
    
      const data = await res.json();
  
      if (res.ok) {
        setMessage("Nome atualidado com sucesso!");
        setNewName("");
      } else {
        setMessage(data.error || "Erro ao atualizar nome");
      }
    } catch (error) {
      console.error(error)
      setMessage("Erro de conexão");
    }
  };
  
  return (
    <Form className="w-1/4 h-1/3 bg-slate-500/15 flex flex-col items-center justify-center gap-5" action={handleSubmit}>
      <input
        type="text" 
        value={newName}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewName(e.target.value)}
        placeholder="Novo nome"
        className="w-4/6"
      />
      <button 
        type="submit"
        className="cursor-pointer"
      >
        Alterar nome
      </button>
      {message && <p className="text-red-500">{message}</p>}
    </Form>
  )  
}
