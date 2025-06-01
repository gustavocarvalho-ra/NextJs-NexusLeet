// "use client"
import { getServerSession } from 'next-auth';

import { authOptions } from '@/app/lib/auth';
import Link from "next/link"

export default async function Header() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return (
      <div className="w-full h-20 bg-amber-400 flex items-center justify-evenly">
        <Link href={"/"} className="text-amber-600">Nexus Leet</Link>
        <input />
        <Link href={"/my-account"}>Login</Link>
      </div>
    )
  }

  return (
    <div className="w-full h-20 bg-amber-400">
      <Link href={"/"} className="text-amber-600">Nexus Leet</Link>
      <div>
        <input />
        <p>Bem vindo, {session.user?.name}!</p>
      </div>
    </div>
  )
}