const request = require('./index.js');

(async () => {
	const data = { name: 'Myanmar' };
	const queryParams = { fullText: true };
	const response = await request('getCountry', { data, queryParams });
	console.log(response);
})();
