import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth";
import { compare } from "bcrypt";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return NextResponse.json({ error: "Não autorizado." }, { status:401 });
  }

  const { password } = await req.json();
  if (!password) {
    return NextResponse.json({ error: "Senha obrigatória" }, { status: 400 })
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  if (!user) {
    return NextResponse.json({ error: "Usuário não encontrado" }, { status: 404 });
  }

  const isValid = await compare(password, user.password);
  if (!isValid) {
    return NextResponse.json({ error: "Senha incorreta" }, { status: 403 });
  }

  await prisma.user.delete({
    where: { id: user.id}
  });
  return NextResponse.json({ success: true });
}
