'use client';

import { useRouter } from 'next/navigation';

export default function AddToCartButton({ product }) {
  const router = useRouter();

  const handleAddToCart = () => {
    // Retrieve the existing cart from localStorage
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];

    // Add the new product to the cart
    const newCart = [...existingCart, product];

    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(newCart));

    // Redirect to the shopping cart page
    router.push('/cart');
  };

  return (
    <form className="mt-10" onSubmit={(e) => { e.preventDefault(); handleAddToCart(); }}>
      <button
        type="submit"
        className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-[#FFF8F0] px-8 py-3 text-base font-medium text-[#392F5A] hover:bg-[#F2E6D7] focus:outline-none focus:ring-2 focus:ring-[#392F5A] focus:ring-offset-2"
      >
        Add to bag
      </button>
    </form>
  );
}
