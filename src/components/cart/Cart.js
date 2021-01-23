import React, { useState } from 'react';
import { Modal, Button } from 'antd';

function Cart(props) {
  //   const [isModalVisible, setIsModalVisible] = useState(false);

  //   const showModal = () => {
  //     setIsModalVisible(true);
  //   };

  //   const handleOk = () => {
  //     setIsModalVisible(false);
  //   };

  //   const handleCancel = () => {
  //     setIsModalVisible(false);
  //   };
  return (
    <>
      <Modal
        title="Basic Modal"
        visible={props.isModalVisible}
        onOk={props.handleOk}
        onCancel={props.handleCancel}
      >
        {/* <p>{props.value}</p> */}
        {props.details.map((item) => (
          <p>{item.id}</p>
        ))}
      </Modal>
    </>
  );
}

export default Cart;
