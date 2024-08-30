"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Decimal from "decimal.js";
import Image from "next/image";
import Link from "next/link";

export default function Checkout() {
    const [isMounted, setIsMounted] = useState(false);
    const [checkoutData, setCheckoutData] = useState({
        country: 'USA',
        state: 'CA',
        city: 'Merced',
        zip_code: '95340',
        card_name: 'John Doe',
        card_number: '1234 5678 9012 3456',
        security_code: '123',
        expiration_date: '12/25'
    });
    const [cart, setCart] = useState([]);
    const [subtotal, setSubtotal] = useState(0);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setIsMounted(true);

        const savedCart = localStorage.getItem("cart");
        if (savedCart) {
            const cartItems = JSON.parse(savedCart);
            setCart(cartItems);

            const newSubtotal = cartItems.reduce((currentValue, item) => {
                const price = isNaN(parseFloat(item.price)) ? new Decimal(0) : new Decimal(parseFloat(item.price));
                return currentValue.plus(price.times(item.quantity));
            }, new Decimal(0)).toFixed(2);

            setSubtotal(newSubtotal);
        }
    }, []);

    if (!isMounted) {
        return null; 
    }

    const validateForm = () => {
        const newErrors = {};
        // Remove spaces from card_number before validation
        const cleanedCardNumber = checkoutData.card_number.replace(/\s+/g, '');
        
        if (!checkoutData.card_name.trim()) newErrors.card_name = "Name on card is required";
        if (!cleanedCardNumber.match(/^\d{16}$/)) newErrors.card_number = "Card number must be 16 digits";
        if (!checkoutData.security_code.match(/^\d{3}$/)) newErrors.security_code = "Security code must be 3 digits";
        if (!checkoutData.expiration_date.match(/^\d{2}\/\d{2}$/)) newErrors.expiration_date = "Expiration date must be in MM/YY format";
        if (!checkoutData.country.trim()) newErrors.country = "Country is required";
        if (!checkoutData.state.trim()) newErrors.state = "State is required";
        if (!checkoutData.city.trim()) newErrors.city = "City is required";
        if (!checkoutData.zip_code.match(/^\d{5}$/)) newErrors.zip_code = "Zip code must be 5 digits";
    
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            setIsSubmitting(true);
    
            try {
                const response = await fetch('/api/checkout', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(checkoutData),
                });
    
                const result = await response.json();
    
                if (response.ok) {
                    console.log(result.message);
                    // Clear cart items from localStorage and reset cart state
                    localStorage.removeItem("cart");
                    setCart([]);
                    
                    // Redirect to the order complete page
                    router.push("/ordercomplete");
                } else {
                    console.error(result.message);
                    // Handle error
                }
            } catch (error) {
                console.error('Error:', error);
                // Handle fetch error
            } finally {
                setIsSubmitting(false);
            }
        }
    };
    
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
                    <form onSubmit={handleSubmit} noValidate>
                        <p className="font-semibold text-lg mb-2">Billing Address</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="country" className="block mb-1">Country</label>
                                <input
                                    type="text"
                                    id="country"
                                    className={`text-white bg-inherit outline outline-1 rounded-sm p-2 w-full ${errors.country ? "outline-red-500" : ""}`}
                                    value={checkoutData.country}
                                    onChange={(e) => setCheckoutData({ ...checkoutData, country: e.target.value })}
                                />
                                {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}
                            </div>
                            <div>
                                <label htmlFor="state" className="block mb-1">State</label>
                                <input
                                    type="text"
                                    id="state"
                                    className={`text-white bg-inherit outline outline-1 rounded-sm p-2 w-full ${errors.state ? "outline-red-500" : ""}`}
                                    value={checkoutData.state}
                                    onChange={(e) => setCheckoutData({ ...checkoutData, state: e.target.value })}
                                />
                                {errors.state && <p className="text-red-500 text-sm">{errors.state}</p>}
                            </div>
                            <div>
                                <label htmlFor="city" className="block mb-1">City</label>
                                <input
                                    type="text"
                                    id="city"
                                    className={`text-white bg-inherit outline outline-1 rounded-sm p-2 w-full ${errors.city ? "outline-red-500" : ""}`}
                                    value={checkoutData.city}
                                    onChange={(e) => setCheckoutData({ ...checkoutData, city: e.target.value })}
                                />
                                {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
                            </div>
                            <div>
                                <label htmlFor="zip_code" className="block mb-1">Zip Code</label>
                                <input
                                    type="text"
                                    id="zip_code"
                                    className={`text-white bg-inherit outline outline-1 rounded-sm p-2 w-full ${errors.zip_code ? "outline-red-500" : ""}`}
                                    value={checkoutData.zip_code}
                                    onChange={(e) => setCheckoutData({ ...checkoutData, zip_code: e.target.value })}
                                />
                                {errors.zip_code && <p className="text-red-500 text-sm">{errors.zip_code}</p>}
                            </div>
                        </div>
                        <p className="font-semibold mt-4 mb-2">Payment Method</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="card_name" className="block mb-1">Name on Card</label>
                                <input
                                    type="text"
                                    id="card_name"
                                    className={`text-white bg-inherit outline outline-1 rounded-sm p-2 w-full ${errors.card_name ? "outline-red-500" : ""}`}
                                    value={checkoutData.card_name}
                                    onChange={(e) => setCheckoutData({ ...checkoutData, card_name: e.target.value })}
                                />
                                {errors.card_name && <p className="text-red-500 text-sm">{errors.card_name}</p>}
                            </div>
                            <div>
                                <label htmlFor="card_number" className="block mb-1">Card Number</label>
                                <input
                                    type="text"
                                    id="card_number"
                                    className={`text-white bg-inherit outline outline-1 rounded-sm p-2 w-full ${errors.card_number ? "outline-red-500" : ""}`}
                                    value={checkoutData.card_number}
                                    onChange={(e) => setCheckoutData({ ...checkoutData, card_number: e.target.value })}
                                />
                                {errors.card_number && <p className="text-red-500 text-sm">{errors.card_number}</p>}
                            </div>
                            <div>
                                <label htmlFor="security_code" className="block mb-1">Security Code</label>
                                <input
                                    type="text"
                                    id="security_code"
                                    className={`text-white bg-inherit outline outline-1 rounded-sm p-2 w-full ${errors.security_code ? "outline-red-500" : ""}`}
                                    value={checkoutData.security_code}
                                    onChange={(e) => setCheckoutData({ ...checkoutData, security_code: e.target.value })}
                                />
                                {errors.security_code && <p className="text-red-500 text-sm">{errors.security_code}</p>}
                            </div>
                            <div>
                                <label htmlFor="expiration_date" className="block mb-1">Expiration Date</label>
                                <input
                                    type="text"
                                    id="expiration_date"
                                    className={`text-white bg-inherit outline outline-1 rounded-sm p-2 w-full ${errors.expiration_date ? "outline-red-500" : ""}`}
                                    value={checkoutData.expiration_date}
                                    onChange={(e) => setCheckoutData({ ...checkoutData, expiration_date: e.target.value })}
                                />
                                {errors.expiration_date && <p className="text-red-500 text-sm">{errors.expiration_date}</p>}
                            </div>
                        </div>
                        <div className="mt-4">
                            <p className="font-semibold text-lg">Order Summary</p>
                            <div className="flex justify-between mb-2">
                                <span>Subtotal:</span>
                                <span>${subtotal}</span>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className={`mt-4 p-2 bg-blue-500 text-white rounded ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Processing..." : "Complete Order"}
                        </button>
                    </form>
                </div>
                <div className="bg-[#332E4B] rounded-lg p-6">
                    <p className="font-semibold text-lg mb-2">Order Summary</p>
                    <div>
                    <ul className="flex flex-col gap-4 max-h-[300px] overflow-y-auto">
                        {cart.map((item) => (
                            <li key={item.id} className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <Image 
                                        src={item.imagesrc} 
                                        alt={item.imagealt} 
                                        width={64} 
                                        height={64} 
                                        className="object-cover"
                                        unoptimized={true} // Optional: If the images are hosted externally or there's an issue with optimization
                                    />
                                </div>
                                <div className="flex flex-col justify-between">
                                    <div className="flex justify-between">
                                        <p className="font-semibold">{item.name}</p>
                                        <p className="font-semibold">${isNaN(parseFloat(item.price)) ? "0.00" : parseFloat(item.price).toFixed(2)}</p>
                                    </div>
                                    <p className="text-sm">Quantity: {item.quantity}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                    </div>
                    <div className="mt-4">
                        <p className="font-semibold text-lg">Subtotal:</p>
                        <p className="text-white">${subtotal}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
