import React from 'react';
import ConcurrentModeDemo from './concurrent/index.jsx'


function App() {
  return (
    <div>
      <ConcurrentModeDemo />
    </div>
  );
}
var a = {};
var b = Object.prototype
console.log(a.prototype === b);
console.log(a.__proto__ === b)
console.log(Object.getPrototypeOf(a) === b)
export default App;
