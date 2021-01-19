import { Row, Col, Image } from 'antd';
import 'antd/dist/antd.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Img_Products(props) {
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

  return (
    <>
      <Row style={{ paddingLeft: `9%`, paddingTop: `30px` }}>
        <Col
          xs={{ span: 20 }}
          sm={{ span: 20 }}
          md={{ span: 13 }}
          lg={{ span: 13 }}
        >
          <div className="design2">
            <h2>Quisque lorem tortor fringilla sed vestibulum:</h2>
          </div>
        </Col>
      </Row>

      <Row gutter={[0, 16]} style={{ paddingLeft: `9%` }}>
        {Result.map((img) => (
          <Image.PreviewGroup>
            <Col
              xs={{ span: 20 }}
              sm={{ span: 9 }}
              md={{ span: 6 }}
              lg={{ span: 10 }}
              style={{ marginRight: `3%` }}
            >
              <Image src={img.urls.regular} width={100 + '%'} height={400} />
            </Col>
          </Image.PreviewGroup>
        ))}
      </Row>
    </>
  );
}

export default Img_Products;
