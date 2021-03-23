//Funciones en JS

//Función lambda de un solo return, resumido
let nombre2 = 'Vegeta';
const SaludarlambdaSiRetornaUnaSolaCosa = (nombre2) => `Hola, ${nombre2}`;
console.log(SaludarlambdaSiRetornaUnaSolaCosa(nombre2));

//Funcion lambda sin argumento
const lambdaSinArgumento = () => `Hola`;
console.log(lambdaSinArgumento());

//Funcion Lambda con mas multiples parametros, fijate en los paréntesis despues del lambda y al cerrar la declaracion de parametros
const getUser = () => ({
	uid: 'ABC123',
	username: 'JuanitoGominola',
});
console.log(getUser());

//Tarea
//1. Transformen a una función de Flecha
//2. Tiene que retornar un objeto implícito
//3. Pruebas
function getUsuarioActivo(nombre) {
	return {
		uid: '651651A',
		username: nombre,
	};
}
const usuarioActivo = getUsuarioActivo('Hulk');
console.log(usuarioActivo);

const getUsuarioActivoLambda = (nombre) => ({
	uid: '98798AD',
	username: nombre,
});
