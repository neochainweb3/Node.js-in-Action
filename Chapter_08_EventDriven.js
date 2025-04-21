const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('message', (msg) => {
  console.log('Received:', msg);
});
emitter.emit('message', 'Event-driven programming in Node.js');