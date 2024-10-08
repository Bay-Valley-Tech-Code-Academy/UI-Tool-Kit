"use client";
import { useState, useEffect } from "react";
import Decimal from "decimal.js";
import { useRouter } from "next/navigation";

export default function Cart() {
  const [cart, setCart] = useState([]);
  const [shippingEstimate, setShippingEstimate] = useState(9.99);
  const [taxEstimate, setTaxEstimate] = useState(32.99);
  const [subtotal, setSubtotal] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      const cartItems = JSON.parse(savedCart);
      
      const validCartItems = cartItems.filter(
        (item) => !isNaN(parseFloat(item.price))
      );

      setCart(cartItems);
      setSubtotal(
        validCartItems
          .reduce(
            (currentValue, item) =>
              new Decimal(parseFloat(item.price))
                .times(item.quantity)
                .plus(currentValue),
            new Decimal(0)
          )
          .toFixed(2)
      );
    }
  }, []);

  const handleRemoveFromCart = (idToRemove) => {
    const updatedCart = cart.filter((item) => item.id !== idToRemove);
    setCart(updatedCart);

    const newSubtotal = updatedCart
      .filter((item) => !isNaN(parseFloat(item.price)))
      .reduce(
        (currentValue, item) =>
          new Decimal(parseFloat(item.price))
            .times(item.quantity)
            .plus(currentValue),
        new Decimal(0)
      )
      .toFixed(2);

    setSubtotal(newSubtotal);

    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const updateQuantity = (id, newQuantity) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });

    setCart(updatedCart);
    setSubtotal(
      updatedCart
        .filter((item) => !isNaN(parseFloat(item.price)))
        .reduce(
          (currentValue, item) =>
            new Decimal(item.price).times(item.quantity).plus(currentValue),
          new Decimal(0)
        )
        .toFixed(2)
    );

    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleQuantityChange = (id, newQuantity) => {
    const parsedQuantity = parseInt(newQuantity);
    if (!isNaN(parsedQuantity)) {
      updateQuantity(id, parsedQuantity);
    }
  };

  const handleBlur = (id, currentQuantity) => {
    if (currentQuantity <= 0 || isNaN(currentQuantity)) {
      handleRemoveFromCart(id);
    }
  };

  return (
    <div className="bg-gradient-to-r from-[#3D3860] via-[#392F5A] to-[#3F3D64] custom-height">
      <div className="p-6 lg:ml-20 lg:mr-20">
        <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Shopping Cart
        </h1>
        <div className="mt-6 flex justify-between flex-col md:flex-row">
          {cart.length > 0 ? (
            <>
              <ul className="lg:w-1/2">
                {cart.map((item) => {
                  return (
                    <li
                      key={item.id}
                      className="group relative bg-gradient-to-b from-[#FFF8F0] to-[#FFF8F0] shadow-lg rounded-[11px] block mb-6 p-6 flex"
                    >
                      <div className="border-[#3D3860] border-8 rounded border-solid mr-4">
                        <img
                          src={item.imagesrc || "/default-image.png"}
                          alt={item.imagealt || "No image available"}
                          className="w-24 h-24 object-cover rounded-md"
                        />
                      </div>
                      <div className="flex flex-col justify-between">
                        <div>
                          <h2 className="text-lg font-medium text-[#392F5A]">
                            {item.name}
                          </h2>
                          <p className="text-base text-[#392F5A]">
                            {item.price}
                          </p>
                        </div>
                        <div className="flex items-end flex-wrap items-center">
                          <p className="pr-2">quantity:</p>
                          <button
                            onClick={() =>
                            item.quantity > 1 &&
                            updateQuantity(item.id, item.quantity - 1)}
                            className="mr-1 rounded-md border border-transparent bg-indigo-600 px-2 py-1 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          >
                            -
                          </button>
                          <input
                            className="w-9"
                            type="number"
                            name={`quantity-${item.id}`}
                            id={`quantityProduct-${item.id}`}
                            value={item.quantity}
                            onChange={(e) =>
                              handleQuantityChange(item.id, e.target.value)
                            }
                            onBlur={() => handleBlur(item.id, item.quantity)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                handleBlur(item.id, item.quantity);
                              }
                            }}
                            min="1"
                            max="99"
                          ></input>
                          <button
                            onClick={() =>
                            item.quantity < 99 &&
                            updateQuantity(item.id, item.quantity + 1)}
                            className="ml-1 rounded-md border border-transparent bg-indigo-600 px-2 py-1 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <button
                        onClick={() => handleRemoveFromCart(item.id)}
                        className="ml-auto text-[#392F5A] hover:text-red-800 absolute top-1 right-2"
                      >
                        X
                      </button>
                    </li>
                  );
                })}
              </ul>
              <div className="lg:w-1/3">
                <div className="bg-gradient-to-b from-[#FFF8F0] to-[#FFF8F0] shadow-lg rounded-[11px] p-4">
                  <h2 className="font-bold text-lg mb-4 text-base text-[#392F5A]">
                    Order Summary
                  </h2>
                  <div className="flex justify-between">
                    <p className="text-base text-[#392F5A]">Subtotal</p>
                    <p className="text-base text-[#392F5A]">${subtotal}</p>
                  </div>
                  <hr className="mb-2" />
                  <div className="flex justify-between">
                    <p className="text-base text-[#392F5A]">
                      Shipping estimate
                    </p>
                    <p className="text-base text-[#392F5A]">
                      ${shippingEstimate}
                    </p>
                  </div>
                  <hr className="mb-2" />
                  <div className="flex justify-between">
                    <p className="text-base text-[#392F5A]">Tax estimate</p>
                    <p className="text-base text-[#392F5A]">${taxEstimate}</p>
                  </div>
                  <hr className="mb-2" />
                  <div className="flex justify-between mt-4">
                    <h2 className="font-bold text-lg text-base text-[#392F5A]">
                      Order total
                    </h2>
                    <p className="text-base text-[#392F5A]">
                      $
                      {new Decimal(subtotal)
                        .plus(new Decimal(shippingEstimate))
                        .plus(new Decimal(taxEstimate))
                        .toFixed(2)}
                    </p>
                  </div>
                  <button
                    onClick={() => router.push("/checkout")}
                    className="mt-4 flex w-full items-center justify-center rounded-md border border-transparent bg-orange-500 px-8 py-3 text-base font-medium text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 transition-transform transform hover:-translate-y-1 scale-105 shadow-lg"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </>
          ) : (
            <p className="text-base text-white">Your cart is empty.</p>
          )}
        </div>
      </div>
    </div>
  );
}
