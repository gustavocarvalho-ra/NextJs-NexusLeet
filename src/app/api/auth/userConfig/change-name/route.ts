import { authOptions } from "@/app/lib/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return NextResponse.json({ error: "Não autorizado." }, { status: 401 });
  }

  const { newName } = await req.json();
  if (!newName || newName.trim().length < 2) {
    return NextResponse.json({  error: "Nome inválido" }, { status: 400 });
  }
  
}