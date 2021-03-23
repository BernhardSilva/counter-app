const nombre = 'Fernando';
const apellido = 'Perez';

// const nombreCompleto = `Mi nombre es:
// ${nombre}
// ${apellido}
// ${2 + 2}`;

const nombreCompleto = `${nombre} ${apellido} `;

// console.log(nombreCompleto);

export function getSaludo(nombre = 'Carlos') {
	return 'Hola ' + nombre + '!';
}

// console.log(`Este es un texto: ${getSaludo(nombre)}`);
