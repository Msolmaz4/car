'use client'
import React from 'react'

import Image from 'next/image'
import { CustomButton } from '.'

const Hero = () => {

  const handleScroll = () => {

  }
  return (

    <div className='hero'>
      <div className='flex-1 pt-36 padding-x'>
        <h1 className='hero_title'>
          Find ,book,or rent a car - quikly and easily
        </h1>
        <p className='hero_subtitle'>
          Streamle your car rental experience with our effortless booking process.
        </p>
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className='hero_image-contanier'>
        <div className='hero_image'>
        <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>
      </div>

    </div>
  )
}

export default Hero