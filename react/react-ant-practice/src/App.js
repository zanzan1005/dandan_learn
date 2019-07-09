import React,{ Component } from 'react';
import { Button } from 'antd';
import TouchableOpacity from './TouchableOpacity'
import './App.css';
import 'antd/dist/antd.css'

// const size = 'large';
class App extends Component {
  constructor (props) {
    super(props);
    this.functionRef = null;
    this.objectRef = React.createRef();
  }
  state = {
    
  }
  componentDidMount() {
    //组件挂载在页面上
    //通过原生JS 操作 DOM  
    this.refs.strRef.innerHTML = 'String ref';
    this.functionRef.innerHTML = 'Function ref';
    this.objectRef.current.innerHTML = 'Object ref';
    // this.functionRef.addEventListener = ('click',() => {
    //   console.log('function ref clicked');
    // })
  }
  render() {
    return (
      <div>
        <Button class="button" type="primary" block ref="dom">按钮</Button>
        <TouchableOpacity>确定</TouchableOpacity>
        <TouchableOpacity>购买</TouchableOpacity>
        <h1 ref="strRef"></h1>
        <h2 ref={(node) => {
          this.functionRef = node;
        }}></h2>
      </div>
    )
  }
}

export default App;
