import './style-tours.css';
import { Row, Col, Card } from 'antd';
import 'antd/dist/antd.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Tours(props) {
  const { Meta } = Card;
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
        setResult(res.data.results);
      })
      .catch((err) => {
        console.log('Error happened during fetching!', err);
      });
  }, [Result, clintID]);

  return (
    <>
      <Row style={{ paddingLeft: `7%`, paddingTop: props.distance }}>
        <Col
          xs={{ span: 20 }}
          sm={{ span: 20 }}
          md={{ span: 13 }}
          lg={{ span: 13 }}
        >
          <div className="design2">
            <span> &#x2014; &nbsp; {props.smallText}</span>
            <h2>{props.title}</h2>
          </div>
        </Col>
      </Row>

      <Row gutter={[0, 16]} style={{ paddingLeft: `7%` }}>
        {Result.map((img) => (
          <Col
            xs={{ span: 20 }}
            sm={{ span: 9 }}
            md={{ span: 6 }}
            lg={{ span: 7 }}
            style={{ marginRight: `3%` }}
          >
            <Card
              hoverable
              style={{ maxWidth: `100%` }}
              cover={<img alt="example" src={img.urls.regular} />}
            >
              <Meta
                title={
                  <div className="price">
                    <span>{img.user.name}</span>
                    <br />
                    <p className="price">$159.00</p>
                  </div>
                }
                description=" Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit."
              />
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Tours;
