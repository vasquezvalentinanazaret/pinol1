CREATE TABLE users (
  id TEXT PRIMARY KEY,
  email TEXT,
  role TEXT
);

CREATE TABLE orders (
  id TEXT PRIMARY KEY,
  user_id TEXT,
  total NUMERIC,
  status TEXT
);

CREATE TABLE payments (
  id TEXT PRIMARY KEY,
  order_id TEXT,
  method TEXT,
  status TEXT
);
