// Callback
function greetCallback(name, cb) {
  cb(`Hello, ${name}`);
}
greetCallback('Callback User', msg => console.log(msg));

// Promise
function greetPromise(name) {
  return Promise.resolve(`Hello, ${name}`);
}
greetPromise('Promise User').then(console.log);

// Async/Await
async function greetAsync(name) {
  return `Hello, ${name}`;
}
greetAsync('Async User').then(console.log);