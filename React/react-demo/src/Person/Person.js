import React from 'react';

const Person = (props) => {
  return(
    <div>
      <p onClick={props.myClick}>我是{props.name},我有{props.count}块钱</p>
      <input type="text" onChange = {props.changed}/>
      <p>{props.children}</p>
    </div>
  )
  
}
export default Person;