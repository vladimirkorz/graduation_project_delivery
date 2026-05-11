function Admin() {
  const orders = [
    {
      id: 1,
      client: 'Иван',
      phone: '+7 999 111 22 33',
      address: 'ул. Ленина, 10',
      total: 1240,
      status: 'Готовится',
    },
    {
      id: 2,
      client: 'Анна',
      phone: '+7 999 444 55 66',
      address: 'пр. Мира, 25',
      total: 790,
      status: 'Новый',
    },
    {
      id: 3,
      client: 'Павел',
      phone: '+7 999 777 88 99',
      address: 'ул. Садовая, 4',
      total: 1510,
      status: 'В доставке',
    },
  ];

  return (
    <main className="page">
      <section className="container">
        <div className="page-title">
          <p className="badge">Администратор</p>
          <h1>Панель управления</h1>
          <p>Прототип страницы для просмотра заказов.</p>
        </div>

        <div className="admin-cards">
          <div className="admin-card">
            <span>12</span>
            <p>Заказов сегодня</p>
          </div>

          <div className="admin-card">
            <span>8</span>
            <p>Активных заказов</p>
          </div>

          <div className="admin-card">
            <span>24 500 ₽</span>
            <p>Выручка</p>
          </div>
        </div>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>№</th>
                <th>Клиент</th>
                <th>Телефон</th>
                <th>Адрес</th>
                <th>Сумма</th>
                <th>Статус</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.client}</td>
                  <td>{order.phone}</td>
                  <td>{order.address}</td>
                  <td>{order.total} ₽</td>
                  <td>
                    <span className="status">{order.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

export default Admin;