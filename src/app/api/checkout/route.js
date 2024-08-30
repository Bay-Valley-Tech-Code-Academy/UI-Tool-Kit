// src/app/api/checkout/route.js

import { NextResponse } from 'next/server';
import { Client } from 'pg';

const client = new Client({
    connectionString: process.env.DATABASE_URL, // Ensure you have this in your .env file
});

client.connect();

export async function POST(request) {
    try {
        const data = await request.json();
        
        const { country, state, city, zip_code, card_name, card_number, security_code, expiration_date } = data;

        // Insert data into the checkout_data table
        const query = `
            INSERT INTO checkout_data (country, state, city, zip_code, card_name, card_number, security_code, expiration_date)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        `;

        const values = [country, state, city, zip_code, card_name, card_number, security_code, expiration_date];

        await client.query(query, values);

        return NextResponse.json({ message: 'Checkout data saved successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error saving checkout data:', error);
        return NextResponse.json({ message: 'Failed to save checkout data' }, { status: 500 });
    }
}
