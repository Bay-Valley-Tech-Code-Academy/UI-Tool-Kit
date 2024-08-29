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
            <div className="md:grid grid-cols-3 gap-8 p-10">
                <div className="bg-[#332E4B] rounded-lg p-6 col-span-2">
                    <div className="flex justify-between">
                        <p className="justify-start font-semibold text-xl">Checkout</p>
                        <Link href="/productlists">
                            <p className="justify-end underline underline-offset-2">Back to products</p>
                        </Link>
                    </div>
                    <form>
                        <p className="font-semibold text-lg">Billing Address</p>
                        <div className="grid grid-cols-2 gap-2">
                            <div>
                                <label htmlFor="country" className="block">Country</label>
                                <input
                                    type="text"
                                    className="text-white bg-inherit outline outline-1 rounded-sm p-1 w-96"
                                />
                            </div>
                            <div>
                                <label htmlFor="state" className="block">State</label>
                                <input
                                    type="text"
                                    className="text-white bg-inherit outline outline-1 rounded-sm p-1 w-96"
                                />
                            </div>
                            <div>
                                <label htmlFor="city" className="block">City</label>
                                <input
                                    type="text"
                                    className="text-white bg-inherit outline outline-1 rounded-sm p-1 w-96"
                                />
                            </div>
                            <div>
                                <label htmlFor="zip_code" className="block">Zip Code</label>
                                <input
                                    type="text"
                                    className="text-white bg-inherit outline outline-1 rounded-sm p-1 w-96"
                                />
                            </div>
                        </div>
                        <p className="font-semibold">Payment Method</p>
                        <div className="grid grid-cols-2 gap-2">
                            <div>
                                <label htmlFor="card_name" className="block">Name on Card</label>
                                <input
                                    type="text"
                                    className="text-white bg-inherit outline outline-1 rounded-sm p-1 w-96"
                                />
                            </div>
                            <div>
                                <label htmlFor="security_code" className="block">Security Code</label>
                                <input
                                    type="text"
                                    className="text-white bg-inherit outline outline-1 rounded-sm p-1 w-96"
                                />
                            </div>
                            <div>
                                <label htmlFor="card_number" className="block">Card Number</label>
                                <input
                                    type="text"
                                    className="text-white bg-inherit outline outline-1 rounded-sm p-1 w-96"
                                />
                            </div>
                            <div>
                                <label htmlFor="expiration_date" className="block">Expiration Date</label>
                                <input
                                    type="text"
                                    className="text-white bg-inherit outline outline-1 rounded-sm p-1 w-96"
                                />
                            </div>
                        </div>
                    </form>
                </div>
                <div className="order-summary flex flex-col gap-2 bg-[#332E4B] p-4 rounded-lg">
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
                                        {item.name} ({item.quantity})
                                    </h2>
                                    <p className="text-base text-white">
                                        {item.price}
                                    </p>
                                    </div>
                                </div>
                            </li>
                        );
                        })}
                    <div className="flex gap-4">
                        <div>
                            <label className="block">Promo Code</label>
                            <input
                                className="text-white bg-inherit outline outline-1 rounded-sm p-1 w-72"
                                type="text" 
                                value={promoCode} 
                                onChange={(e) => setPromoCode(e.target.value)} 
                            />
                            <button 
                                className="bg-white text-black h-9 text-sm w-24 rounded-md ml-1"
                                onClick={applyPromoCode} 
                                >Apply
                            </button>
                        </div>
                    </div>
                    <p>Original Price: ${totalBeforeDiscount} </p>
                    <p>Coupon Discount: {discount > 0 && (<inline> ${discount.toFixed(2)}</inline>)} </p>
                    <p>Total: ${total} </p>
                    <div className="flex justify-center">
                        <button
                            className="bg-[#656BF3] p-2 rounded-md w-72 justify-center"
                            >Proceed to Pay
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}