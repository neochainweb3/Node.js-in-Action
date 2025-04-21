#!/usr/bin/env node
const inquirer = require('inquirer');
const fs = require('fs');
const logTask = () => {
  inquirer.prompt([
    { type: 'input', name: 'task', message: 'What task did you complete?' }
  ]).then(answer => {
    fs.appendFileSync('log.txt', `✅ ${answer.task}\n`);
    console.log('📝 Task logged!');
  });
};
logTask();