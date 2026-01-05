import React from 'react'
import PortfolioCard from '@/components/SharedComponent/portfollio/Portfolio-card'

const Portfolio = () => {
  return (
    <section id='portfolio' className='dark:bg-darkmode'>
      <div className='text-center lg:px-0 px-8'>
        <div
          className='flex gap-2 items-center justify-center'
          data-aos='fade-right'
          data-aos-delay='200'
          data-aos-duration='1000'>
          <span className='w-3 h-3 rounded-full bg-success'></span>
          <span className='font-medium text-midnight_text text-sm dark:text-white/50'>
            Our Team
          </span>
        </div>
        <h2
          className='sm:text-4xl text-[28px] leading-tight font-bold text-midnight_text text-center pt-7 pb-4 md:w-4/6 w-full m-auto dark:text-white'
          data-aos='fade-left'
          data-aos-delay='200'
          data-aos-duration='1000'>
          Our Dedicated Team at Your Service
        </h2>
        <div className='pb-14 inline-flex'>
          <p className='text-base font-normal text-grey max-w-29 dark:text-white/50'>
            Our team of experienced professionals is committed to delivering innovative IT solutions that drive business success.
          </p>
        </div>
      </div>
      <PortfolioCard />
    </section>
  )
}

export default Portfolio
