import React from 'react';
import Sidbar from '../components/sidebar/Sidbar';
import Nav from '../components/navbar/Nav';
import slider from '../images/about.jpg';
import icon from '../images/about-pic1.png';
import Categories from '../components/categories/Categories';
import Overview from '../components/overview/Overview';
import AboutUs from '../components/about/About';
import Signup from '../components/signup/Signup';
import { Bg_Img, Icon_Style } from './style';

function About(props) {
  return (
    <>
      <Bg_Img slider={slider} height={645 + 'px'} width={33 + '%'}>
        <Nav x={props.x} showSidebar={props.showSidebar} value={props.value} />

        <Icon_Style left={38 + '%'}>
          <img src={icon} alt="icon" />
        </Icon_Style>
      </Bg_Img>

      <Sidbar sidebar={props.sidebar} showSidebar={props.showSidebar} />
      <Categories />
      <Overview />
      <AboutUs />
      <Signup />
    </>
  );
}

export default About;
