// "use client"
import { getServerSession } from 'next-auth';
import Link from "next/link"

import { authOptions } from '@/app/lib/auth';

import { FaRegUser } from "react-icons/fa";


export default async function Header() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return (
      <div className="w-full h-20 bg-black flex items-center justify-evenly">
        <Link href={"/"} className="text-amber-600 font-black text-4xl">Nexus Leet</Link>
        <input placeholder='Buscar produto' className='bg-cyan-200 w-1/3 h-8 pl-2.5 text-black font-medium rounded-sm'/>
          <Link href={"/my-account"} className='flex items-center'>
            <FaRegUser className='text-3xl' />
            <div className='flex flex-col pl-2 font-extralight text-[12px]'>
              <p><span className='font-black'>Olá! Faça login</span></p>
              <p >Ou Cadastre-se</p>
            </div>
          </Link>
      </div>
    )
  }

  return (
    <div className="w-full h-20 bg-black flex items-center justify-evenly">
      <Link href={"/"} className="text-amber-600 font-black text-4xl">Nexus Leet</Link>
      <input placeholder='Buscar produto' className='bg-cyan-200 w-1/3 h-8 pl-2.5 text-black font-medium rounded-sm'/>
      <p>Bem vindo, {session.user?.name}!</p>
    </div>
  )
}