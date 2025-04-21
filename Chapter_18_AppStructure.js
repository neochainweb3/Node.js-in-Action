// Folder structure idea
// routes/userRoutes.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('User route'));
module.exports = router;

// app.js
const express = require('express');
const userRoutes = require('./routes/userRoutes');
const app = express();
app.use('/users', userRoutes);
app.listen(3000);