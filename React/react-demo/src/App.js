import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    Person: [
      { id: 1, name: "大狗", count: "10" },
      { id: 2, name: "二狗", count: "20" },
      { id: 3, name: "三狗", count: "30" }
    ],
    showPerson: false
  }

  changeState = (newName) => {
    this.setState({
      Person: [
        { name: newName, count: "100" },
        { name: "二猫", count: "200" },
        { name: "三猫", count: "300" }
      ]
    })
  }

  changeCount = (newCount) => {
    this.setState({
      Person: [
        { name: "大猫", count: newCount },
        { name: "二猫", count: "200" },
        { name: "三猫", count: "300" }
      ]
    })
  }

  nameChange = (event) => {
    this.setState({
      Person: [
        { name: event.target.value, count: "222" },
        { name: "二猫", count: "200" },
        { name: "三猫", count: "300" }
      ]
    })
  }

  changecontent = () => {
    const show = this.state.showPerson
    this.setState({
      showPerson: !show
    })
  }

  delete = (Index) => {
    const Person = this.state.Person;
    Person.splice(Index,1)
    this.setState({
      Person: Person
    })
  }

  render() {
    const style = {
      textAlign: "center",
      fontSize: "15px",
      height: "40px",
      width: "100px",
      backgroundColor: "green"
    };

    let persons = null;
    if (this.state.showPerson) {
      persons = (
        <div>
          {
            this.state.Person.map(( person,index ) => { 
              //person是拿到的每一个对象
              return <Person key={Person.id} changed={(event) => this.changed(event,person.id)}myClick={() => this.delete(index)} name={person.name} count={person.count}/>
            })
          }

          {/* <Person changed={this.nameChange}
            name={this.state.Person[0].name} count={this.state.Person[0].count} />
          <Person myClick={this.changeCount.bind(this, 25484)}
            name={this.state.Person[1].name} count={this.state.Person[1].count} />
          <Person name={this.state.Person[2].name} count={this.state.Person[2].count} />
          <Person>肖战最帅！！！</Person> */}
        </div>
      )
      style.backgroundColor = "red"
    }

    // const classes = ["red", "bold"].join(" ");
    const classes = []
    if (this.state.Person.length <= 2 ) {
      classes.push("red")
    } 
    if (this.state.Person.length <= 1) {
      classes.push("bold")
    }

    return (
      <div className="App">
        <h1>7.18 react </h1>
        <h2 className={classes.join(" ")}>Hello React</h2>
        {/* <button onClick={() => this.changeState("goudan")} >更改数据源</button> */}
        {/* <button onClick={this.changeState.bind(this,"missu")}>更改数据</button> */}
        <button style={style} onClick={this.changecontent}>内容切换</button>
        {/* <button onClick={() => this.changeCount(1222)}>更改数字</button> */}
        {/* <button style={style}
          onClick={this.changeCount.bind(this, 122225)}>更改数字</button> */}
          {persons}
        {
          // this.state.showPerson ?
          //   <div>
          //     <Person changed={this.nameChange}
          //       name={this.state.Person[0].name} count={this.state.Person[0].count} />
          //     <Person myClick={this.changeCount.bind(this, 25484)}
          //       name={this.state.Person[1].name} count={this.state.Person[1].count} />
          //     <Person name={this.state.Person[2].name} count={this.state.Person[2].count} />
          //     <Person>肖战最帅！！！</Person>
          //   </div> : null
        }
      </div>
    );
  }
}

export default App;
