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
