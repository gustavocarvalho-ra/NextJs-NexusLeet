import Link from "next/link";

export default function Nav() {
  return (
    <div className="w-full min-h-4 text-shadow-amber-200 flex justify-center gap-8 text-sm font-semibold pt-1.5">
      <Link href={"/"}>Inicio</Link>
      <Link href={"/my-account/user"}>Conta</Link>
    </div>
  )
}