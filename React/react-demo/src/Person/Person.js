import React from 'react';
import './Person.css'

const Person = (props) => {
  return(
    <div className="Person">
      <p onClick={props.myClick}>我是{props.name},我有{props.count}块钱</p>
      <input type="text" onChange = {props.changed} defaultValue={props.name}/>
      <p>{props.children}</p>
    </div>
  )
  
}
export default Person;