import { Link } from 'react-router-dom';

function Cart({ cart, removeFromCart, increaseQuantity, decreaseQuantity }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <main className="page">
      <section className="container">
        <div className="page-title">
          <p className="badge">Корзина</p>
          <h1>Ваш заказ</h1>
          <p>Здесь можно изменить количество товаров или удалить их.</p>
        </div>

        {cart.length === 0 ? (
          <div className="empty-block">
            <h2>Корзина пуста</h2>
            <p>Добавьте пиццу из меню, чтобы оформить заказ.</p>
            <Link to="/menu" className="button">
              Перейти к меню
            </Link>
          </div>
        ) : (
          <div className="cart-layout">
            <div className="cart-list">
              {cart.map((item) => (
                <div className="cart-item" key={item.id}>
                  <div className="cart-emoji">{item.emoji}</div>

                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.price} ₽ за шт.</p>
                  </div>

                  <div className="quantity">
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                  </div>

                  <strong>{item.price * item.quantity} ₽</strong>

                  <button
                    className="remove"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Удалить
                  </button>
                </div>
              ))}
            </div>

            <aside className="summary">
              <h2>Итого</h2>
              <p>Товаров: {cart.reduce((sum, item) => sum + item.quantity, 0)}</p>
              <p className="summary-total">{total} ₽</p>

              <Link to="/order" className="button full">
                Оформить заказ
              </Link>
            </aside>
          </div>
        )}
      </section>
    </main>
  );
}

export default Cart;