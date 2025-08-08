// "use client"
import { getServerSession } from 'next-auth';
import Link from "next/link"
import Nav from '../Navbar';
import { authOptions } from '@/app/lib/auth';

import { FaRegUser } from "react-icons/fa";
import ButtonSignOut from '../ui/ButtonSignOut.tsx';
import Modal from '../ui/Modal';


export default async function Header() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return (
      <div className="w-screen min-h-26 bg-(--back) flex flex-col justify-center">
        <div className="w-full flex justify-evenly items-center">
          <Link href={"/"} className="text-(--text-amber) font-black text-4xl">
            Nexus Leet
          </Link>

          <input placeholder='Buscar produto' className='bg-(--color-sec) hover:bg-() w-1/3 h-8 pl-2.5 text-black font-medium rounded-sm'/>

          <Link href={"/my-account"} className='flex items-center text-(--text-amber)'>
            <FaRegUser className='text-3xl' />
            <div className='flex flex-col pl-2 font-extralight text-[12px]'>
              <p><span className='font-black'>Olá! Faça login</span></p>
              <p >Ou Cadastre-se</p>
            </div>
          </Link>
        </div>
        <Nav />
      </div>
    )
  }

  return (
    <div className="w-full min-h-26 shadow-lg/30 bg-(--back) flex items-center justify-evenly">
      <Link href={"/"} className="text-(--text-amber) font-black text-4xl">
        Nexus Leet
      </Link>
      
      <div className='w-1/3'>
        <input placeholder='Buscar produto' className='bg-(--color-sec) w-full h-8 pl-2.5 text-black font-medium rounded-sm'/>
        <Nav />
      </div>

      <div className='flex gap-1.5 '>
        <Modal 
          TextStr={
            <div className='flex items-center gap-1 text-base text-(--text-amber)'>
              <FaRegUser/>
              <p>{session.user?.name?.trim().split(/\s+/)[0]}</p>
            </div>
          }

          modalContent={
            <div className='font-medium text-(--inv-sec) flex flex-col w-full h-full'>
              <div className='flex w-full h-full gap-1.5'>
                <FaRegUser className='text-2xl' />
                <p>{session.user?.name}</p>

              </div>
              <div className='w-full h-full flex flex-col gap-1.5 '>
                <Link href={"/my-account/user"} className='hover:text-(--text-amber)'>Meu perfil</Link>

                <ButtonSignOut className='flex cursor-pointer hover:text-(--text-amber)' />
              </div>
            </div>
          }/>
        
      </div>
    </div>
  )
}