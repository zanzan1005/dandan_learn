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
    changeState = (newName) => {
      this.setState({
        Person:[
          {name:newName,count:"100"},
          {name:"二猫",count:"200"},
          {name:"三猫",count:"300"}
          ]
      })
    }
    changeCount = (newCount) => {
      this.setState({
        Person:[
          {name:"大猫",count:newCount},
          {name:"二猫",count:"200"},
          {name:"三猫",count:"300"}
          ]
      })
    }
    nameChange = (event) => {
      this.setState({
        Person:[
          {name:event.target.value,count:"222"},
          {name:"二猫",count:"200"},
          {name:"三猫",count:"300"}
          ]
      })
    }
  render() { 
     const style = {
      border: "1px solid #c0c0c0",
      textAlign: "center",
      fontSize: "15px",
      height: "50px",
      width: "250px"
      };
    return ( 
     
      <div className="App">
        <h1>今天吃了火腿肠</h1>
        {/* <button onClick={() => this.changeState("goudan")} >更改数据源</button> */}
        <button onClick={this.changeState.bind(this,"missu")}>更改数据</button>
        {/* <button onClick={() => this.changeCount(1222)}>更改数字</button> */}
        <button style={style}
        onClick={this.changeCount.bind(this,122225)}>更改数字</button>
        {
       <div> 
        <Person changed = {this.nameChange}
        name = {this.state.Person[0].name} count = {this.state.Person[0].count}/>
        <Person myClick={this.changeCount.bind(this,25484)}
        name = {this.state.Person[1].name} count = {this.state.Person[1].count}/>
        <Person name = {this.state.Person[2].name} count = {this.state.Person[2].count}/>
        <Person>肖战最帅！！！</Person>
      </div>
        }
    </div>
     );
  }
}

export default App;
