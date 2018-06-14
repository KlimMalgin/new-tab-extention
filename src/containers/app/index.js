import React from 'react';


import Time from '../../modules/time';
import AutoFitImage from '../../modules/autofit';
import Icon from '../../modules/icon';

import img from '../../../images/land.jpg';

const App = () => (
  <main style={ { height: '100vh' } }>
    <AutoFitImage imgSrc={img} className="image-fit" />

    <div className="content">
      <div>
        {/* <div className="test-box">
          <Icon />
        </div> */}
      </div>
      <div className="time-wrapper">
        <Time />
      </div>


      <div />
    </div>
  </main>
);

export default App;

