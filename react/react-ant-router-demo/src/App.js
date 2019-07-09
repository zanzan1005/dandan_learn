import React from 'react';
import Layout from './page/Layout';
import 'antd/dist/antd.css';
import { BrowserRouter as Router,Route } from 'react-router-dom';
//hashRouter # 
//historyRouter 不带# BrowerRouter 实现方式 是通过H5的 History api
//刷新这个行为

function App() {
  return (
  <Router>
    <Route path="/" component={Layout} />
  </Router>
  );
}

export default App;
