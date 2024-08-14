'use client';

import { useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline';
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
    <div className="bg-gradient-to-r from-[#3D3860] via-[rgb(57,47,90)] to-[#3F3D64]">
      <ArrowUturnLeftIcon className="size-12 stroke-white ml-6" />
      <div className="pt-6">
        {/* Image */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-5 aspect-w-4 bg-[#FFF8F0] lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            <img
              alt={product.imageAlt}
              src={product.imageSrc}
              className="h-full w-full object-cover object-center rounded-[11px] shadow-lg"
              style={{ boxShadow: '3px 8px 15.5px 3px rgba(34, 0, 85, 0.3)' }}
            />
          </div>
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-[#392F5A] lg:pr-8">
            <h1 className="text-3xl font-bold tracking-tight text-white">{product.name}</h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl font-bold tracking-tight text-white">{product.price}</p>

            <form className="mt-10" onSubmit={(e) => { e.preventDefault(); handleAddToCart(); }}>
              <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-[#FFF8F0] px-8 py-3 text-base font-medium text-[#392F5A] hover:bg-[#F2E6D7] focus:outline-none focus:ring-2 focus:ring-[#392F5A] focus:ring-offset-2"
              >
                Add to bag
              </button>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-[#392F5A] lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>
              <div className="space-y-6">
                <p className="text-base text-white">{product.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
