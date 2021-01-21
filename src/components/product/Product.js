import { Row, Col, InputNumber, Divider } from 'antd';
import Buttons from '../button/Buttons';
import React, { useState, useEffect } from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import {
  H1Style2,
  SpanStyle,
  StyleP,
  StyleNum,
  StyleLinks,
  StyleLinks2,
  Img,
} from './style-product';

function Product(props) {
  const [clintID, setClintID] = useState(
    'je2vpPqIlY_oNO9jhIR_GUIkQkEIE7fzJS0hWg9SLgI'
  );
  const [Result, setResult] = useState();
  const [title, setTitle] = useState();
  const [discription, setDisc] = useState();

  function onChange(value) {
    console.log('changed', value);
  }

  useEffect(() => {
    axios
      .get(`https://api.unsplash.com/photos/${props.id}?client_id=` + clintID)
      .then((res) => {
        console.log(res);
        setResult(res.data.urls.regular);
        setDisc(res.data.alt_description);
        setTitle(res.data.description);
      });
  }, []);
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
          <Img
            src={Result}
            alt="img"
            // style={{ height: `567px`, width: `585px` }}
          />
        </Col>

        <Col
          xs={{ span: 20 }}
          sm={{ span: 20 }}
          md={{ span: 13 }}
          lg={{ span: 11, offset: 1 }}
        >
          <H1Style2>{title}</H1Style2>
          <SpanStyle>148.00$</SpanStyle>

          <StyleP>
            <p>{discription}</p>
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
