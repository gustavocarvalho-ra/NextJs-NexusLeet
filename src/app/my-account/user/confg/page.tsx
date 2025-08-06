import { authOptions } from "@/app/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Header from '@/app/components/Header';


export default async function ConfigUserAccount() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/my-account/user");
  }

  return (
    <div className="w-screen h-screen flex flex-col">
      <Header />
      <div className="w-full h-full flex flex-col items-center justify-center gap-16">
        <div className="w-1/2 h-1/6 bg-amber-300"><h1>test card</h1></div>
        <div className="w-1/2 h-1/6 bg-amber-300"><h1>test card</h1></div>
        <div className="w-1/2 h-1/6 bg-amber-300"><h1>test card</h1></div>
      </div>
    </div>
  )
}