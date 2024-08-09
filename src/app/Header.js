'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  PopoverGroup,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div>
          <a href="#">
            <img 
              src="https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-6/352217654_6317002281698799_670870340879095555_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=piDvIbaDQacQ7kNvgESxhY7&_nc_ht=scontent-sjc3-1.xx&oh=00_AYDXv94kQL55t8Kr4k4xpWHpS5gIje1HY4n1DjkmXfnFvA&oe=66BC143C"
              alt="Bay Valley Tech logo"
              className="w-12"
            />
          </a>
        </div>
        <div className="flex justify-end">
          <PopoverGroup className="menu-items hidden lg:flex lg:gap-x-12">
            
            <a href="/#" className="text-sm font-semibold leading-6 text-gray-900">
              Home
            </a>
            <a href="productlists#" className="text-sm font-semibold leading-6 text-gray-900">
              Product Lists
            </a>
            <a href="cart#" className="text-sm font-semibold leading-6 text-gray-900">
              Shopping Cart
            </a>
            <a href="about#" className="text-sm font-semibold leading-6 text-gray-900">
              About
            </a>
          </PopoverGroup>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="hamburger-icon -m-2.5 inline-flex items-center justify-end rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">

                <a
                  href="/#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Home
                </a>
                <a
                  href="productlists#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Product Lists
                </a>
                <a
                  href="cart#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Shopping Cart
                </a>
                <a
                  href="about#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
