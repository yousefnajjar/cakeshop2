'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Slider from 'react-slick'
import GalleryImagesSkeleton from '../../Skeleton/GalleryImages'
import { FullMenuType } from '@/app/types/fullmenu'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    cssEase: 'ease-in-out',
    responsive: [
      { breakpoint: 1400, settings: { slidesToShow: 4 } },
      { breakpoint: 1200, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  }

  return (
    <section id="menu" className="scroll-mt-20">
      <div className="container mx-auto px-2 sm:px-6">
        {/* Header */}
        <div className="text-center">
          <p className="text-primary text-lg sm:text-xl font-normal mb-3 tracking-widest uppercase">
            Our Cakes
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8">
            Discover Our Sweet Creations
          </h2>
        </div>

        {/* Slider */}
        <div className="my-16">
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 12 }).map((_, i) => (
                <GalleryImagesSkeleton key={i} />
              ))}
            </div>
          ) : (
            <Slider {...settings}>
              {fullMenu.slice(0, 12).map((cake, index) => (
                <div key={index} className="px-2 h-full">
                  <Link
                    href={`/cakes/${createSlug(cake.name)}`}
                    className="flex flex-col h-full rounded-xl overflow-hidden group hover:-translate-y-1 transition-all duration-300"
                  >
                    {/* Image */}
                    <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-64 xl:h-72 flex-shrink-0 overflow-hidden">
                      <Image
                        src={cake.image}
                        alt={cake.name}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Content */}
                    <div className="p-4 sm:p-6 flex flex-col flex-1 justify-between">
                      <div>
                        <h2 className="text-gray-600 text-sm leading-relaxed font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                          {cake.name}
                        </h2>
                        <p className="text-gray-600 text-sm leading-relaxed font-bold">{cake.price}</p>
                      </div>

                      <div className="mt-4 flex items-center text-gray-600 text-sm leading-relaxed">
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
                </div>
              ))}
            </Slider>
          )}
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <Link
            href="/cakes"
            className="px-6 py-2 border border-primary rounded-full text-base sm:text-lg font-medium text-white bg-primary hover:bg-primary/20 hover:text-primary hover:cursor-pointer transition ease-in-out duration-300"
          >
            View All Cakes
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Gallery
