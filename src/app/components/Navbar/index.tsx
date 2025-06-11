import Link from "next/link";

export default function Nav() {
  return (
    <div className="w-full min-h-4 flex justify-center gap-8 text-sm font-semibold pt-1.5">
      <Link className="text-(--color-sec) hover:text-(--hover-pr)" href={"/"}>Inicio</Link>
      <Link className="text-(--color-sec) hover:text-(--hover-pr)" href={"/my-account/user"}>Conta</Link>
    </div>
  )
}