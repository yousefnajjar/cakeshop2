'use client'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <section id='home-section' className='bg-gray-50'>
      <div className='container xl:pt-7 pt-16'>
        <div className='grid grid-cols-1 lg:grid-cols-12 items-center'>
          <div className='lg:col-span-6'>
            <h1 className='font-semibold mb-5 text-black lg:text-start text-center sm:leading-20 leading-16'>
              Elevated Dining at Chef’s Kitchen
            </h1>
            <p className='text-black/55 text-lg font-normal mb-10 lg:text-start text-center'>
              Indulge in an elegant culinary journey, crafted with locally
              sourced ingredients and world-class flavors — served fresh, every
              day.
            </p>
            <div className='flex flex-col sm:flex-row gap-5 items-center justify-center lg:justify-start'>
              <Link href='/#menu'>
                <button className='text-xl font-medium rounded-full text-white py-3 px-8 bg-primary hover:text-primary border border-primary hover:bg-transparent hover:cursor-pointer transition ease-in-out duration-300'>
                  View Menu
                </button>
              </Link>
              <Link href='/#reserve'>
                <button className='text-xl border border-primary rounded-full font-medium py-3 px-8 text-primary hover:text-white hover:bg-primary hover:cursor-pointer transition ease-in-out duration-300'>
                  Reserve a Table
                </button>
              </Link>
            </div>
          </div>
          <div className='lg:col-span-6 flex justify-center relative'>
            <div className='flex bg-white p-2 gap-5 items-center bottom-10 left-10 rounded-xl absolute'>
              <Image
                src={'/images/hero/pizza.webp'}
                alt='pizza-image'
                width={68}
                height={68}
              />
              <p className='text-lg font-normal'>
                Over 50+ <br /> signature dishes
              </p>
            </div>
            <Image
              src='/images/hero/banner-image.webp'
              alt='nothing'
              width={1000}
              height={805}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
