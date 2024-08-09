'use client';

import { useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import products from '../../data/products'; // Adjust the import path as needed

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function ProductPage() {
  const { id } = useParams(); // Get the id from the URL
  const product = products.find((p) => p.id === parseInt(id)); // Find the product by id

  // Ensure product has images property if not included in products.js
  if (!product.images) {
    product.images = [
      {
        src: product.imageSrc,
        alt: product.imageAlt,
      },
    ];
  }
  
  
  const [cart, setCart] = useState([]);
  const router = useRouter();

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    // Retrieve the existing cart from localStorage
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Add the new product to the cart
    const newCart = [...existingCart, product];
    
    // Save the updated cart back to localStorage
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
    
    // Redirect to the shopping cart page
    router.push('/cart');
  };
   

  return (
    <div className="bg-white">
      <div className="pt-6">
        {/* Image */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            <img
              alt={product.imageAlt}
              src={product.imageSrc}
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
  );
}
