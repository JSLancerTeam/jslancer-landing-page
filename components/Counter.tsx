import React, { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const Data = [
  {
    countNum: 2015,
    countTitle: `
      Started from 2015, we have a worked with countless customers from United State, England, Switzerland and Australia. Our mainstack is React, React Native, NodeJS and MongoDB. It's the reason why we call ourselves JSLancer.
    `
  },
  {
    countNum: 20,
    countTitle:
      `This is the number of projects which we have completed. We work closely with you to understand what you need and provide the best solution`
  },
  {
    countNum: 10,
    countTitle:
      'This is the number of open source projects that we have contributed.'
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
