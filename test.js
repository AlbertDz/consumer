const { request, getStatus, isSyncing } = require('./index.js');

(async () => {
	const data = { name: 'Myanmar' };
	const queryParams = { fullText: true };
	const response = await request('getCountry', { data, queryParams });
	console.log(getStatus(), isSyncing());
	console.log(response);
})();
