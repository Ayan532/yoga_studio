
import SideBar from '../componets/SideBar'
import RightBar from '../componets/RightBar'
import { useState } from 'react'

const Home = () => {
  const [cart,setCart]=useState()
  return (
    <div className='w-full h-screen  md:flex md:flex-row'>
        <div className=' lg:flex-[7] '>
         <SideBar setCart={setCart} cart={cart}/>
        </div>
        <div className='  lg:flex-[5]'>
           <RightBar cart={cart}/>
        </div>
    </div>
  )
}

export default Home