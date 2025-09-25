'use client'
import Image from 'next/image'
import Masonry from 'react-masonry-css'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import GalleryImagesSkeleton from '../../Skeleton/GalleryImages'
import { FullMenuType } from '@/app/types/fullmenu'

const Gallery = () => {
  const [fullMenu, setFullMenu] = useState<FullMenuType[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setFullMenu(data.FullMenuData) // Fetch FullMenuData
      } catch (error) {
        console.error('Error fetching menu:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  // Helper function to create URL-friendly slug from cake name
  const createSlug = (name: string) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '') // Remove special characters
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+/g, '-') // Replace multiple hyphens with single
  }

  return (
    <section id='menu' className='scroll-mt-20'>
      <div className='container'>
        <div className='text-center'>
          <p className='text-primary text-lg font-normal mb-3 tracking-widest uppercase'>
            Our Cakes
          </p>
          <h2>Discover Our Sweet Creations</h2>
        </div>
        <div className='my-16 px-6'>
          <Masonry
            breakpointCols={{ default: 3, 700: 2, 500: 1 }}
            className='flex gap-6'
            columnClassName='masonry-column'
          >
            {loading ? (
              Array.from({ length: 6 }).map((_, i) => (
                <GalleryImagesSkeleton key={i} />
              ))
            ) : (
              fullMenu.slice(0, 6).map((item, index) => (
                <div
                  key={index}
                  className='overflow-hidden rounded-3xl mb-6 relative group'
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={600}
                    height={500}
                    className='object-cover w-full h-full'
                  />
                  <div className='w-full h-full absolute bg-black/40 top-full group-hover:top-0 duration-500 lg:p-12 md:p-8 p-3.5 flex flex-col items-start lg:gap-8 gap-4 justify-end'>
                    <p className='text-white lg:text-2xl text-xl'>{item.name}</p>
                    <div className='flex items-center justify-between w-full'>
                      <p className='text-white lg:text-2xl text-xl'>
                        {item.price}
                      </p>
                      <Link
                        href={`/cakes/${createSlug(item.name)}`} // Link to individual cake details
                        className='text-white rounded-full bg-primary border duration-300 border-primary py-2 lg:px-6 md:px-4 px-3 hover:bg-primary/40 hover:backdrop-blur-xs md:text-base text-sm'
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            )}
          </Masonry>
        </div>
        <div className='flex justify-center'>
          <Link
            href='/cakes'
            className='px-6 py-2 border border-primary rounded-full text-base font-medium text-white bg-primary hover:bg-primary/20 hover:text-primary hover:cursor-pointer transition ease-in-out duration-300'
          >
            View All Cakes
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Gallery