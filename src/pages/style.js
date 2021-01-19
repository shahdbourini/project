import styled from 'styled-components';

export const Bg_Img = styled.div`
  background-image: url(${(props) => props.slider});
  min-height: ${(props) => props.height};
  background-position: center center;
  background-repeat: repeat;
  // background-size: cover;
  position: relative;
`;

export const Icon_Style = styled.div`
  position: relative;
  top: 135px;
  & > img {
    position: relative;
    margin-left: ${(props) => props.left};
    width: ${(props) => props.width};
  }

  & > h2 {
    color: white;
    font-family: 'PT Serif';
    text-align: center;
    line-height: 88px;
    letter-spacing: 0px;
    font-weight: 400;
    font-size: 5rem;
    position: relative;
  }

  & > h1 {
    color: white;
    font-family: 'PT Serif';
    text-align: center;
    line-height: 88px;
    letter-spacing: 0px;
    font-weight: 400;
    font-size: 6rem;
    position: relative;
    @media (max-width: 767px) {
      font-size: 75px;
      line-height: 75px;
      letter-spacing: 0px;
    }
  }

  & > span {
    color: white;
    line-height: 11px;
    font-weight: 700;
    font-size: 10px;
    z-index: 10;
    font-family: 'Open Sans';
    text-align: center;
    position: relative;
    left: 45%;
  }
`;

export const Img_style = styled.div`
  & > img {
    padding-left: 37%;
  }

  & > h5 {
    color: white;
    font-size: 20px;
    line-height: 30px;
    font-weight: 400;
    letter-spacing: 0px;
    font-family: 'FontAwesome';
    margin-bottom: 15px;
    padding-top: 11px;
    width: 50%;
  }

  & > p {
    color: white;
    margin-left: 27%;
    font-size: 17px;
  }
  & > p > a {
    color: #d47e38;
  }
  &.icon-distance {
    @media (max-width: 560px) {
      margin-top: 15%;
    }
  }
`;
