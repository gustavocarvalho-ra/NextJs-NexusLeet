import { useState } from "react";

export default function UpdateName() {
  const [newName, setNewName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FocusEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/auth/userConfig/change-name", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ newName }),
      });
    }

    const data = await res.json();

    if (res.ok) {
      setMessage("Nome atualidado com sucesso!");
      setNewName("");
    } else {
      setMessage(data.error || "Erro ao atualizar nome")
    }
  }
}