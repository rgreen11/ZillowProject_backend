DROP DATABASE IF EXISTS zillow;
CREATE DATABASE zillow;

\c zillow; 

CREATE TABLE sellers (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR NOT NULL,
    last_name VARCHAR NOT NULL,
    phone_number VARCHAR,
    email VARCHAR,
    company VARCHAR,
    token VARCHAR NOT NULL,
    uid VARCHAR NOT NULL
);

CREATE TABLE listings (
    id SERIAL PRIMARY KEY,
    sellers_id INT NOT NULL,
    cost VARCHAR NOT NULL,
    address VARCHAR NOT NULL,
    yearbuilt VARCHAR,
    heating VARCHAR,
    cooling VARCHAR,
    parking VARCHAR,
    numDay VARCHAR,
    type VARCHAR,
    url VARCHAR,
        FOREIGN KEY (sellers_id)
        REFERENCES sellers(id)
        ON DELETE CASCADE
);

CREATE TABLE buyer (
    id SERIAL PRIMARY KEY,
    listings_id INT NOT NULL,
    fullname VARCHAR NOT NULL,
    email VARCHAR NOT NULL,
        FOREIGN KEY (listings_id)
        REFERENCES listings(id)
        ON DELETE CASCADE
);


INSERT INTO sellers (first_name, last_name, phone_number, email, company, token, uid) VALUES 
('Richard', 'Green', '123-456-7890', 'richardgreen@pursuit.org', 'Big Business', 'somenumber', 'another number');

INSERT INTO listings (sellers_id, cost, address, yearbuilt, heating, cooling, parking, numDay, type, url) VALUES 
(1, '370000', '123 Adam st','2010', 'hot', 'its brick','yes', '1', 'Buy', 'url');

INSERT INTO buyer (listings_id, fullname, email) VALUES 
(1, 'some one', 'mike@abc.com');
