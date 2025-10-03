-- Active: 1759320660083@@localhost@5432@coin_collection_manager@public
CREATE DATABASE Coin_Collection_Manager;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);


CREATE TABLE collections (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    title VARCHAR(200) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);


CREATE TABLE coins (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    country VARCHAR(100),
    year INT,
    material VARCHAR(50),
    value NUMERIC,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE collection_coins (
    id SERIAL PRIMARY KEY,
    collection_id INT REFERENCES collections(id),
    coin_id INT REFERENCES coins(id),
    condition VARCHAR(50),
    note TEXT,
    added_at TIMESTAMP DEFAULT NOW()
);



CREATE TABLE trades (
    id SERIAL PRIMARY KEY,
    from_user_id INT REFERENCES users(id),
    to_user_id INT REFERENCES users(id),
    coin_id INT REFERENCES coins(id),
    status VARCHAR(20) DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT NOW()
);


CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    collection_id INT REFERENCES collections(id),
    user_id INT REFERENCES users(id),
    text TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);


CREATE TABLE tags (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL
);


CREATE TABLE collection_tags (
    id SERIAL PRIMARY KEY,
    collection_id INT REFERENCES collections(id),
    tag_id INT REFERENCES tags(id)
);
