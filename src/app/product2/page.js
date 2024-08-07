'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

const product = {
  name: 'Actual Bay Valley Tech Light Bulb!',
  price: '179.99',
  href: '#',
  images: [
    {
      src: 'https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-6/352217654_6317002281698799_670870340879095555_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=piDvIbaDQacQ7kNvgHpgs7o&_nc_ht=scontent-sjc3-1.xx&oh=00_AYCUQyxAmK30MbN6H3BfIHk5Q2BrmB8yGY0GClclQgL0fQ&oe=66B9A97C',
      alt: 'The Bay Valley Tech Light Bulb.',
    },
  ],
  description:
    'The iconic BVT light bulb can come to your homes!',
  highlights: [
    'Bright',
    'Sense of community',
  ]
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [cart, setCart] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const handleAddToCart = () => {
    const savedCart = localStorage.getItem('cart');
    const existingCart = savedCart ? JSON.parse(savedCart) : [];
    const newCart = [...existingCart, product];
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
    router.push('/cart'); // Redirect to the shopping cart page
  }

  return (
    <div className="bg-white">
      <div className="pt-6">

        {/* Image */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            <img
              alt={product.images[0].alt}
              src={product.images[0].src}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">{product.price}</p>

            <form className="mt-10" onSubmit={(e) => { e.preventDefault(); handleAddToCart(); }}>

              <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add to bag
              </button>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{product.description}</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
