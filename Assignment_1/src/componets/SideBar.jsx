/* eslint-disable react/prop-types */
import DropDownBox from "./DropDownBox";
import Header from "./Header";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import Slots from "./Slots";
import { slotsData } from "../utils/SampleData";
import { AiOutlineShoppingCart } from "react-icons/ai";

// eslint-disable-next-line react/prop-types
const SideBar = ({cart,setCart}) => {
  const [startDate, setStartDate] = useState();
  const [slot,setSlot]=useState("")
  const [ticket,setTicket]=useState()

  useEffect(()=>{
    

    if(slot){
      const avaliableTicket=slotsData.filter((item)=> item.id==slot)

      if(!startDate){
        alert("Please Select a Date")
        setSlot("")
      }
      const obj={
        ticketsAvailabe:avaliableTicket[0].ticketsAvailable,
        slotTime:avaliableTicket[0].time,
        ticketId:slot,
        date:startDate
      }
      setTicket(obj)
    }

  },[slot,startDate])

  const handleChangeDate=(date)=>{
    setStartDate(date)   
}

  return (
    <div className="w-full h-screen flex justify-between flex-col">
      <div>
        <div>
          <Header />
        </div>

        <div className="flex w-full justify-around px-3 mt-10">
          <div className="flex flex-col gap-4">
            <div>
              <h1 className="text-3xl font-semibold">Yoga Tickets</h1>
              <p className="text-3xl font-semibold">$25</p>
            </div>
            <div>
              <p className="text-gray-400 text-xl">
                Sales End {Date().split(" ").slice(0, 3).join("  ")}
              </p>
            </div>
          </div>
          <div className="">
            <DropDownBox ticket={ticket}  cart={cart} setCart={setCart}/>
          </div>
        </div>

        <div className="flex flex-col md:flex-row w-full justify-center gap-10 mt-5 px-5">
          <div>
            <DatePicker
              showIcon
              className="border text-black border-1 border-black w-64 p-2 rounded-md"
              selected={startDate}
               
              placeholderText={"Select a Date"}
              onChange={(date) => handleChangeDate(date)}
            />
          </div>
          <div>
            <div>
              <h1></h1>
            </div>
            <div className=" w-[200px] md:w-[300px] flex flex-wrap gap-2 overflow-y-scroll h-[200px] md:h-[300px] ">
              {slotsData.map((slot)=><Slots key={slot.id} item={slot} setSlot={setSlot} slot={slot}  />)}
            </div>
          </div>
        </div>
      </div>
      <div  >
       
        <div className="w-full py-2 px-3 flex justify-between md:justify-end  md:px-3  md:py-7 shadow-2xl">
        <div className="md:hidden block">
       {cart?(<div><h1 className='text-lg  font-semibold'>Total Price: ${cart.totalPrice}</h1></div>):<AiOutlineShoppingCart className='text-5xl text-gray-400'/>}
       </div>
          <button className="bg-pink-400 text-white p-4 rounded-lg w-40">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
