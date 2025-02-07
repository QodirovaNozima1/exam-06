import React from "react";
import "./Product.css";
import { FaRegHeart } from "react-icons/fa"
import { Link } from 'react-router-dom';
import { FaCircle } from "react-icons/fa";
import { useStateValue } from "../context";
import { FaHeart } from "react-icons/fa";

const Product = ({products,children}) => {
  const [state,dispatch] = useStateValue()
  console.log(state.wishlist);
  
  return (
    <section className="py-10">
      <div className="container mx-auto">
      {children}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-24">
            {products?.map((product) => (
              <div key={product.id} className="rounded-lg flex flex-col items-center  pt-4">
                <div className="w-[239px] aspect-square overflow-hidden rounded-lg pl-7 relative">
                <Link to = {`/product/${product.id}`}>
                  <img
                    className="h-full object-contain"
                    src={product.image}
                    alt=""
                  />
                  </Link> 
                  <button onClick={()=> dispatch({type:"TOGGLE_LIKE", payload:product})} className="absolute top-1 right-1 text-2xl">
                  {
                    state.wishlist?.some(({id})=> id === product.id) ?
                    <FaHeart  className="text-red-400"/>
                    :
                    <FaRegHeart/>
                  }
                  </button>
                </div>
                <div className="p-4 text-center flex flex-col items-center">
                  <h2
                    title={product.title}
                    className="text-[#252B42] text-[16px] font-bold mb-2 desck"
                  >
                    {product.title}
                  </h2>
                  <p className="text-[#737373] text-[14px] font-bold mb-2">
                    English Department
                  </p>
                  <div className="flex gap-2">
                  <p className="text-[#BDBDBD] font-bold">${product.rating.rate}</p>
                  <strong className="block text-[#23856D] text-[16px] font-bold mb-3">
                    ${product.price}
                  </strong>
                  </div>
                  <div className="flex gap-2">
                    <p className="text-[#23A6F0]">
                      <FaCircle />
                    </p>
                    <p className="text-[#23856D]">
                      <FaCircle />
                    </p>
                    <p className="text-[#E77C40]">
                      <FaCircle />
                    </p>
                    <p className="text-[#252B42]">
                      <FaCircle />
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      </section>
  );
};

export default Product;
