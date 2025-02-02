import React from 'react'
import './Advertisiment.css'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Advertisiment = () => {
    return (
        <div className=' bg-[#FAFAFA] h-[142px] flex items-center justify-center mt-9'>
            <div className="container flex justify-between advertisiment">
                <div className="">
                    <h2 className='text-2xl font-bold'>Bandage</h2>
                </div>
                <div className="flex gap-2.5 text-[#23A6F0] text-2xl">
                    <FaFacebook />
                    <FaInstagram />
                    <FaTwitter />
                </div>
            </div>
        </div>
    )
}

export default Advertisiment