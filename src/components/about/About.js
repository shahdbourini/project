import { RocketFilled } from '@ant-design/icons';
import React from 'react';
import './style-about.css';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import Testimonial from '../testimonial/Testimonial';
import simi from '../../images/simi.png';

function About() {
  const contentStyle = {
    height: '330px',
    color: '#000',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#fff',
    width: `90%`,
  };
  return (
    <>
      <Row className="about">
        <Col
          xs={{ span: 20, offset: 2 }}
          sm={{ span: 20, offset: 4 }}
          md={{ span: 14, offset: 2 }}
          lg={{ span: 10, offset: 2 }}
        >
          <div className="design2">
            <span> &#x2014; &nbsp; About us</span>
            <h2 style={{ fontFamily: `FontAwesome` }}>
              We are small but active tour agency fallen in love with Lake
              District
            </h2>
            <p>
              Ut ultricies imperdiet sodales. Aliquam fringilla aliquam ex sit
              amet elementum. Proin bibendum sollicitudin feugiat. Curabitur ut
              egestas justo, vitae molestie ante. Integer magna purus, commodo
              in diam nec, pretium auctor sapien. In pulvinar, ipsum eu
              dignissim facilisis, massa justo varius purus, non dictum elit
              nibh ut massa.
            </p>
          </div>
        </Col>

        <Col
          xs={{ span: 20, offset: 2 }}
          sm={{ span: 20, offset: 4 }}
          md={{ span: 14, offset: 2 }}
          lg={{ span: 9, offset: 1 }}
        >
          <div className="test">
            <img src={simi} alt="icon" />
          </div>
          <Testimonial />
        </Col>
      </Row>
    </>
  );
}

export default About;
