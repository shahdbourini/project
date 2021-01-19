import React from 'react';
import contact_img from '../../images/contact_img.jpg';
import Buttons from '../button/Buttons';
import { Row, Col } from 'antd';
import './style.css';

function Contact1(props) {
  return (
    <>
      <Row style={{ paddingTop: `110px` }}>
        <Col
          xs={{ span: 18, offset: 5 }}
          sm={{ span: 18, offset: 5 }}
          md={{ span: 15, offset: 5 }}
          lg={{ span: 12, offset: 6 }}
        >
          <h2 className="h2Style">
            Curabitur sed iaculis dolor, non congue ligula posuere
          </h2>
        </Col>
      </Row>

      <Row style={{ paddingTop: `57px`, paddingBottom: `30px` }}>
        <Col
          xs={{ span: 20, offset: 2 }}
          sm={{ span: 16, offset: 4 }}
          md={{ span: 10, offset: 2 }}
          lg={{ span: 9, offset: 1 }}
        >
          <div className="design2" style={{ marginTop: `64px` }}>
            <span> &#x2014; &nbsp; Contact with us</span>
            <h2>Curabitur ut egestas justo, vitae molestie ante pulvinar</h2>
            <p style={{ width: `89%`, margin: ` 35px 18% 16px 10%` }}>
              Aliquam ac dui vel dui vulputate consectetur. Mauris accumsan,
              massa non consectetur condimentum, diam arcu tristique nibh, nec
              egestas diam elit at nulla. Suspendisse potenti. In non lacinia
              risus, ac tempor ipsum. Phasellus venenatis leo eu semper varius.
              Maecenas sit amet molestie leo. Morbi vitae urna mauris. Nulla nec
              tortor vitae eros iaculis hendrerit aliquet non urna. Nulla sit
              amet vestibulum magna, eget pulvinar libero.
            </p>
            <p style={{ width: `89%`, margin: ` 35px 18% 48px 10%` }}>
              <strong>Monday – Friday:</strong> 06:00 AM – 10:00 PM
              <br />
              <strong>Saturday – Sunday:</strong> 08:00 AM – 08:00 PM
            </p>
          </div>
          <Buttons />
        </Col>

        <Col
          xs={{ span: 20, offset: 2 }}
          sm={{ span: 16, offset: 4 }}
          md={{ span: 10, offset: 0 }}
          lg={{ span: 11, offset: 1 }}
        >
          <img src={contact_img} alt="img" style={{ width: `100%` }} />
        </Col>
      </Row>
    </>
  );
}

export default Contact1;
