/* eslint-disable react/prop-types */
import {AiOutlineShoppingCart} from 'react-icons/ai'
const RightBar = ({cart}) => {
  return (
    <div className="w-full h-screen hidden md:block ">
        <div  className="w-full">
            <img className=" w-full   md:h-[280px] object-cover" src="https://images.pexels.com/photos/1472887/pexels-photo-1472887.jpeg" alt="yoga_class" />
        </div>
        <div className='flex justify-center items-center'>
            <div className='mt-4'>
                {cart?(<div><h1 className='text-4xl mt-5 font-bold'>Total Price: ${cart.totalPrice}</h1></div>):<AiOutlineShoppingCart className='text-5xl text-gray-400'/>}
            </div>
        </div>
    </div>
  )
}

export default RightBar