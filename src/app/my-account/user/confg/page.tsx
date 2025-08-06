import { authOptions } from "@/app/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Header from '@/app/components/Header';


export default async function ConfigUserAccount() {
  const session = await getServerSession(authOptions)

  if (!session) {
    <div className="w-screen h-screen flex flex-col">
      <Header />
      <div className="w-full h-full">

      </div>
    </div>

  }

  redirect("/my-account/user");
}