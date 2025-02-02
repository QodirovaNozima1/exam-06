import React, { useEffect, useState } from "react";
import "./Product.css";
import { request } from "../../api/Index";
import { FaCircle } from "react-icons/fa";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    request
      .get("/products", {
        params: {
          limit: 12,
        },
      })
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => console.error("API Error:", err));
  }, []);

  return (
    <section className="py-10">
      <div className="container mx-auto">
        <div className="mb-12 text-[#737373] text-center">
          <h2 className="mb-2.5 text-[20px] font-normal">Featured Products</h2>
          <h3 className="mb-2.5 text-[24px] font-bold text-[#252B42]">
            BESTSELLER PRODUCTS
          </h3>
          <p className="text-[14px] font-normal">
            Problems trying to resolve the conflict between
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-24">
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product.id} className="rounded-lg flex flex-col items-center hover:shadow-xl duration-4 pt-4">
                <div className="w-[239px] aspect-square overflow-hidden rounded-lg pl-7">
                  <img
                    className="h-full object-contain"
                    src={product.image}
                    alt=""
                  />
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
            ))
          ) : (
            <p className="text-center text-[#737373]">Loading products...</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Product;
