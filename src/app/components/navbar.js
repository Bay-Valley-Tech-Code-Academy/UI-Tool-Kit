import React from 'react'
import Image from 'next/image'
import bvtlogo from '../images/bvt-logo.png'

export default function Navbar() {

    return (
        <nav className="flex sticky bg-blue-900 opacity-100 p-3 px-20 gap-80">
            <div className="flex justify-start">
                <Image src={bvtlogo} className="w-12 rounded-full" />
            </div>
            <div className="flex justify-end gap-7 mt-1 text-white font-medium text-lg">
                <button className="hover:bg-gradient-to-r from-indigo-500 to-violet-700 p-2 rounded-lg cursor-pointer">Home</button>
                <button className="hover:bg-blue-600 p-2 rounded-lg cursor-pointer">Product List</button>
                <button className="hover:bg-blue-600 p-2 rounded-lg cursor-pointer">Cart</button>
                <button className="hover:bg-blue-600 p-2 rounded-lg cursor-pointer">About</button>
                <button className="hover:bg-blue-600 p-2 rounded-lg cursor-pointer">Contact Us</button>
            </div>
        </nav>
    )
}