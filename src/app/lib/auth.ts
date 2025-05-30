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
      if (session.user) {
        session.user.role = token.role as string;
      }
      return session;
    },
  },
}
















// import { PrismaAdapter } from '@next-auth/prisma-adapter'
// import type { User, Session } from 'next-auth/test'
// import CredentialsProvider from 'next-auth/providers/credentials'
// import type { JWT } from 'next-auth/jwt'
// import { compare } from 'bcrypt'
// import { prisma } from './prisma'
// import type { AuthOptions } from "next-auth"


// export const authOptions: AuthOptions = {
//   adapter: PrismaAdapter(prisma),
//   session: { strategy: 'jwt' },
//   pages: {
//     signIn: '/test',
//   },
//   providers: [
//     CredentialsProvider({
//       name: 'credentials',
//       credentials: {
//         email: { label: 'Email', type: 'text' },
//         password: { label: 'Password', type: 'password' },
//       },
//       async authorize(credentials) {
//         // // ⚠️ LOG PARA DEBUG
//         // console.log(">>> AUTHORIZING", credentials)
//         // // ⚠️ LOG PARA DEBUG
//         // if (!credentials?.email || !credentials.password) return null

//         // const user = await prisma.user.findUnique({
//         //   where: { email: credentials.email },
//         // })

//         // if (!user || !(await compare(credentials.password, user.password))) return null

//         // const isValid = await compare(credentials.password, user.password)

//         // if (!isValid) {
//         //   console.log("Senha incorreta")
//         //   return null
//         // }

//         // console.log("Login bem-sucedido:", user.email)

//         // return user



//           console.log("Tentando login com:", credentials);

//           if (!credentials?.email || !credentials.password) return null;

//           const user = await prisma.user.findUnique({
//             where: { email: credentials.email },
//           });

//           console.log("Usuário encontrado no banco:", user);

//           if (!user) return null;

//           const isPasswordCorrect = await compare(credentials.password, user.password);
//           console.log("Senha confere?", isPasswordCorrect);

//           if (!isPasswordCorrect) return null;

//           return user;

//       },
//     }),
//   ],
//   callbacks: {
//     async jwt({ token, user }: { token: JWT; user?: User }) {
//       if (user) token.role = user.role
//       return token
//     },
//     async session({ session, token }: { session: Session; token: JWT }) {
//       if (token && session.user) {
//         session.user.role = token.role
//       }
//       return session
//     },
//   },
// }

// import { PrismaAdapter } from '@next-auth/prisma-adapter';
// import CredentialsProvider from 'next-auth/providers/credentials';
// import { compare } from 'bcrypt';
// import { prisma } from './prisma';
// import type { Adapter } from 'next-auth/adapters';
// import type { User, Session } from 'next-auth/test';
// // import type { JWT } from 'next-auth/jwt';
// // import { NextAuthOptions } from 'next-auth';
// import { NextAuthOptions } from 'next-auth';
// import type { JWT } from 'next-auth/jwt';

//   interface Session {
//     user: {
//       name?: string | null;
//       email?: string | null;
//       image?: string | null;
//       role?: string;
//     };
//   }

//   interface User {
//     role?: string;
//   }

// export const authOptions: NextAuthOptions = {
//   adapter: PrismaAdapter(prisma) as Adapter,
//   session: { strategy: 'jwt' },
//   pages: {
//     signIn: '/test',
//   },
//   providers: [
//     CredentialsProvider({
//       name: 'credentials',
//       credentials: {
//         email: { label: 'Email', type: 'text' },
//         password: { label: 'Password', type: 'password' },
//       },
//       async authorize(credentials) {
//         console.log("Tentando login com:", credentials);

//         if (!credentials?.email || !credentials.password) return null;

//         const user = await prisma.user.findUnique({
//           where: { email: credentials.email },
//         });

//         console.log("Usuário encontrado no banco:", user);

//         if (!user) return null;

//         const isPasswordCorrect = await compare(credentials.password, user.password);
//         console.log("Senha confere?", isPasswordCorrect);

//         if (!isPasswordCorrect) return null;

//         return user;
//       },
//     }),
//   ],
//   callbacks: {
//     async jwt({ token, user }: { token: JWT; user?: User }) {
//       if (user) token.role = user.role;
//       return token;
//     },
//     async session({ session, token }: { session: Session; token: JWT }) {
//       if (token && session.user) {
//         session.user.role = token.role;
//       }
//       return session;
//     },
//   },
// };