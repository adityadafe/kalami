import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'

const handler = NextAuth({
	providers: [
		GithubProvider({
			clientId: 'db932e147708968cee9a',
			clientSecret: '5051438dc2a85a048d315726949c7aedca4466e0',
		}),
		GoogleProvider({
			clientId: '472550699174-ohr2m15lqh22cef73l2knmhv79klr5tt.apps.googleusercontent.com',
			clientSecret: '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',
		})
	]
}
)
export { handler as GET, handler as POST }
