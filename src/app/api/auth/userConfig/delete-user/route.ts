import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth";

export async function DELETE(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return NextResponse.json({ error: "Não autorizado." }, { status:401 });
  }

  try {
    await prisma.user.delete({
      where: {
        email: session.user.email,
      },
    });

    return NextResponse.json({ message: "Usuário deletado com sucesso." });
  } catch (error) {
    console.error("Erro ao deletar usuário", error);
    
    return NextResponse.json({ error: "Erro ao deletar usuário." }, {status: 500 });
  }
}