import React, { useContext } from 'react';
// import Link
import { Link } from 'react-router-dom';
import { BsPlus, BsEyeFill } from 'react-icons/bs';

const Product = ({product}) => {
  console.log(product);
  const { id, image, category, title, price } = product;
  return(
  <div className="relative">
    <div className="border border-[#F6D8C6] h-[300px] mb-4 relativa overflow-hidden group transition">
      <div className="w-full h-full flex justify-center items-center">
        {/* image */}
        <div className='w-[200px] mx-auto flex justify-center items-center'>
          <img className='max-h-[160px] group-hover:scale-110 transition duration-300' src={image} alt='' />
        </div>
      </div>
      { /* buttons */ }
      <div className='absolute top-2 right-4 bg-red-500 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100'>
        <button>
          <div className='flex justify-center items-center text-white w-12 h-12 bg-red-500'>
            <BsPlus className="text-3xl" />
          </div>
        </button>
        <Link to={'/'} className='w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl'>
          <BsEyeFill />
        </Link>
      </div>
    </div>
    { /* category price and titile */ }
    <div className='text-sm capitalize text-gray-500 mb-1'>{category}</div>
      <Link to={`/product/${id}`}>
        <h2 className='font-semibold mb-1'>{title}</h2>
      </Link>
      <h2 className='font-semibold'>${price}</h2>
    </div>
  );
};

export default Product;
