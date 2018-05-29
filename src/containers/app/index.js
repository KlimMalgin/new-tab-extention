import React from 'react';

// import { Route, Link } from 'react-router-dom';
// import Home from '../home';
// import Map from '../about';

import Time from '../../modules/time';
import AutoFitImage from '../../modules/autofit';
import Icon from '../../modules/icon';

import SplitPane from 'react-split-pane';

// import fontawesome from '@fortawesome/fontawesome';
// import brands from '@fortawesome/fontawesome-free-brands';

import img from '../../../images/land.jpg';

// import img from 'https://source.unsplash.com/1920x1200/?land';

// let q = fontawesome.icon(brands.faVk).html;

debugger;

// Запрет/разрешение ресайза ячеек
const ALLOW_RESIZE = false;

const App = () => (
  <main style={ { height: '100vh' } }>
    <AutoFitImage imgSrc={img} className="image-fit" />

    <div className="content">
      <div>
        <div className="test-box">
          <Icon />
        </div>
      </div>
      <div className="time-wrapper">
        <Time />
      </div>


      <div />
    </div>




  </main>
);

export default App;

