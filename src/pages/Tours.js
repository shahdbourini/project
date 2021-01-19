import React from 'react';
import Sidbar from '../components/sidebar/Sidbar';
import Nav from '../components/navbar/Nav';
import ToursCom from '../components/tours/Tours';
import slider from '../images/back2.png';
import { Bg_Img, Icon_Style } from './style';

function Tours(props) {
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
      <ToursCom
        number={12}
        title="Decide what do you want to do in Lake District"
        smallText="Available tours"
        distance={110 + 'px'}
      />
    </>
  );
}

export default Tours;
