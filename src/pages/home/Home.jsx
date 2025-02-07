import React, { useEffect, useState } from 'react'
import Hero from '../../components/hero/Hero'
import Pick from '../../components/pick/Pick'
import Product from '../../components/product/Product'
import Information from '../../components/information/Information'
import Posts from '../../components/posts/Posts'
import Advertisiment from '../../components/advertisiment/Advertisiment'
import { useStateValue } from "../../components/context/index";
import { request } from '../../api/Index'



const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    request
      .get("/products")
      .then((res) => {
        setProducts(res.data.slice(0, 8));
      })
      .catch((err) => console.log(err));
  }, []);


  return (
    <div>
      <Hero />
      <Pick />
      <Product products={products}>
          <div className="mb-12 text-[#737373] text-center">
            <h2 className="mb-2.5 text-[20px] font-normal">Featured Products</h2>
            <h3 className="mb-2.5 text-[24px] font-bold text-[#252B42]">
              BESTSELLER PRODUCTS
            </h3>
            <p className="text-[14px] font-normal">
              Problems trying to resolve the conflict between
            </p>
          </div>
      </Product>
      <Posts />
      <Advertisiment />
    </div>
  )
}

export default Home