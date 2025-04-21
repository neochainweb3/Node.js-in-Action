const express = require('express');
const app = express();
app.use(express.json());

const users = [];

app.get('/users', (req, res) => res.json(users));
app.post('/users', (req, res) => {
  users.push(req.body);
  res.status(201).json({ message: 'User created' });
});
app.listen(3000);