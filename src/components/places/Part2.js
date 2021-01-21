import React from 'react';
import { Row, Col } from 'antd';
import Buttons from '../button/Buttons';

function Part2(props) {
  return (
    <>
      <Row>
        <Col
          xs={{ span: 20, offset: 4 }}
          sm={{ span: 11, offset: 2 }}
          md={{ span: 10, offset: 6 }}
          lg={{ span: 6, offset: 7 }}
        >
          <h5 className="txt5">Are you interested in this place?</h5>
        </Col>

        <Col
          xs={{ span: 12, offset: 4 }}
          sm={{ span: 10, offset: 0 }}
          md={{ span: 8, offset: 0 }}
          lg={{ span: 7, offset: 0 }}
        >
          <Buttons width={70 + '%'} text="See actual tours" />
        </Col>
      </Row>
    </>
  );
}

export default Part2;
