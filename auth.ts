import NextAuth from "next-auth/next";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";

export const config = {
  theme: {
    logo: '((?!api|_next/static|_next/image|favicon.ico).*)'
  },
  providers: [
    Github, Google
  ],
  callbacks: {
    authorized({ request, auth }: { request: any, auth: any }) {
      const { pathname } = request.nextUrl
      return pathname === '/' && !!auth
    }
  }
} 

export const { handlers, auth, signIn, signOut } = NextAuth(config)
