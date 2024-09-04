import { NextResponse } from 'next/server';
import { Client } from 'pg';

export async function POST(request) {
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
    });

    try {
        await client.connect();
        const data = await request.json();
        const { 
            country, state, city, zip_code, card_name, 
            card_number, security_code, expiration_date,
            cart
        } = data;

        // Insert data into the checkout_data table
        const query = `
            INSERT INTO checkout_data (country, state, city, zip_code, card_name, card_number, security_code, expiration_date)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
            RETURNING id
        `;
        const values = [country, state, city, zip_code, card_name, card_number, security_code, expiration_date];
        const result = await client.query(query, values);
        const checkoutDataId = result.rows[0].id;

        // Insert into orders table
        const orderQuery = `
            INSERT INTO orders (checkout_data_id, created_at)
            VALUES ($1, NOW())
            RETURNING id
        `;
        const orderValues = [checkoutDataId];
        const orderResult = await client.query(orderQuery, orderValues);
        const orderId = orderResult.rows[0].id;

        // Insert into order_items table with product price
        const orderItemsQuery = `
            INSERT INTO order_items (order_id, product_id, quantity, price)
            VALUES ($1, $2, $3, $4)
        `;
        for (const item of cart) {
            // Fetch the price of the product
            const productQuery = 'SELECT price FROM products WHERE id = $1';
            const productResult = await client.query(productQuery, [item.id]);
            const productPrice = productResult.rows[0]?.price || 0; // Default to 0 if price is not found

            await client.query(orderItemsQuery, [orderId, item.id, item.quantity, productPrice]);
        }

        return NextResponse.json({ message: 'Checkout data saved successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error saving checkout data:', error);
        return NextResponse.json({ message: 'Failed to save checkout data' }, { status: 500 });
    } finally {
        await client.end();
    }
}
