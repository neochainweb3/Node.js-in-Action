const fs = require('fs');

// Synchronous
const data = fs.readFileSync('file.txt', 'utf-8');
console.log('Sync read:', data);

// Asynchronous
fs.readFile('file.txt', 'utf-8', (err, result) => {
  if (err) throw err;
  console.log('Async read:', result);
});