import Tours from '../components/tours/Tours';
import PlacesCom from '../components/places/placesCom';
import Product from '../components/product/Product';
import Sidbar from '../components/sidebar/Sidbar';
import Nav from '../components/navbar/Nav';
import slider from '../images/back2.png';
import Img_Products from '../components/product_imgs/Img_Products';
import { Divider } from 'antd';
import { useParams } from 'react-router-dom';
import { Bg_Img, Icon_Style } from './style';

function Products(props) {
  const { id } = useParams();
  console.log(id);

  return (
    <>
      <Bg_Img slider={slider} height={626 + 'px'}>
        <Nav x={props.x} showSidebar={props.showSidebar} />

        <Icon_Style>
          <h1>
            Our tours
            <br /> and attractions
          </h1>
        </Icon_Style>
      </Bg_Img>

      <Sidbar sidebar={props.sidebar} showSidebar={props.showSidebar} />
      <Product id={id} />
      <PlacesCom
        title="Lorem ipsum primis aliquam risus"
        text="Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi. Aliquam erat ac ipsum. Integer aliquam purus. Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo vel bibendum sapien massa ac turpis faucibus orci luctus non, consectetuer lobortis quis, varius in, purus. Integer ultrices posuere cubilia Curae, Nulla ipsum dolor lacus, suscipit adipiscing."
        text2="Cum sociis natoque penatibus et ultrices volutpat. Nullam wisi ultricies a, gravida vitae, dapibus risus ante sodales lectus blandit eu, tempor diam pede cursus vitae, ultricies eu, faucibus quis, porttitor eros cursus lectus, pellentesque eget, bibendum a, gravida ullamcorper quam. Nullam viverra consectetuer. Quisque cursus et, porttitor risus. Aliquam sem. In hendrerit nulla quam nunc, accumsan congue. Lorem ipsum primis in nibh vel risus. Sed vel lectus. Ut sagittis, ipsum dolor quam"
      />
      <Divider />
      <Img_Products number={4} />
      <Divider style={{ marginTop: `50px` }} />
      <Tours number={3} smallText="Related products" distance={30 + 'px'} />
    </>
  );
}

export default Products;
