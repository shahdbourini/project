import React from 'react';
import { Col } from 'antd';
import {
  Section,
  Box,
  Title,
  InputStyle,
  ButtonStyle,
  Pstyle,
} from './style-signup';

function Signup(props) {
  return (
    <>
      <Section>
        <Col
          xs={{ span: 20, offset: 1 }}
          sm={{ span: 15, offset: 4 }}
          md={{ span: 18, offset: 4 }}
          lg={{ span: 15, offset: 5 }}
        >
          <Box>
            <Title>
              Sign up to our newsletter and grab tickets at lowest prices
            </Title>
            <InputStyle placeholder="Your e-mail address" />
            <ButtonStyle block>Sign up Today</ButtonStyle>
            <Pstyle>
              Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus,
              eleifend mi vel, maximus justo. Maecenas mi tortor, pellentesque a
              aliquam ut, fringilla eleifend lectus. Maecenas ultrices tellus.
            </Pstyle>
          </Box>
        </Col>
      </Section>
    </>
  );
}

export default Signup;
