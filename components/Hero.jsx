import React from 'react'
import HeroImg from "../public/Hero.png"
import Image from 'next/image'
const Hero = () => {
  return (
    <div className='flex flex-wrap items-center justify-around md:flex-nowrap   '>
        <p className='text-4xl md:text-6xl Hero-font text-red-500 '>Pizza Perfection <br/>at Your Doorstep!</p>
        <Image src={HeroImg} alt='Hero_IMG' className='h-48 w-48  md:h-full md:w-[600px]'/>
    </div>
  )
}

export default Hero