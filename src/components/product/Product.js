import { Row, Col, InputNumber, Divider, Button } from 'antd';
import React, { useState, useEffect } from 'react';
import { Link, BrowserRouter, useHistory } from 'react-router-dom';
import axios from 'axios';
import {
  H1Style2,
  SpanStyle,
  StyleP,
  StyleLinks,
  StyleLinks2,
  Img,
} from './style-product';

function Product(props) {
  const clintID = 'je2vpPqIlY_oNO9jhIR_GUIkQkEIE7fzJS0hWg9SLgI';
  const [Result, setResult] = useState();
  const [imgSmall, setImgSmall] = useState();
  const [title, setTitle] = useState();
  const [discription, setDisc] = useState();
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [cart, setCart] = useState([]);
  // const [cartTotal, setCartTotal] = useState(0);

  function onChange(value) {
    setQuantity(value);
  }

  function handleChange(event, products) {
    props.onChange(cart.length, products);
  }

  const addToCart = (el) => {
    let flag = true;
    if (cart.length === 0) {
      setCart([
        ...cart,

        {
          id: props.id,
          name: title,
          price: price,
          value: quantity,
          image: imgSmall,
          total: price * quantity,
        },
      ]);
      console.log('empty');

      flag = false;
    } else {
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === el) {
          flag = false;
        }
      }
    }
    if (flag) {
      setCart([
        ...cart,

        {
          id: props.id,
          name: title,
          price: price,
          value: quantity,
          image: imgSmall,
          total: price * quantity,
        },
      ]);
    } else {
      console.log('exiest');
    }
  };
  useEffect(() => {
    axios
      .get(`https://api.unsplash.com/photos/${props.id}?client_id=` + clintID)
      .then((res) => {
        // console.log(res);
        setResult(res.data.urls.regular);
        setImgSmall(res.data.urls.small);
        setDisc(res.data.alt_description);
        setTitle(res.data.description);
        setPrice(res.data.user.total_photos);
      });
  }, []);

  useEffect(() => {
    const data = localStorage.getItem('data');

    if (data) {
      setCart(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(cart));
    handleChange(cart.length, cart);
    // localStorage.clear();
  });
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
              <InputNumber
                min={1}
                max={20}
                size="large"
                onChange={onChange}
                style={{ height: `45px` }}
              />
            </Col>
            <Col
              xs={{ span: 20 }}
              sm={{ span: 20 }}
              md={{ span: 13 }}
              lg={{ span: 10, offset: 0 }}
            >
              <div className="view">
                <Button
                  style={{ width: `68%` }}
                  onClick={() => addToCart(props.id)}
                >
                  Add to cart
                </Button>
              </div>
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
