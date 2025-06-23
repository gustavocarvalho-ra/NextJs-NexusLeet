import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/lib/auth';
import Header from '@/app/components/Header';
import { redirect } from 'next/navigation';
import Modal from '../../components/ui/ButtonSignOut.tsx';

export default async function MyAccontUser() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/my-account");
  }

  return (
    <div className="w-screen h-screen flex flex-col">
      <Header />
      <h1>Minha Conta</h1>
      <p>Bem vindo, {session.user?.name || session.user?.email}!</p>
      <Modal />
    </div>
  );
}
