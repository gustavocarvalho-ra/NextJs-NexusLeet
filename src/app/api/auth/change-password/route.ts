import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth";
import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";
import { hash, compare } from "bcrypt";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user?.email) {
    return NextResponse.json({ error: "Não autorizado" }, {status: 401});
  }

  const { currentPassword, newPassword } = await req.json();

  if (!currentPassword || !newPassword) {
    return NextResponse.json({ error: "Dados invalidos" }, {status: 400});
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  if (!user || !user.password) {
    return NextResponse.json({ error: "Usuário não encontrado" }, {status: 400});
  }

  const isValid = await compare(currentPassword, user.password);
  if (!isValid) {
    return NextResponse.json({ error: "Senha atual incorrenta" }, { status: 400 });
  }

  const hashedNewPassword = await hash(newPassword, 10);

  await prisma.user.update({
    where: { email: session.user.email },
    data: { password: hashedNewPassword },
  });

  return NextResponse.json({ message: "Senha alterada com sucesso" });
}