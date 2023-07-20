/* eslint-disable react/prop-types */
import { useState } from "react"
import { PRICE } from "../utils/SampleData"



const DropDownBox = ({ticket,setCart}) => {
    const[boxOpen,setBoxOpen]=useState(false)
    console.log(ticket)

    const handleClickDropDown=(e)=>{

      if(!ticket){
        alert("Please Select slot and date")
        return
      }

      const totalPrice=PRICE*e.target.id.split("-")[2]
      console.log(totalPrice);
      
      const obj={
        noOfTickets:e.target.id.split("-")[2],
        slotTime:ticket.slotTime,
        totalPrice,
        date:ticket.date.toLocaleString()
      }
      
      setCart(obj)
      setBoxOpen(!boxOpen)

    }

  return (<>
    <div  className="relative inline-block text-left px-4">
  <div>
    <button type="button" onClick={()=>setBoxOpen(!boxOpen)}  className="inline-flex  w-32 justify-between gap-x-1.5 rounded-md bg-white px-3 py-4 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
      0
      <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
      </svg>
    </button>
  </div>


  {boxOpen &&<div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
    <div className="py-1" role="none">

    {ticket && [...Array(ticket.ticketsAvailabe)].map((item,index)=>(<p key={index+1}  onClick={handleClickDropDown} className="text-gray-700 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-300" role="menuitem" tabIndex="-1" id={`menu-item-${index+1}`}>{index+1}</p>) )}
    </div>
  </div>
  }
</div>
</>
  )
}

export default DropDownBox