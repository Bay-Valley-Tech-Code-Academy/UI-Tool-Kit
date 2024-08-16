import React from "react";
import Navbar from "../app/components/navbar";

export default function Home() {
  return (
    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-[11px]bg-gray-200 lg:aspect-none group-hover:opacity-75">
      <div className="bg-[#392F5A]">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 gap-x-20">
          <div className="text-center px-8">
            <h1 className="text-4xl font-extrabold tracking-wide text-[#FFF8F0] sm:text-6xl ">
              Welcome to the E-Commerce UI Tool Kit!
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#FFF8F0] ">
              With this you can make your own Website! There are many templates
              that you can use! Click the blue button below to head to the
              product lists page.
            </p>
            <div
              className="mt-10 flex items-center justify-center gap-x-6 p-10"
              style={{ gap: "15rem" }}
            >
              <a
                href="productlists#"
                className="rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all duration-200 ease-in-out transform hover:-translate-y-1 scale-105"
              >
                Get started
              </a>
              <a
                href="about#"
                className="rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all duration-200 ease-in-out transform hover:-translate-y-1 scale-105"
              >
                Learn more <span aria-hidden="true"></span>
              </a>
            </div>
          </div>

          <a
            href="story"
            className="flex justify-center rounded-lg   bg-indigo-500  pt-5  text-sm font-semibold text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 "
          >
            Learn Our Story <span aria-hidden="true"></span>
          </a>
        </div>
      </div>
    </div>
  );
}
