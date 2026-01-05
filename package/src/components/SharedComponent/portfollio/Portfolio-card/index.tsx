'use client'
import React from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
// Removed Link: showing static team-style cards (image + name + position)
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { portfolioinfo } from '@/app/api/data'

const PortfolioCard = () => {
  const settings = {
    autoplay: true,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1320,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <div id='portfolio' className='dark:bg-darkmode'>
      <div className='lg:px-9 m-auto px-0 max-w-[1600px] slider-container'>
        <Slider {...settings}>
          {portfolioinfo.slice(0, 3).map((item, index) => (
            <div key={index} className={`px-3 text-center`}> 
              <div className='relative overflow-hidden rounded-full w-40 h-40 mx-auto'>
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={160}
                  height={160}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '9999px' }}
                />
              </div>
              <h4 className='pt-6 text-xl text-midnight_text font-bold dark:text-white'>
                {item.title}
              </h4>
              <p className='text-secondary font-normal text-sm dark:text-white/50'>
                {item.info}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default PortfolioCard
