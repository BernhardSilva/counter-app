//Desestructuración de arreglos

const personajes = ['Goku', 'Vegeta', 'Trunks'];

// console.log(personajes[0]);
// console.log(personajes[1]);
// console.log(personajes[2]);

//si quiero obtener el valor del array 2 "Trunks", necesito poner , , en el array, así se juega con el salto de posición en el array
const [, , p3] = personajes;
console.log(p3);

const retornaArreglo = () => {
	return ['ABC', 123];
};

//así imprimo el array completo
// const [] = retornaArreglo();
// console.log(retornaletArreglo())

//acá estoy tomando bajo desestructuración, 2 valores dentro de 2 posiciones del array, letras y numeros
const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

// **** TAREA ****
// *1. el primer valor del arr se llamará nombre
// *2. el segundo se llamará getSaludo

const userState = (valor) => {
	return [
		valor,
		() => {
			console.log('Hola Mundo');
		},
	];
};

//Solución no logica
// const arr = userState('Goku');
// arr[1]();

//Solucion lógica
const [nombre, getSaludo] = userState('Goku');
console.log(nombre);
getSaludo();
