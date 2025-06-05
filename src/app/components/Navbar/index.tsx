import Link from "next/link";

export default function Nav() {
  return (
    <div>
      <Link href={"/"}>Inicio</Link>
      <Link href={"/my-account/user"}>Conta</Link>
    </div>
  )
}