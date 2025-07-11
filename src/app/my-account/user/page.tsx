import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/lib/auth';
import Header from '@/app/components/Header';
import { redirect } from 'next/navigation';
import Image  from 'next/image';
import CardUser from '@/app/components/ui/CardUser';
import { FaRegUser, FaUnlockAlt  } from 'react-icons/fa';

export default async function MyAccontUser() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/my-account");
  }

  return (
    <div className="w-screen h-screen flex flex-col">
      <Header />
      <div className='w-full h-full flex justify-center'>

        <div className="w-2/3">
          <div className='p-9 flex flex-col gap-4'>
            <div className='flex items-center gap-4'>
              <div className='w-20 h-20 relative rounded-full flex justify-center overflow-clip items-center bg-amber-100'>
                <Image className='absolute' src={"/iduser.jpeg"} layout="fill" objectFit="cover" alt='Imagem de usuário' />
              </div>
              <div className='flex flex-col'>
                <p className='font-semibold'>{session.user?.name}</p>
                <p className='font-normal'>{session.user?.email}</p>
              </div>
            </div>
            <div className='flex gap-6'>
              <CardUser
                icon={<FaUnlockAlt />}
                TextStr="Segurança"
                AboutStr="Configurações de segurança da sua conta"
              />
              <CardUser
                icon={<FaRegUser />}
                TextStr="Dados da sua conta"
                AboutStr="Dados pessoais"
              />
              
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
