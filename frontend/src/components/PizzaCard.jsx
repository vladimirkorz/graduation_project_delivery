function PizzaCard({ pizza, addToCart }) {
  return (
    <article className="pizza-card">
      <div className="pizza-image">{pizza.emoji}</div>

      <div className="pizza-info">
        <h3>{pizza.name}</h3>
        <p>{pizza.description}</p>

        <div className="pizza-bottom">
          <span className="price">{pizza.price} ₽</span>
          <button className="button small" onClick={() => addToCart(pizza)}>
            В корзину
          </button>
        </div>
      </div>
    </article>
  );
}

export default PizzaCard;