"use client";

import { useEffect, useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { PlusSmallIcon } from "@heroicons/react/24/outline";
import PromoSection from "../components/promosection";
import products from "../data/products";
import { useRouter } from "next/navigation";

export default function ProductList() {
  const router = useRouter();

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [quantity, setQuantity] = useState({});
  const [hoveredProductId, setHoveredProductId] = useState(null); // New state for hover tracking

  const handleAddToCart = (product, quantity) => {
    // Retrieve the existing cart from localStorage
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    let newCart = [];

    if (existingCart.some((item) => item.id === product.id)) {
      newCart = existingCart.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: Number(item.quantity) + Number(quantity),
          };
        }
        return item;
      });
    } else {
      const updatedProduct = { ...product, quantity: Number(quantity) };
      newCart = [...existingCart, updatedProduct];
    }

    // Save the updated cart back to localStorage
    localStorage.setItem("cart", JSON.stringify(newCart));

    //alert/pop up goes here
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

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  const handleQuantityChange = (id, value) => {
    setQuantity({
      ...quantity,
      [id]: value,
    });
  };

  return (
    <div className="bg-gradient-to-r from-[#3D3860] via-[#392F5A] to-[#3F3D64] lg:min-h-screen">
      <PromoSection />
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 flex flex-col gap-20">
        <div className="flex justify-between items-center flex-col sm:flex-row">
          <div>
            <h1 className="text-[#FFF8F0]">Product List</h1>
            <p className="text-[#FFF8F0]">
              Check out Bay Valley Tech's high quality merchandise!
            </p>
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
                        <button
                          className="group flex w-full p-1 hover:bg-neutral-300"
                          onClick={() => setSelectedCategory("shirt")}
                        >
                          Shirts
                        </button>
                      </MenuItem>
                      <div className="my-1 h-px bg-black/5" />
                      <MenuItem>
                        <button
                          className="group flex w-full p-1 hover:bg-neutral-200"
                          onClick={() => setSelectedCategory("sweater")}
                        >
                          Sweaters
                        </button>
                      </MenuItem>
                      <div className="my-1 h-px bg-black/5" />
                      <MenuItem>
                        <button
                          className="group flex w-full p-1 hover:bg-neutral-200"
                          onClick={() => setSelectedCategory("miscellaneous")}
                        >
                          Miscellaneous
                        </button>
                      </MenuItem>
                      <div className="my-1 h-px bg-black/5" />
                      <MenuItem>
                        <button
                          className="group flex w-full p-1 hover:bg-neutral-200"
                          onClick={() => setSelectedCategory(null)}
                        >
                          All Items
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
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group relative bg-[#F1FAEE] shadow-lg opacity-90 flex flex-col h-full max-h-[400px] rounded-md transition-transform transform hover:scale-105"
              >
                <div
                  className="relative aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-t-md bg-gray-200 lg:aspect-none lg:h-56"
                  onMouseEnter={() => setHoveredProductId(product.id)}
                  onMouseLeave={() => setHoveredProductId(null)}
                >
                  <img
                    alt={product.imagealt}
                    src={product.imagesrc}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                  {hoveredProductId === product.id && (
                    <div className="absolute inset-0 bg-gray-800 text-white p-4 rounded-lg flex items-center justify-center opacity-90 cursor-pointer" onClick={() => handleCardClick(product.id)}>
                      <p className="text-center">{product.description}</p>
                    </div>
                  )}
                </div>
                <div className="flex-grow p-2">
                  <h3 className="text-lg font-semibold text-[#3F3D64] text-center">
                    {product.name}
                  </h3>
                </div>
                <div className="flex flex-col items-center ml-[10px] mr-[10px] p-2 items-left">
                  <div>
                    <p className="text-md text-black ml-4">
                      {`$` + product.price}
                    </p>
                  </div>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleAddToCart(product, quantity[product.id] || 1);
                    }}
                  >
                    <div>
                      <label
                        htmlFor={`quantityProduct-${product.id}`}
                        className="text-black pr-2"
                      >
                        How many:
                      </label>
                      <input
                        type="number"
                        name={`quantity-${product.id}`}
                        id={`quantityProduct-${product.id}`}
                        value={quantity[product.id] || ''}
                        onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                        min="1"
                        max="99"
                      ></input>
                    </div>
                    <div className="flex justify-center">
                      <button className="bg-blue-500 mb-2 mt-2 px-3 py-2 rounded-2xl text-white shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-transform transform hover:-translate-y-1 scale-105">
                        Add to cart
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
