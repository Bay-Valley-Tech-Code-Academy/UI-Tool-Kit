// app/api/products/route.js

import pool from "@/app/data/postgres"; // Adjust the path if necessary

export async function GET(request) {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM products");
    client.release();
    
    return new Response(JSON.stringify(result.rows), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error fetching products: ", error);
    
    return new Response(JSON.stringify({ error: "Failed to fetch products" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
