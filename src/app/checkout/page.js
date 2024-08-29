"use client";
import React, { useState, useEffect } from "react";
import Decimal from "decimal.js";
import Image from "next/image";
import Link from "next/link";

export default function Checkout() {
    const [checkoutData, setCheckoutData] = useState({
        country: '',
        state: '',
        city: '',
        zip_code: '',
        card_name: '',
        card_number: '',
        security_code: '',
        expiration_date: ''
    });

    const [cart, setCart] = useState([]);
    const [subtotal, setSubtotal] = useState(0);

    useEffect(() => {
        const savedCart = localStorage.getItem("cart");
        if (savedCart) {
            const cartItems = JSON.parse(savedCart);
            setCart(cartItems);

            const newSubtotal = cartItems.reduce((currentValue, item) => {
                // Handle invalid prices
                const price = isNaN(parseFloat(item.price)) ? new Decimal(0) : new Decimal(parseFloat(item.price));
                return currentValue.plus(price.times(item.quantity));
            }, new Decimal(0)).toFixed(2);

            setSubtotal(newSubtotal);
        }
    }, []);

    return (
        <div className="text-white p-4">
            <div className="md:grid grid-cols-3 gap-8 p-4">
                <div className="bg-[#332E4B] rounded-lg p-6 col-span-3 md:col-span-2">
                    <div className="flex justify-between mb-4">
                        <p className="font-semibold text-xl">Checkout</p>
                        <Link href="/productlists">
                            <p className="underline underline-offset-2">Back to products</p>
                        </Link>
                    </div>
                    <form>
                        <p className="font-semibold text-lg mb-2">Billing Address</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="country" className="block mb-1">Country</label>
                                <input
                                    type="text"
                                    id="country"
                                    className="text-white bg-inherit outline outline-1 rounded-sm p-2 w-full"
                                    value={checkoutData.country}
                                    onChange={(e) => setCheckoutData({ ...checkoutData, country: e.target.value })}
                                />
                            </div>
                            <div>
                                <label htmlFor="state" className="block mb-1">State</label>
                                <input
                                    type="text"
                                    id="state"
                                    className="text-white bg-inherit outline outline-1 rounded-sm p-2 w-full"
                                    value={checkoutData.state}
                                    onChange={(e) => setCheckoutData({ ...checkoutData, state: e.target.value })}
                                />
                            </div>
                            <div>
                                <label htmlFor="city" className="block mb-1">City</label>
                                <input
                                    type="text"
                                    id="city"
                                    className="text-white bg-inherit outline outline-1 rounded-sm p-2 w-full"
                                    value={checkoutData.city}
                                    onChange={(e) => setCheckoutData({ ...checkoutData, city: e.target.value })}
                                />
                            </div>
                            <div>
                                <label htmlFor="zip_code" className="block mb-1">Zip Code</label>
                                <input
                                    type="text"
                                    id="zip_code"
                                    className="text-white bg-inherit outline outline-1 rounded-sm p-2 w-full"
                                    value={checkoutData.zip_code}
                                    onChange={(e) => setCheckoutData({ ...checkoutData, zip_code: e.target.value })}
                                />
                            </div>
                        </div>
                        <p className="font-semibold mt-4 mb-2">Payment Method</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="card_name" className="block mb-1">Name on Card</label>
                                <input
                                    type="text"
                                    id="card_name"
                                    className="text-white bg-inherit outline outline-1 rounded-sm p-2 w-full"
                                    value={checkoutData.card_name}
                                    onChange={(e) => setCheckoutData({ ...checkoutData, card_name: e.target.value })}
                                />
                            </div>
                            <div>
                                <label htmlFor="security_code" className="block mb-1">Security Code</label>
                                <input
                                    type="text"
                                    id="security_code"
                                    className="text-white bg-inherit outline outline-1 rounded-sm p-2 w-full"
                                    value={checkoutData.security_code}
                                    onChange={(e) => setCheckoutData({ ...checkoutData, security_code: e.target.value })}
                                />
                            </div>
                            <div>
                                <label htmlFor="card_number" className="block mb-1">Card Number</label>
                                <input
                                    type="text"
                                    id="card_number"
                                    className="text-white bg-inherit outline outline-1 rounded-sm p-2 w-full"
                                    value={checkoutData.card_number}
                                    onChange={(e) => setCheckoutData({ ...checkoutData, card_number: e.target.value })}
                                />
                            </div>
                            <div>
                                <label htmlFor="expiration_date" className="block mb-1">Expiration Date</label>
                                <input
                                    type="text"
                                    id="expiration_date"
                                    className="text-white bg-inherit outline outline-1 rounded-sm p-2 w-full"
                                    value={checkoutData.expiration_date}
                                    onChange={(e) => setCheckoutData({ ...checkoutData, expiration_date: e.target.value })}
                                />
                            </div>
                        </div>
                    </form>
                </div>
                <div className="order-summary flex flex-col gap-4 bg-[#332E4B] p-6 rounded-lg mt-8 md:mt-0 col-span-3 md:col-span-1">
                    <p className="font-semibold text-xl mb-2">Order Summary</p>
                    {cart.length > 0 ? (
                        <>
                            {cart.map((item) => (
                                <div key={item.id} className="flex items-center gap-2">
                                    <img 
                                        src={item.imagesrc || "/default-image.png"} 
                                        alt={item.imagealt || "No image available"}
                                        className="w-12" 
                                    />
                                    <p>{item.name}</p>
                                    <p>x{item.quantity}</p>
                                    <p>${isNaN(parseFloat(item.price)) ? '0.00' : new Decimal(parseFloat(item.price)).times(item.quantity).toFixed(2)}</p>
                                </div>
                            ))}
                            <div className="flex justify-between mt-4">
                                <p className="font-semibold">Subtotal:</p>
                                <p>${subtotal}</p>
                            </div>
                            <div className="flex flex-col gap-2 mt-4">
                                <label className="block">Promo Code</label>
                                <div className="flex">
                                    <input
                                        type="text"
                                        className="text-white bg-inherit outline outline-1 rounded-sm p-2 w-full"
                                    />
                                    <button
                                        className="bg-white text-black h-10 text-sm w-24 rounded-md ml-2"
                                    >
                                        Apply
                                    </button>
                                </div>
                            </div>
                        </>
                    ) : (
                        <p>Your cart is empty.</p>
                    )}
                    <div className="flex justify-center mt-4">
                        <button
                            className="bg-[#656BF3] p-2 rounded-md w-full"
                        >
                            Proceed to Pay
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
