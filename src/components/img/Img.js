import { ImgStyle } from './style-img';

function Img(props) {
  return (
    <>
      <ImgStyle
        className="img3"
        distance={props.distance + 'px'}
        height={props.height + 'px'}
      ></ImgStyle>
    </>
  );
}

export default Img;
