import { Link } from 'react-router-dom';

function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <p className="badge">Доставка горячей пиццы</p>
            <h1>Свежая пицца прямо к твоей двери</h1>
            <p>
              Выбирай любимую пиццу, добавляй в корзину и оформляй заказ онлайн
              за пару минут.
            </p>

            <div className="hero-actions">
              <Link to="/menu" className="button">
                Перейти к меню
              </Link>

              <Link to="/cart" className="button secondary">
                Открыть корзину
              </Link>
            </div>
          </div>

          <div className="hero-card">
            <h2>PizzaTime</h2>
            <p>Горячая. Быстрая. Вкусная.</p>
          </div>
        </div>
      </section>

      <section className="features container">
        <div className="feature">
          <h3>Быстрая доставка</h3>
          <p>Привезём заказ максимально быстро.</p>
        </div>

        <div className="feature">
          <h3>Горячая пицца</h3>
          <p>Пицца приезжает свежей и ароматной.</p>
        </div>

        <div className="feature">
          <h3>Удобный заказ</h3>
          <p>Оформление заказа прямо на сайте.</p>
        </div>
      </section>
    </main>
  );
}

export default Home;