import React from "react";

export default function Home() {
  return (
    <div className="bg-[#3D3860] min-h-screen flex flex-col">
      <div className="flex flex-col items-center justify-center flex-grow">
        <div className="flex items-center justify-center gap-16 max-w-7xl mx-auto px-8 py-32">
          <div className="text-center max-w-2xl">
            <h1 className="text-4xl font-extrabold tracking-wide text-white sm:text-6xl">
              Welcome to UI Shop Tool Kit!
            </h1>
            <p className="mt-6 text-lg leading-8 text-white">
              With this you can make your own Website! There are many templates
              that you can use! Click the blue button below to head to the
              product lists page.
            </p>
            <div className="mt-10 flex items-center justify-center">
              <a
                href="productlists#"
                className="rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-transform transform hover:-translate-y-1 scale-105"
              >
                Get Started
              </a>
            </div>
          </div>
          <div className="w-full max-w-lg">
            <img
              src="/images/3d-shopping-icon-illustration.png"
              alt="Shopping Cart Placeholder"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
