// import React, { Fragment } from 'react';
import React from 'react';
import PropTypes from 'prop-types';

//Funcional components

// const PrimeraApp = ({ saludo, subtitulo = 'Soy un subtitulo' }) => {   //en metodo recomentado para dejar las default props
const PrimeraApp = ({ saludo, subtitulo }) => {
	// const saludo = {
	// 	nombre: 'Bernhard',
	// 	edad: 31,
	// };
	// const saludo = 'Hola Bernhard';

	return (
		/* <Fragment> */
		<>
			{/* <h1>{JSON.stringify(saludo)}</h1> */}
			{/* <pre>{JSON.stringify(saludo, null, 3)}</pre> */}
			<h1>{saludo}</h1>
			<p>{subtitulo}</p>
		</>
		/* </Fragment> */
	);
};

//Instanciar por el navegador que esta prop sea de tipo string y obligatoria
PrimeraApp.propTypes = {
	saludo: PropTypes.string.isRequired,
	// numeros: PropTypes.number.isRequired
};

PrimeraApp.defaultProps = {
	//En este caso para traer default props
	subtitulo: 'Soy un subtitulo',
	// subtitulo: '' //salgunos los hacen asi para definir que ahi va un componente
};

export default PrimeraApp;
