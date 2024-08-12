import { UserCircleIcon } from "@heroicons/react/24/outline"

export default function Box(itemData) {
  return (
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid lg:grid-rows-2">
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full gap-x-6">
            
            {itemData.map((item, i) => (
              <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-row lg:justify-center gap-x-6" key={i}>
                <div className="mx-auto max-w-xs " >
                  <p className="mt-6 flex items-baseline justify-center gap-x-2 px-[5rem]">
                    <span className="text-5xl font-bold tracking-tight text-gray-900">{item.description}</span>
                  </p>
                  <p className="text-base font-semibold text-gray-600">{item.title}</p>
                  <a
                    href="#"
                    className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    {item.button}
                  </a>
                  <p className="mt-6 text-xs leading-5 text-gray-600 flex flex-row justify-end">
                    <UserCircleIcon className="h-6"/>{item.p}
                  </p>
                </div>
              </div>
              ))}
            
          </div>
        </div>
  )
}