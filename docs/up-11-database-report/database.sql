CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    email VARCHAR(100) UNIQUE,
    address VARCHAR(255) NOT NULL
);

CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE pizzas (
    id SERIAL PRIMARY KEY,
    category_id INTEGER NOT NULL,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price NUMERIC(10, 2) NOT NULL CHECK (price > 0),
    size_cm INTEGER NOT NULL CHECK (size_cm > 0),
    is_available BOOLEAN NOT NULL DEFAULT TRUE,

    CONSTRAINT fk_pizzas_category
        FOREIGN KEY (category_id)
        REFERENCES categories(id)
        ON DELETE RESTRICT
);

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    order_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(50) NOT NULL DEFAULT 'Новый',
    total_price NUMERIC(10, 2) NOT NULL CHECK (total_price >= 0),

    CONSTRAINT fk_orders_user
        FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE
);

CREATE TABLE order_items (
    id SERIAL PRIMARY KEY,
    order_id INTEGER NOT NULL,
    pizza_id INTEGER NOT NULL,
    quantity INTEGER NOT NULL CHECK (quantity > 0),
    price_at_order NUMERIC(10, 2) NOT NULL CHECK (price_at_order > 0),

    CONSTRAINT fk_order_items_order
        FOREIGN KEY (order_id)
        REFERENCES orders(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_order_items_pizza
        FOREIGN KEY (pizza_id)
        REFERENCES pizzas(id)
        ON DELETE RESTRICT
);

INSERT INTO users (name, phone, email, address)
VALUES
('Иван Петров', '+79991112233', 'ivan@example.com', 'ул. Ленина, 10'),
('Анна Смирнова', '+79994445566', 'anna@example.com', 'пр. Мира, 25'),
('Павел Соколов', '+79997778899', 'pavel@example.com', 'ул. Садовая, 4');

INSERT INTO categories (name)
VALUES
('Классические'),
('Мясные'),
('Сырные'),
('Острые'),
('Особые');

INSERT INTO pizzas (category_id, name, description, price, size_cm, is_available)
VALUES
(1, 'Маргарита', 'Томатный соус, моцарелла, базилик', 550.00, 30, TRUE),
(2, 'Пепперони', 'Пепперони, моцарелла, томатный соус', 690.00, 30, TRUE),
(3, 'Четыре сыра', 'Моцарелла, дорблю, пармезан, сливочный сыр', 720.00, 30, TRUE),
(2, 'Мясная', 'Ветчина, бекон, курица, пепперони', 790.00, 35, TRUE),
(5, 'Гавайская', 'Курица, ананасы, моцарелла', 680.00, 30, TRUE),
(4, 'Острая Diablo', 'Острый соус, халапеньо, пепперони', 750.00, 30, TRUE);

INSERT INTO orders (user_id, status, total_price)
VALUES
(1, 'Готовится', 1240.00),
(2, 'Новый', 790.00),
(3, 'В доставке', 1510.00);

INSERT INTO order_items (order_id, pizza_id, quantity, price_at_order)
VALUES
(1, 1, 1, 550.00),
(1, 2, 1, 690.00),
(2, 4, 1, 790.00),
(3, 3, 1, 720.00),
(3, 4, 1, 790.00);