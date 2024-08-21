'use client';

import { useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import products from '../../data/products'; // Adjust the import path as needed
import Link from "next/link";
import AddToCartButton from './AddToCartButton';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function ProductPage() {
  const { id } = useParams(); // Get the id from the URL
  const product = products.find((p) => p.id === parseInt(id)); // Find the product by id

  // Ensure product has images property if not included in products.js
  if (!product.imagesrc) {
    product.imagesrc = [
      {
        src: product.imagesrc,
        alt: product.imagealt,
      },
    ];
  }
  
  const [cart, setCart] = useState([]);
  const router = useRouter();

  if (!product) {
    return <div>Product not found</div>;
  }
   
  return (
    <div className="bg-gradient-to-r from-[#3D3860] via-[rgb(57,47,90)] to-[#3F3D64]">
      <div className="flex p-4">
        <Link href="/productlists">
          <ChevronLeftIcon className="size-8 stroke-white ml-6" />
        </Link>
        <Link href="/productlists">
          <p className="text-white hover:underline underline-offset-2 p-1">Return to product list</p>
        </Link>
      </div>
      <div className="pt-6 md:grid grid-cols-2 md:p-4">
        {/* Image */}
        <div className="mx-auto mt-6 sm:px-6 md:w-11/12 lg:w-2/3 g:gap-x-8 lg:px-8">
          <div className="aspect-h-5 aspect-w-4 bg-[#FFF8F0] lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            <img
              alt={product.imagealt}
              src={product.imagesrc}
              className="h-full w-full object-cover object-center rounded-[11px] shadow-lg"
              style={{ boxShadow: "3px 8px 15.5px 3px rgba(34, 0, 85, 0.3)" }}
            />
          </div>
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-24 lg:pt-16 text-center">
          <div className="lg:border-r lg:border-[#392F5A] lg:pr-8">
            <h1 className="md:text-2xl lg:text-3xl font-bold tracking-tight text-white">
              {product.name}
            </h1>
          </div>
          <div className="py-10 lg:border-r lg:border-[#392F5A] lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>
              <div className="space-y-6">
                <p className="text-white md:text-md text-lg">
                  {product.description}
                </p>
              </div>
            </div>
          </div>
          {/* Options */}
          <div className="mt-4 lg:mt-10">
            <h2 className="sr-only">Product information</h2>
            <p className="md:text-xl text-2xl font-bold tracking-tight text-white">
              {product.price}
            </p>

            <AddToCartButton product={product}/>
          </div>
        </div>
      </div>
    </div>
  );
}