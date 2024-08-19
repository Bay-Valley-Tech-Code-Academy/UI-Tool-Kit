'use client'

import { useEffect, useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { PlusSmallIcon } from "@heroicons/react/24/outline";
import PromoSection from "../components/promosection";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from the API route
    async function fetchProducts() {
      try {
        const res = await fetch("/api/products");

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.log("Error fetching data: ", error);
      }
    }

    fetchProducts();
  }, []);

    

  return (
    <div className="bg-gradient-to-r from-[#3D3860] via-[#392F5A] to-[#3F3D64] lg:h-screen">
      <PromoSection />
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 flex gap-20">
        <div className="bg-[#FFF8F0] py-2 p-4 h-10 rounded-md sm:block sm:mt-28 md:mt-16 lg:mt-20">
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
          <h2 className="text-2xl font-bold tracking-tight text-white">
            Product List
          </h2>
          <p className="tracking-tight text-white">
            Check out Bay Valley Tech's high quality merchandise!
          </p>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a
                key={product.id}
                href={`/productlists/${product.id}`}
                className="group relative bg-gradient-to-b from-[#FFF8F0] to-[#FFF8F0] shadow-lg block opacity-90"
                style={{
                  boxShadow: "3px 8px 15.5px 3px rgba(34, 0, 85, 0.3)",
                  textDecoration: "none",
                }}
              >
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    alt={product.imagealt}
                    src={product.imagesrc}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 p-4">
                  <h3 className="text-lg font-bold text-[#392F5A] text-left">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-sm text-[#392F5A] text-left">
                    {product.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <button className="bg-[#392F5A] text-white font-medium py-2 px-4 rounded-lg">
                      Add to cart
                    </button>
                    <span className="text-sm font-medium text-[#392F5A]">
                      {product.price}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}