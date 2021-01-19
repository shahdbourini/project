import './style-cat.css';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import icon1 from '../../images/icon1.png';
import icon2 from '../../images/icon2.png';
import icon3 from '../../images/icon3.png';
import icon4 from '../../images/icon4.png';
import icon5 from '../../images/icon5.png';
import icon6 from '../../images/icon6.png';
import icon7 from '../../images/icon7.png';
function Categories() {
  return (
    <>
      <Row className="location">
        <Col
          xs={{ span: 20, offset: 2 }}
          sm={{ span: 20, offset: 4 }}
          md={{ span: 14, offset: 2 }}
          lg={{ span: 14, offset: 2 }}
        >
          <div className="design2">
            <span> &#x2014; &nbsp; Categories</span>
            <h2>Choose between over 400 places and objects to visit</h2>
          </div>
        </Col>
      </Row>

      <Row gutter={[0, 72]} className="spaceing">
        <Col
          xs={{ span: 20 }}
          sm={{ span: 20 }}
          md={{ span: 6 }}
          lg={{ span: 6 }}
          className="center"
        >
          <img src={icon1} alt="icon" />
          <h5>Hotels</h5>
        </Col>

        <Col
          xs={{ span: 20 }}
          sm={{ span: 20 }}
          md={{ span: 6 }}
          lg={{ span: 6 }}
          className="center"
        >
          <img src={icon2} alt="icon" />
          <h5>Places to eat</h5>
        </Col>

        <Col
          xs={{ span: 20 }}
          sm={{ span: 20 }}
          md={{ span: 6 }}
          lg={{ span: 6 }}
          className="center"
        >
          <img src={icon3} alt="icon" />
          <h5>Campfire</h5>
        </Col>

        <Col
          xs={{ span: 20 }}
          sm={{ span: 20 }}
          md={{ span: 6 }}
          lg={{ span: 6 }}
          className="center"
        >
          <img src={icon4} alt="icon" />
          <h5>Camping</h5>
        </Col>

        <Col
          xs={{ span: 20 }}
          sm={{ span: 20 }}
          md={{ span: 6 }}
          lg={{ span: 6 }}
          className="center"
        >
          <img src={icon5} alt="icon" />
          <h5>Mountain Trips</h5>
        </Col>

        <Col
          xs={{ span: 20 }}
          sm={{ span: 20 }}
          md={{ span: 6 }}
          lg={{ span: 6 }}
          className="center"
        >
          <img src={icon6} alt="icon" />
          <h5>Town Trips</h5>
        </Col>

        <Col
          xs={{ span: 20 }}
          sm={{ span: 20 }}
          md={{ span: 6 }}
          lg={{ span: 6 }}
          className="center"
        >
          <img src={icon7} alt="icon" />
          <h5>ZOO Parks</h5>
        </Col>
      </Row>
    </>
  );
}

export default Categories;
