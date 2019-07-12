import React from 'react';
import toast from './toast/toast';
import { Button, notification } from 'antd';
import './App.css';


const openNotificationWithIcon = (type) => {
  toast[type]('message');
}
function App() {
  return (
    <div>
      <Button onClick={() => openNotificationWithIcon('success')}>Success</Button>
      <Button onClick={() => openNotificationWithIcon('info')}>Info</Button>
      <Button onClick={() => openNotificationWithIcon('warning')}>Warning</Button>
      <Button onClick={() => openNotificationWithIcon('error')}>Error</Button>
      <Button onClick={() => openNotificationWithIcon('loading')}>Loading</Button>
    </div>
  );
}

export default App;
