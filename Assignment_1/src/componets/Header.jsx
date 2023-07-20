import { useState } from "react"
import { useEffect } from "react"

const Header = () => {
    const [time,setTime]=useState("")
    const [endTime,setEndTime]=useState("")
    
    useEffect(()=>{
       const dateObject=new Date()
       const newDateObject = new Date(dateObject.getTime());
       newDateObject.setHours(dateObject.getHours() + 1);

       const formattedDate = dateObject.toLocaleString(undefined, {
        weekday: 'short',
        month: 'short', 
        day: 'numeric', 
        hour: 'numeric', 
        minute: 'numeric', 
        hour12: true, 
      });
      const formattedNewDate = newDateObject.toLocaleString(undefined, {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      });

      setTime(formattedDate)
      setEndTime(formattedNewDate)
    },[setEndTime])
  return (
    <div className="">
    <div className="flex flex-col justify-center items-center gap-5">

       <div className="p-2">
            <h1 className="text-2xl font-semibold text-gray-700">Yoga at the art Studio</h1>
       </div>
       <div>
          <h1 className="text-gray-500 text-xl"> {time && endTime?`${time}  -  ${endTime}`:""}</h1>
       </div>
    </div>
    </div>

  )
}

export default Header