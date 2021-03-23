//Promesas

import { getHeroeById } from './bases/08-exportaciones-importaciones';
//**Las promesas son tareas Asyncronas **
// const promesa = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		// console.log('2 segundos después');
// 		// resolve();
// 		// resolve(p1);
// 		const p1 = getHeroeById(2);
// 		resolve(p1);
// 		// reject('No se pudo encontrar el héroe');
// 	}, 2000);
// });

// promesa
// 	.then((heroe) => {
// 		console.log('heroe', heroe);
// 	})
// 	.catch((err) => console.warn(err));

const getHeroeByIdAsync = (id) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			// console.log('2 segundos después');
			// resolve();
			// resolve(p1);
			const p1 = getHeroeById(id);
			if (p1) {
				resolve(p1);
			} else {
				reject('No se pudo encontrar el heéroe');
			}
			// reject('No se pudo encontrar el héroe');
		}, 2000);
	});
};

getHeroeByIdAsync(3)
	// .then((heroe) => console.log('Heroe', heroe))
	.then(console.log)
	// .catch((err) => console.warn(err));
	.catch(console.warn);
