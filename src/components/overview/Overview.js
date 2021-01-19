import './style-over.css';
import { Row, Col, Button, Carousel } from 'antd';
import 'antd/dist/antd.css';
import location from '../../images/location.png';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Overview(props) {
  const [clintID, setClintID] = useState(
    'je2vpPqIlY_oNO9jhIR_GUIkQkEIE7fzJS0hWg9SLgI'
  );
  const [Result, setResult] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.unsplash.com/search/photos?query=nature&page=3&per_page=${props.number}&client_id=${clintID}`
      )
      .then((res) => {
        // console.log(res);
        setResult(res.data.results);
      })
      .catch((err) => {
        console.log('Error happened during fetching!', err);
      });
  }, [Result, clintID]);

  const contentStyle = {
    height: '351px',
    width: `90%`,
  };
  return (
    <>
      <Row className="location">
        <Col
          xs={{ span: 20, offset: 2 }}
          sm={{ span: 20, offset: 4 }}
          md={{ span: 10, offset: 2 }}
          lg={{ span: 10, offset: 2 }}
        >
          <div className="design2">
            <span> &#x2014; &nbsp; Location overview</span>
            <h2>
              The Mountainous <br /> region in North West England
            </h2>
            <p>
              Proin bibendum sollicitudin feugiat. Curabitur ut egestas justo,
              vitae molestie ante. Integer magna purus, commodo in diam nec,
              pretium auctor sapien. In pulvinar, ipsum eu dignissim facilisis,
              massa justo varius purus, non dictum elit nibh ut massa. Nam massa
              erat, aliquet a rutrum eu, sagittis ac nibh. Pellentesque velit
              dolor, suscipit in ligula a, suscipit rhoncus dui vitae molestie
              ante.
            </p>
          </div>
          <Carousel autoplay>
            {Result.map((img) => (
              <div>
                <img style={contentStyle} src={img.urls.regular} alt="img" />
              </div>
            ))}
          </Carousel>
        </Col>
        <Col
          xs={{ span: 20, offset: 2 }}
          sm={{ span: 20, offset: 4 }}
          md={{ span: 10, offset: 0 }}
          lg={{ span: 10, offset: 1 }}
        >
          <div className="design2 ">
            <img src={location} alt="img" />
          </div>
          <Row>
            <Col
              xs={{ span: 20, offset: 1 }}
              sm={{ span: 10, offset: 0 }}
              md={{ span: 10, offset: 0 }}
              lg={{ span: 10, offset: 0 }}
            >
              <h3>See the map</h3>
            </Col>

            <Col
              xs={{ span: 5, offset: 1 }}
              sm={{ span: 10, offset: 3 }}
              md={{ span: 7, offset: 2 }}
              lg={{ span: 5, offset: 4 }}
            >
              <div className="details">
                <Button>view more details</Button>
              </div>
            </Col>
          </Row>
          {/* <div className="details">
            <Button>view more details</Button>
          </div> */}
        </Col>
      </Row>
    </>
  );
}

export default Overview;
