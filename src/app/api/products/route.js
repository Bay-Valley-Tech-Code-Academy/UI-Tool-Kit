import { NextResponse } from 'next/server';
import { pool } from '@/app/data/db';

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
