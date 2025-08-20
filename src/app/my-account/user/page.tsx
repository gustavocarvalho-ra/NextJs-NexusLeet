import Header from '@/app/components/Header';
import CardUserConfg from '@/app/components/ui/CardUserConfg';

import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/lib/auth';

import Image  from 'next/image';
import { redirect } from 'next/navigation';

import { FaUnlockAlt, FaRegCreditCard, FaUserAltSlash } from 'react-icons/fa';
import { MdOutlinePrivacyTip, MdLocationOn  } from "react-icons/md";
import { GoGear } from "react-icons/go";


export default async function MyAccontUser() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/my-account");
  }

  return (
    <div className="w-screen h-screen flex flex-col">
      <Header />
      <div className='w-full h-full flex justify-center'>

        <div className="w-2/3 h-full">
          <div className='p-9 flex flex-col gap-12 h-full'>
            <div className='flex items-center gap-4'>
              <div className='w-20 h-20 relative rounded-full flex justify-center overflow-clip items-center bg-amber-100'>
                <Image className='absolute' src={"/iduser.jpeg"} layout="fill" objectFit="cover" alt='Imagem de usuário' />
              </div>
              <div className='flex flex-col'>
                <p className='font-semibold'>{session.user?.name}</p>
                <p className='font-normal'>{session.user?.email}</p>
              </div>
            </div>
            <div className='flex gap-6 flex-wrap'>
              <CardUserConfg
                href='/my-account/user/delete-acount'
                icon={<FaUserAltSlash />}
                TextStr="Deletar Conta"
                AboutStr="Deletar suas informações de conta do site."
              />

              <CardUserConfg
                href='/'
                icon={<FaUnlockAlt />}
                TextStr="Segurança"
                AboutStr="Configurações de segurança da sua conta."
              />
              <CardUserConfg
                href='/my-account/user/confg'
                icon={<GoGear />}
                TextStr="Configuração de Conta"
                AboutStr="Configurações para mudança de senha, nome e e-mail."
              />
              <CardUserConfg
                href='/'
                icon={<MdLocationOn />}
                TextStr="Entrega"
                AboutStr="Dados de endereço de entrega."
              />
              <CardUserConfg
                href='/'
                icon={<FaRegCreditCard />}
                TextStr="Cartões"
                AboutStr="Cartões para meio de pagamento."
              />
              <CardUserConfg
                href='/'
                icon={<MdOutlinePrivacyTip />}
                TextStr="Privacidade"
                AboutStr="Preferência e controle de dados."
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
