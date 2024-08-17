import pool from "../data/postgres"; // Adjust the import path according to your structure

export default async function ProductList() {
  let products = [];
  
  try {
    const client = await pool.connect();
    console.log("Connected to the database!");

    const result = await client.query("SELECT * FROM products");
    products = result.rows;

    client.release(); // Release the client back to the pool
  } catch (error) {
    console.log("Error fetching data: ", error);
  }

  return (
    <div className="bg-gradient-to-r from-[#3D3860] via-[#392F5A] to-[#3F3D64]">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-white text-left">Product List</h2>
        <p className="tracking-tight text-white text-left">Check out Bay Valley Tech's high quality merchandise!</p>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a
              key={product.id}
              href={`/productlists/${product.id}`}
              className="group relative bg-gradient-to-b from-[#FFF8F0] to-[#FFF8F0] shadow-lg block opacity-90"
              style={{
                boxShadow: '3px 8px 15.5px 3px rgba(34, 0, 85, 0.3)',
                textDecoration: 'none',
              }}
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  alt={product.imagealt}
                  src={product.imagesrc}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 p-4">
                <h3 className="text-lg font-bold text-[#392F5A] text-left">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm text-[#392F5A] text-left">
                  {product.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <button
                    className="bg-[#392F5A] text-white font-medium py-2 px-4 rounded-lg"
                  >
                    Add to cart
                  </button>
                  <span className="text-sm font-medium text-[#392F5A]">
                    {product.price}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
