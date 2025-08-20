import Header from "@/app/components/Header"
import DeleteAccountModal from "@/app/components/login/useConfig/DeleteUser"

export default function DeletAcount() {
  return (
    <div className="w-screen h-screen">
      <Header />

      <div className="w-full h-full flex flex-col justify-center items-center ">
        <h1>Quer mesmo deletar sua conta? :(</h1>
        <div className="w-full h-1/4 flex justify-center">
          <DeleteAccountModal />
        </div>
      </div>
    </div>
  )
}