-- Create the database
CREATE DATABASE checkout_db;

-- Connect to the database
\c checkout_db;

-- Create the table for storing checkout form data
CREATE TABLE checkout_data (
    id SERIAL PRIMARY KEY,
    country VARCHAR(255) NOT NULL,
    state VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    zip_code VARCHAR(20) NOT NULL,
    card_name VARCHAR(255) NOT NULL,
    card_number VARCHAR(20) NOT NULL,
    security_code VARCHAR(4) NOT NULL,
    expiration_date VARCHAR(7) NOT NULL,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Insert a sample record (optional)
INSERT INTO checkout_data (country, state, city, zip_code, card_name, card_number, security_code, expiration_date)
VALUES ('USA', 'California', 'Merced', '95340', 'John Doe', '1234567812345678', '123', '12/25');
