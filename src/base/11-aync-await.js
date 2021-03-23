//&Async Await

// const getIMagenPromesa = () =>
// 	new Promise((resolve) => resolve('https://image.shutterstock.com/z/stock-photo-the-programmer-girl-works-at-the-computer-1610721214.jpg'));
// getIMagenPromesa().then(console.log);

//Esto es lo mismo, pero con async es mucho mas compact
try {
	const getImagen = async () => {
		const apiKey = '6gmRs6lTMlSgBxbHxyZecMCwVpEctKOS';
		const resp = await fetch(
			`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`,
		);
		const { data } = await resp.json();

		const { url } = data.images.original;
		const img = document.createElement('img');
		img.src = url;
		document.body.append(img);
		console.log(url);
	};

	getImagen();
} catch (error) {
	console.error(error); //manejo del error
}

// const apiKey = '6gmRs6lTMlSgBxbHxyZecMCwVpEctKOS';

// const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// peticion
// 	.then((resp) => resp.json())
// 	// .then(( data ) => { //no destructurado
// 	.then(({ data }) => {
// 		//	console.log(data.data); // no destructurado
// 		const { url } = data.images.original; //desestructuro la variable para obtener la url de data.images.original
// 		const img = document.createElement('img');
// 		img.src = url;
// 		document.body.append(img);
// 		console.log(url);
// 	})
// 	.catch(console.warn);
