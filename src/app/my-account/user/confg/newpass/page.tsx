
import Header from "@/app/components/Header";
import ChangePasswordForm from "@/app/components/login/useConfig/NewPass";
import { authOptions } from "@/app/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function NewPass() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/my-account");
  }

  return (
    <div className="w-screen h-screen">
      <Header />

      <div className="w-full h-5/6 flex justify-center items-center">
        <ChangePasswordForm />
      </div>

    </div>

  );
}