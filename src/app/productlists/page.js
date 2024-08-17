"use client"; // Ensure this component is treated as a client component

import { useEffect } from 'react';
import products from '../data/products';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { PlusSmallIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';

export default function ProductList() {
  const router = useRouter();

  const handleAddToCart = (product) => {
    // Retrieve the existing cart from localStorage
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];

    // Add the new product to the cart
    const newCart = [...existingCart, product];

    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(newCart));

    // Redirect to the shopping cart page
    router.push('/cart');
  };

  const handleProductClick = (productId) => {
    // Navigate to the product detail page
    router.push(`/productlists/${productId}`);
  };

  useEffect(() => {
    return () => {
      // Clean up the class on component unmount
      document.documentElement.style.overflowY = '';
    };
  }, []);

  return  (
    <div className="relative bg-[#1D3557] lg:h-screen">
      {/* Background texture overlay */}
      <div className="absolute inset-0"style={{backgroundImage: `url('https://texturelabs.org/wp-content/uploads/Texturelabs_Metal_124S.jpg')`,
          opacity:0.3,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex:0, // Ensure it's behind everything
        }}
      />
        <div className="relative z-10 mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 flex gap-20">
          <div className="bg-[#FFF8F0] py-2 p-4 h-10 rounded-md sm:block sm:mt-28 md:mt-16 lg:mt-20">
            <Menu as="div">
            {({ open }) => {
              useEffect(() => {
                if (open) {
                  document.documentElement.style.overflowY = 'auto';
                } else {
                  document.documentElement.style.overflowY = '';
                }
              }, [open]);
              return (
                <>
                  <MenuButton className="inline-flex gap-3">
                    <p className="font-medium text-lg">Categories</p>
                    <PlusSmallIcon className="size-6" />
                  </MenuButton>
                  <MenuItems
                    transition
                    anchor="bottom left"
                    className="origin-top-right border border-white/5 bg-[#FFF8F0] mt-2 p-4 rounded-md w-40"
                  >
                    <MenuItem>
                      <button className="group flex w-full p-1 hover:bg-neutral-300">
                        Items
                      </button>
                    </MenuItem>
                    <div className="my-1 h-px bg-black/5" />
                    <MenuItem>
                      <button className="group flex w-full p-1 hover:bg-neutral-200">
                        Hoodies
                      </button>
                    </MenuItem>
                    <div className="my-1 h-px bg-black/5" />
                    <MenuItem>
                      <button className="group flex w-full p-1 hover:bg-neutral-200">
                        Shirts
                      </button>
                    </MenuItem>
                    <div className="my-1 h-px bg-black/5" />
                    <MenuItem>
                      <button className="group flex w-full p-1 hover:bg-neutral-200">
                        Miscellaneous
                      </button>
                    </MenuItem>
                  </MenuItems>
                </>
              );
            }}
          </Menu>
        </div>
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-[#F1FAEE]">Product List</h2>
          <p className="tracking-tight text-[#F1FAEE]">Check out Bay Valley Tech's high quality merchandise!</p>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group relative bg-[#457B9D] shadow-lg block opacity-90 flex flex-col h-full max-h-[400px] rounded-md transition-transform transform hover:scale-105"// Added rounded-md
                style={{
                  boxShadow: '3px 8px 15.5px 3px rgba(34, 0, 85, 0.3)',
                  textDecoration: 'none',
                }}
                onClick={() => handleProductClick(product.id)} // Handle click for product details
              >
                {/* Pseudo-element for texture overlay */}
                <div 
                  className="absolute inset-0 bg-[url('https://texturelabs.org/wp-content/uploads/Texturelabs_Fabric_155S.jpg')] opacity-20 bg-cover bg-center z-0"
                  style={{ pointerEvents: 'none', zIndex: -1 }}
                />

                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-t-md bg-gray-200 lg:aspect-none lg:h-48"> {/* Reduced height */}
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="flex-grow p-2"> {/* Reduced padding */}
                  <h3 className="text-lg font-bold text-[#F1FAEE] text-left">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-sm text-[#F1FAEE] text-left">
                    {product.description}
                  </p>
                </div>
                <div className="flex justify-between p-2 items-center"> {/* Footer section */}
                  <button 
                    className="bg-[#A8DADC] text-[#1D3557] px-4 py-2 rounded-md hover:bg-[#2F274D] active:bg-[#261E40] hover:text-[#F1FAEE] transition duration-150 ease-in-out"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent triggering the product detail click
                      handleAddToCart({
                        ...product,
                        imageSrc: product.imageSrc,  // Ensure imageSrc is included
                        imageAlt: product.imageAlt,  // Ensure imageAlt is included
                      });
                    }}
                  >
                    Add to cart
                  </button>
                  <p className="text-sm font-medium text-[#F1FAEE] ml-4">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
