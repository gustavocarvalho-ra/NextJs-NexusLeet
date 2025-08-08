import { authOptions } from "@/app/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Header from '@/app/components/Header';
import Link from "next/link";
import { Button } from "@/app/components/ui/ButtonForm";


export default async function ConfigUserAccount() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/my-account");
  }

  return (
    <div className="w-screen h-screen flex flex-col">
      <Header />
      <div className="w-full h-full flex flex-col items-center justify-center gap-16">
        <div className="w-1/3 h-1/6 bg-(--mod) gap-1 flex flex-col p-4 rounded-sm relative">
          <h1 className="font-medium">E-mail</h1>
          <h3 className="text-(--grey-text) text-sm">{session.user?.email}</h3>
          <Link href={'/'} className="bg-(--text-amber) w-[10%] h-1/4 rounded-lg relative">
            <Button className="w-full h-full border-none font-light">
              Alterar
            </Button>
          </Link>
        </div>


        
        <div className="w-1/3 h-1/6 bg-(--mod) gap-1 flex flex-col p-4 rounded-sm relative">
          <h1 className="font-medium">Nome de usuário</h1>
          <h3 className="text-(--grey-text) text-sm">{session.user?.name}</h3>
          <Link href={'/'} className="bg-(--text-amber) w-[10%] h-1/4 rounded-lg relative">
            <Button className="w-full h-full border-none font-light">
              Alterar
            </Button>
          </Link>

        </div>
        <div className="w-1/3 h-1/6 bg-(--mod) gap-1 flex flex-col p-4 rounded-sm relative">
          <h1 className="">Alter senha</h1>
          <Link href={'/'} className="bg-(--text-amber) w-[10%] h-1/4 rounded-lg relative">
            <Button className="w-full h-full border-none font-light">
              Alterar
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}