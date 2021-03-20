import { NavLink, BrowserRouter, useHistory } from 'react-router-dom';
import { Row, Col, InputNumber, Divider, Button, Modal } from 'antd';
import logo from '../../images/logo.png';
import Cart from '../cart/Cart';
import './style-nav.css';
import React, { useState, useEffect } from 'react';

function Nav(props) {
  let history = useHistory();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <nav className={props.x.join(' ')}>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <button
          className="navbar-toggler ml-auto  "
          type="button"
          aria-label="Toggle navigation"
          onClick={props.showSidebar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse mt-3" id="navbarNavDropdown">
          <BrowserRouter>
            <ul
              className="nav navbar-nav ml-auto "
              style={{ marginBottom: `16px` }}
            >
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  onClick={() => history.push('/project')}
                  to="/project"
                  activeClassName="is-active"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  onClick={() => history.push('/Tours')}
                  to="/Tours"
                  activeClassName="is-active"
                >
                  Tours
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  onClick={() => history.push('/Places')}
                  to="Places"
                  activeClassName="is-active"
                >
                  Places
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  onClick={() => history.push('/About')}
                  to="About"
                  activeClassName="is-active"
                >
                  About
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  onClick={() => history.push('/Contact')}
                  to="Contact"
                  activeClassName="is-active"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </BrowserRouter>
        </div>
        <div className="icons nav-item">
          <i
            className="fa fa-shopping-bag"
            aria-hidden="true"
            onClick={showModal}
          ></i>
          <span class="badge badge-warning" id="lblCartCount">
            {/* {props.value} */}
            {props.cartLength}
          </span>
          <i className="fa fa-search" aria-hidden="true"></i>
        </div>
      </nav>
      <Cart
        showModal={showModal}
        handleOk={handleOk}
        handleCancel={handleCancel}
        isModalVisible={isModalVisible}
        topCart={props.topCart}
        cart={props.cart}
      />
    </>
  );
}

export default Nav;
