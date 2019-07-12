import React , { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = { 
    Person:[
      {name:"大狗",count:"10"},
      {name:"二狗",count:"20"},
      {name:"三狗",count:"30"}
      ]
    }
    changeState = () => {
      this.setState({
        Person:[
          {name:"大猫",count:"100"},
          {name:"二猫",count:"200"},
          {name:"三猫",count:"300"}
          ]
      })
    }
  render() { 
    return ( 
      <div className="App">
        <h1>今天吃了火腿肠</h1>
        <button onClick= {this.changeState} >更改数据源</button>
      <Person name = {this.state.Person[0].name} count = {this.state.Person[0].count}/>
      <Person name = {this.state.Person[1].name} count = {this.state.Person[1].count}/>
      <Person name = {this.state.Person[2].name} count = {this.state.Person[2].count}/>
      <Person>肖战最帅！！！</Person>
    </div>
     );
  }
}

export default App;
