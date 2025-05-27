"use client"

import Link from "next/link"

export default function Header() {
  return (
    <div className="w-screen">
      <Link href={"/src/app/page.tsx"}></Link>
    </div>
  )
}