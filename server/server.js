const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let users = [
  { id: 1, name: 'Іван', email: 'ivan@example.com' },
  { id: 2, name: 'Оля', email: 'olya@example.com' }
];

let counter = 0;

app.get('/users', (req, res) => {
  res.json(users);
});

app.post('/users', (req, res) => {
  const newUser = { id: Date.now(), ...req.body };
  users.push(newUser);
  res.status(201).json(newUser);
});

app.get('/counter', (req, res) => res.json({ value: counter }));

app.put('/counter', (req, res) => {
  counter = req.body.value;
  res.json({ value: counter });
});

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
