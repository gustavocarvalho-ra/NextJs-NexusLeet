"use client"

import Link from "next/link"

export default function Header() {
  return (
    <div className="w-full h-20 bg-amber-400">
      <Link href={"/"} className="text-amber-600">Nexus Leet</Link>
    </div>
  )
}