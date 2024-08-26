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
                    <div className="flex">
                        <img 
                            src="/images/bvt_logo.png" 
                            className="w-12" 
                        />
                        <p>Bay Valley Tech Logo</p>
                    </div>
                    <div className="flex">
                        <img 
                            src="/images/bvt_logo.png" 
                            className="w-12" 
                        />
                        <p>Bay Valley Tech Logo</p>
                    </div>
                    <div className="flex gap-4">
                        <div>
                            <label className="block">Promo Code</label>
                            <input
                                type="text"
                                className="text-white bg-inherit outline outline-1 rounded-sm p-1 w-72"
                            />
                            <button
                                className="bg-white text-black h-9 text-sm w-24 rounded-md ml-1"
                            >Apply
                        </button>
                        </div>
                    </div>
                    <p>Original Price:</p>
                    <p>Coupon Discount:</p>
                    <p>Total:</p>
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