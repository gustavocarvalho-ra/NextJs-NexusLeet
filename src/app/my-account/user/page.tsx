import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/lib/auth';
import Header from '@/app/components/Header';
import { redirect } from 'next/navigation';
import Image  from 'next/image';

export default async function MyAccontUser() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/my-account");
  }

  return (
    <div className="w-screen h-screen flex flex-col">
      <Header />
      <div className='w-full h-full flex justify-center'>

        <div className="w-1/2 bg-amber-400">
          <div className='w-20 h-20 relative rounded-full flex justify-center overflow-clip items-center bg-amber-100'>
            <Image className='absolute' src={"/iduser.jpeg"} width={150} height={150} alt='User Image' />
          </div>
          <h1>Minha Conta</h1>
          <p>Bem vindo, {session.user?.name || session.user?.email}!</p>
        </div>
      </div>
    </div>
  );
}
