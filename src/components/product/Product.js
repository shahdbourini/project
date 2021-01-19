import React from 'react';
import { Row, Col, InputNumber, Divider } from 'antd';
import pic from '../../images/pic.jpg';
import Buttons from '../button/Buttons';
import { Link, BrowserRouter } from 'react-router-dom';
import {
  H1Style2,
  SpanStyle,
  StyleP,
  StyleNum,
  StyleLinks,
  StyleLinks2,
} from './style-product';

function Product(props) {
  function onChange(value) {
    console.log('changed', value);
  }

  return (
    <>
      <Row
        style={{
          paddingLeft: `7%`,
          paddingTop: `110px`,
          paddingBottom: `60px`,
        }}
      >
        <Col
          xs={{ span: 20 }}
          sm={{ span: 20 }}
          md={{ span: 13 }}
          lg={{ span: 11 }}
        >
          <div className="design2">
            <img src={pic} alt="img" />
          </div>
        </Col>

        <Col
          xs={{ span: 20 }}
          sm={{ span: 20 }}
          md={{ span: 13 }}
          lg={{ span: 11, offset: 1 }}
        >
          <H1Style2>Cras commodo</H1Style2>
          <SpanStyle>148.00$</SpanStyle>

          <StyleP>
            <p>
              Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a
              pellentesque dui, non felis. Maecenas malesuada elit.
            </p>
          </StyleP>
          <Row>
            <Col
              xs={{ span: 20 }}
              sm={{ span: 20 }}
              md={{ span: 13 }}
              lg={{ span: 4 }}
            >
              <StyleNum>
                <InputNumber
                  min={1}
                  max={10}
                  size="large"
                  defaultValue={1}
                  onChange={onChange}
                />
              </StyleNum>
            </Col>
            <Col
              xs={{ span: 20 }}
              sm={{ span: 20 }}
              md={{ span: 13 }}
              lg={{ span: 10, offset: 0 }}
            >
              <Buttons width={68 + '%'} text="Add to cart" />
            </Col>
          </Row>

          <StyleLinks>
            <BrowserRouter>
              <span>
                Categories: <Link to="#">Places to eat</Link>,
                <Link to="#">Town Trips</Link>
              </span>
            </BrowserRouter>
          </StyleLinks>

          <Divider />

          <StyleLinks2>
            <BrowserRouter>
              <span>
                Share{' '}
                <Link to="#">
                  <i class="fa fa-facebook" aria-hidden="true"></i>
                </Link>
                <Link to="#">
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                </Link>
                <Link to="#">
                  <i class="fa fa-linkedin" aria-hidden="true"></i>
                </Link>
                <Link to="#">
                  <i class="fa fa-pinterest-p" aria-hidden="true"></i>
                </Link>
              </span>
            </BrowserRouter>
          </StyleLinks2>
        </Col>
      </Row>
      <Divider />
    </>
  );
}

export default Product;
