'use client'
import { createRef } from 'react'
import CanvasDraw from 'react-canvas-draw'
import { useScreenshot } from 'use-react-screenshot'
import { createWorker } from 'tesseract.js'

export default function DrawingBoard() {
  const ref = createRef<HTMLDivElement>()
  const [image, takeScreenShot] = useScreenshot()

  async function scanImage() {
    const worker = await createWorker('eng');
    const ret = await worker.recognize(image as string);
  }

  return (
    <>
      <div className="h-screen w-fit flex flex-row justify-center items-center">
        <div className="h-screen w-full flex flex-col justify-center items-center ml-[30vh]">
          <div className="border border-3 border-black items-center w-[70vh] h-[70vh]  rounded-3xl ">
            <div ref={ref}>
              <CanvasDraw brushRadius={3} canvasHeight={675} canvasWidth={675} className='ml-2 mt-2' hideGridX hideGridY hideInterface onChange={() => takeScreenShot(ref.current)} />
            </div>
          </div>
          <button className="mt-3 p-3 rounded-xl text-black bg-zinc-200 hover:bg-zinc-300 animate-pulse" onClick={scanImage}>create summary</button>
        </div>
        <div className="border border-3 border-black rounded-3xl  h-[50vh] w-[70vh] items-center">
        </div>
      </div>
    </>
  );
};


