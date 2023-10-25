import { signIn, signOut, useSession } from "next-auth/react"
import Button from "./button"
import { useRouter } from "next/navigation"
export default function Navbar() {
	const { data: session } = useSession()
	const router = useRouter()
	return (
		<div className="flex items-center ">
			<h1 className="flex-auto w-32 font-black text-zinc-900 tracking-tight leading-none text-center text-[4rem] p-3	flex flex-row justify-center items-center" onClick={() => router.push('/')}>
				kalami.
			</ h1>
			{session
				? <img src={session.user?.image as string} className="rounded-full h-12 w-12 mr-3 mb-5" onClick={() => signOut()} />
				: <Button label="Sign In" OnClick={() => signIn()} />}
		</div>
	)
}
