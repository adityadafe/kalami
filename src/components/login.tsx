'use client'
import { signIn } from "next-auth/react"
import Button from "./button"
export default function IsLogin() {
	return (
		<>
			<div className="h-screen flex flex-col justify-center items-center">
				<h2 className="text-2xl font-semibold text-zinc-900 mb-4">
					Oops! you are not Logged in :(
				</h2>
				<Button label="Sign In" OnClick={() => signIn()} />
			</div>
		</>
	)
}
