import Header from "@/app/components/Header"
import DeleteAccountModal from "@/app/components/login/useConfig/DeleteUser"
import { authOptions } from "@/app/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function DeletAcount() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/my-account");
  }

  return (
    <div className="w-screen h-5/6">
      <Header />

      <div className="w-full h-full flex flex-col justify-start items-center pt-10 gap-3">
        <h1 className="text-2xl font-semibold">Quer mesmo deletar sua conta? :(</h1>
        <div className="w-full flex justify-center">
          <DeleteAccountModal />
        </div>
      </div>
    </div>
  )
}