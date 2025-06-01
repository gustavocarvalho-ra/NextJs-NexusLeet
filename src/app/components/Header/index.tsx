// "use client"
import { getServerSession } from 'next-auth';

import { authOptions } from '@/app/lib/auth';
import Link from "next/link"

export default async function Header() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return (
      <div className="w-full h-20 bg-amber-400 flex items-center justify-evenly">
        <Link href={"/"} className="text-amber-600 font-black text-4xl">Nexus Leet</Link>
        <input placeholder='Buscar produto' className='bg-cyan-200 w-1/3 h-8 pl-2.5 text-black font-medium rounded-sm'/>
        <Link href={"/my-account"} className='font-black'>Login</Link>
      </div>
    )
  }

  return (
    <div className="w-full h-20 bg-amber-400 flex items-center justify-evenly">
      <Link href={"/"} className="text-amber-600 font-black text-4xl">Nexus Leet</Link>
      <input placeholder='Buscar produto' className='bg-cyan-200 w-1/3 h-8 pl-2.5 text-black font-medium rounded-sm'/>
      <p>Bem vindo, {session.user?.name}!</p>
    </div>
  )
}