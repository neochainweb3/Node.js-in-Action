const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mydb');

const userSchema = new mongoose.Schema({
  name: String, email: String
});
const User = mongoose.model('User', userSchema);