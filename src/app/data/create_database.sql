-- TO RUN:
-- In terminal, type 'psql -U postgres -f src/app/data/create_database.sql'
-- [Make sure to replace 'postgres' with your PostgreSQL username if it's different.

-- Create the database
CREATE DATABASE productlist;

-- Connect to the newly created database
\c productlist;

-- Create the products table
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    imageSrc TEXT,
    imageAlt VARCHAR(255),
    price VARCHAR(50),
    description TEXT
);

-- Insert the provided products into the table
INSERT INTO products (name, imageSrc, imageAlt, price, description) VALUES
('Bay Valley Tech T-Shirt', 'https://static.wixstatic.com/media/a4735d_6572a7b1f1b14288a656c75e46f3d4e4~mv2.png/v1/crop/x_201,y_71,w_648,h_633/fill/w_219,h_214,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Hero%20Model%20Image.png1', 'Bay Valley Tech Shirt.', 'Free at events!', 'A comfortable T-shirt that gives you a sense of community...'),
('Bay Valley Tech Light Bulb', 'https://scontent.fsac1-2.fna.fbcdn.net/v/t39.30808-6/352217654_6317002281698799_670870340879095555_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=piDvIbaDQacQ7kNvgH9aZpm&_nc_ht=scontent.fsac1-2.fna&oh=00_AYABJXM4vmx9HJjsVkWB-lUNqwbkMad6icK1AjEHGvcd0A&oe=66BB333C', 'Bay Valley Tech Light Bulb.', '179.99', 'The actual Bay Valley Tech light bulb from the logo!'),
('Bay Valley Tech Sweater', 'https://static.wixstatic.com/media/a4735d_5b7f09339fee43b6b6ba0a80ba96fcb5~mv2.jpg/v1/crop/x_0,y_0,w_2026,h_1061/fill/w_481,h_252,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_5786_edited.jpg', 'Bay Valley Tech Sweater.', '49.99', 'A warm and cozy sweater, great for winter meet-ups.'),
('BVT Directors Autograph', 'https://d3oj2y7irryo5z.cloudfront.net/wp-content/uploads/2021/03/AA-Bay-Valley-Tech-2-1024x645.jpg', 'Bay Valley Tech Directors Autograph.', '99.99', 'A unique autograph from the BVT director himself!');
