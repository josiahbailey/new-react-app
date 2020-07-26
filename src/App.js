import React from 'react';
import logo from './logo.svg';
import './App.css';

import FrogCard from './components/frog-card'

function App() {
    let frog = "https://cdn.mos.cms.futurecdn.net/rqoDpnCCrdpGFHM6qky3rS-1200-80.jpg"
    return (
        <div className="App">
            <p>Hello World</p>
            <FrogCard f={frog} />
        </div>
    );
}

export default App;
