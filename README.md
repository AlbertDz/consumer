# Consumer

## Configurar endpoints
1. Crear archivo setup.js en la raiz del proyecto
2. Agregar el siguiente código
* Tambien puede configurar el archivo setup.js que viene con el código
```js
const setup = {
	baseUrl: 'https://restcountries.com',
	headers: {
		'Content-Type': 'application/json',
	},
	methods: {
		countries: {
			url: '/v3.1/all',
			method: 'GET',
		},
		getCountry: {
			url: '/v3.1/name/{name}',
			method: 'GET',
			args: ['name']
		},
	}
};

module.exports = setup;
```

## Realizar consulta
1. Requerir "request" desde el index
```js
const request = require('consumer');
```
2. Enviar los valores configurados
```js
const data = { name: 'Myanmar' };
const queryParams = { fullText: true };
const response = await request('getCountry', { data, queryParams });
```
* Data: Valores configurados en args
* queryParams: Valores para consultas avanzandas. Ejemplo: `/name?fullText=true`
* headers: Cabeceras personalizadas para las consultas. Ejemplo `'Authorization': 'Bearer {token}'`