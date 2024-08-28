"use client"
import React, { useState } from "react";
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

    return (
        <div className="text-white">
            <div className="md:grid grid-cols-3 md:gap-8 sm:p-6 p-10">
                <div className="bg-[#332E4B] rounded-lg sm:p-10 p-6 col-span-2">
                    <div className="flex justify-between">
                        <p className="justify-start font-semibold sm:text-2xl md:text-2xl">Checkout</p>
                        <Link href="/productlists">
                            <p className="justify-end underline underline-offset-2">Back to products</p>
                        </Link>
                    </div>
                    <form>
                        <p className="font-semibold text-lg">Billing Address</p>
                        <div className="md:grid grid-cols-2 md:gap-6">
                            <div>
                                <label htmlFor="country" className="block sm:text-lg">Country</label>
                                <input
                                    type="text"
                                    className="text-white bg-inherit outline outline-1 rounded-sm md:h-9 p-1 sm:w-full w-96"
                                />
                            </div>
                            <div>
                                <label htmlFor="state" className="block sm:text-lg">State</label>
                                <input
                                    type="text"
                                    className="text-white bg-inherit outline outline-1 rounded-sm h-9 p-1 sm:w-full w-96"
                                />
                            </div>
                            <div>
                                <label htmlFor="city" className="block sm:text-lg">City</label>
                                <input
                                    type="text"
                                    className="text-white bg-inherit outline outline-1 rounded-sm h-9 p-1 sm:w-full w-96"
                                />
                            </div>
                            <div>
                                <label htmlFor="zip_code" className="block sm:text-lg">Zip Code</label>
                                <input
                                    type="text"
                                    className="text-white bg-inherit outline outline-1 rounded-sm h-9 p-1 sm:w-full w-96"
                                />
                            </div>
                        </div>
                        <p className="font-semibold mt-6 text-lg">Payment Method</p>
                        <div className="md:grid grid-cols-2 md:gap-6">
                            <div>
                                <label htmlFor="card_name" className="block">Name on Card</label>
                                <input
                                    type="text"
                                    className="text-white bg-inherit outline outline-1 rounded-sm h-9 p-1 sm:w-full w-96"
                                />
                            </div>
                            <div>
                                <label htmlFor="security_code" className="block sm:text-lg">Security Code</label>
                                <input
                                    type="text"
                                    className="text-white bg-inherit outline outline-1 rounded-sm h-9 p-1 sm:w-full w-96"
                                />
                            </div>
                            <div>
                                <label htmlFor="card_number" className="block sm:text-lg">Card Number</label>
                                <input
                                    type="text"
                                    className="text-white bg-inherit outline outline-1 rounded-sm p-1 h-9 sm:w-full w-96"
                                />
                            </div>
                            <div>
                                <label htmlFor="expiration_date" className="block sm:text-lg">Expiration Date</label>
                                <input
                                    type="text"
                                    className="text-white bg-inherit outline outline-1 rounded-sm p-1 h-9 sm:w-full w-96"
                                />
                            </div>
                        </div>
                    </form>
                </div>
                <div className="order-summary flex flex-col sm:mt-[-28px] md:mt-0 sm:gap-1 md:gap-2 bg-[#332E4B] sm:p-10 p-4 rounded-lg">
                <p className="font-semibold text-xl">Order Summary</p>
                    <div className="flex">
                        <img 
                            src="/images/bvt_logo.png" 
                            className="w-16" 
                        />
                        <p>Bay Valley Tech Logo</p>
                    </div>
                    <div className="flex">
                        <img 
                            src="/images/bvt_logo.png" 
                            className="w-16" 
                        />
                        <p>Bay Valley Tech Logo</p>
                    </div>
                    <div className="flex gap-0">
                        <div>
                            <label className="block">Promo Code</label>
                            <input
                                type="text"
                                className="text-white bg-inherit outline outline-1 rounded-sm p-1 h-9 sm:w-full md:w-60"
                            />
                            <button
                                className="bg-white text-black h-10 text-sm w-24 rounded-md ml-1"
                            >Apply
                        </button>
                        </div>
                    </div>
                    <div className="text-md">    
                        <p>Original Price:</p>
                        <p>Coupon Discount:</p>
                        <p>Total:</p>
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