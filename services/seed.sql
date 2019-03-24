DROP DATABASE IF EXISTS zillow;
CREATE DATABASE zillow;

\c zillow; 

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


INSERT INTO sellers (first_name, last_name, phone_number, email, company, token) VALUES 
('Richard', 'Green', '123-456-7890', 'richardgreen@pursuit.org', 'Big Business', 'somenumber');

INSERT INTO listings (cost, address, yearbuilt, heating, cooling, parking, numDay, type) VALUES 
('370000', '123 Adam st','2010', 'hot', 'its brick','yes', '1', 'Buy');

INSERT INTO buyer (fullname, email) VALUES 
('some one', 'mike@abc.com');
