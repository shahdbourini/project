import React from 'react';
import { Button } from 'antd';
import './style-button.css';

function Buttons(props) {
  return (
    <div className="view">
      <Button style={{ width: props.width }}>{props.text}</Button>
    </div>
  );
}

export default Buttons;
