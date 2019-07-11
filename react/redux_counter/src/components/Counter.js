import React, { Component } from 'react';
import { connect } from 'react-redux';
class Counter extends Component {
  state = { 

   }
  render() { 
    return ( 
      <p>
        Clicked: {this.props.count}
        times
      </p>
     );
  }
}
 
const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}
export default connect(mapStateToProps)(Counter);
// 1.map共享状态
// 2. 作为参数传给组件