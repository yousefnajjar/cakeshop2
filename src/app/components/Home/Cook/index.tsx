'use client'

import Image from 'next/image'

const About = () => {
  return (
    <section className='relative' id='aboutus' aria-labelledby='aboutus-heading'>
      <div className='container px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-12 my-16 space-x-5'>
          <div className='lg:col-span-6 flex lg:justify-start justify-center'>
            <Image
              src='/images/cake webp/about/Fresh Ingredients.webp'
              alt='Baker decorating a custom cake'
              width={500}
              height={500}
            />
          </div>
          <div className='lg:col-span-6 flex flex-col justify-center items-center lg:items-start'>
            <p className='text-primary text-lg font-normal mb-3 tracking-widest uppercase lg:text-start text-center'>
              About Our Cake Shop
            </p>
            <h2 id='aboutus-heading' className='lg:text-start text-center text-3xl md:text-4xl font-semibold'>
              Baked with Love, Delivered to You
            </h2>
            <p className='text-gray-600 text-lg font-normal my-5 text-start'>
              At our online cake shop, every cake is a masterpiece. Our skilled bakers combine premium ingredients with creative designs to craft delicious, custom cakes for any occasion. Order online and enjoy a seamless experience from selection to delivery.
            </p>
            <p className='text-gray-600 text-lg font-normal mb-10 text-start'>
              Whether it’s a birthday, wedding, or just a sweet craving, our artisanal cakes are designed to make every moment special. Shop now for nationwide delivery and exceptional quality.
            </p>
            <button 
              className='text-xl font-medium rounded-full text-white py-3 px-8 duration-300 bg-primary w-fit border border-primary hover:bg-transparent hover:text-primary hover:cursor-pointer'
              aria-label='Learn more about our online cake shop'
            >
             +1(909) 235-9814
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About