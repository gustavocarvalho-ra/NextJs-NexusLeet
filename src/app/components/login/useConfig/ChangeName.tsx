"use client"

import { useState } from "react";
import { useSession } from "next-auth/react";
import Form from 'next/form';

export default function UpdateName() {
  const [newName, setNewName] = useState("");
  const [message, setMessage] = useState("");
  const { data: session, update} = useSession();

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
        update({ ...session, user: { ...session?.user, name: newName} });
      } else {
        setMessage(data.error || "Erro ao atualizar nome");
      }
    } catch (error) {
      console.error(error)
      setMessage("Erro de conexão");
    }
  };
  
  return (
    <Form action={handleSubmit}>
      <input
        type="text" 
        value={newName}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewName(e.target.value)}
        placeholder="Novo nome"
      />
      <button type="submit">
        Alterar nome
      </button>
      {message && <p>{message}</p>}
    </Form>
  )  
}
