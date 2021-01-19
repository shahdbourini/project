import React, { useState } from 'react';
import { Test, Par, Text, Dot, DotSpan } from './style-test';
import home from '../../images/home.png';

function Testimonial() {
  const quotes = {
    0: {
      quote:
        'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis lectus.',
      text: 'Tom, Los Angeles',
    },

    1: {
      quote:
        'Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit wisi.',
      text: 'Brandon, Chicago',
    },

    2: {
      quote:
        ' Aliquam sem. In hendrerit nulla quam nunc, accumsan congue. Lorem ipsum lectus pede cursus vitae,.',
      text: 'Sophia, New York',
    },
  };

  const [current, setCurrent] = useState(quotes[0]);
  const [active, setActive] = useState(0);

  const handleSetClick = (event) => {
    setCurrent(quotes[event.target.getAttribute('data-quote')]);
    setActive(event.target.getAttribute('data-quote'));
    console.log(active);
  };

  return (
    <>
      <Test>
        <Par>{current.quote}</Par>
        <Text>{current.text}</Text>

        <Dot>
          {Object.keys(quotes).map((index) => (
            <DotSpan
              onClick={(event) => handleSetClick(event)}
              data-quote={index}
              key={index}
              active={active}
            />
          ))}
        </Dot>
      </Test>
    </>
  );
}

export default Testimonial;
