import './style-steps.css';
import { Row, Col, Button, Divider } from 'antd';
import 'antd/dist/antd.css';
import { CaretRightOutlined } from '@ant-design/icons';

function Step() {
  return (
    <>
      <Row className="step">
        <Col
          xs={{ span: 20, offset: 4 }}
          md={{ span: 5, offset: 1 }}
          lg={{ span: 4, offset: 2 }}
        >
          <div class="numberCircle">1</div>
          <h5>choose a trip</h5>
        </Col>
        <Col
          xs={{ span: 20, offset: 4 }}
          md={{ span: 6, offset: 1 }}
          lg={{ span: 5, offset: 0 }}
        >
          <div class="numberCircle">2</div>
          <h5>Buy tickets online</h5>
        </Col>
        <Col
          xs={{ span: 20, offset: 4 }}
          md={{ span: 4, offset: 1 }}
          lg={{ span: 3, offset: 0 }}
        >
          <div class="numberCircle">3</div>
          <h5>Enjoy</h5>
        </Col>

        <Col
          xs={{ span: 20, offset: 4 }}
          md={{ span: 5, offset: 1 }}
          lg={{ span: 6, offset: 3 }}
        >
          <div className="design ">
            {/* <h5>watch promo video</h5> */}
            <Button className="btn" icon={<CaretRightOutlined />}>
              watch promo video
            </Button>
          </div>
        </Col>
      </Row>
      <Divider />
    </>
  );
}

export default Step;
