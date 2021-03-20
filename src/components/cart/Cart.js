import React, { useState, useEffect } from 'react';
import { Row, Col, InputNumber, Divider, Button, Modal } from 'antd';

function Cart(props) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(props.cart);
    console.log(cart);
  }, [props.cart]);

  const removeItem = (id) => {
    const result = props.cart.filter((item) => item.id !== id);
    // localStorage.removeItem(id);
    setCart(result);
    console.log(result);
  };

  const addItem = (id) => {
    // const result = props.topCart.filter((item) => item.id !== id);
    // setCart(result);
    console.log(id);
  };

  return (
    <>
      <Modal
        title="Cart"
        visible={props.isModalVisible}
        onOk={props.handleOk}
        onCancel={props.handleCancel}
        width={700}
      >
        <Row>
          <Col
            xs={{ span: 4 }}
            sm={{ span: 4 }}
            md={{ span: 4 }}
            lg={{ span: 4 }}
          >
            <p className="cart-font" style={{ paddingLeft: `25%` }}>
              img
            </p>
          </Col>

          <Col
            xs={{ span: 4 }}
            sm={{ span: 4 }}
            md={{ span: 4 }}
            lg={{ span: 3, offset: 1 }}
          >
            <p className="cart-font">Name</p>
          </Col>

          <Col
            xs={{ span: 4 }}
            sm={{ span: 4 }}
            md={{ span: 4 }}
            lg={{ span: 3 }}
          >
            <p className="cart-font">Quantity</p>
          </Col>
          <Col
            xs={{ span: 4 }}
            sm={{ span: 4 }}
            md={{ span: 5 }}
            lg={{ span: 3, offset: 1 }}
          >
            <p className="cart-font">Price</p>
          </Col>

          <Col
            xs={{ span: 4 }}
            sm={{ span: 4 }}
            md={{ span: 5 }}
            lg={{ span: 3 }}
          >
            <p className="cart-font">Total</p>
          </Col>

          <Col
            xs={{ span: 4 }}
            sm={{ span: 4 }}
            md={{ span: 5 }}
            lg={{ span: 4 }}
          >
            <p className="cart-font">plus/minus</p>
          </Col>

          <Col
            xs={{ span: 4 }}
            sm={{ span: 4 }}
            md={{ span: 5 }}
            lg={{ span: 2 }}
          >
            <p className="cart-font">delete</p>
          </Col>
        </Row>

        {cart.map((item, index) => (
          // <p>{item.id}</p>

          <Row gutter={[0, 16]} key={item.id}>
            <Col
              xs={{ span: 4 }}
              sm={{ span: 4 }}
              md={{ span: 4 }}
              lg={{ span: 4 }}
            >
              <img src={item.image} style={{ width: `90%`, height: `12vh` }} />
            </Col>

            <Col
              xs={{ span: 4 }}
              sm={{ span: 4 }}
              md={{ span: 4 }}
              lg={{ span: 3, offset: 1 }}
            >
              <p>{item.name}</p>
            </Col>

            <Col
              xs={{ span: 4 }}
              sm={{ span: 4 }}
              md={{ span: 4 }}
              lg={{ span: 2, offset: 1 }}
            >
              <p>{item.value}</p>
            </Col>

            <Col
              xs={{ span: 4 }}
              sm={{ span: 4 }}
              md={{ span: 5 }}
              lg={{ span: 3, offset: 1 }}
            >
              <p>{item.price}$</p>
            </Col>

            <Col
              xs={{ span: 4 }}
              sm={{ span: 4 }}
              md={{ span: 5 }}
              lg={{ span: 3 }}
            >
              <p>{item.total}$</p>
            </Col>

            <Col
              xs={{ span: 4 }}
              sm={{ span: 4 }}
              md={{ span: 5 }}
              lg={{ span: 4 }}
            >
              <Button
                type="primary"
                style={{ borderRadius: `87%`, height: `35px` }}
                onClick={() => addItem(index)}
              >
                +
              </Button>
              <Button
                type="primary"
                danger
                style={{ borderRadius: `87%`, height: `35px` }}
              >
                -
              </Button>
            </Col>

            <Col
              xs={{ span: 4 }}
              sm={{ span: 4 }}
              md={{ span: 5 }}
              lg={{ span: 2 }}
            >
              <Button type="primary" danger onClick={() => removeItem(item.id)}>
                <i class="fa fa-times" aria-hidden="true"></i>
              </Button>
            </Col>
          </Row>
        ))}
      </Modal>
    </>
  );
}

export default Cart;
