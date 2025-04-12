import { useState, useEffect } from 'react';

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  const filteredUsers = users.filter(user => user.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div>
      <input placeholder="Пошук" value={filter} onChange={e => setFilter(e.target.value)} />
      <button onClick={() => setFilter('')}>Скинути</button>

      {filteredUsers.length > 0 ? (
        <table>
          <thead>
            <tr><th>Ім’я</th><th>Email</th></tr>
          </thead>
          <tbody>
            {filteredUsers.map(user => (
              <tr key={user.id}><td>{user.name}</td><td>{user.email}</td></tr>
            ))}
          </tbody>
        </table>
      ) : <p>Немає збігів.</p>}
    </div>
  );
};

export default UserTable;
