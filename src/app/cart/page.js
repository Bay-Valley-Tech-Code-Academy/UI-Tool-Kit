'use client'

import { useState, useEffect } from 'react'

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  return (
    <div className="bg-white">
      <div className="pt-6">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Shopping Cart</h1>
        <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
          {cart.length > 0 ? (
            <ul>
              {cart.map((item, index) => (
                <li key={index} className="border-t border-b border-gray-200 py-6">
                  <img src={item.images[0].src} alt={item.images[0].alt} className="h-16 w-16 object-cover object-center" />
                  <h2 className="text-lg font-medium text-gray-900">{item.name}</h2>
                  <p className="text-base text-gray-900">{item.price}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-base text-gray-900">Your cart is empty.</p>
          )}
        </div>
      </div>
    </div>
  )
}
