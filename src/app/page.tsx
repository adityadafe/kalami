import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="h-[90vh] w-full flex flex-row justify-evenly items-center">
        <div className="flex flex-col items-center lg:items-start justify-center ">
          <h2 className="w-fit font-black bg-gradient-to-b from-zinc-800 via-neutral-600 to-stone-800 text-[3rem] md:text-[4.5rem] 
        lg:text-[5rem] text-transparent bg-clip-text leading-none tracking-tight mb-4 lg:text-left text-center">
            summarize your handwritten <br /> notes like magic
          </h2>
          <button className="border-2 p-3 border-black rounded-xl text-white bg-zinc-900 hover:bg-zinc-700">make notes</button>
        </div>
        <img
          src="https://illustrations.popsy.co/white/student-in-the-classroom.svg"
          className="w-[500px] h-[400px] lg:px-4 select-none"
        />
      </section>
    </>
  )
}
