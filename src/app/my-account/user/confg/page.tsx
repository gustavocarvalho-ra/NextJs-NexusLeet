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
        <div className="w-1/3 h-1/6 bg-amber-300">
          <h1>email</h1>
          <h3>{session.user?.email}</h3>
        </div>

        
        <div className="w-1/3 h-1/6 bg-amber-300">
          <h1>Nome de usuário</h1>
          <h3>{session.user?.name}</h3>
          <Link href={''}></Link>

        </div>
        <div className="w-1/3 h-1/6 bg-amber-300">
          <h1>Alter senha</h1>
          <Link href={'/'} className="bg-(--text-amber) w-[10%] h-[5%]">
            <button>test</button>
          </Link>
          <Button>
            Alterar
          </Button>
        </div>
      </div>
    </div>
  )
}