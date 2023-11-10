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
6. Ahora puede agregar una `baseUrl` a cada método

## Realizar consulta
* Importar
```js
import { request, getStatus, isSyncing, subscribe, unsubscribe } from '@albertdz/consumer'
```

* Requerir
```js
const { request, getStatus, isSyncing, subscribe, unsubscribe } = require('@albertdz/consumer')
```
1. `request` Función que realiza la consulta
2. `getStatus` Función para obtener el estado de la consulta, inicia en `offline`, los demas valores son `pending error success`
3. `isSyncing` Función para saber si la consulta esta en progreso, es de tipo `boolean`
4. `subscribe` Se subscribe a un evento `status syncing`
5. `unsubscribe` Se da de baja a un evento `status syncing`

* Realizar solicitud
```js
const { request } = require('@albertdz/consumer')

const data = { name: 'Myanmar' };
const queryParams = { fullText: true };
const response = await request('getCountry', { data, queryParams });
```
1. `Data`: Valores configurados en `args`
2. `queryParams`: Valores para consultas avanzandas. Ejemplo: `/name?fullText=true`
3. `headers`: Cabeceras personalizadas para las consultas. Ejemplo `'Authorization': 'Bearer {token}'`
4. `bearer`: Valor para la cabecera `Authorization` en caso de no pasarlo en `headers`
5. `baseUrl`: Realiza una petición a una baseUrl diferente a la configurada en el `consumer-setup.js`