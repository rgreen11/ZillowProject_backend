DROP TABLE IF EXISTS sellers;
DROP TABLE IF EXISTS listings;
DROP TABLE IF EXISTS buyer;

CREATE TABLE sellers (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR NOT NULL,
    last_name VARCHAR NOT NULL,
    phone_number VARCHAR NOT NULL,
    email VARCHAR NOT NULL,
    company VARCHAR NOT NULL,
    token VARCHAR NOT NULL
);

CREATE TABLE listings (
    id SERIAL PRIMARY KEY,
    cost VARCHAR NOT NULL,
    address VARCHAR NOT NULL,
    yearbuilt VARCHAR NOT NULL,
    heating VARCHAR NOT NULL,
    cooling VARCHAR NOT NULL,
    parking VARCHAR NOT NULL,
    numDay VARCHAR NOT NULL,
    type VARCHAR NOT NULL,
    listings_id INT REFERENCES sellers(id) 
);

CREATE TABLE buyer (
    id SERIAL PRIMARY KEY,
    fullname VARCHAR NOT NULL,
    email VARCHAR NOT NULL,
    buyer_id INT REFERENCES listings(id) 
);