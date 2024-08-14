import pool from "../data/postgres"; // Adjust the import path according to your structure

export default async function ProductList() {
  let products = [];
  
  try {
    const client = await pool.connect();
    console.log("Connected to the database!");

    const result = await client.query("SELECT * FROM productlist");
    products = result.rows;

    client.release(); // Release the client back to the pool
  } catch (error) {
    console.log("Error fetching data: ", error);
  }

  return (
    <div className="bg-gradient-to-r from-[#3D3860] via-[#392F5A] to-[#3F3D64]">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-white">Product List</h2>
        <p className="tracking-tight text-white">Check out Bay Valley Tech's high quality merchandise!</p>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
              <a
              key={product.id}
              href={`/productlists/${product.id}`}
              className="group relative bg-gradient-to-b from-[#FFF8F0] to-[#FFF8F0] shadow-lg rounded-[11px] block opacity-90"
              style={{
              boxShadow: '3px 8px 15.5px 3px rgba(34, 0, 85, 0.3)',
              textDecoration: 'none',
              }}
              >
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-[11px] bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
              <div className="mt-4 p-4 text-center">
                <h3 className="text-lg font-bold text-[#392F5A]">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm text-[#392F5A]">
                  {product.description}
                </p>
                <div className="mt-4 text-sm font-medium text-[#392F5A]">
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
