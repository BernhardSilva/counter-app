//Desestructuración
//Asignación Desestructurante

const persona = {
	nombre: 'Tony',
	edad: 45,
	clave: 'Ironman',
};

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave);

//Para obtener parametros de objeto persona
const { edad, clave, nombre } = persona;
console.log(nombre);
console.log(edad);
console.log(clave);
//también se puede concatenar así y en el orden que sea, siempre y cuando se haya hecho el paso de arriba con la constantes de objeto
console.log({ nombre, clave, edad });

//Desestructuración de objeto usuario dentro de una función lambda
const retornaPersona = (usuario) => {
	const { edad, clave, nombre } = usuario;
	console.log(edad, clave, nombre);
};
retornaPersona(persona);

//también se puede hacer por propiedades que solo te interesen
const retornaPersona2 = ({ nombre, edad }) => {
	console.log(`Retorna nombre y edad de persona en lambda: ${nombre} ${edad}`);
};
retornaPersona2({ nombre, edad });

//también se puede añadir propiedades y asignarles un valor a un objeto que no tenga dicha propiedad
const retornaPersona3 = ({ nombre, edad, rango = 'Capitan' }) => {
	console.log(
		`Retorna nombre, edad de persona y rango (propiedad añadida): ${nombre} ${edad} ${rango}`,
	);
};
retornaPersona3(persona); //ojo que si creo la propiedad rango Arriba en objeto Persona, esta función toma el valor de la propiedad del objeto en vez de la propiedad custom añadida

// **Tarea**
//Hacer destructuración de esto //DONE
const userContext = ({ clave, nombre, edad, rango = 'Capitan' }) => {
	return {
		nombreCLave: clave,
		anios: edad,
		latlong: {
			lat: 12.1235,
			long: 15.121385,
		},
	};
};

//se hace acá, en lag, long entre {} se puede desestructurar un objeto y tomar los datos del subobjeto como objeto.
// const { nombreCLave, anios, latlong } = userContext(persona)
//**en este caso se aprecia lo sgte, si quiero tomar las constantes por separado del objeto de lat y long se hace esto**
const {
	nombreCLave,
	anios,
	latlong: { lat, long },
} = userContext(persona);

//también se puede extraer lat, long como const haciendo un paso extra para que quede mas ordenado
// const { nombreCLave, anios, latlong } = userContext(persona);
// const { lat, long } = latlong;

console.log(nombreCLave, anios);

//tal como se ve acá se hace un print de latlong as object
//console.log(latlong);
//**y tal como se ve acá, imprimo por separado del objeto la lat y long */
console.log(lat, long);
