import React from 'react'
import Image from 'next/image'
import bvtlogo from '../images/bvt-logo.png'

export default function Navbar() {

    return (
        <nav className="flex sticky bg-indigo-900 opacity-100 p-4 px-20 gap-50">
            <div className="flex justify-start">
                <Image src={bvtlogo} className="w-14 rounded-full" />
            </div>
            <div className="flex flex-1 justify-center gap-7 mt-1 text-white font-medium text-xl">
                <button className="hover:bg-gradient-to-r from-indigo-500 to-violet-700 p-3 rounded-lg drop-shadow-xl">Home</button>
                <button className="hover:bg-gradient-to-r from-indigo-500 to-violet-700 p-3 rounded-lg drop-shadow-xl">Product List</button>
                <button className="hover:bg-gradient-to-r from-indigo-500 to-purple-600 p-3 rounded-lg drop-shadow-xl">Cart</button>
                <button className="hover:bg-gradient-to-r from-indigo-500 to-violet-700 p-3 rounded-lg drop-shadow-xl">About</button>
                <button className="hover:bg-gradient-to-r from-indigo-500 to-violet-700 p-3 rounded-lg drop-shadow-xl">Contact Us</button>
            </div>
        </nav>
    )
}