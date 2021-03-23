import React from 'react';
import ReactDOM from 'react-dom';
// import PrimeraApp from './components/PrimeraApp';
import CounterApp from './components/CounterApp';

import './css/index.css';

const numero = 10;

const divRoot = document.querySelector('#app');

ReactDOM.render(<CounterApp value={numero} />, divRoot);
