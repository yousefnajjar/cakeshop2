'use client'
import { Icon } from '@iconify/react/dist/iconify.js'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <section id='home-section' className='bg-gray-50'>
      <div className='container xl:pt-7 pt-16'>
        <div className='grid grid-cols-1 lg:grid-cols-12 items-center'>
          <div className='lg:col-span-6'>
            <h1 className='font-semibold mb-5 text-black lg:text-start text-center sm:leading-20 leading-16'>
              Sweet Delights at Naji Cake
            </h1>
            <p className='text-black/55 text-lg font-normal mb-10 lg:text-start text-center'>
              Experience the finest cakes and pastries, crafted with love and 
              the freshest ingredients — baked fresh daily to delight every taste.
            </p>
            <div className='flex flex-col sm:flex-row gap-5 items-center justify-center lg:justify-start'>
              <Link href='/#menu'>
                <button className='text-xl font-medium rounded-full text-white py-3 px-8 bg-primary hover:text-primary border border-primary hover:bg-transparent hover:cursor-pointer transition ease-in-out duration-300'>
                  View Cakes
                </button>
              </Link>
          <Link href="tel:+19092359814">
            <button className='flex items-center gap-2 text-xl border border-primary rounded-full font-medium py-3 px-8 text-primary hover:text-white hover:bg-primary hover:cursor-pointer transition ease-in-out duration-300'>
              <Icon
                icon='solar:phone-bold'
                className='text-primary text-2xl' 
              />
              +1 (909) 235-9814
            </button>
          </Link>

            </div>
          </div>
          <div className='lg:col-span-6 flex justify-center relative'>
            <div className='flex bg-white p-2 gap-5 items-center bottom-1 left-10 rounded-xl absolute'>
              <Image
              src='/images/cake webp/about/Strawberry-Cake-removebg-preview.webp'
                alt='cake-slice'
                width={68}
                height={68}
              />
              <p className='text-lg font-normal'>
                Over 50+ <br /> signature cakes
              </p>
            </div>
            <Image
              src='/images/cake webp/about/Strawberry-Cake-removebg-preview.webp'
              alt='Naji Cake Banner'
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
