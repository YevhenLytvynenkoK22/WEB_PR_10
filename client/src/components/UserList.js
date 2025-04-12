import React, { useEffect, useState } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: '', email: '' });

  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    const newUser = await res.json();
    setUsers([...users, newUser]);
    setForm({ name: '', email: '' });
  };

  return (
    <div>
      <h2>Користувачі</h2>
      <ul>
        {users.map(user => <li key={user.id}>{user.name} – {user.email}</li>)}
      </ul>
      <h3>Додати користувача</h3>
      <form onSubmit={handleSubmit}>
        <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Ім’я" />
        <input value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="Email" />
        <button type="submit">Додати</button>
      </form>
    </div>
  );
};

export default UserList;
