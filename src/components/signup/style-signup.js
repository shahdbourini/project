import styled from 'styled-components';
import section2 from '../../images/section2.jpg';
import { Input, Button, Row } from 'antd';

export const Section = styled(Row)`
  background-image: url(${section2});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  padding: 0px;
  min-height: 404px;
  margin-top: 100px;
  position: relative;
`;

export const Box = styled.div`
    text-align: center;
    padding-top: 10%;
    left: 22%;
}
`;

export const Title = styled.h2`
  color: white;
  font-family: 'FontAwesome';
  font-size: 3rem;
}`;

export const InputStyle = styled(Input)`
    :hover{
        border-color: #fbfbfb;
    }
    }
    `;

export const ButtonStyle = styled(Button)`
    :hover{
        color: #f7f6f2;
        background-color: black;
        border-color: transparent;
    }
    color: #f7f6f2;
    background-color: #282828;
    border-color: transparent;
    margin-top: 3%;
    height: 44px;

}
`;

export const Pstyle = styled.p`
  color: white;
  padding-top: 3%;
`;
