import { PrismaAdapter } from '@next-auth/prisma-adapter'
import type { User, Session } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import type { JWT } from 'next-auth/jwt'
import { compare } from 'bcrypt'
import { prisma } from './prisma'
import { Adapter } from 'next-auth/adapters'

type NextAuthOptions = {
  adapter?: Adapter
  session?: { strategy: 'jwt' | 'database' }
  pages?: { signIn: string }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  providers: any[]
  callbacks?: {
    jwt?: (params: { token: JWT; user?: User }) => Promise<JWT>
    session?: (params: { session: Session; token: JWT }) => Promise<Session>
  }
}

export const authOptions: NextAuthOptions = {
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
        // ⚠️ LOG PARA DEBUG
        console.log(">>> AUTHORIZING", credentials)
        // ⚠️ LOG PARA DEBUG
        if (!credentials?.email || !credentials.password) return null

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        })

        if (!user) {
          console.log("Usuário não encontrado")
          return null
        }

        const isValid = await compare(credentials.password, user.password)

        if (!isValid) {
          console.log("Senha incorreta")
          return null
        }

        console.log("Login bem-sucedido:", user.email)

        return user
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: { token: JWT; user?: User }) {
      if (user) token.role = user.role
      return token
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      if (token && session.user) {
        session.user.role = token.role
      }
      return session
    },
  },
}