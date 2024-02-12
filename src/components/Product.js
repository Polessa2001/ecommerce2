import React, { useContext } from 'react';
// import Link
import { Link } from 'react-router-dom';
import { BsPlus, BseyeFill } from 'react-icons/bs';

const Product = ({product}) => {
  console.log(product);
  const { id, image, cztegory, title, price } = product;
  return(
    <div>
      <div className="border border-[#F6D8C6] h-[300px] mb-4 relativa overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          {/* image */}
          <div className='w-[200px] mx-auto flex justify-center items-center'>
            <img className='max-h-[160px] group-hover:scale-110 transition duration-300' src={image} alt='' />
          </div>
          { /* buttons */ }
          <div className='absolute top-0 right-0 bg-red-500 p-2'>
            <button>
              <div></div>
            </button>
          </div>
        </div>
      </div>
    </div>
   );
};

export default Product;
