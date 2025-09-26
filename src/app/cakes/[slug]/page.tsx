'use client'
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FullMenuType } from '@/app/types/fullmenu';

export default function CakeDetailPage() {
  const params = useParams();
  const [cake, setCake] = useState<FullMenuType | null>(null);
  const [relatedCakes, setRelatedCakes] = useState<FullMenuType[]>([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  const slug = params?.slug as string;

  // Helper function to create slug from name
  const createSlug = (name: string) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  useEffect(() => {
    const fetchCakeData = async () => {
      try {
        const res = await fetch('/api/data');
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        const fullMenu: FullMenuType[] = data.FullMenuData;

        const foundCake = fullMenu.find(item => createSlug(item.name) === slug);

        if (foundCake) {
          setCake(foundCake);

          const otherCakes = fullMenu.filter(item => createSlug(item.name) !== slug);
          const shuffled = otherCakes.sort(() => 0.5 - Math.random());
          setRelatedCakes(shuffled.slice(0, 3));
        } else {
          setNotFound(true);
        }
      } catch (error) {
        console.error('Error fetching cake data:', error);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchCakeData();
    }
  }, [slug]);

  if (loading) {
    return (
      <main className="container mx-auto py-20 px-4">
        {/* Skeleton loader */}
        <div className="animate-pulse">
          <div className="h-4 bg-gray-300 rounded mb-10 mt-20 w-1/3"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gray-300 h-96 lg:h-[500px] rounded-xl"></div>
            <div className="space-y-6">
              <div className="h-10 bg-gray-300 rounded"></div>
              <div className="h-8 bg-gray-300 rounded w-1/3"></div>
              <div className="space-y-3">
                <div className="h-4 bg-gray-300 rounded"></div>
                <div className="h-4 bg-gray-300 rounded"></div>
                <div className="h-4 bg-gray-300 rounded w-2/3"></div>
              </div>
              <div className="h-12 bg-gray-300 rounded"></div>
              <div className="h-12 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (notFound || !cake) {
    return (
      <main className="container mx-auto py-20 px-4 text-center">
        <div className="max-w-md mx-auto">
          <div className="text-2xl mb-6">🍰</div>
          <h1 className="text-2xl font-bold mb-4">Oops! Cake Not Found</h1>
          <p className="text-gray-600 mb-8">
            The cake you're looking for seems to have been eaten already! 
            Don't worry, we have plenty more delicious options.
          </p>
          <div className="space-x-4">
            <Link href="/cakes" className="inline-block px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/80 transition duration-300">
              View All Cakes
            </Link>
            <Link href="/" className="inline-block px-6 py-3 border border-gray-300 text-gray-700 rounded-full hover:border-primary hover:text-primary transition duration-300">
              Go Home
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="container mx-auto py-8 px-4">
      {/* Breadcrumb */}
      <nav className="mb-12 mt-20">
        <div className="flex items-center space-x-2 text-sm">
          <Link href="/" className="text-gray-500 hover:text-primary transition duration-200">Home</Link>
          <span className="text-gray-400">/</span>
          <Link href="/cakes" className="text-gray-500 hover:text-primary transition duration-200">Cakes</Link>
          <span className="text-gray-400">/</span>
          <span className="text-primary font-medium">{cake.name}</span>
        </div>
      </nav>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch mb-16">
      {/* Image */}
      <div className="relative w-full">
        <Image
          src={cake.image}
          alt={cake.name}
          fill
          className="object-cover rounded-2xl"
          priority
        />
      </div>

      {/* Details */}
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-800">{cake.name}</h1>
          <div className="flex items-center space-x-4 mb-6">
            <p className="text-1xl lg:text-2xl font-bold text-primary">{cake.price}</p>

            {cake.rating && (
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < Math.round(cake.rating ?? 0) ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
                <span className="text-sm text-gray-500 ml-2">({cake.rating.toFixed(1)})</span>
              </div>
            )}
          </div>
        </div>

        <div className="prose max-w-none">
          <p className="text-gray-600 text-sm leading-relaxed">
            {cake.detailedDescription || cake.description}
          </p>
        </div>

        {cake.features && cake.features.length > 0 && (
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              What Makes It Special
            </h3>
            <ul className="grid grid-cols-2 gap-3 text-gray-600">
              {cake.features.map((feature, idx) => (
                <li key={idx} className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

    <div className="space-y-4">
      <button className="w-full bg-primary text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
        Call Us
      </button>
    </div>
  </div>
</div>

      {/* Related Cakes */}
      {relatedCakes.length > 0 && (
<section className="mb-20">
  <div className="text-center mb-12">
    <h2 className="text-3xl font-extrabold mb-3 text-gray-900">
      You Might Also Like
    </h2>
    <p className="text-gray-500 text-base">
      More delicious options to satisfy your sweet tooth
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {relatedCakes.map((relatedCake, index) => (
      <Link
        key={index}
        href={`/cakes/${createSlug(relatedCake.name)}`}
        className="block bg-white rounded-2xl overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative"
      >
        {/* Image Cover */}
        <div className="relative w-full h-64 overflow-hidden">
          <Image
            src={relatedCake.image}
            alt={relatedCake.name}
            fill
            className="object-cover w-full h-full rounded-t-2xl group-hover:scale-110 transition-transform duration-700"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition duration-500"></div>

          {/* Optional Badge */}
          <span className="absolute top-3 left-3 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
            New
          </span>

          {/* Title Overlay */}
          <div className="absolute bottom-3 left-3 right-3 text-white">
            <h3 className="text-lg font-semibold truncate">{relatedCake.name}</h3>
          </div>
        </div>

        {/* Details */}
        <div className="p-4">
          <p className="text-base font-bold text-primary">{relatedCake.price}</p>
        </div>
      </Link>
    ))}
  </div>
</section>


      )}
    </main>
  );
}
