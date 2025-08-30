import Header from "@/app/components/Header";
import UpdateName from "@/app/components/login/useConfig/ChangeName";

export default function UpdateNamePag() {
  return (
    <div className="w-screen h-screen">
      <Header />
      <div className="w-full h-5/6 flex flex-col justify-center items-center">

        <UpdateName />
      </div>
    </div>
  )
}