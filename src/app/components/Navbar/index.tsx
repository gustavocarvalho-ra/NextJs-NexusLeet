import Link from "next/link";

export default function Nav() {
  return (
    <div className="w-full min-h-4 text-shadow-amber-200">
      <Link href={"/"}>Inicio</Link>
      <Link href={"/my-account/user"}>Conta</Link>
    </div>
  )
}