//** rafcp ** React component with proptypes

import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

function CounterApp({ value }) {
	//
	//hooks
	const [counter, setCounter] = useState(value);

	//handleAdd
	const handleAdd = (e) => {
		setCounter(counter + 1);
		// setCounter((c) => c + 1);  //en el caso de no tener acceso al counter se ocupa esta función
	};

	//substract value
	const handleSubstract = (e) => {
		setCounter(counter - 1);
	};

	//reset value
	const resetCounter = (e) => {
		setCounter(value);
	};

	return (
		<Fragment>
			<h1>CounterApp</h1>
			<h2>{counter}</h2>
			<button onClick={handleAdd}>+1</button>
			<button onClick={handleSubstract}>-1</button>
			<button onClick={resetCounter}>Reset Counter</button>
		</Fragment>
	);
}

CounterApp.propTypes = {
	value: PropTypes.number.isRequired,
};

export default CounterApp;
