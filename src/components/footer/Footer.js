import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Row, Col, Divider } from 'antd';
import {
  SpanStyle,
  StyleH5,
  StyleP,
  StyleP1,
  SocialStyle,
  ArrowStyle,
  StyleLink,
} from './style-footer';

function Footer(props) {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <>
      <Row style={{ marginTop: `80px` }}>
        <Col
          xs={{ span: 10, offset: 2 }}
          sm={{ span: 10, offset: 4 }}
          md={{ span: 6, offset: 2 }}
          lg={{ span: 6, offset: 2 }}
        >
          <StyleH5>Useful links</StyleH5>
          <BrowserRouter>
            <StyleP1>
              {' '}
              <SpanStyle>— </SpanStyle>
              <StyleLink>30 day return policy</StyleLink>
            </StyleP1>
            <StyleP1>
              {' '}
              <SpanStyle>— </SpanStyle>
              <StyleLink>Useful Links</StyleLink>
            </StyleP1>
            <StyleP1>
              {' '}
              <SpanStyle>— </SpanStyle>
              <StyleLink>Terms and conditions</StyleLink>
            </StyleP1>
            <StyleP1>
              <SpanStyle>— </SpanStyle>
              <StyleLink>Privacy policy</StyleLink>
            </StyleP1>
            <StyleP1>
              {' '}
              <SpanStyle>— </SpanStyle>
              <StyleLink>Cookies</StyleLink>
            </StyleP1>
            <StyleP1>
              {' '}
              <SpanStyle>— </SpanStyle>
              <StyleLink>How it Works</StyleLink>
            </StyleP1>
            <StyleP1>
              {' '}
              <SpanStyle>— </SpanStyle>
              <StyleLink>FAQ</StyleLink>
            </StyleP1>
          </BrowserRouter>
        </Col>

        <Col
          xs={{ span: 10, offset: 2 }}
          sm={{ span: 20, offset: 4 }}
          md={{ span: 7, offset: 1 }}
          lg={{ span: 4, offset: 1 }}
        >
          <StyleH5>Customer service</StyleH5>
          <BrowserRouter>
            <StyleP1>
              <SpanStyle> — </SpanStyle>
              <StyleLink>Orders</StyleLink>
            </StyleP1>
            <StyleP1>
              <SpanStyle> — </SpanStyle>
              <StyleLink> Downloads</StyleLink>
            </StyleP1>

            <StyleP1>
              <SpanStyle> — </SpanStyle>
              <StyleLink>Addresses</StyleLink>
            </StyleP1>

            <StyleP1>
              <SpanStyle> — </SpanStyle>
              <StyleLink>Account details</StyleLink>
            </StyleP1>

            <StyleP1>
              <SpanStyle> — </SpanStyle> <StyleLink> Logout</StyleLink>
            </StyleP1>

            <StyleP1>
              <SpanStyle> — </SpanStyle> <StyleLink> Lost password</StyleLink>
            </StyleP1>
          </BrowserRouter>
        </Col>

        <Col
          xs={{ span: 15, offset: 2 }}
          sm={{ span: 15, offset: 4 }}
          md={{ span: 7, offset: 0 }}
          lg={{ span: 8, offset: 1 }}
        >
          <StyleH5>About us</StyleH5>
          <StyleP>
            Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a
            pellentesque dui, non felis. Maecenas malesuada elit lectus felis,
            malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies
            porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet
            enim. Phasellus fermentum in, dolor. Pellentesque facilisis.
          </StyleP>
          <BrowserRouter>
            <StyleP1>
              <SpanStyle> — </SpanStyle>
              <StyleLink>Contact us</StyleLink>
            </StyleP1>

            <StyleP1>
              <SpanStyle> — </SpanStyle>
              <StyleLink>Write us a message</StyleLink>
            </StyleP1>
          </BrowserRouter>
        </Col>
      </Row>
      <Divider />
      <Row style={{ marginTop: `24px`, paddingBottom: `20px ` }}>
        <Col
          xs={{ span: 15, offset: 2, order: 1 }}
          sm={{ span: 12, offset: 6, order: 1 }}
          md={{ span: 9, offset: 2, order: 1 }}
          lg={{ span: 10, offset: 2, order: 1 }}
        >
          <div>
            © 2020 BeTravel 2 - BeTheme. Muffin group - HTML by{' '}
            <a>BeantownThemes</a>
          </div>
        </Col>

        <Col
          xs={{ span: 10, offset: 8, order: 3 }}
          sm={{ span: 12, offset: 10, order: 3 }}
          md={{ span: 3, offset: 4, order: 2 }}
          lg={{ span: 2, offset: 5, order: 2 }}
        >
          <SocialStyle>
            <i class="fa fa-facebook" aria-hidden="true"></i>
            <i class="fa fa-caret-right" aria-hidden="true"></i>
            <i class="fa fa-instagram" aria-hidden="true"></i>
          </SocialStyle>
        </Col>
        <Col
          xs={{ span: 1, offset: 2, order: 2 }}
          sm={{ span: 1, offset: 1, order: 2 }}
          md={{ span: 1, offset: 0, order: 3 }}
          lg={{ span: 1, offset: 0, order: 3 }}
        >
          <ArrowStyle>
            <i
              class="fa fa-chevron-up"
              aria-hidden="true"
              onClick={scrollTop}
              style={{ cursor: `pointer` }}
            ></i>
          </ArrowStyle>
        </Col>
      </Row>
    </>
  );
}

export default Footer;
