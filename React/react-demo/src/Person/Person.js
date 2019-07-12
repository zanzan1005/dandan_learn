import React from 'react';

const Person = (props) => {
  return(
    <div>
      <p>我是{props.name},我有{props.count}块钱</p>
      <p>{props.children}</p>
    </div>
  )
  
}
export default Person;