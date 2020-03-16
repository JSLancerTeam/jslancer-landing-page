import React, { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const Data = [
  {
    countNum: 199,
    countTitle:
      'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.'
  },
  {
    countNum: 575,
    countTitle:
      'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.'
  },
  {
    countNum: 69,
    countTitle:
      'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.'
  }
];

const Counter: React.FunctionComponent = () => {
  const [didViewCountUp, setDidViewCountUp] = useState(false);

  function onVisibilityChange(isVisible: boolean) {
    if (isVisible) {
      setDidViewCountUp(true);
    }
  }

  return (
    <div className="row">
      {Data.map((value, index) => (
        <div
          className="counterup_style--1 col-lg-4 col-md-4 col-sm-6 col-12"
          key={index}
        >
          <h5 className="counter">
            <VisibilitySensor
              onChange={onVisibilityChange}
              offset={{ top: 10 }}
              delayedCall
            >
              <CountUp end={didViewCountUp ? value.countNum : 0} />
            </VisibilitySensor>
          </h5>
          <p className="description">{value.countTitle}</p>
        </div>
      ))}
    </div>
  );
};
export default Counter;
