import { useEffect, useRef, useState } from "react";

export default function Option({label, option, onClick}) {
    const ref = useRef() 
    const [hover, setHover] = useState(false)
    useEffect(() => {
        if(ref.current){
            let tart = ref.current
            tart.addEventListener("mouseenter", ev => {
                setHover(true)
            })

            tart.addEventListener("mouseleave", ev => {
                setHover(false)
            })
        }
    })
  return (
    <button onClick={e => {
        if(onClick){
            onClick(e)
        }
    }} ref={ref} className={`border-2 border-white p-2 flex items-center w-2/5 space-x-3 font-bold ${hover ? "border-green-400 text-green-400": ""}`}>
      <div className={`border border-white w-8 h-8 flex justify-center items-center ${hover ? "border-green-400" : ""}`}>
        {label}
      </div>
      <p>{option}</p>
    </button>
  );
}
