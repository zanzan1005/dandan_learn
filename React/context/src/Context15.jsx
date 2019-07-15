import React, { Component } from 'react';
import propTypes from 'prop-types';

class Context15 extends Component {
  state = { 
    theme: 'red'
  }
  //后代组件从该方法中拿信息
  getChildConext() {
    return {
      theme: this.state.theme
    }
  }
  render() { 
    const msg = ['str1', 'str2', 'str3']
    return ( 
      <div>
        {
          msg.map((item, i) => {
            return (
              <Message key={i} text={item}></Message>
            )
          })
        }
      </div>
     );
  }
}
/**
 * function Person() {}
 * Person.childContextType = {}
 */
Context15.childContextTypes = {
  theme:propTypes.string

}
 class Message extends Component {
   render() {
     const { text } = this.props
     return (
       <li>
         { text }
         <MyButton></MyButton>
       </li>
     )
   }
 }
 class MyButton extends Component {
   render() {
     return (
       <button>delete</button>
     )
   }
 }
export default Context15;