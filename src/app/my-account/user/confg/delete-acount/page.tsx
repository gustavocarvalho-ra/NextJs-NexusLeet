import Header from "@/app/components/Header"
import DeleteAccountModal from "@/app/components/login/useConfig/DeleteUser"

export default function DeletAcount() {
  return (
    <>
      <Header />

      <div className="w-full h-full">
        <h1>Quer mesmo deletar a conta? :(</h1>
        <div>
          <DeleteAccountModal />
        </div>
      </div>
    </>
  )
}