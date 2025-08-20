import Header from "@/app/components/Header"
import DeleteAccountModal from "@/app/components/login/useConfig/DeleteUser"

export default function DeletAcount() {
  return (
    <div className="w-screen h-screen">
      <Header />

      <div className="w-full h-full flex flex-col justify-start items-center pt-10">
        <h1 className="text-2xl font-semibold">Quer mesmo deletar sua conta? :(</h1>
        <div className="w-full min-h-1/12 flex justify-center relative">
          <DeleteAccountModal />
        </div>
      </div>
    </div>
  )
}