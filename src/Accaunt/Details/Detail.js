import React, { useEffect, useState } from 'react'
import './Detail.css'
import { useSpring,animated } from 'react-spring';

  function Nummber ({ n })  {
    const { number } = useSpring({
      from: {number: 0 },
      number: n,
      delay: 200,
      config: { mass:1, tension: 20, friction: 10 },
    });
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
  }
function Detail () {    
    return (
      <div className="container">
        <h2 className="animated-number"></h2>
        <h2 className="animated-number"><Nummber n={15}/></h2>

      </div>
    );
}

export default Detail