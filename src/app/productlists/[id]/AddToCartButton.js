"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddToCartButton({ product }) {
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();
  console.log(product)
  const handleAddToCart = () => {
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

    // Redirect to the shopping cart page
    router.push("/cart");
  };

  return (
    <form
      className="mt-10"
      onSubmit={(e) => {
        e.preventDefault();
        handleAddToCart();
      }}
    >
      <div className="flex justify-evenly">
        <label htmlFor="quantity" className="text-white">
          How many:
        </label>
        <input
          type="number"
          name="quantity"
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          min="1"
          max="99"
        >
        </input>
      </div>
      <button
        type="submit"
        className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-[#FFF8F0] px-8 py-3 text-base font-medium text-[#392F5A] hover:bg-[#F2E6D7] focus:outline-none focus:ring-2 focus:ring-[#392F5A] focus:ring-offset-2"
      >
        Add to bag
      </button>
    </form>
  );
}
