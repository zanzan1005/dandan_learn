const EventEmiter = require('events');
class Ev extends EventEmiter{};

const ev = new Ev();

ev.on('open',() => {
  console.log('open event');
})

const callback = () =>{
  console.log('open1');
}
ev.on('open1',callback);
ev.emit('open1');
ev.removeListener('open1',callback);
ev.emit('open1');
// setTimeout(() => {
//   ev.emit('open');
// }, 2000);
