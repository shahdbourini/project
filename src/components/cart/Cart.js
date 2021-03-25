import React, { useState, useEffect } from 'react';
import { Row, Col, Modal, Button } from 'antd';
import './styleCart.css';

function Cart(props) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(props.cart);
  }, [props.cart]);

  return (
    <>
      <Modal
        title="My Cart"
        visible={props.isModalVisible}
        onOk={props.handleOk}
        onCancel={props.handleCancel}
        width={700}
        footer={[
          <Button
            key="back"
            onClick={props.handleCancel}
            style={{ borderColor: `black`, color: `black` }}
          >
            Return
          </Button>,
          <Button
            key="submit"
            onClick={props.handleOk}
            style={{ backgroundColor: `black`, color: `white` }}
          >
            Ok
          </Button>,
        ]}
      >
        <Row>
          <Col
            xs={{ span: 5 }}
            sm={{ span: 4 }}
            md={{ span: 3 }}
            lg={{ span: 4 }}
          >
            <p className="cart-font title" style={{ paddingLeft: `25%` }}>
              img
            </p>
          </Col>

          <Col
            xs={{ span: 4 }}
            sm={{ span: 4, offset: 1 }}
            md={{ span: 2 }}
            lg={{ span: 2, offset: 1 }}
          >
            <p className="cart-font title">Name</p>
          </Col>

          <Col
            xs={{ span: 4 }}
            sm={{ span: 4 }}
            md={{ span: 4, offset: 2 }}
            lg={{ span: 3 }}
          >
            <p className="cart-font title">Quantity</p>
          </Col>
          <Col
            xs={{ span: 3, offset: 1 }}
            sm={{ span: 2, offset: 1 }}
            md={{ span: 2, offset: 1 }}
            lg={{ span: 2 }}
          >
            <p className="cart-font title">Price</p>
          </Col>

          <Col
            xs={{ span: 3 }}
            sm={{ span: 3, offset: 1 }}
            md={{ span: 3, offset: 2 }}
            lg={{ span: 2 }}
          >
            <p className="cart-font title">Total</p>
          </Col>

          <Col
            xs={{ span: 3, offset: 1 }}
            sm={{ span: 3 }}
            md={{ span: 2, offset: 1 }}
            lg={{ span: 2, offset: 2 }}
          >
            <p className="cart-font title">delete</p>
          </Col>
        </Row>

        {cart.map((item, index) => (
          <Row gutter={[0, 4]} key={item.id}>
            <Col
              xs={{ span: 4 }}
              sm={{ span: 4 }}
              md={{ span: 3 }}
              lg={{ span: 4 }}
            >
              <img src={item.image} style={{ width: `90%`, height: `83%` }} />
            </Col>

            <Col
              xs={{ span: 4, offset: 1 }}
              sm={{ span: 3, offset: 1 }}
              md={{ span: 3 }}
              lg={{ span: 3, offset: 1 }}
            >
              <p className="cart-font">{item.name}</p>
            </Col>

            <Col
              xs={{ span: 4 }}
              sm={{ span: 4, offset: 1 }}
              md={{ span: 4, offset: 1 }}
              lg={{ span: 3 }}
            >
              <div className="cartDisplay">
                <span
                  onClick={() => props.addItem(item.id)}
                  className="cartPlus"
                >
                  <i class="fa fa-plus-circle" aria-hidden="true"></i>
                </span>

                <p className="cart-font">{item.value}</p>
                <span
                  onClick={() => props.MinusItem(item.id)}
                  className="cartMinus"
                >
                  <i class="fa fa-minus-circle" aria-hidden="true"></i>
                </span>
              </div>
            </Col>

            <Col
              xs={{ span: 3, offset: 1 }}
              sm={{ span: 2, offset: 1 }}
              md={{ span: 3 }}
              lg={{ span: 3, offset: 1 }}
            >
              <p className="cart-font">{item.price}$</p>
            </Col>

            <Col
              xs={{ span: 4 }}
              sm={{ span: 2, offset: 1 }}
              md={{ span: 3 }}
              lg={{ span: 3, offset: 1 }}
            >
              <p className="cart-font">{item.total}$</p>
            </Col>

            <Col
              xs={{ span: 3 }}
              sm={{ span: 3, offset: 2 }}
              md={{ span: 2 }}
              lg={{ span: 2 }}
            >
              <span
                onClick={() => props.removeItem(index)}
                className="cartRemove"
              >
                <i class="fa fa-times" aria-hidden="true"></i>
              </span>
            </Col>
          </Row>
        ))}
      </Modal>
    </>
  );
}

export default Cart;
