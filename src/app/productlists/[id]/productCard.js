import React, { useState } from 'react';

export default function ProductCard({ product, onCardClick, onAddToCart }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group cursor-pointer border border-gray-300 rounded-lg overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onCardClick}
    >
      {/* Product Image and Title Container */}
      <div className="relative">
        <div className="aspect-w-4 aspect-h-3">
          <img
            src={product.imagesrc}
            alt={product.imagealt}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent text-white p-2 border-t border-gray-300">
          <p className="text-lg font-semibold">{product.name}</p>
        </div>

        {/* Popup Description */}
        <div
          className={`absolute inset-0 bg-gray-800 text-white p-4 rounded-lg flex flex-col justify-between transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'} ${isHovered ? 'flex' : 'hidden'} items-center justify-center`}
          style={{ top: 0, left: 0, right: 0, bottom: 0 }}
        >
          <p className="text-center">{product.description}</p>
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevent click event from triggering card click
              onAddToCart();
            }}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg border border-blue-600"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
