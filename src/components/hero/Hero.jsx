import React from "react";
import "./Hero.css";
import girl from "../../assets/slide1.jpg";
import boy from "../../assets/boy.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Hero = () => {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div
            className="hero flex flex-col justify-center items-start bg-cover h-screen"
            style={{
              backgroundImage: `url(${girl})`,
            }}
          >
            <div className=" flex hero flex-col gap-10 container">
              <p className="font-bold text-white">SUMMER 2020</p>
              <h2 className="text-white  font-semibold text-[64px]">
                NEW COLLECTION
              </h2>
              <p className="text-[20px] font-normal text-white">
                We know how large objects will act, but things on a small scale.
              </p>
              <div className="btns flex gap-5   @md:gap-2">
                <button className="hero__btn w-[148px] h-[51px] text-white bg-[#2DC071] rounded-md font-medium hover:drop-shadow-lg shadow-emerald-200">
                  Shop now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="hero flex flex-col justify-center items-start bg-cover h-screen"
            style={{
              backgroundImage: `url(${boy})`,
            }}
          >
          </div>
        </SwiperSlide>

      </Swiper>
    </>
  );
};

export default Hero;

// {/* <div
//       className="hero flex flex-col justify-center items-start bg-cover h-screen"
//       style={{
//         backgroundImage: `url(${girl})`,
//       }}
//     >
//       <div className=" flex hero flex-col gap-10 container">
//         <p className="font-bold text-white">SUMMER 2020</p>
//         <h2 className="text-white  font-semibold text-[64px]">
//           NEW COLLECTION
//         </h2>
//         <p className="text-[20px] font-normal text-white">
//           We know how large objects will act, but things on a small scale.
//         </p>
//         <div className="btns flex gap-5   @md:gap-2">
//           <button className="hero__btn w-[148px] h-[51px] text-white bg-[#2DC071] rounded-md font-medium hover:drop-shadow-lg shadow-emerald-200">
//             Shop now
//           </button>
//         </div>
//       </div>
//     </div> */}