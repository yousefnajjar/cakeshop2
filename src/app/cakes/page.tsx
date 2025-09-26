'use client'
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FullMenuType } from "@/app/types/fullmenu";

export default function CakesPage() {
  const [fullMenu, setFullMenu] = useState<FullMenuType[]>([]);
  const [loading, setLoading] = useState(true);

  // filters
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | "">("");
  const [filterType, setFilterType] = useState<string>("");
  const [filterName, setFilterName] = useState<string>("");
  const resetFilters = () => {
    setFilterType("");
    setFilterName("");
    setSortOrder("");
  };
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

  // Helper: slug for cake URL
  const createSlug = (name: string) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  // Distinct types for filter dropdown
  const cakeTypes = Array.from(new Set(fullMenu.map(cake => cake.type).filter(Boolean)));

  // Derived filtered + sorted list
  const filteredMenu = fullMenu
    .filter(cake =>
      filterType ? cake.type?.toLowerCase() === filterType.toLowerCase() : true
    )
    .filter(cake =>
      filterName ? cake.name.toLowerCase().includes(filterName.toLowerCase()) : true
    )
    .sort((a, b) => {
      const priceA = parseFloat(a.price.toString().replace(/[^0-9.]/g, ""));
      const priceB = parseFloat(b.price.toString().replace(/[^0-9.]/g, ""));

      if (sortOrder === "asc") return priceA - priceB;
      if (sortOrder === "desc") return priceB - priceA;
      return 0;
    });

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
      {/* Header */}
      <div className="text-center mb-10">
        <p className="text-primary text-lg tracking-widest uppercase mb-2">
          Our Cakes
        </p>
        <h1 className="text-4xl font-bold mb-4">Explore All Our Creations</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover our complete collection of handcrafted cakes, each made with premium ingredients and endless love.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
        {/* Search by name */}
        <input
          type="text"
          placeholder="Search by name..."
          value={filterName}
          onChange={(e) => setFilterName(e.target.value)}
          className="border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        />

        {/* Filter by type */}
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="">All Types</option>
          {cakeTypes.map((type, idx) => (
            <option key={idx} value={type!}>
              {type}
            </option>
          ))}
        </select>

        {/* Sort by price */}
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value as "asc" | "desc" | "")}
          className="border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="">Sort by Price</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
  
  {/* Reset button */}
<button
    onClick={resetFilters}
    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition duration-300 text-sm"
  >
    Reset Filters
  </button>

      </div>

      {/* Cake grid */}
      {filteredMenu.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-xl text-gray-500">No cakes match your filters.</p>
          <Link 
            href="/" 
            className="mt-4 inline-block px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/80 transition duration-300"
          >
            Back to Home
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredMenu.map((cake, index) => (
            <Link
              key={index}
              href={`/cakes/${createSlug(cake.name)}`}
              className="flex flex-col bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
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
                  <p className="text-gray-600 text-sm leading-relaxed font-bold">
                    ${cake.price}
                  </p>
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
