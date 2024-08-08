import products from '../data/products';


export default function Example() {
  return (
    <div className="bg-gradient-to-r from-[#6503B2] via-[#3C04A7] to-[#000698]">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-white">Product List</h2>
        <p className="tracking-tight text-white">Check out Bay Valley Tech's high quality merchandise!</p>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
              <a
              key={product.id}
              href={`/productlists/${product.id}`}
              className="group relative bg-gradient-to-b from-[#6369F3] to-[#8B33E3] shadow-lg rounded-[11px] block"
              style={{
              boxShadow: '3px 8px 15.5px 3px rgba(34, 0, 85, 0.3)',
              textDecoration: 'none',
              }}
              >
              <div className="bg-[#290082] bg-opacity-40 rounded-[11px] p-4">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-[11px] bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
              </div>
              <div className="mt-4 p-4 text-center">
                <h3 className="text-lg font-semibold text-white">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm text-white">
                  {product.description}
                </p>
                <div className="mt-4 text-sm font-medium text-white">
                  {product.price}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
