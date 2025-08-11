export async function handleDeleteUser() {
  const res = await fetch("/api/auth/userConfig/delete-user", {
    method: "DELETE",
  });

  if (res.ok) {
    console.log("Usuário deletado");
  } else {
    console.error("erro ao deletar");
  }

  return (
    <button onClick={handleDeleteUser}>
      Deletar usuário
    </button>
  )
}