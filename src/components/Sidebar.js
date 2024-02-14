import React, { useContext } from 'react'
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';
import { IoMdArrowForward } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';
// import components

const Sidebar = () => {
  const{cart, resetCart }= useContext(CartContext);
  const { isOpen, handleClose }= useContext(SidebarContext);
  console.log(useContext(CartContext));
  return (
    <div className={` ${isOpen ? 'right-0' : '-right-full'} w-full bg-white fixed top-0 h-full shadow-2xl
    md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4
    lg:px-[35px]`}>
      <div>
        <div className='uppercase text-sm font-semibold'>Shopping Bag (0) </div>
        <div onClick={handleClose} className='cursor-pointer w-8 flex justify-center items-center'>
          <IoMdArrowForward className='text-2xl'/>
        </div>
      </div>
      <div >{cart.map(item => {
        return <CartItem item={item} key={item.id} />
        })}
      </div>
      <div>
        {/* total */}
        <div>
          <span>Total:</span> $
        </div>
        <div className='cursor-pointer py-4 bg-rose-500 text-white w-12 h-12 flex justify-center items-center text-xl' onClick={()=>{resetCart()}}>
          <FiTrash2/>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
