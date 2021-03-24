import React from 'react';
import Sidbar from '../components/sidebar/Sidbar';
import Contact1 from '../components/contact_1component/Contact1';
import Contact2 from '../components/contact_2component/Contact2';
import Nav from '../components/navbar/Nav';
import slider from '../images/back2.png';
import icon1 from '../images/contact.png';
import icon2 from '../images/location_icon.png';
import icon3 from '../images/email.png';
import { Row, Col } from 'antd';
import { BrowserRouter, Link } from 'react-router-dom';
import { Bg_Img, Icon_Style, Img_style } from './style';

function Contact(props) {
  return (
    <>
      <Bg_Img slider={slider} height={750 + 'px'}>
        <Nav
          x={props.x}
          showSidebar={props.showSidebar}
          // value={props.value}
          // topCart={props.items}
          cart={props.cart}
          cartLength={props.cartLength}
          removeItem={props.removeItem}
          addItem={props.addItem}
        />

        <Icon_Style left={38 + '%'}>
          <h1>
            Feel free to contact us
            <br />
            and say hallo
          </h1>
        </Icon_Style>
        <Row style={{ marginTop: `230px` }}>
          <Col
            xs={{ span: 10, offset: 6 }}
            sm={{ span: 10, offset: 6 }}
            md={{ span: 5, offset: 2 }}
            lg={{ span: 5, offset: 2 }}
          >
            <Img_style className="icon-distance">
              <img src={icon1} alt="contact_icon" />
              <h5>Call us</h5>
              <p>+61 (0) 383 766 284</p>
            </Img_style>
          </Col>

          <Col
            xs={{ span: 10, offset: 6 }}
            sm={{ span: 10, offset: 6 }}
            md={{ span: 5, offset: 2 }}
            lg={{ span: 5, offset: 2 }}
          >
            <Img_style>
              <img src={icon2} alt="location_icon" />
              <h5>Localization</h5>
              <p>
                Level 13, 2 Elizabeth St, Melbourne, Victoria 3000, Australia
              </p>
            </Img_style>
          </Col>

          <Col
            xs={{ span: 10, offset: 6 }}
            sm={{ span: 10, offset: 6 }}
            md={{ span: 5, offset: 2 }}
            lg={{ span: 5, offset: 2 }}
          >
            <Img_style>
              <img src={icon3} alt="email_icon" />
              <h5>E-mail</h5>
              <BrowserRouter>
                <p>
                  <Link to="#">noreply@envato.com</Link>
                </p>
              </BrowserRouter>
            </Img_style>
          </Col>
        </Row>
      </Bg_Img>

      <Sidbar sidebar={props.sidebar} showSidebar={props.showSidebar} />
      <Contact1 />
      <Contact2 />
    </>
  );
}

export default Contact;
