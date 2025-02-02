import React from 'react'
import './Posts.css'
import post1  from '../../assets/post1.png'
import post2  from '../../assets/post2.png'
import post3  from '../../assets/post3.png'
import { CiClock2 } from "react-icons/ci"
import { GiProgression } from "react-icons/gi";
import { IoIosArrowForward } from "react-icons/io";

const Posts = () => {
  return (
    <div className='container--sm flex flex-col text-center'>
        <p className='font-bold text-[#23A6F0]'>Practice Advice</p>
        <h2 className='font-bold text-[40px]'>Featured Posts</h2>
        <p className='text-[#737373]'>Problems trying to resolve the conflict between 
        the two major realms of Classical physics: Newtonian mechanics </p>
        <div className="posts grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-28 mt-9">
            <div className="flex flex-col w-[330px] border-slate-400">
                <img src={post1} alt="" />
                <div className="flex flex-col text-start gap-6 mt-3.5 p-3">
                    <h2 className='font-normal text-[20px]'>Loudest à la Madison #1 
                    (L'integral)</h2>
                    <p className='text-[#737373]'>
                    We focus on ergonomics and meeting you where you work. It's only a keystroke away.
                    </p>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <p className='text-[#23A6F0]'><CiClock2 /></p>
                            <p className='text-[#737373]'>22 April 2021</p>
                        </div>
                        <div className="flex items-center">
                            <p className='text-[#23856D]'><GiProgression /></p>
                            <p className='text-[#737373]'>10 comments</p>
                        </div>
                    </div>
                    <div className="flex  items-center">
                    <p className='text-[#737373]'>Learn More</p>
                    <p className='text-2xl text-[#23856D]'><IoIosArrowForward /></p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-[330px] border-slate-400">
                <img src={post2} alt="" />
                <div className="flex flex-col text-start gap-6 mt-3.5 border-slate-500 p-3">
                    <h2 className='font-normal text-[20px]'>Loudest à la Madison #1 
                    (L'integral)</h2>
                    <p className='text-[#737373]'>
                    We focus on ergonomics and meeting you where you work. It's only a keystroke away.
                    </p>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <p className='text-[#23A6F0]'><CiClock2 /></p>
                            <p className='text-[#737373]'>22 April 2021</p>
                        </div>
                        <div className="flex items-center">
                            <p className='text-[#23856D]'><GiProgression /></p>
                            <p className='text-[#737373]'>10 comments</p>
                        </div>
                    </div>
                    <div className="flex  items-center">
                    <p className='text-[#737373]'>Learn More</p>
                    <p className='text-2xl text-[#23856D]'><IoIosArrowForward /></p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-[330px] border-slate-400">
                <img src={post3} alt="" />
                <div className="flex flex-col text-start gap-6 mt-3.5 border-slate-500 p-3">
                    <h2 className='font-normal text-[20px]'>Loudest à la Madison #1 
                    (L'integral)</h2>
                    <p className='text-[#737373]'>
                    We focus on ergonomics and meeting you where you work. It's only a keystroke away.
                    </p>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <p className='text-[#23A6F0]'><CiClock2 /></p>
                            <p className='text-[#737373]'>22 April 2021</p>
                        </div>
                        <div className="flex items-center">
                            <p className='text-[#23856D]'><GiProgression /></p>
                            <p className='text-[#737373]'>10 comments</p>
                        </div>
                    </div>
                    <div className="flex  items-center">
                    <p className='text-[#737373]'>Learn More</p>
                    <p className='text-2xl text-[#23856D]'><IoIosArrowForward /></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Posts