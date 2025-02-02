import React from 'react'
import './Top.css'
import { FaPhone } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Top = () => {
    return (
        <div className="top bg-[#252B42] h-[58px] flex items-center">
            <div className=' flex items-center container justify-between'>
                <div className="flex items-center gap-6">
                    <div className="flex text-white gap-2 items-center">
                        <FaPhone />
                        <p className='font-bold'>(225) 555-0118</p>
                    </div>
                    <div className="flex text-white gap-2 items-center">
                        <TfiEmail />
                        <p className='font-bold'>michelle.rivera@example.com</p>
                    </div>
                </div>
                <div className="">
                    <p className='font-bold text-white'>Follow Us  and get a chance to win 80% off</p>
                </div>
                <div className="flex gap-2 text-white items-center">
                    <p className='font-bold'>Follow Us  :</p>
                    <FaInstagram />
                    <FaYoutube />
                    <FaFacebook />
                    <FaTwitter />
                </div>
            </div>
        </div>
    )
}

export default Top