const fs = require('fs');
const path = require('path');
const os = require('os');
const EventEmitter = require('events');

console.log('Home dir:', os.homedir());
console.log('File name:', path.basename(__filename));

const emitter = new EventEmitter();
emitter.on('greet', () => console.log('Hello from EventEmitter'));
emitter.emit('greet');