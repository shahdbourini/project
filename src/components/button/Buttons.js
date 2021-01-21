import React from 'react';
import { Button } from 'antd';
import './style-button.css';
import { useHistory } from 'react-router-dom';

function Buttons(props) {
  let history = useHistory();
  return (
    <div className="view">
      <Button
        style={{ width: props.width }}
        onClick={() => history.push('/Tours')}
      >
        {props.text}
      </Button>
    </div>
  );
}

export default Buttons;
