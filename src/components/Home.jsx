import React from 'react';
import heroImg from '../assets/heroImage.png';
import {BsArrowBarRight} from "react-icons/bs";

import {Link} from "react-scroll";

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 '>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a Full Stack Developer</h2>
                <p className='text-gray-500 py-4 max-w-md'>I have 4 year's of experiance building and desining software. currently Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam blanditiis laudantium, voluptatibus ullam tenetur est dignissimos eveniet eaque aperiam error? </p>
                <div>
                    <Link to='portfolio' smooth duration={500} className=' group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                        portfolio
                        <span className='group-hover:rotate-90 duration-300'><BsArrowBarRight /></span>
                    </Link>
                </div>
            </div>
            <div>
                <img src={heroImg} alt="my portfolio" className='rounded-2xl mx-auto md:w-full' />
            </div>
        </div>
    </div>
  )
}

export default Home