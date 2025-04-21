const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  throw new Error('Broken!');
});

app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).send('Something broke!');
});
app.listen(3000);