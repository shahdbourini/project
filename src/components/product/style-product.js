import styled from 'styled-components';
import { InputNumber } from 'antd';

export const H1Style2 = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 700px;
  font-family: 'FontAwesome';
  -webkit-align-items: initial;

  &:after {
    content: ' ';
    display: block;
    width: 20%;
    height: 0;
    border-width: 0 0 1px;
    border-style: solid;
    position: absolute;
    left: 0;
    bottom: 0;
    top: 58px;
    color: #cebfbf;
  }
`;

export const SpanStyle = styled.span`
  color: #d47e38;
  font-size: 25px;
`;

export const StyleP = styled.div`
  color: #626262;
  font-family: 'FontAwesome';
  margin-top: 32px;
  font-size: 19px;
`;

export const StyleNum = styled(InputNumber)`
  height: 45px;
  line-height: 42px;
`;

export const StyleLinks = styled.div`
  color: #626262;
  font-family: 'FontAwesome';
  margin-top: 32px;
  font-size: 19px;

  & > span > a {
    color: #d47e38;
  }
`;

export const StyleLinks2 = styled.div`
  font-family: 'FontAwesome';
  margin-top: 32px;
  font-size: 19px;

  & > span > a {
    color: #a5a1a1;
    padding-right: 1rem;
    margin-left: 2%;
  }
`;
