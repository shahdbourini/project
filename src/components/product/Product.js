import { Row, Col, InputNumber, Divider, Button } from 'antd';
import { Link, BrowserRouter } from 'react-router-dom';
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
            src={props.Result}
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
          <H1Style2>{props.title}</H1Style2>
          <SpanStyle>148.00$</SpanStyle>

          <StyleP>
            <p>{props.discription}</p>
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
                onChange={props.onChanges}
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
                  onClick={() => props.addToCart(props.id)}
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
