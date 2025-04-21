const express = require('express');
const app = express();
app.use(express.json());

let items = [];

app.get('/api/items', (req, res) => res.json(items));
app.post('/api/items', (req, res) => {
  items.push(req.body);
  res.status(201).json({ message: 'Item added' });
});
app.put('/api/items/:id', (req, res) => {
  items[req.params.id] = req.body;
  res.json({ message: 'Item updated' });
});
app.delete('/api/items/:id', (req, res) => {
  items.splice(req.params.id, 1);
  res.json({ message: 'Item deleted' });
});
app.listen(3000);