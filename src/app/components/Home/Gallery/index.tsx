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
        setFullMenu(data.FullMenuData)
      } catch (error) {
        console.error('Error fetching menu:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const createSlug = (name: string) =>
    name
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')

  return (
    <section id="menu" className="scroll-mt-20">
      <div className="container">
        <div className="text-center">
          <p className="text-primary text-lg font-normal mb-3 tracking-widest uppercase">
            Our Cakes
          </p>
          <h2>Discover Our Sweet Creations</h2>
        </div>

        <div className="my-16 px-6">
          <Masonry
            breakpointCols={{ default: 3, 700: 2, 500: 1 }}
            className="flex gap-6"
            columnClassName="masonry-column"
          >
            {loading
              ? Array.from({ length: 6 }).map((_, i) => (
                  <GalleryImagesSkeleton key={i} />
                ))
              : fullMenu.slice(0, 6).map((cake, index) => (
                  <Link
                    key={index}
                    href={`/cakes/${createSlug(cake.name)}`}
                    className="block bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 mb-6"
                  >
                    <div className="relative overflow-hidden">
                      <Image
                        src={cake.image}
                        alt={cake.name}
                        width={400}
                        height={300}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-6">
                      <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                        {cake.name}
                      </h2>
                      <p className="text-2xl font-bold text-primary">{cake.price}</p>
                      <div className="mt-4 flex items-center text-sm text-gray-500">
                        <span>View Details</span>
                        <svg
                          className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </Link>
                ))}
          </Masonry>
        </div>

        <div className="flex justify-center">
          <Link
            href="/cakes"
            className="px-6 py-2 border border-primary rounded-full text-base font-medium text-white bg-primary hover:bg-primary/20 hover:text-primary hover:cursor-pointer transition ease-in-out duration-300"
          >
            View All Cakes
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Gallery
