import { Link, NavLink } from 'react-router-dom';

function Header({ cartCount }) {
  return (
    <header className="header">
      <div className="container header-content">
        <Link to="/" className="logo">
          Pizza<span>Time</span>
        </Link>

        <nav className="nav">
          <NavLink to="/">Главная</NavLink>
          <NavLink to="/menu">Меню</NavLink>
          <NavLink to="/cart">Корзина ({cartCount})</NavLink>
          <NavLink to="/order">Заказ</NavLink>
          <NavLink to="/admin">Админ</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;