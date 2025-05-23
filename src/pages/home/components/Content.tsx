"use client"
import { useEffect, useRef } from "react";
import { splitText } from "motion-plus";
import { animate, stagger } from "motion";
import { FaPlay } from "react-icons/fa";

function Content() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!containerRef.current) return

      containerRef.current.style.visibility = "visible"

      const { words } = splitText(
        containerRef.current.querySelector("h1")!
      )

      animate(
        words,
        { opacity: [0, 1], y: [10, 0] },
        {
          type: "spring",
          duration: 2,
          bounce: 0,
          delay: stagger(0.05),
        }
      )
    })
  }, [])

  return (
    <>
      <div className="w-full text-white flex items-center justify-center p-6 mt-48">
        <button
          className="shadow-2xl cursor-pointer w-72 rounded-2xl gap-4 h-auto p-6 shadow-primary bg-primary flex items-center justify-center animate-bounce"
          onClick={() => console.log("Jugar ahora")}
        >
          <FaPlay size={50} color="white" />
          <h1 className="text-6xl">Play</h1>
        </button>
      </div>
      <div className="container mx-auto mt-10" ref={containerRef}>
        <h1 className="h1 text-2xl">
          Guess. Relax. Master the light.
        </h1>
        <Stylesheet />
      </div>
    </>
  )
}

function Stylesheet() {
  return (
    <style>{`
            .container {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                max-width: 700px;
                text-align: left;
                visibility: hidden;
                flex-direction: column;
            }

            .split-word {
                will-change: transform, opacity;
            }
        `}</style>
  )
}

export default Content