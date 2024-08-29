"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Decimal from "decimal.js";

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
    const [shippingEstimate, setShippingEstimate] = useState(9.99);
    const [taxEstimate, setTaxEstimate] = useState(32.99);
    const [subtotal, setSubtotal] = useState(0);
    const [total, setTotal] = useState(0);
    const [promoCode, setPromoCode] = useState('');
    const [discount, setDiscount] = useState(0);
    const [totalBeforeDiscount, setTotalBeforeDiscount] = useState(0);

    useEffect(() => {
        const savedCart = localStorage.getItem("cart");
        const savedShippingEstimate = localStorage.getItem("shippingEstimate");
        const savedTaxEstimate = localStorage.getItem("taxEstimate");

        if (savedCart) {
            const cartItems = JSON.parse(savedCart);
            setCart(cartItems);

            const validCartItems = cartItems.filter(
            (item) => !isNaN(parseFloat(item.price))
            );
            
            const calculatedSubtotal = validCartItems
            .reduce(
                (currentValue, item) =>
                new Decimal(parseFloat(item.price))
                    .times(item.quantity)
                    .plus(currentValue),
                new Decimal(0)
            )
            .toFixed(2);
            setSubtotal(parseFloat(calculatedSubtotal));
        }

        if (savedShippingEstimate) {
        setShippingEstimate(parseFloat(savedShippingEstimate));
        }
        
        if (savedTaxEstimate) {
        setTaxEstimate(parseFloat(savedTaxEstimate));
        }

        const totalBeforeDiscount = subtotal + shippingEstimate + taxEstimate;
        setTotalBeforeDiscount(totalBeforeDiscount.toFixed(2));

        const total = subtotal + shippingEstimate + taxEstimate - discount;
        setTotal(total.toFixed(2));
    }, [subtotal, shippingEstimate, taxEstimate, discount]);

    const applyPromoCode = () => {
        if (promoCode === "promoBVT") {
            const discountAmount = subtotal * 0.1; // 10% discount
            setDiscount(discountAmount);
        } else {
            alert("Invalid promo code");
            setDiscount(0);
        }
    };

    return (
        <div className="text-white">
            <div className="md:grid grid-cols-3 md:gap-8 sm:p-6 p-10">
                <div className="bg-[#332E4B] rounded-lg sm:p-10 p-6 col-span-2">
                    <div className="flex justify-between">
                        <p className="justify-start font-semibold xs:text-lg sm:text-2xl md:text-2xl">Checkout</p>
                        <Link href="/productlists">
                            <p className="justify-end underline underline-offset-2 xs:text-sm">Back to products</p>
                        </Link>
                    </div>
                    <form>
                        <p className="font-semibold text-lg">Billing Address</p>
                        <div className="md:grid grid-cols-2 md:gap-6">
                            <div>
                                <label htmlFor="country" className="block sm:text-lg">Country</label>
                                <input
                                    type="text"
                                    className="text-white bg-inherit outline outline-1 rounded-sm md:h-9 p-1 xs:w-56 sm:w-full w-96"
                                />
                            </div>
                            <div>
                                <label htmlFor="state" className="block sm:text-lg">State</label>
                                <input
                                    type="text"
                                    className="text-white bg-inherit outline outline-1 rounded-sm h-9 p-1 xs:w-56 sm:w-full w-96"
                                />
                            </div>
                            <div>
                                <label htmlFor="city" className="block sm:text-lg">City</label>
                                <input
                                    type="text"
                                    className="text-white bg-inherit outline outline-1 rounded-sm h-9 p-1 xs:w-56 sm:w-full w-96"
                                />
                            </div>
                            <div>
                                <label htmlFor="zip_code" className="block sm:text-lg">Zip Code</label>
                                <input
                                    type="text"
                                    className="text-white bg-inherit outline outline-1 rounded-sm h-9 p-1 xs:w-56 sm:w-full w-96"
                                />
                            </div>
                        </div>
                        <p className="font-semibold mt-6 text-lg">Payment Method</p>
                        <div className="md:grid grid-cols-2 md:gap-6">
                            <div>
                                <label htmlFor="card_name" className="block">Name on Card</label>
                                <input
                                    type="text"
                                    className="text-white bg-inherit outline outline-1 rounded-sm h-9 p-1 xs:w-56 sm:w-full w-96"
                                />
                            </div>
                            <div>
                                <label htmlFor="security_code" className="block sm:text-lg">Security Code</label>
                                <input
                                    type="text"
                                    className="text-white bg-inherit outline outline-1 rounded-sm h-9 p-1 xs:w-56 sm:w-full w-96"
                                />
                            </div>
                            <div>
                                <label htmlFor="card_number" className="block sm:text-lg">Card Number</label>
                                <input
                                    type="text"
                                    className="text-white bg-inherit outline outline-1 rounded-sm p-1 h-9 xs:w-56 sm:w-full w-96"
                                />
                            </div>
                            <div>
                                <label htmlFor="expiration_date" className="block sm:text-lg">Expiration Date</label>
                                <input
                                    type="text"
                                    className="text-white bg-inherit outline outline-1 rounded-sm p-1 h-9 xs:w-56 sm:w-full w-96"
                                />
                            </div>
                        </div>
                    </form>
                </div>
                <div className="order-summary flex flex-col sm:mt-[-28px] md:mt-0 sm:gap-1 md:gap-2 bg-[#332E4B] sm:p-10 p-4 rounded-lg">
                    <p className="font-semibold text-xl">Order Summary</p>
                    {cart.map((item) => {
                        return (
                            <li
                            key={item.id}
                            className="flex group relative rounded-[11px] mb-1 p-3 "
                            >
                                <div className="border-2 rounded border-solid mr-4">
                                    <img
                                    src={item.imagesrc || "/default-image.png"}
                                    alt={item.imagealt || "No image available"}
                                    className="w-12 h-12 object-cover rounded-md"
                                    />
                                </div>
                                <div className="flex flex-col justify-between">
                                    <div>
                                    <h2 className="text-lg font-medium text-white">
                                        {item.name} ( {item.quantity} )
                                    </h2>
                                    <p className="text-base text-white">
                                        {item.price}
                                    </p>
                                    </div>
                                </div>
                            </li>
                        );
                        })}
                    <div className="flex gap-0">
                        <div>
                            <label className="block">Promo Code</label>
                            <input
                                className="text-white bg-inherit outline outline-1 rounded-sm p-1 h-9 sm:w-full md:w-60"
                                type="text" 
                                value={promoCode} 
                                onChange={(e) => setPromoCode(e.target.value)} 
                            />
                            <button 
                                className="bg-white text-black h-10 text-sm w-24 rounded-md ml-1"
                                onClick={applyPromoCode} 
                                >Apply
                            </button>
                        </div>
                    </div>
                    <div className="text-md">
                        <p>Original Price: ${totalBeforeDiscount} </p>
                        <p>Coupon Discount: -${discount.toFixed(2)}</p>
                        <p>Total: ${total} </p>
                    </div>
                    <div className="flex justify-center">
                        <button
                            className="bg-[#656BF3] p-2 rounded-md mt-4 sm:text-lg sm:w-full w-72 justify-center"
                            >Proceed to Pay
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}