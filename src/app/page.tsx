import React from 'react'
import Hero from '@/app/components/Home/Hero'
import Features from '@/app/components/Home/Features'
import Cook from '@/app/components/Home/Cook'
import Gallery from '@/app/components/Home/Gallery'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Kitchen',
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Gallery />
      <Features />
      <Cook />
    </main>
  )
}
