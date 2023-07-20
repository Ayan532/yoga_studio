/* eslint-disable react/prop-types */
import { useState } from "react";


const Slots = ({item,setSlot}) => {
    const [active,setActive]=useState(false)
    const handButtonClick=()=>{
        setSlot(item.id)
        setActive(!active)

    }
  return (
    <div onClick={handButtonClick}   className = {active?"bg-blue-600 border cursor-pointer border-1 w-32 border-blue-600 py-1 px-2 rounded-xl flex flex-col justify-center items-center":"border cursor-pointer border-1 w-32 border-blue-600 py-1 px-2 rounded-xl flex flex-col justify-center items-center"}>
       
       <h1 className={active?"text-lg text-white":"text-lg text-blue-600"}>{item.time}</h1>
       <p className="text-xs text-purple-400">Only {item.ticketsAvailable} left</p>
        
    </div>
  )
}

export default Slots