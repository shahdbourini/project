import React, { useState, useEffect } from 'react';
import { Form, Input, Row, Col } from 'antd';
import Buttons from '../button/Buttons';
import './style.css';

function Contact2(props) {
  const { TextArea } = Input;

  return (
    <>
      <Row style={{ paddingTop: `80px`, paddingBottom: `90px` }}>
        <Col
          xs={{ span: 20, offset: 2 }}
          sm={{ span: 16, offset: 4 }}
          md={{ span: 10, offset: 2 }}
          lg={{ span: 12, offset: 2 }}
        >
          <Form>
            <div style={{ display: `flex`, marginBottom: `16px ` }}>
              <Input placeholder="Your name" size="large" />
              <Input
                placeholder="Your e-mail"
                style={{ marginLeft: `2%` }}
                size="large"
                rules={[
                  {
                    type: 'email',
                  },
                ]}
              />
            </div>
            <div style={{ marginBottom: `16px ` }}>
              <Input placeholder="Subject" size="large" />
            </div>
            <div style={{ marginBottom: `16px ` }}>
              <TextArea
                showCount
                maxLength={100}
                rows={10}
                placeholder="Message"
              />
            </div>

            <Buttons width={100 + '%'} text="Send A Message" />
          </Form>
        </Col>

        <Col
          xs={{ span: 20, offset: 2 }}
          sm={{ span: 16, offset: 4 }}
          md={{ span: 10, offset: 2 }}
          lg={{ span: 7, offset: 1 }}
        >
          <div className="design2 media">
            <span> &#x2014; &nbsp; Contact with us</span>
            <h2>Nulla nec tortor vitae eros</h2>
            <p style={{ width: `89%`, margin: ` 35px 18% 16px 10%` }}>
              Suspendisse potenti. In non lacinia risus, ac tempor ipsum.
              Phasellus venenatis leo eu semper varius. Maecenas sit amet
              molestie leo. Morbi vitae urna mauris. Nulla nec tortor vitae eros
              iaculis hendrerit.
            </p>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Contact2;
