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
3. Modificar `baseUrl` por la URL de la API a consumir
4. Agregar las cabeceras necesarias en `headers`
5. En `methods` agregar los métodos a consultar, puede usar `GET POST PUT PATCH DELETE`

## Realizar consulta
1. Importar
```js
import { request, getStatus, isSyncing } from '@albertdz/consumer'
```
o usando `require`
```js
const { request, getStatus, isSyncing } = require('@albertdz/consumer')
```
* `request` Función que realiza la consulta
* `getStatus` Función para obtener el estado de la consulta, inicia en `offline`, los demas valores son `pending error success`
* `isSyncing` Función para saber si la consulta esta en progreso, es de tipo `boolean`

2. Realizar la solicitud
```js
const { request } = require('@albertdz/consumer')

const data = { name: 'Myanmar' };
const queryParams = { fullText: true };
const response = await request('getCountry', { data, queryParams });
```
* `Data`: Valores configurados en `args`
* `queryParams`: Valores para consultas avanzandas. Ejemplo: `/name?fullText=true`
* `headers`: Cabeceras personalizadas para las consultas. Ejemplo `'Authorization': 'Bearer {token}'`
* `bearer`: Valor para la cabecera `Authorization` en caso de no pasarlo en `headers`