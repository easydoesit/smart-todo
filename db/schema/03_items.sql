-- Drop and recreate items table.

DROP TABLE IF EXISTS items CASCADE;
CREATE TABLE items (
id SERIAL PRIMARY KEY NOT NULL,
category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE,
user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
item_name TEXT NOT NULL,
created_date TIMESTAMP NOT NULL DEFAULT NOW(),
due_date TIMESTAMP,
completed_date TIMESTAMP,
priority INTEGER CHECK (priority >= 0),
item_status BOOLEAN NOT NULL DEFAULT TRUE
);
