async function handleDeleteUser() {
  const res = await fetch("/api/auth/userConfig/delete-user", {
    method: "DELETE",
  });

  
}