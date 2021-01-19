import pic3 from '../../images/pic3.jpg';
import styled from 'styled-components';

export const ImgStyle = styled.section`
  background-image: url('${pic3}');
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
  padding: 0px;
  min-height: ${(props) => props.height};
  margin-top: ${(props) => props.distance};
`;
