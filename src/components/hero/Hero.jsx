import React from "react";
import "./Hero.css";
import girl from "../../assets/slide1.jpg";

const Hero = () => {
  return (
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
          <button className="hero__btn w-[148px] h-[51px] text-white bg-[#2DC071] rounded-md font-medium">
            Shop now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
