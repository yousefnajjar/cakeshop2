'use client'
import Image from 'next/image'
import { FeaturesType } from '@/app/types/features'
import { useEffect, useState } from 'react'
import FeaturesSkeleton from '../../Skeleton/Features'

const Features = () => {
  const [features, setFeatures] = useState<FeaturesType[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setFeatures(data.FeaturesData)
      } catch (error) {
        console.error('Error fetching online cake shop features:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <section id='online-cake-shop-features' className='py-16 bg-white' aria-labelledby='features-heading'>
      <div className='container mx-auto px-4'>
        <header className='text-center mb-14'>
          <p className='text-primary text-lg font-normal tracking-widest uppercase'>
            Why Our Online Cake Shop
          </p>
          <h2 id='features-heading' className='font-semibold text-3xl md:text-4xl lg:max-w-3xl mx-auto mt-3'>
            Order Handcrafted Cakes Online with Ease
          </h2>
          <p className='text-base text-gray-600 mt-4 max-w-2xl mx-auto'>
            Shop our artisanal cakes from anywhere, with custom designs, premium ingredients, and seamless nationwide delivery.
          </p>
        </header>
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-6 mt-12'>
          {loading
            ? Array.from({ length: 4 }).map((_, i) => (
                <FeaturesSkeleton key={i} />
              ))
            : features.map((items, i) => (
                <article
                  key={i}
                  className='p-8 relative rounded-3xl bg-gradient-to-b from-primary/10 to-white shadow-lg hover:scale-105 transition duration-300 ease-in-out hover:cursor-pointer'
                  aria-labelledby={`feature-${i}-heading`}
                >
                  <div className='rounded-full flex justify-center items-center absolute -top-[50%] sm:top-[-40%] md:top-[-55%] lg:top-[-35%] left-0 w-full'>
                    {/* <Image
                      src={items.imgSrc}
                      alt={items.altText || `Image of ${items.heading}`}
                      width={510}
                      height={510}
                      className='object-cover rounded-full'
                      loading='lazy'
                    /> */}
                  </div>
                  <h3
                    id={`feature-${i}-heading`}
                    className='text-2xl text-black font-semibold text-center mt-5'
                  >
                    {items.heading}
                  </h3>
                  <p className='text-base font-normal text-gray-600 text-center mt-2 leading-6'>
                    {items.subheading}
                  </p>
                </article>
              ))}
        </div>
      </div>
    </section>
  )
}

export default Features