import { PrismaAdapter } from '@next-auth/prisma-adapter'
import type { AuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { compare } from 'bcrypt'
import { prisma } from './prisma'


export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: { strategy: 'jwt' },
  pages: {
    signIn: '/test',
  },
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        console.log("Tentando login com:", credentials);

        if (!credentials?.email || !credentials.password) return null;

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        console.log("Usuário encontrado no banco:", user);
        if (!user) return null;

        const isPasswordCorrect = await compare(credentials.password, user.password);
        console.log("Senha confere?", isPasswordCorrect);

        if (!isPasswordCorrect) return null;

        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },
    async session({ session, token }) {
      if (session.user && typeof token.role === "string") { 
        session.user.role = token.role;
      }
      return session;
    },
  },
}