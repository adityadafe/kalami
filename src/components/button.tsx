import { MouseEventHandler } from "react";
import GoogleIcon from "./icons/google";

export default function Button({ label, OnClick }: { label: string, OnClick: MouseEventHandler }) {
	return (
		<>
			<button className="mr-3 p-2 rounded-xl bg-zinc-200 flex  justify-items-end text-black hover:scale-95 items-center gap-2"
				onClick={OnClick} >
				<GoogleIcon />
				{label}</button>
		</>
	)
}
