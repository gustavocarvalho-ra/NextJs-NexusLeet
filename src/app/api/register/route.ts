import { hash } from "bcrypt";
import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {

    const { name, email, password } = await req.json();
  
    if (!name || !email || !password) {
      return NextResponse.json({ error: "Dados inválidos"}, { status: 400 })
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
      },
    });
  
    return NextResponse.json({ 
      message: "Usuário cadastrado com sucesso",
      user: {
        id: user.id,
        name: user.name,
        Email: user.email,
        role: user.role,
      }
    }, {status: 201});
  } catch (error) {
    console.error("Erro no cadastro", error);
    return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500});
  }
}