"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Decimal from "decimal.js";

export default function Checkout() {
  const [cart, setCart] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [shippingEstimate, setShippingEstimate] = useState(9.99);
  const [taxEstimate, setTaxEstimate] = useState(32.99);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      const cartItems = JSON.parse(savedCart);

      // Convert price to numbers and filter out any invalid entries
      const validCartItems = cartItems.filter(
        (item) => !isNaN(parseFloat(item.price))
      );

      setCart(cartItems);
      setSubtotal(
        validCartItems
          .reduce(
            (currentValue, item) =>
              new Decimal(parseFloat(item.price))
                .times(item.quantity)
                .plus(currentValue),
            new Decimal(0)
          )
          .toFixed(2)
      );
    }
  }, []);

  return (
    <div className="bg-gradient-to-r from-[#3D3860] via-[#392F5A] to-[#3F3D64] min-h-screen flex flex-col">
      <div className="p-6 lg:ml-20 lg:mr-20">
        <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Checkout
        </h1>
        <div className="mt-6 flex flex-col lg:flex-row">
          <div className="lg:w-2/3">
            <div className="bg-gradient-to-b from-[#FFF8F0] to-[#FFF8F0] shadow-lg rounded-[11px] p-4 mb-6">
              <h2 className="font-bold text-lg mb-4 text-base text-[#392F5A]">
                Customer Information
              </h2>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-base text-[#392F5A]">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-base text-[#392F5A]">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="address" className="block text-base text-[#392F5A]">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    placeholder="Enter your address"
                    className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </form>
            </div>
            <div className="bg-gradient-to-b from-[#FFF8F0] to-[#FFF8F0] shadow-lg rounded-[11px] p-4 mb-6">
              <h2 className="font-bold text-lg mb-4 text-base text-[#392F5A]">
                Payment Method
              </h2>
              <form>
                <div className="mb-4">
                  <label htmlFor="cardNumber" className="block text-base text-[#392F5A]">
                    Credit Card Number
                  </label>
                  <input
                    type="text"
                    id="cardNumber"
                    placeholder="Enter your credit card number"
                    className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="expiryDate" className="block text-base text-[#392F5A]">
                    Expiration Date
                  </label>
                  <input
                    type="text"
                    id="expiryDate"
                    placeholder="MM/YY"
                    className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="cvv" className="block text-base text-[#392F5A]">
                    CVV
                  </label>
                  <input
                    type="text"
                    id="cvv"
                    placeholder="Enter CVV"
                    className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="zip" className="block text-base text-[#392F5A]">
                    ZIP Code
                  </label>
                  <input
                    type="text"
                    id="zip"
                    placeholder="Enter your ZIP code"
                    className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="lg:w-1/3">
            <div className="bg-gradient-to-b from-[#FFF8F0] to-[#FFF8F0] shadow-lg rounded-[11px] p-4">
              <h2 className="font-bold text-lg mb-4 text-base text-[#392F5A]">
                Order Summary
              </h2>
              <div className="flex justify-between mb-2">
                <p className="text-base text-[#392F5A]">Subtotal</p>
                <p className="text-base text-[#392F5A]">${subtotal}</p>
              </div>
              <div className="flex justify-between mb-2">
                <p className="text-base text-[#392F5A]">Shipping estimate</p>
                <p className="text-base text-[#392F5A]">${shippingEstimate}</p>
              </div>
              <div className="flex justify-between mb-2">
                <p className="text-base text-[#392F5A]">Tax estimate</p>
                <p className="text-base text-[#392F5A]">${taxEstimate}</p>
              </div>
              <hr className="mb-4" />
              <div className="flex justify-between mb-4">
                <h2 className="font-bold text-lg text-base text-[#392F5A]">
                  Order total
                </h2>
                <p className="text-base text-[#392F5A]">
                  $
                  {new Decimal(subtotal)
                    .plus(new Decimal(shippingEstimate))
                    .plus(new Decimal(taxEstimate))
                    .toFixed(2)}
                </p>
              </div>
              <button
                onClick={() => alert('Order placed!')} // Replace with actual order placement functionality
                className="mt-4 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
