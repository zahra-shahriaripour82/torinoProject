"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

 import "../../.././app/globals.css"
// import required modules
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { EffectCards } from 'swiper/modules';
import Image from 'next/image';
const Images=["/images/slide1.png","/images/slide2.png","/images/slide3.png","/images/slide4.png"]
function SwiperSlider() {
  return (
    <>
    
    <Swiper
      effect={'cards'}
      grabCursor={true}
      modules={[EffectCards]}
      className="mySwiper"
    
    >
  
      {Images.map((image,index)=>(<SwiperSlide key={index}><Image  src={image} height={500} width={400} alt="slide_photo"/> </SwiperSlide>))}
    
    </Swiper>
  </>
  )
}

export default SwiperSlider