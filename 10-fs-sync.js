//Synchronous destucturing
const {readFileSync, writeFileSync} = require('fs');
console.log('start');
const first= readFileSync('./content/first.txt', 'utf8');
const second= readFileSync('./content/second.txt', 'utf8');
//if the file doesn't exist it will be created and if it exists it will be overwritten
writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`);
console.log('done with this task');
console.log('starting the next one');
