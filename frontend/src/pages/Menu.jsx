import { useState } from 'react';
import PizzaCard from '../components/PizzaCard';
import { pizzas } from '../data/pizzas';

function Menu({ addToCart }) {
  const [category, setCategory] = useState('all');

  const filteredPizzas =
    category === 'all'
      ? pizzas
      : pizzas.filter((pizza) => pizza.category === category);

  return (
    <main className="page">
      <section className="container">
        <div className="page-title">
          <p className="badge">Наше меню</p>
          <h1>Выберите пиццу</h1>
          <p>Можно отфильтровать меню по категориям.</p>
        </div>

        <div className="filters">
          <button
            className={category === 'all' ? 'filter active' : 'filter'}
            onClick={() => setCategory('all')}
          >
            Все
          </button>

          <button
            className={category === 'meat' ? 'filter active' : 'filter'}
            onClick={() => setCategory('meat')}
          >
            Мясные
          </button>

          <button
            className={category === 'cheese' ? 'filter active' : 'filter'}
            onClick={() => setCategory('cheese')}
          >
            Сырные
          </button>

          <button
            className={category === 'spicy' ? 'filter active' : 'filter'}
            onClick={() => setCategory('spicy')}
          >
            Острые
          </button>

          <button
            className={category === 'special' ? 'filter active' : 'filter'}
            onClick={() => setCategory('special')}
          >
            Особые
          </button>
        </div>

        <div className="pizza-grid">
          {filteredPizzas.map((pizza) => (
            <PizzaCard key={pizza.id} pizza={pizza} addToCart={addToCart} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Menu;