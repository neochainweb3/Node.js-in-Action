const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log(`Method: ${req.method} | URL: ${req.url}`);
  next();
});

app.get('/user', (req, res) => res.send('User route'));
app.listen(3000);