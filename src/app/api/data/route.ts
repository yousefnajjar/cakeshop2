import { NextResponse } from 'next/server'

import { HeaderItem } from '@/app/types/menu'
import { FeaturesType } from '@/app/types/features'
import { GalleryImagesType } from '@/app/types/galleryimage'
import { FooterLinkType } from '@/app/types/footerlink'
import { FullMenuType } from '@/app/types/fullmenu'

const HeaderData: HeaderItem[] = [
  { label: 'About Us', href: '/#aboutus' },
  { label: 'Menu', href: '/#menu' },
]

const FeaturesData: FeaturesType[] = [
  {
    imgSrc: '/images/Features/featureOne.svg',
    heading: 'Elegant Dining Atmosphere',
    subheading:
      'Enjoy a warm, refined space perfect for intimate dinners or small group gatherings.',
  },
  {
    imgSrc: '/images/Features/featureThree.svg',
    heading: 'Signature Chef Creations',
    subheading:
      'Taste one-of-a-kind dishes crafted with passion by our top culinary team.',
  },
  {
    imgSrc: '/images/Features/featureTwo.svg',
    heading: 'Fresh, Local Ingredients',
    subheading:
      'We use locally sourced goods daily for unmatched taste and quality.',
  },
  {
    imgSrc: '/images/Features/featureFour.svg',
    heading: 'Hassle-Free Reservations',
    subheading:
      'Reserve online in seconds or walk in anytime — we’re ready when you are.',
  }
]


const GalleryImagesData: GalleryImagesType[] = [
  {
    src: '/images/Gallery/foodone.webp',
    name: 'Caesar Salad(187 Kcal)',
    price: 35,
  },
  {
    src: '/images/Gallery/foodtwo.webp',
    name: 'Christmas salad(118 Kcal)',
    price: 17,
  },
  {
    src: '/images/Gallery/foodthree.webp',
    name: 'Sauteed mushrooms with pumpkin bowl(238 kcal)',
    price: 45,
  },
  {
    src: '/images/Gallery/foodfour.webp',
    name: 'BBQ Chicken Feast Pizza(272 kcal)',
    price: 27,
  },
]


const FooterLinkData: FooterLinkType[] = [
  {
    section: 'Company',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About Us', href: '/#aboutus' },
      { label: 'Menu', href: '/#menu' },
      { label: 'Reserve Table', href: '/#reserve' },
    ],
  },
  {
    section: 'Support',
    links: [
      { label: 'Help/FAQ', href: '/' },
      { label: 'Press', href: '/' },
      { label: 'Affiliates', href: '/' },
      { label: 'Hotel owners', href: '/' },
      { label: 'Partners', href: '/' },
    ],
  },
]


 const FullMenuData: FullMenuType[] = [
  {
    name: "The Secret Behind Our Rich Chocolate Cake",
    price: "$45.00",
    image: "/images/cake webp/items/cake icon.webp",
    description: "Discover how we make the most indulgent chocolate cake with premium cocoa and silky ganache frosting.",
    type: "Chocolate",
  },
  {
    name: "Top 5 Birthday Cake Designs of 2025",
    price: "$50.00",
    image: "/images/cake webp/items/cake icon.webp",
    description: "From classic to modern themes, here are the birthday cakes everyone is ordering this year.",
    type: "Birthday",
  },
  {
    name: "Why Our New York Cheesecake is a Must-Try",
    price: "$48.00",
    image: "/images/cake webp/items/cake icon.webp",
    description: "A creamy, dreamy delight—our authentic New York cheesecake melts in your mouth with every bite.",
    type: "Cheesecake",
  },
  {
    name: "Elegant Wedding Cakes for Every Style",
    price: "$120.00",
    image: "/images/cake webp/items/cake icon.webp",
    description: "From floral details to minimal chic, see our latest wedding cake creations loved by brides and grooms.",
    type: "Wedding",
  },
  {
    name: "Mini Cakes, Big Flavors: Cupcake Trends",
    price: "$30.00",
    image: "/images/cake webp/items/cake icon.webp",
    description: "Cupcakes are not just for kids anymore. Here’s what’s trending in frosting, fillings, and decoration.",
    type: "Cupcakes",
  },
  {
    name: "Delicious Vegan Chocolate Cake You’ll Love",
    price: "$47.00",
    image: "/images/cake webp/items/cake icon.webp",
    description: "Rich, moist, and completely plant-based—our vegan chocolate cake is a game-changer for dessert lovers.",
    type: "Vegan",
  },
  {
    name: "Zesty Lemon Drizzle Cake for Summer Vibes",
    price: "$42.00",
    image: "/images/cake webp/items/cake icon.webp",
    description: "Bright and tangy, our lemon drizzle cake is the perfect balance of sweet and citrusy freshness.",
    type: "Fruit",
  },
  {
    name: "The Classic Red Velvet Cake Done Right",
    price: "$46.00",
    image: "/images/cake webp/items/cake icon.webp",
    description: "Velvety, rich, and topped with cream cheese frosting, this red velvet cake is a timeless favorite.",
    type: "Red Velvet",
  },
  {
    name: "Spiced Carrot Cake with a Modern Twist",
    price: "$44.00",
    image: "/images/cake webp/items/cake icon.webp",
    description: "Our carrot cake blends warm spices with a luscious cream cheese frosting for a cozy treat.",
    type: "Carrot",
  },
  {
    name: "Gluten-Free Vanilla Dream Cake",
    price: "$48.00",
    image: "/images/cake webp/items/cake icon.webp",
    description: "Light, fluffy, and gluten-free, this vanilla cake is perfect for everyone to enjoy.",
    type: "Gluten-Free",
  },
  {
    name: "Mocha Madness: Coffee Infused Cake",
    price: "$45.00",
    image: "/images/cake webp/items/cake icon.webp",
    description: "Bold coffee flavors meet rich chocolate in this mocha cake that’s a caffeine lover’s dream.",
    type: "Coffee",
  },
  {
    name: "Tiramisu Cake: A Taste of Italy",
    price: "$50.00",
    image: "/images/cake webp/items/cake icon.webp",
    description: "Layers of coffee-soaked sponge and mascarpone cream make this tiramisu cake irresistible.",
    type: "Tiramisu",
  },
  {
    name: "Fresh Strawberry Shortcake Delight",
    price: "$43.00",
    image: "/images/cake webp/items/cake icon.webp",
    description: "Juicy strawberries and whipped cream make this shortcake a refreshing summer favorite.",
    type: "Fruit",
  },
  {
    name: "Green Tea Matcha Cake for Zen Moments",
    price: "$46.00",
    image: "/images/cake webp/items/cake icon.webp",
    description: "Earthy matcha flavors in a light, fluffy cake, perfect for a calming dessert break.",
    type: "Matcha",
  },
  {
    name: "Romantic Rose-Themed Wedding Cake",
    price: "$130.00",
    image: "/images/cake webp/items/cake icon.webp",
    description: "Delicate rose designs and soft flavors make this wedding cake a romantic centerpiece.",
    type: "Wedding",
  },
  {
    name: "Triple Chocolate Decadence Cake",
    price: "$49.00",
    image: "/images/cake webp/items/cake icon.webp",
    description: "Three layers of chocolate bliss—cake, ganache, and mousse—for the ultimate chocoholic.",
    type: "Chocolate",
  },
  {
    name: "Unicorn Fantasy Birthday Cake",
    price: "$55.00",
    image: "/images/cake webp/items/cake icon.webp",
    description: "A magical unicorn-themed cake with vibrant colors and sparkly decorations for kids and adults alike.",
    type: "Birthday",
  },
  {
    name: "Mango Passionfruit Summer Cake",
    price: "$44.00",
    image: "/images/cake webp/items/cake icon.webp",
    description: "Tropical mango and passionfruit flavors bring a burst of sunshine to every slice.",
    type: "Fruit",
  },
  {
    name: "Blueberry Swirl Cheesecake Bliss",
    price: "$48.00",
    image: "/images/cake webp/items/cake icon.webp",
    description: "Creamy cheesecake with vibrant blueberry swirls, a perfect balance of sweet and tart.",
    type: "Cheesecake",
  },
  {
    name: "Salted Caramel Cupcake Sensation",
    price: "$32.00",
    image: "/images/cake webp/items/cake icon.webp",
    description: "Rich caramel and a hint of sea salt make these cupcakes an addictive treat.",
    type: "Cupcakes",
  },
  {
    name: "Vegan Coconut Raspberry Cake",
    price: "$47.00",
    image: "/images/cake webp/items/cake icon.webp",
    description: "Tropical coconut paired with tart raspberries in a vegan cake that’s pure heaven.",
    type: "Vegan",
  },
  {
    name: "Hazelnut Chocolate Crunch Cake",
    price: "$46.00",
    image: "/images/cake webp/items/cake icon.webp",
    description: "Crunchy hazelnuts and smooth chocolate create a delightful texture in every bite.",
    type: "Chocolate",
  },
  {
    name: "Gold-Dusted Minimalist Wedding Cake",
    price: "$125.00",
    image: "/images/cake webp/items/cake icon.webp",
    description: "Sleek and modern, this gold-dusted cake is perfect for a sophisticated wedding.",
    type: "Wedding",
  },
  {
    name: "Nut-Free Carrot Cake Delight",
    price: "$44.00",
    image: "/images/cake webp/items/cake icon.webp",
    description: "All the spiced goodness of carrot cake, made nut-free for everyone to enjoy.",
    type: "Carrot",
  },
  {
    name: "Peach Cobbler-Inspired Cake",
    price: "$43.00",
    image: "/images/cake webp/items/cake icon.webp",
    description: "Juicy peaches and a buttery crumb topping make this cake a Southern-inspired treat.",
    type: "Fruit",
  },
  {
    name: "Gluten-Free Chocolate Fudge Cake",
    price: "$48.00",
    image: "/images/cake webp/items/cake icon.webp",
    description: "Decadent chocolate fudge cake, gluten-free and packed with rich flavor.",
    type: "Gluten-Free",
  },
  {
    name: "Rainbow Layer Birthday Cake",
    price: "$52.00",
    image: "/images/cake webp/items/cake icon.webp",
    description: "Vibrant layers of cake with creamy frosting, perfect for a festive birthday bash.",
    type: "Birthday",
  },
  {
    name: "Salted Caramel Cheesecake Heaven",
    price: "$49.00",
    image: "/images/cake webp/items/cake icon.webp",
    description: "Smooth cheesecake with a luscious salted caramel topping for a decadent treat.",
    type: "Cheesecake",
  },
  {
    name: "Cookies and Cream Cupcake Craze",
    price: "$31.00",
    image: "/images/cake webp/items/cake icon.webp",
    description: "Crushed cookies mixed into creamy frosting make these cupcakes a fan favorite.",
    type: "Cupcakes",
  },
  {
    name: "Vegan Lemon Poppyseed Cake",
    price: "$46.00",
    image: "/images/cake webp/items/cake icon.webp",
    description: "Zesty lemon and crunchy poppyseeds in a vegan cake that’s light and refreshing.",
    type: "Vegan",
  },
  {
    name: "Mint Chocolate Chip Cake",
    price: "$45.00",
    image: "/images/cake webp/items/cake icon.webp",
    description: "Cool mint and chocolate chips in a cake that’s refreshing and indulgent.",
    type: "Chocolate",
  },
  {
    name: "Rustic Naked Wedding Cake",
    price: "$115.00",
    image: "/images/cake webp/items/cake icon.webp",
    description: "A rustic, barely-frosted cake with fresh berries, perfect for an outdoor wedding.",
    type: "Wedding",
  },
  {
    name: "Pineapple Upside-Down Cake Classic",
    price: "$42.00",
    image: "/images/cake webp/items/cake icon.webp",
    description: "Caramelized pineapple rings atop a buttery cake, a nostalgic dessert favorite.",
    type: "Fruit",
  },
];


export const GET = () => {
  return NextResponse.json({
    HeaderData,
    FeaturesData,
    GalleryImagesData,
    FullMenuData,
    FooterLinkData,
  })
}
