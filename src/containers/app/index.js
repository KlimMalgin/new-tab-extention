import React from 'react';

// import { Route, Link } from 'react-router-dom';
// import Home from '../home';
// import Map from '../about';

import Time from '../../modules/time';
import AutoFitImage from '../../modules/autofit';
import SplitPane from 'react-split-pane';

import img from '../../../images/typic.jpg';

// import img from 'https://source.unsplash.com/1920x1200/?land';


// Запрет/разрешение ресайза ячеек
const ALLOW_RESIZE = false;

const App = () => (
  <main style={ { height: '100vh' } }>
    <AutoFitImage imgSrc={img} className="image-fit" />

    <SplitPane split="horizontal"
               defaultSize="30%"
               allowResize={ALLOW_RESIZE}
               step={50}
               minSize={200}
               maxSize={1000}
               onDragStarted={() => document.body.style.cursor = 'col-resize'}
               onDragFinished={() => document.body.style.cursor = 'auto'}>
        <div className="cell-1">

        </div>
        <SplitPane step={50} allowResize={ALLOW_RESIZE} split="horizontal" defaultSize="58%" minSize={200} maxSize={1000}>
            <div className="cell-5">
                <div />
                    <Time />
                <div />
            </div>
            <div></div>
        </SplitPane>
    </SplitPane>


  </main>
);

export default App;

