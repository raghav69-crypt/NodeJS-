const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('Waterfall', () => {
  console.log('Please turn off the motor');
  setTimeout(()=>{
    console.log('Please turn off the motor , Its a gentle Remainder');
  },3000);
});
console.log("the script is running")
console.log("the script is still running")
myEmitter.emit('Waterfall');