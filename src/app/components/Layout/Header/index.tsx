'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import Logo from './Logo'
import HeaderLink from './Navigation/HeaderLink'
import MobileHeaderLink from './Navigation/MobileHeaderLink'
import { Icon } from '@iconify/react/dist/iconify.js'
import { HeaderItem } from '@/app/types/menu'

const Header: React.FC = () => {
  const [headerLink, setHeaderLink] = useState<HeaderItem[]>([])

  const [navbarOpen, setNavbarOpen] = useState(false)
  const [sticky, setSticky] = useState(false)

  const mobileMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setHeaderLink(data.HeaderData)
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }
    fetchData()
  }, [])

  const handleScroll = () => {
    setSticky(window.scrollY >= 20)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target as Node) &&
      navbarOpen
    ) {
      setNavbarOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [navbarOpen])

  useEffect(() => {
    if (navbarOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [navbarOpen])

  return (
    <header
      className={`fixed top-0 z-40 py-4 w-full transition-all duration-300 ${
        sticky ? 'shadow-lg bg-white' : 'shadow-none'
      }`}>
      <div>
        <div className='container flex items-center justify-between'>
  <div>
    <Logo />
  </div>

  {/* Desktop nav */}
  <nav className='hidden lg:flex grow items-center gap-4 xl:gap-6 justify-center'>
    {headerLink.map((item, index) => (
      <HeaderLink key={index} item={item} />
    ))}
  </nav>

  {/* Call & Email */}
  <div className='flex items-center gap-6'> {/* gap adds space between phone & email */}
    <Link
      href="tel:+19092359814"
      className='text-lg font-medium hover:text-primary hidden xl:flex items-center'
    >
      <Icon
        icon='solar:phone-bold'
        className='text-primary text-3xl lg:text-2xl inline-block me-2'
      />
      +1(909) 235-9814
    </Link>

    <Link
      href="mailto:info@gmail.com"
      className='text-lg font-medium hover:text-primary hidden xl:flex items-center'
      aria-label='Send email to info@gmail.com'
    >
      <Icon
        icon='solar:mailbox-bold'
        className='text-primary text-3xl lg:text-2xl inline-block me-2'
      />
      info@gmail.com
    </Link>

    {/* Mobile menu toggle */}
    <button
      onClick={() => setNavbarOpen(!navbarOpen)}
      className='block lg:hidden p-2 rounded-lg'
      aria-label='Toggle mobile menu'
    >
      <span className='block w-6 h-0.5 bg-black'></span>
      <span className='block w-6 h-0.5 bg-black mt-1.5'></span>
      <span className='block w-6 h-0.5 bg-black mt-1.5'></span>
    </button>
  </div>
</div>

        {navbarOpen && (
          <div className='fixed top-0 left-0 w-full h-full bg-black/50 z-40' />
        )}
        <div
          ref={mobileMenuRef}
          className={`lg:hidden fixed top-0 right-0 h-full w-full bg-white shadow-lg transform transition-transform duration-300 max-w-xs ${
            navbarOpen ? 'translate-x-0' : 'translate-x-full'
          } z-50`}>
          <div className='flex items-center justify-between gap-2 p-4'>
            <div>
              <Logo />
            </div>
            {/*  */}
            <button
              onClick={() => setNavbarOpen(false)}
              className="hover:cursor-pointer"
              aria-label='Close menu Modal'>
              <Icon
                icon='material-symbols:close-rounded'
                width={24}
                height={24}
                className='text-black hover:text-primary text-24 inline-block me-2'
              />
            </button>
          </div>
          <Link
             href="tel:+19092359814"
            className='text-lg font-medium hover:text-primary block md:hidden mt-6 p-4'>
            <Icon
              icon='solar:phone-bold'
              className='text-primary text-3xl lg:text-2xl inline-block me-2'
            />
            +1(909) 235-9814
          </Link>

         <Link
            href="mailto:info@gmail.com"
            className='text-lg font-medium hover:text-primary block md:hidden pt-0 px-4 pb-4'>
            <Icon
              icon='solar:mailbox-bold'
              className='text-primary text-3xl lg:text-2xl inline-block me-2'
            />
            info@gmail.com
        </Link>

          <nav className='flex flex-col items-start p-4'>
            {headerLink.map((item, index) => (
              <MobileHeaderLink key={index} item={item} />
            ))}
      
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
