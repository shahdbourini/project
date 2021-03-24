import React from 'react';
import Sidbar from '../components/sidebar/Sidbar';
import Nav from '../components/navbar/Nav';
import PlacesCom from '../components/places/placesCom';
import Part2 from '../components/places/Part2';
import slider from '../images/back2.png';
import Img from '../components/img/Img';
import { Bg_Img, Icon_Style } from './style';

function Places(props) {
  return (
    <>
      <Bg_Img slider={slider} height={626 + 'px'}>
        <Nav
          x={props.x}
          showSidebar={props.showSidebar}
          // value={props.value}
          // topCart={props.items}
          cart={props.cart}
          cartLength={props.cartLength}
          removeItem={props.removeItem}
          addItem={props.addItem}
        />

        <Icon_Style>
          <h1>
            Plenty of places
            <br /> to see
          </h1>
        </Icon_Style>
      </Bg_Img>

      <Sidbar sidebar={props.sidebar} showSidebar={props.showSidebar} />
      <Img distance={0} height={573} />
      <PlacesCom
        title="Curabitur lacinia enim at ex elementum"
        text="Vivamus in diam turpis. In condimentum maximus tristique. 
        Maecenas non laoreet odio. Fusce lobortis porttitor purus,
         vel vestibulum libero pharetra vel. Pellentesque lorem augue, 
         fermentum nec nibh et, fringilla sollicitudin orci. 
         Integer pharetra magna non ante blandit.
       Aenean et sodales est, ut vestibulum lorem. 
       Vivamus in diam turpis. In condimentum maximus tristique.
        Maecenas non laoreet odio. Fusce lobortis porttitor purus, 
        vel vestibulum libero pharetra vel. Pellentesque lorem augue,
         fermentum nec nibh et, fringilla sollicitudin orci.
          Integer pharetra magna non ante blandit lobortis.
           Sed mollis conseqat eleifend. Aliquam consectetur
            orci eget dictum tristique. Aenean et sodales est,
             ut vestibulum lorem."
      />
      <Part2 />
      <Img distance={100} height={404} />
      <PlacesCom
        title="Pellentesque velit dolor suscipit suscipit orci"
        text="Vivamus in diam turpis. In condimentum maximus tristique. 
        Maecenas non laoreet odio. Fusce lobortis porttitor purus,
         vel vestibulum libero pharetra vel. Pellentesque lorem augue, 
         fermentum nec nibh et, fringilla sollicitudin orci. 
         Integer pharetra magna non ante blandit.
       Aenean et sodales est, ut vestibulum lorem. 
       Vivamus in diam turpis. In condimentum maximus tristique.
        Maecenas non laoreet odio. Fusce lobortis porttitor purus, 
        vel vestibulum libero pharetra vel. Pellentesque lorem augue,
         fermentum nec nibh et, fringilla sollicitudin orci.
          Integer pharetra magna non ante blandit lobortis.
           Sed mollis conseqat eleifend. Aliquam consectetur
            orci eget dictum tristique. Aenean et sodales est,
             ut vestibulum lorem."
      />
      <Part2 />
    </>
  );
}

export default Places;
