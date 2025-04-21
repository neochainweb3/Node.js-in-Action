#!/usr/bin/env node
const args = process.argv.slice(2);
if (args[0] === 'hello') {
  console.log('👋 Hello from your CLI!');
} else {
  console.log('❓ Unknown command');
}