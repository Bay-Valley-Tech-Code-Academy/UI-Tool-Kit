import { NextResponse } from 'next/server';
import { Pool } from 'pg';

// Configure your PostgreSQL connection
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

export async function GET() {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM products');
    client.release();

    return NextResponse.json(result.rows);
  } catch (err) {
    console.error('Error fetching products', err);
    return NextResponse.error(new Error('Failed to fetch products'));
  }
}
