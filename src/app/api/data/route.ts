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
    rating: 4.9,
    detailedDescription: "Indulge in our exquisite the secret behind our rich chocolate cake, crafted with the finest ingredients and baked to perfection by our master bakers. Each layer tells a story of flavor, creating a harmonious blend that will transport your taste buds to paradise. Perfect for celebrations, special occasions, or simply treating yourself to something extraordinary.",
    features: [
      "Fresh ingredients daily",
      "Handcrafted with love",
      "Custom sizes available",
      "Perfect for celebrations"
    ]
  },
  {
    name: "Top 5 Birthday Cake Designs of 2025",
    price: "$50.00",
    image: "/images/cake webp/items/cake icon.webp",
    description: "From classic to modern themes, here are the birthday cakes everyone is ordering this year.",
    type: "Birthday",
    rating: 4.9,
    detailedDescription: "Indulge in our exquisite top 5 birthday cake designs of 2025, crafted with the finest ingredients and baked to perfection by our master bakers. Each layer tells a story of flavor, creating a harmonious blend that will transport your taste buds to paradise. Perfect for celebrations, special occasions, or simply treating yourself to something extraordinary.",
    features: [
      "Fresh ingredients daily",
      "Handcrafted with love",
      "Custom sizes available",
      "Perfect for celebrations"
    ]
  },
  {
    name: "Why Our New York Cheesecake is a Must-Try",
    price: "$48.00",
    image: "/images/cake webp/items/cake icon.webp",
    description: "A creamy, dreamy delight—our authentic New York cheesecake melts in your mouth with every bite.",
    type: "Cheesecake",
    rating: 4.9,
    detailedDescription: "Indulge in our exquisite why our new york cheesecake is a must-try, crafted with the finest ingredients and baked to perfection by our master bakers. Each layer tells a story of flavor, creating a harmonious blend that will transport your taste buds to paradise. Perfect for celebrations, special occasions, or simply treating yourself to something extraordinary.",
    features: [
      "Fresh ingredients daily",
      "Handcrafted with love",
      "Custom sizes available",
      "Perfect for celebrations"
    ]
  },
  {
    name: "Elegant Wedding Cakes for Every Style",
    price: "$120.00",
    image: "/images/cake webp/items/cake icon.webp",
    description: "From floral details to minimal chic, see our latest wedding cake creations loved by brides and grooms.",
    type: "Wedding",
    rating: 4.9,
    detailedDescription: "Indulge in our exquisite elegant wedding cakes for every style, crafted with the finest ingredients and baked to perfection by our master bakers. Each layer tells a story of flavor, creating a harmonious blend that will transport your taste buds to paradise. Perfect for celebrations, special occasions, or simply treating yourself to something extraordinary.",
    features: [
      "Fresh ingredients daily",
      "Handcrafted with love",
      "Custom sizes available",
      "Perfect for celebrations"
    ]
  },
  {
    name: "Mini Cakes, Big Flavors: Cupcake Trends",
    price: "$30.00",
    image: "/images/cake webp/items/cake icon.webp",
    description: "Cupcakes are not just for kids anymore. Here’s what’s trending in frosting, fillings, and decoration.",
    type: "Cupcakes",
    rating: 4.9,
    detailedDescription: "Indulge in our exquisite mini cakes, big flavors: cupcake trends, crafted with the finest ingredients and baked to perfection by our master bakers. Each layer tells a story of flavor, creating a harmonious blend that will transport your taste buds to paradise. Perfect for celebrations, special occasions, or simply treating yourself to something extraordinary.",
    features: [
      "Fresh ingredients daily",
      "Handcrafted with love",
      "Custom sizes available",
      "Perfect for celebrations"
    ]
  },
  {
    name: "Delicious Vegan Chocolate Cake You’ll Love",
    price: "$47.00",
    image: "/images/cake webp/items/cake icon.webp",
    description: "Rich, moist, and completely plant-based—our vegan chocolate cake is a game-changer for dessert lovers.",
    type: "Vegan",
    rating: 4.9,
    detailedDescription: "Indulge in our exquisite delicious vegan chocolate cake you’ll love, crafted with the finest ingredients and baked to perfection by our master bakers. Each layer tells a story of flavor, creating a harmonious blend that will transport your taste buds to paradise. Perfect for celebrations, special occasions, or simply treating yourself to something extraordinary.",
    features: [
      "Fresh ingredients daily",
      "Handcrafted with love",
      "Custom sizes available",
      "Perfect for celebrations"
    ]
  },
  {
    name: "Zesty Lemon Drizzle Cake for Summer Vibes",
    price: "$42.00",
    image: "/images/cake webp/items/cake icon.webp",
    description: "Bright and tangy, our lemon drizzle cake is the perfect balance of sweet and citrusy freshness.",
    type: "Fruit",
    rating: 4.9,
    detailedDescription: "Indulge in our exquisite zesty lemon drizzle cake for summer vibes, crafted with the finest ingredients and baked to perfection by our master bakers. Each layer tells a story of flavor, creating a harmonious blend that will transport your taste buds to paradise. Perfect for celebrations, special occasions, or simply treating yourself to something extraordinary.",
    features: [
      "Fresh ingredients daily",
      "Handcrafted with love",
      "Custom sizes available",
      "Perfect for celebrations"
    ]
  },
  {
    name: "The Classic Red Velvet Cake Done Right",
    price: "$46.00",
    image: "/images/cake webp/items/cake icon.webp",
    description: "Velvety, rich, and topped with cream cheese frosting, this red velvet cake is a timeless favorite.",
    type: "Red Velvet",
    rating: 4.9,
    detailedDescription: "Indulge in our exquisite the classic red velvet cake done right, crafted with the finest ingredients and baked to perfection by our master bakers. Each layer tells a story of flavor, creating a harmonious blend that will transport your taste buds to paradise. Perfect for celebrations, special occasions, or simply treating yourself to something extraordinary.",
    features: [
      "Fresh ingredients daily",
      "Handcrafted with love",
      "Custom sizes available",
      "Perfect for celebrations"
    ]
  },
  {
    name: "Spiced Carrot Cake with a Modern Twist",
    price: "$44.00",
    image: "/images/cake webp/items/cake icon.webp",
    description: "Our carrot cake blends warm spices with a luscious cream cheese frosting for a cozy treat.",
    type: "Carrot",
    rating: 4.9,
    detailedDescription: "Indulge in our exquisite spiced carrot cake with a modern twist, crafted with the finest ingredients and baked to perfection by our master bakers. Each layer tells a story of flavor, creating a harmonious blend that will transport your taste buds to paradise. Perfect for celebrations, special occasions, or simply treating yourself to something extraordinary.",
    features: [
      "Fresh ingredients daily",
      "Handcrafted with love",
      "Custom sizes available",
      "Perfect for celebrations"
    ]
  },
  {
    name: "Gluten-Free Vanilla Dream Cake",
    price: "$48.00",
    image: "/images/cake webp/items/cake icon.webp",
    description: "Light, fluffy, and gluten-free, this vanilla cake is perfect for everyone to enjoy.",
    type: "Gluten-Free",
    rating: 4.9,
    detailedDescription: "Indulge in our exquisite gluten-free vanilla dream cake, crafted with the finest ingredients and baked to perfection by our master bakers. Each layer tells a story of flavor, creating a harmonious blend that will transport your taste buds to paradise. Perfect for celebrations, special occasions, or simply treating yourself to something extraordinary.",
    features: [
      "Fresh ingredients daily",
      "Handcrafted with love",
      "Custom sizes available",
      "Perfect for celebrations"
    ]
  },
  {
    name: "Mocha Madness: Coffee Infused Cake",
    price: "$45.00",
    image: "/images/cake webp/items/cake icon.webp",
    description: "Bold coffee flavors meet rich chocolate in this mocha cake that’s a caffeine lover’s dream.",
    type: "Coffee",
    rating: 4.9,
    detailedDescription: "Indulge in our exquisite mocha madness: coffee infused cake, crafted with the finest ingredients and baked to perfection by our master bakers. Each layer tells a story of flavor, creating a harmonious blend that will transport your taste buds to paradise. Perfect for celebrations, special occasions, or simply treating yourself to something extraordinary.",
    features: [
      "Fresh ingredients daily",
      "Handcrafted with love",
      "Custom sizes available",
      "Perfect for celebrations"
    ]
  },
  {
    name: "Tiramisu Cake: A Taste of Italy",
    price: "$50.00",
    image: "/images/cake webp/items/cake icon.webp",
    description: "Layers of coffee-soaked sponge and mascarpone cream make this tiramisu cake irresistible.",
    type: "Tiramisu",
    rating: 4.9,
    detailedDescription: "Indulge in our exquisite tiramisu cake: a taste of italy, crafted with the finest ingredients and baked to perfection by our master bakers. Each layer tells a story of flavor, creating a harmonious blend that will transport your taste buds to paradise. Perfect for celebrations, special occasions, or simply treating yourself to something extraordinary.",
    features: [
      "Fresh ingredients daily",
      "Handcrafted with love",
      "Custom sizes available",
      "Perfect for celebrations"
    ]
  },
  {
    name: "Fresh Strawberry Shortcake Delight",
    price: "$43.00",
    image: "/images/cake webp/items/cake icon.webp",
    description: "Juicy strawberries and whipped cream make this shortcake a refreshing summer favorite.",
    type: "Fruit",
    rating: 4.9,
    detailedDescription: "Indulge in our exquisite fresh strawberry shortcake delight, crafted with the finest ingredients and baked to perfection by our master bakers. Each layer tells a story of flavor, creating a harmonious blend that will transport your taste buds to paradise. Perfect for celebrations, special occasions, or simply treating yourself to something extraordinary.",
    features: [
      "Fresh ingredients daily",
      "Handcrafted with love",
      "Custom sizes available",
      "Perfect for celebrations"
    ]
  },
  {
    name: "Green Tea Matcha Cake for Zen Moments",
    price: "$46.00",
    image: "/images/cake webp/items/cake icon.webp",
    description: "Earthy matcha flavors in a light, fluffy cake, perfect for a calming dessert break.",
    type: "Matcha",
    rating: 4.9,
    detailedDescription: "Indulge in our exquisite green tea matcha cake for zen moments, crafted with the finest ingredients and baked to perfection by our master bakers. Each layer tells a story of flavor, creating a harmonious blend that will transport your taste buds to paradise. Perfect for celebrations, special occasions, or simply treating yourself to something extraordinary.",
    features: [
      "Fresh ingredients daily",
      "Handcrafted with love",
      "Custom sizes available",
      "Perfect for celebrations"
    ]
  },
  {
    name: "Romantic Rose-Themed Wedding Cake",
    price: "$130.00",
    image: "/images/cake webp/items/cake icon.webp",
    description: "Delicate rose designs and soft flavors make this wedding cake a romantic centerpiece.",
    type: "Wedding",
    rating: 4.9,
    detailedDescription: "Indulge in our exquisite romantic rose-themed wedding cake, crafted with the finest ingredients and baked to perfection by our master bakers. Each layer tells a story of flavor, creating a harmonious blend that will transport your taste buds to paradise. Perfect for celebrations, special occasions, or simply treating yourself to something extraordinary.",
    features: [
      "Fresh ingredients daily",
      "Handcrafted with love",
      "Custom sizes available",
      "Perfect for celebrations"
    ]
  },
  {
    name: "Triple Chocolate Decadence Cake",
    price: "$49.00",
    image: "/images/cake webp/items/cake icon.webp",
    description: "Three layers of chocolate bliss—cake, ganache, and mousse—for the ultimate chocoholic.",
    type: "Chocolate",
    rating: 4.9,
    detailedDescription: "Indulge in our exquisite triple chocolate decadence cake, crafted with the finest ingredients and baked to perfection by our master bakers. Each layer tells a story of flavor, creating a harmonious blend that will transport your taste buds to paradise. Perfect for celebrations, special occasions, or simply treating yourself to something extraordinary.",
    features: [
      "Fresh ingredients daily",
      "Handcrafted with love",
      "Custom sizes available",
      "Perfect for celebrations"
    ]
  },
  {
    name: "Unicorn Fantasy Birthday Cake",
    price: "$55.00",
    image: "/images/cake webp/items/cake icon.webp",
    description: "A magical unicorn-themed cake with vibrant colors and sparkly decorations for kids and adults alike.",
    type: "Birthday",
    rating: 4.9,
    detailedDescription: "Indulge in our exquisite unicorn fantasy birthday cake, crafted with the finest ingredients and baked to perfection by our master bakers. Each layer tells a story of flavor, creating a harmonious blend that will transport your taste buds to paradise. Perfect for celebrations, special occasions, or simply treating yourself to something extraordinary.",
    features: [
      "Fresh ingredients daily",
      "Handcrafted with love",
      "Custom sizes available",
      "Perfect for celebrations"
    ]
  },
  {
    name: "Mango Passionfruit Summer Cake",
    price: "$44.00",
    image: "/images/cake webp/items/cake icon.webp",
    description: "Tropical mango and passionfruit flavors bring a burst of sunshine to every slice.",
    type: "Fruit",
    rating: 4.9,
    detailedDescription: "Indulge in our exquisite mango passionfruit summer cake, crafted with the finest ingredients and baked to perfection by our master bakers. Each layer tells a story of flavor, creating a harmonious blend that will transport your taste buds to paradise. Perfect for celebrations, special occasions, or simply treating yourself to something extraordinary.",
    features: [
      "Fresh ingredients daily",
      "Handcrafted with love",
      "Custom sizes available",
      "Perfect for celebrations"
    ]
  },
  {
    name: "Blueberry Swirl Cheesecake Bliss",
    price: "$48.00",
    image: "/images/cake webp/items/cake icon.webp",
    description: "Creamy cheesecake with vibrant blueberry swirls, a perfect balance of sweet and tart.",
    type: "Cheesecake",
    rating: 4.9,
    detailedDescription: "Indulge in our exquisite blueberry swirl cheesecake bliss, crafted with the finest ingredients and baked to perfection by our master bakers. Each layer tells a story of flavor, creating a harmonious blend that will transport your taste buds to paradise. Perfect for celebrations, special occasions, or simply treating yourself to something extraordinary.",
    features: [
      "Fresh ingredients daily",
      "Handcrafted with love",
      "Custom sizes available",
      "Perfect for celebrations"
    ]
  },
  {
    name: "Salted Caramel Cupcake Sensation",
    price: "$32.00",
    image: "/images/cake webp/items/cake icon.webp",
    description: "Rich caramel and a hint of sea salt make these cupcakes an addictive treat.",
    type: "Cupcakes",
    rating: 4.9,
    detailedDescription: "Indulge in our exquisite salted caramel cupcake sensation, crafted with the finest ingredients and baked to perfection by our master bakers. Each layer tells a story of flavor, creating a harmonious blend that will transport your taste buds to paradise. Perfect for celebrations, special occasions, or simply treating yourself to something extraordinary.",
    features: [
      "Fresh ingredients daily",
      "Handcrafted with love",
      "Custom sizes available",
      "Perfect for celebrations"
    ]
  },
  {
    name: "Vegan Coconut Raspberry Cake",
    price: "$47.00",
    image: "/images/cake webp/items/cake icon.webp",
    description: "Tropical coconut paired with tart raspberries in a vegan cake that’s pure heaven.",
    type: "Vegan",
    rating: 4.9,
    detailedDescription: "Indulge in our exquisite vegan coconut raspberry cake, crafted with the finest ingredients and baked to perfection by our master bakers. Each layer tells a story of flavor, creating a harmonious blend that will transport your taste buds to paradise. Perfect for celebrations, special occasions, or simply treating yourself to something extraordinary.",
    features: [
      "Fresh ingredients daily",
      "Handcrafted with love",
      "Custom sizes available",
      "Perfect for celebrations"
    ]
  },
  {
    name: "Hazelnut Chocolate Crunch Cake",
    price: "$46.00",
    image: "/images/cake webp/items/cake icon.webp",
    description: "Crunchy hazelnuts and smooth chocolate create a delightful texture in every bite.",
    type: "Chocolate",
    rating: 4.9,
    detailedDescription: "Indulge in our exquisite hazelnut chocolate crunch cake, crafted with the finest ingredients and baked to perfection by our master bakers. Each layer tells a story of flavor, creating a harmonious blend that will transport your taste buds to paradise. Perfect for celebrations, special occasions, or simply treating yourself to something extraordinary.",
    features: [
      "Fresh ingredients daily",
      "Handcrafted with love",
      "Custom sizes available",
      "Perfect for celebrations"
    ]
  },
  {
    name: "Gold-Dusted Minimalist Wedding Cake",
    price: "$125.00",
    image: "/images/cake webp/items/cake icon.webp",
    description: "Sleek and modern, this gold-dusted cake is perfect for a sophisticated wedding.",
    type: "Wedding",
    rating: 4.9,
    detailedDescription: "Indulge in our exquisite gold-dusted minimalist wedding cake, crafted with the finest ingredients and baked to perfection by our master bakers. Each layer tells a story of flavor, creating a harmonious blend that will transport your taste buds to paradise. Perfect for celebrations, special occasions, or simply treating yourself to something extraordinary.",
    features: [
      "Fresh ingredients daily",
      "Handcrafted with love",
      "Custom sizes available",
      "Perfect for celebrations"
    ]
  },
  {
    name: "Nut-Free Carrot Cake Delight",
    price: "$44.00",
    image: "/images/cake webp/items/cake icon.webp",
    description: "All the spiced goodness of carrot cake, made nut-free for everyone to enjoy.",
    type: "Carrot",
    rating: 4.9,
    detailedDescription: "Indulge in our exquisite nut-free carrot cake delight, crafted with the finest ingredients and baked to perfection by our master bakers. Each layer tells a story of flavor, creating a harmonious blend that will transport your taste buds to paradise. Perfect for celebrations, special occasions, or simply treating yourself to something extraordinary.",
    features: [
      "Fresh ingredients daily",
      "Handcrafted with love",
      "Custom sizes available",
      "Perfect for celebrations"
    ]
  },
  {
    name: "Peach Cobbler-Inspired Cake",
    price: "$43.00",
    image: "/images/cake webp/items/cake icon.webp",
    description: "Juicy peaches and a buttery crumb topping make this cake a Southern-inspired treat.",
    type: "Fruit",
    rating: 4.9,
    detailedDescription: "Indulge in our exquisite peach cobbler-inspired cake, crafted with the finest ingredients and baked to perfection by our master bakers. Each layer tells a story of flavor, creating a harmonious blend that will transport your taste buds to paradise. Perfect for celebrations, special occasions, or simply treating yourself to something extraordinary.",
    features: [
      "Fresh ingredients daily",
      "Handcrafted with love",
      "Custom sizes available",
      "Perfect for celebrations"
    ]
  },
  {
    name: "Gluten-Free Chocolate Fudge Cake",
    price: "$48.00",
    image: "/images/cake webp/items/cake icon.webp",
    description: "Decadent chocolate fudge cake, gluten-free and packed with rich flavor.",
    type: "Gluten-Free",
    rating: 4.9,
    detailedDescription: "Indulge in our exquisite gluten-free chocolate fudge cake, crafted with the finest ingredients and baked to perfection by our master bakers. Each layer tells a story of flavor, creating a harmonious blend that will transport your taste buds to paradise. Perfect for celebrations, special occasions, or simply treating yourself to something extraordinary.",
    features: [
      "Fresh ingredients daily",
      "Handcrafted with love",
      "Custom sizes available",
      "Perfect for celebrations"
    ]
  },
  {
    name: "Rainbow Layer Birthday Cake",
    price: "$52.00",
    image: "/images/cake webp/items/cake icon.webp",
    description: "Vibrant layers of cake with creamy frosting, perfect for a festive birthday bash.",
    type: "Birthday",
    rating: 4.9,
    detailedDescription: "Indulge in our exquisite rainbow layer birthday cake, crafted with the finest ingredients and baked to perfection by our master bakers. Each layer tells a story of flavor, creating a harmonious blend that will transport your taste buds to paradise. Perfect for celebrations, special occasions, or simply treating yourself to something extraordinary.",
    features: [
      "Fresh ingredients daily",
      "Handcrafted with love",
      "Custom sizes available",
      "Perfect for celebrations"
    ]
  },
  {
    name: "Salted Caramel Cheesecake Heaven",
    price: "$49.00",
    image: "/images/cake webp/items/cake icon.webp",
    description: "Smooth cheesecake with a luscious salted caramel topping for a decadent treat.",
    type: "Cheesecake",
    rating: 4.9,
    detailedDescription: "Indulge in our exquisite salted caramel cheesecake heaven, crafted with the finest ingredients and baked to perfection by our master bakers. Each layer tells a story of flavor, creating a harmonious blend that will transport your taste buds to paradise. Perfect for celebrations, special occasions, or simply treating yourself to something extraordinary.",
    features: [
      "Fresh ingredients daily",
      "Handcrafted with love",
      "Custom sizes available",
      "Perfect for celebrations"
    ]
  },
  {
    name: "Cookies and Cream Cupcake Craze",
    price: "$31.00",
    image: "/images/cake webp/items/cake icon.webp",
    description: "Crushed cookies mixed into creamy frosting make these cupcakes a fan favorite.",
    type: "Cupcakes",
    rating: 4.9,
    detailedDescription: "Indulge in our exquisite cookies and cream cupcake craze, crafted with the finest ingredients and baked to perfection by our master bakers. Each layer tells a story of flavor, creating a harmonious blend that will transport your taste buds to paradise. Perfect for celebrations, special occasions, or simply treating yourself to something extraordinary.",
    features: [
      "Fresh ingredients daily",
      "Handcrafted with love",
      "Custom sizes available",
      "Perfect for celebrations"
    ]
  },
  {
    name: "Vegan Lemon Poppyseed Cake",
    price: "$46.00",
    image: "/images/cake webp/items/cake icon.webp",
    description: "Zesty lemon and crunchy poppyseeds in a vegan cake that’s light and refreshing.",
    type: "Vegan",
    rating: 4.9,
    detailedDescription: "Indulge in our exquisite vegan lemon poppyseed cake, crafted with the finest ingredients and baked to perfection by our master bakers. Each layer tells a story of flavor, creating a harmonious blend that will transport your taste buds to paradise. Perfect for celebrations, special occasions, or simply treating yourself to something extraordinary.",
    features: [
      "Fresh ingredients daily",
      "Handcrafted with love",
      "Custom sizes available",
      "Perfect for celebrations"
    ]
  },
  {
    name: "Mint Chocolate Chip Cake",
    price: "$45.00",
    image: "/images/cake webp/items/cake icon.webp",
    description: "Cool mint and chocolate chips in a cake that’s refreshing and indulgent.",
    type: "Chocolate",
    rating: 4.9,
    detailedDescription: "Indulge in our exquisite mint chocolate chip cake, crafted with the finest ingredients and baked to perfection by our master bakers. Each layer tells a story of flavor, creating a harmonious blend that will transport your taste buds to paradise. Perfect for celebrations, special occasions, or simply treating yourself to something extraordinary.",
    features: [
      "Fresh ingredients daily",
      "Handcrafted with love",
      "Custom sizes available",
      "Perfect for celebrations"
    ]
  },
  {
    name: "Rustic Naked Wedding Cake",
    price: "$115.00",
    image: "/images/cake webp/items/cake icon.webp",
    description: "A rustic, barely-frosted cake with fresh berries, perfect for an outdoor wedding.",
    type: "Wedding",
    rating: 4.9,
    detailedDescription: "Indulge in our exquisite rustic naked wedding cake, crafted with the finest ingredients and baked to perfection by our master bakers. Each layer tells a story of flavor, creating a harmonious blend that will transport your taste buds to paradise. Perfect for celebrations, special occasions, or simply treating yourself to something extraordinary.",
    features: [
      "Fresh ingredients daily",
      "Handcrafted with love",
      "Custom sizes available",
      "Perfect for celebrations"
    ]
  },
  {
    name: "Pineapple Upside-Down Cake Classic",
    price: "$42.00",
    image: "/images/cake webp/items/cake icon.webp",
    description: "Caramelized pineapple rings atop a buttery cake, a nostalgic dessert favorite.",
    type: "Fruit",
    rating: 4.9,
    detailedDescription: "Indulge in our exquisite pineapple upside-down cake classic, crafted with the finest ingredients and baked to perfection by our master bakers. Each layer tells a story of flavor, creating a harmonious blend that will transport your taste buds to paradise. Perfect for celebrations, special occasions, or simply treating yourself to something extraordinary.",
    features: [
      "Fresh ingredients daily",
      "Handcrafted with love",
      "Custom sizes available",
      "Perfect for celebrations"
    ]
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
