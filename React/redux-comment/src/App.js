import React from 'react';
import { connect } from 'react-redux';
import './App.css';

class App extends React.Component {
  state = {  }
  render() { 
    return ( 
      <div>
        { commentList.length === 0 ? '暂无评论': null } 
      </div>
     );
  }
}
//mapStateToProps
const a = (state) => {}
//mapDispatchToProps
const b = (dispatch) => {}
export default connect(a,b)(App);
 


export default App;
