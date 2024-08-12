'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Cart() {
  const [cart, setCart] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const handleRemoveFromCart = (indexToRemove) => {
    const updatedCart = cart.filter((_, index) => index !== indexToRemove);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div className="bg-white">
      <div className="pt-6">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Shopping Cart</h1>
        <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
          {cart.length > 0 ? (
            <>
              <ul>
                {cart.map((item, index) => (
                  <li key={index} className="border-t border-b border-gray-200 py-6 flex items-center space-x-4">
                    {item.images && item.images.length > 0 ? (
                      <img
                        src={item.images[0].src}
                        alt={item.images[0].alt}
                        className="h-16 w-16 object-cover object-center"
                      />
                    ) : (
                      <div className="h-16 w-16 flex items-center justify-center bg-gray-200 text-gray-500">
                        No Image
                      </div>
                    )}
                    <div>
                      <h2 className="text-lg font-medium text-gray-900">{item.name}</h2>
                      <p className="text-base text-gray-900">{item.price}</p>
                    </div>
                    <button
                      onClick={() => handleRemoveFromCart(index)}
                      className="ml-auto text-red-600 hover:text-red-800"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => router.push('/productlists')}
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Back to Product List
              </button>
            </>
          ) : (
            <>
              <p className="text-base text-gray-900">Your cart is empty.</p>
              <button
                onClick={() => router.push('/productlists')}
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Check out the products!
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
