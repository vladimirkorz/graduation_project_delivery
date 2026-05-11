import { useState } from 'react';
import { Link } from 'react-router-dom';

function Order({ cart, clearCart }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    payment: 'cash',
    comment: '',
  });

  const [message, setMessage] = useState('');

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim() || !formData.address.trim()) {
      setMessage('Заполните имя, телефон и адрес доставки.');
      return;
    }

    if (formData.phone.trim().length < 10) {
      setMessage('Введите корректный номер телефона.');
      return;
    }

    setMessage('Заказ успешно оформлен! Оператор скоро свяжется с вами.');

    setFormData({
      name: '',
      phone: '',
      address: '',
      payment: 'cash',
      comment: '',
    });

    clearCart();
  };

  return (
    <main className="page">
      <section className="container">
        <div className="page-title">
          <p className="badge">Оформление</p>
          <h1>Оформление заказа</h1>
          <p>Введите контактные данные и адрес доставки.</p>
        </div>

        {cart.length === 0 && !message ? (
          <div className="empty-block">
            <h2>Нет товаров для оформления</h2>
            <p>Сначала добавьте пиццу в корзину.</p>
            <Link to="/menu" className="button">
              Перейти к меню
            </Link>
          </div>
        ) : (
          <div className="order-layout">
            <form className="order-form" onSubmit={handleSubmit}>
              <label>
                Имя
                <input
                  type="text"
                  name="name"
                  placeholder="Введите имя"
                  value={formData.name}
                  onChange={handleChange}
                />
              </label>

              <label>
                Телефон
                <input
                  type="tel"
                  name="phone"
                  placeholder="+7 999 123 45 67"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </label>

              <label>
                Адрес доставки
                <input
                  type="text"
                  name="address"
                  placeholder="Улица, дом, квартира"
                  value={formData.address}
                  onChange={handleChange}
                />
              </label>

              <label>
                Способ оплаты
                <select
                  name="payment"
                  value={formData.payment}
                  onChange={handleChange}
                >
                  <option value="cash">Наличными курьеру</option>
                  <option value="card">Картой курьеру</option>
                  <option value="online">Онлайн-оплата</option>
                </select>
              </label>

              <label>
                Комментарий к заказу
                <textarea
                  name="comment"
                  placeholder="Например: не звонить в домофон"
                  value={formData.comment}
                  onChange={handleChange}
                />
              </label>

              <button className="button full" type="submit">
                Подтвердить заказ
              </button>

              {message && <p className="form-message">{message}</p>}
            </form>

            <aside className="summary">
              <h2>Ваш заказ</h2>

              {cart.map((item) => (
                <p key={item.id}>
                  {item.name} × {item.quantity}
                </p>
              ))}

              <p className="summary-total">{total} ₽</p>
            </aside>
          </div>
        )}
      </section>
    </main>
  );
}

export default Order;