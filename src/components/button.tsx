import { MouseEventHandler } from "react";

export default function Button({ label, OnClick }: { label: string, OnClick: MouseEventHandler }) {
	return (
		<>
			<button className="mr-3 p-2 rounded-2xl bg-zinc-200 flex-none justify-items-end text-black hover:scale-95"
				onClick={OnClick}
			>{label}</button>
		</>
	)
}
