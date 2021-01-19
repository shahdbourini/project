import icon from '../images/icon.png';
import Sidbar from '../components/sidebar/Sidbar';
import Nav from '../components/navbar/Nav';
import Step from '../components/steps/Step';
import Overview from '../components/overview/Overview';
import Tours from '../components/tours/Tours';
import Categories from '../components/categories/Categories';
import About from '../components/about/About';
import Signup from '../components/signup/Signup';
import Img from '../components/img/Img';
import slider from '../images/slider.jpg';
import { Bg_Img, Icon_Style } from './style';

function Home(props) {
  return (
    <>
      <Bg_Img slider={slider} height={626 + 'px'}>
        <Nav x={props.x} showSidebar={props.showSidebar} />

        <Icon_Style left={48 + '%'} width={6 + '%'}>
          <img src={icon} className="img2" alt="icon" />
          <h2>
            The beauty
            <br /> of Lack District
          </h2>
          <span>The Heart of United Kingdom</span>
        </Icon_Style>
      </Bg_Img>

      <Sidbar sidebar={props.sidebar} showSidebar={props.showSidebar} />
      <Step />
      <Overview number={5} />
      <Tours
        number={3}
        title="Decide what do you want to do in Lake District"
        smallText="Available tours"
      />
      <Img distance={100} height={404} />
      <Categories />
      <About />
      <Signup />
    </>
  );
}

export default Home;
