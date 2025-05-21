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
    signIn: '/login',
  },
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        })

        if (!user || !(await compare(credentials.password, user.password))) return null

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
