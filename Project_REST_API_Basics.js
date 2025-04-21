const express = require('express');
const app = express();
app.use(express.json());

let items = [];

app.get('/api/items', (req, res) => {
  res.json(items);
});

app.post('/api/items', (req, res) => {
  items.push(req.body);
  res.status(201).json({ message: 'Item added' });
});

app.delete('/api/items/:id', (req, res) => {
  items = items.filter((_, i) => i !== parseInt(req.params.id));
  res.json({ message: 'Item removed' });
});

app.listen(3000, () => console.log('REST API running'));