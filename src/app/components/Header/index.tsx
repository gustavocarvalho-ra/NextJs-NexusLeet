"use client"

import Link from "next/link"

export default function Header() {
  return (
    <div className="w-screen min-h-6 bg-amber-100">
      <Link href={"/src/app/page.tsx"} className="text-amber-600">Nexus Leet</Link>
    </div>
  )
}