import React from 'react';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import location from '../../images/places-pic5.png';
import './style-places.css';

function placesCom(props) {
  return (
    <>
      <Row className="dist">
        <Col
          xs={{ span: 20, offset: 2 }}
          sm={{ span: 20, offset: 4 }}
          md={{ span: 10, offset: 2 }}
          lg={{ span: 10, offset: 2 }}
        >
          <div className="design2">
            <h2>{props.title}</h2>
            <ul className="list_check">
              <li>Maecenas non laoreet odio</li>
              <li>Aliquam consectetur orci eget dictum</li>
              <li>Sed mollis consequat eleifend</li>
            </ul>
            <p>{props.text}</p>
            <p style={{ margin: `35px 15% 0px 10%` }}>{props.text2}</p>
          </div>
        </Col>
        <Col
          xs={{ span: 20, offset: 2 }}
          sm={{ span: 20, offset: 4 }}
          md={{ span: 10, offset: 0 }}
          lg={{ span: 10, offset: 1 }}
        >
          <div className="design2 ">
            <img src={location} alt="img" />
          </div>
        </Col>
      </Row>
    </>
  );
}

export default placesCom;
