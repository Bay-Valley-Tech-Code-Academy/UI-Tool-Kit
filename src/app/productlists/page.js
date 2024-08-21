"use client";

import { useEffect, useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { PlusSmallIcon } from "@heroicons/react/24/outline";
import PromoSection from "../components/promosection";
import products from "../data/products";
import { useRouter } from "next/navigation";

export default function ProductList() {
  const router = useRouter();

  const handleAddToCart = (product) => {
    // Retrieve the existing cart from localStorage
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    let newCart = [];

    if (existingCart.some((item) => item.id === product.id)) {
      newCart = existingCart.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: Number(item.quantity) + Number(1),
          };
        }
        return item;
      });
    } else {
      const updatedProduct = { ...product, quantity: Number(1) };
      newCart = [...existingCart, updatedProduct];
    }

    // Save the updated cart back to localStorage
    localStorage.setItem("cart", JSON.stringify(newCart));

    // Redirect to the shopping cart page
    router.push("/cart");
  };

  const handleCardClick = (id) => {
    // Navigate to the dynamic product page
    router.push(`/productlists/${id}`);
  };

  useEffect(() => {
    return () => {
      // Clean up the class on component unmount
      document.documentElement.style.overflowY = "";
    };
  }, []);

  return (
    <div className="bg-gradient-to-r from-[#3D3860] via-[#392F5A] to-[#3F3D64] lg:min-h-screen">
      <PromoSection />
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 flex flex-col gap-20">
        <div className="flex justify-between items-center flex-col sm:flex-row">
          <div>
            <h1 className="text-[#FFF8F0]">Product List</h1>
            <p className="text-[#FFF8F0]">Check out Bay Valley Tech's high quality merchandise!</p>
          </div>
          <div className="bg-[#FFF8F0] py-2 p-4 h-10 rounded-md sm:block">
            <Menu as="div">
              {({ open }) => {
                useEffect(() => {
                  if (open) {
                    document.documentElement.style.overflowY = "auto";
                  } else {
                    document.documentElement.style.overflowY = "";
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
                      className="origin-top-right border border-white/5 bg-[#F1FAEE] mt-2 p-4 rounded-md w-40"
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
        </div>
        <div>
          <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group relative bg-[#F1FAEE] shadow-lg block opacity-90 flex flex-col h-full max-h-[400px] rounded-md transition-transform transform hover:scale-105"
                style={{
                  boxShadow: "3px 8px 15.5px 3px rgba(34, 0, 85, 0.3)",
                  textDecoration: "none",
                }}
                onClick={() => handleCardClick(product.id)}
              >
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-t-md bg-gray-200 lg:aspect-none lg:h-48">
                  <img
                    alt={product.imagealt}
                    src={product.imagesrc}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="flex-grow p-2">
                  <h3 className="text-lg font-bold text-black text-left">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-sm text-black text-left">
                    {product.description}
                  </p>
                </div>
                <div className="flex justify-between p-2 items-center">
                  <button
                    className="bg-[#392F5A] text-white px-4 py-2 rounded-md hover:bg-white active:bg-[#F1FAEE] hover:text-[#392F5A] transition duration-150 ease-in-out"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent triggering the product detail click
                      handleAddToCart(product);
                    }}
                  >
                    Add to cart
                  </button>
                  <p className="text-sm font-medium text-black ml-4">
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
