const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI);

const productSchema = new mongoose.Schema({
  name: String, price: Number, category: String
});
const Product = mongoose.model('Product', productSchema);

app.get('/api/products', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

app.post('/api/products', async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json(product);
});

app.listen(3000, () => console.log('E-commerce server running'));