'use client'
import CanvasDraw from 'react-canvas-draw'

export default function DrawingBoard() {
  return (
    <>
      <div className="h-screen w-fit flex flex-row justify-center items-center">
        <div className="h-screen w-full flex flex-col justify-center items-center ml-[30vh]">
          <div className="border border-3 border-black items-center w-[70vh] h-[70vh]  rounded-3xl ">
            <CanvasDraw brushRadius={3} canvasHeight={675} canvasWidth={675} className='ml-2 mt-2'/>
          </div>
          <button className="mt-3 p-3 rounded-xl text-black bg-zinc-200 hover:bg-zinc-300 animate-pulse">create summary</button>
        </div>
        <div className="border border-3 border-black rounded-3xl  h-[50vh] w-[70vh] items-center">
        </div>
      </div>
    </>
  );
};


