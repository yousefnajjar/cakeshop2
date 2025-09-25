'use client'
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FullMenuType } from "@/app/types/fullmenu";

export default function CakesPage() {
  const [fullMenu, setFullMenu] = useState<FullMenuType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data');
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        setFullMenu(data.FullMenuData);
      } catch (error) {
        console.error('Error fetching menu:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Helper function to create URL-friendly slug from cake name
  const createSlug = (name: string) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '') // Remove special characters
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+/g, '-') // Replace multiple hyphens with single
      .trim(); // Remove leading/trailing spaces
  };

  if (loading) {
    return (
      <main className="container mx-auto py-20 px-4">
        <div className="text-center mb-10">
          <p className="text-primary text-lg tracking-widest uppercase mb-2">
            Our Cakes
          </p>
          <h1 className="text-4xl font-bold">Explore All Our Creations</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="bg-gray-300 h-64 rounded-xl mb-4"></div>
              <div className="p-6">
                <div className="h-6 bg-gray-300 rounded mb-3"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      </main>
    );
  }

  return (
    <main className="container mx-auto py-20 px-4">
      <div className="text-center mb-10">
        <p className="text-primary text-lg tracking-widest uppercase mb-2">
          Our Cakes
        </p>
        <h1 className="text-4xl font-bold mb-4">Explore All Our Creations</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover our complete collection of handcrafted cakes, each made with premium ingredients and endless love.
        </p>
      </div>

      {fullMenu.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-xl text-gray-500">No cakes available at the moment.</p>
          <Link 
            href="/" 
            className="mt-4 inline-block px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/80 transition duration-300"
          >
            Back to Home
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {fullMenu.map((cake, index) => (
            <Link
              key={index}
              href={`/cakes/${createSlug(cake.name)}`}
              className="block bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Back to Home */}
      <div className="text-center mt-16">
        <Link
          href="/"
          className="inline-flex items-center px-8 py-3 border border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-all duration-300 font-medium"
        >
          <svg 
            className="w-5 h-5 mr-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>
      </div>
    </main>
  );
}