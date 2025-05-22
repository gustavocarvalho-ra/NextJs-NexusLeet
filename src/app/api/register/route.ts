import { hash } from "bcrypt";
import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, password } = body;

  if (!email || !password) {
    return NextResponse.json({ error: "Email e senha são obrigatórios "}, { status: 400 })
  };

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });
  
  if (existingUser) {
    return NextResponse.json({ error: "Email já cadastrado" }, { status: 400})
  };

  const hashedPassword = await hash(password, 10)

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      role: 'USER',
    }
  });

  return NextResponse.json({ message: "Usuário cadastrado com sucesso", user });
}