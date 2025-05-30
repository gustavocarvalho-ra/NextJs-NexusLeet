import { getServerSession } from 'next-auth';
import { authOptions } from './../../lib/auth';
import { redirect } from 'next/navigation';

export default async function MyAccontUser() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("../");
  }

  return (
    <div className="w-screen h-screen flex flex-col">
      <h1>Minha Conta</h1>
      <p>Bem vindo, {session.user?.name || session.user?.email}!</p>
    </div>
  );
}
