//Imports and Exports

// import { heroes } from './data/heroes';
// import {heroes, owners} from './data/heroes';  //en este caso si se importa como el último doc de heroes.js
import heroes, { owners } from '../data/heroes';

//**Opcion 1 para buscar por id de heroes */
// const getHeroeById = (id) => {
// 	return heroes.find((heroe) => {
// 		if (heroe.id === id) {
// 			return true;
// 		} else {
// 			return false;
// 		}
// 	});
// };

//**Opcion 2 para buscar por id de heroes */
// const getHeroeById = (id) => {
// 	return heroes.find((heroe) => heroe.id === id);
// };

//**Opción 3 para buscar por id de heroes */
export const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);

//console.log(getHeroeById(3));

// getHeroesByOwner si es más de uno se ocupa heroes.filter()
const getHeroesByOwner = (owner) =>
	heroes.filter((heroe) => heroe.owner === owner);

//console.log(getHeroesByOwner('Marvel'));

//const getHeroeByName = (name) => heroes.find((heroe) => heroe.name === name);

//console.log(getHeroeByName('Flash'));

//**Exportando owners, que es una importación de tipo individual dentro de la default export de heroes */
//const getOwnersById = (id) => owners.find((owner) => owner.id === id);
//console.log(getOwnersById(3));
