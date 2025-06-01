import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/lib/auth';
import Header from '@/app/components/Header';
// import { redirect } from 'next/navigation';

export default async function MyAccontUser() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return (
      <h1>erro de sessão</h1>
    )
    // redirect("/usuarionaologado");
  }

  return (
    <div className="w-screen h-screen flex flex-col">
      <Header />
      <h1>Minha Conta</h1>
      <p>Bem vindo, {session.user?.name || session.user?.email}!</p>
    </div>
  );
}
