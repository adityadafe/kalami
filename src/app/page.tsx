'use client'
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { SessionProvider } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <SessionProvider>
        <Navbar />
        <section className="h-[87vh] w-full flex flex-row justify-evenly items-center">
          <div className="flex flex-col items-center lg:items-start justify-center ">
            <h2 className="w-fit font-black bg-gradient-to-b from-zinc-800 via-neutral-600 to-stone-800 text-[3rem] md:text-[4.5rem] 
        lg:text-[5rem] text-transparent bg-clip-text leading-none tracking-tight mb-4 lg:text-left text-center">
              summarize your <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                handwritten
              </span>
              <br /> notes like magic
            </h2>
            <Link href='/write'>
              <button className="p-3 rounded-xl text-black bg-zinc-200 hover:bg-zinc-300 animate-pulse">make notes</button>
            </Link>
          </div>
          <img
            src="https://illustrations.popsy.co/white/student-in-the-classroom.svg"
            className="w-[700px] h-[700px] lg:px-4 select-none"
          />
        </section>
        <hr />
        <Footer />
      </SessionProvider>
    </>
  )
}
