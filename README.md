# Consumer

## Configurar endpoints
1. Crear archivo `consumer-setup.js` en la raiz del proyecto
2. Agregar el siguiente código
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
* Tambien puede configurar el archivo `consumer-setup.js` que viene con el código

## Realizar consulta
1. Requerir "request" desde `@albertdz/consumer`
```js
const request = require('@albertdz/consumer');
```
2. Realizar la solicitud
```js
const data = { name: 'Myanmar' };
const queryParams = { fullText: true };
const response = await request('getCountry', { data, queryParams });
```
* Data: Valores configurados en args
* queryParams: Valores para consultas avanzandas. Ejemplo: `/name?fullText=true`
* headers: Cabeceras personalizadas para las consultas. Ejemplo `'Authorization': 'Bearer {token}'`
* bearer: Valor para la cabecera `Authorization` en caso de no pasarlo en `headers`