class Consume {
	#request;

	constructor (request) {
		this.#request = request;
	}

	async request (key, values) {
		const data = values.data ??= {};
		const queryParams = values.queryParams ??= {};
		const newHeaders = values.headers ??= {};

		let setup;
		try { setup = require('../../../setup.js'); }
		catch (error) { setup = require('./setup.js'); }

		const { methods, headers, baseUrl } = setup;
		if (!methods.hasOwnProperty(key)) return `Method ${key} not found`;

		const { url, method } = methods[key];
		let endpoint = `${baseUrl}${url}`;

		for (const key in data) {
			const value = data[key];
			const regex = new RegExp(`{${key}}`, 'g');
			endpoint = endpoint.replace(regex, value);
		}

		if (Object.keys(queryParams).length) {
			const params = new URLSearchParams(queryParams);
			endpoint = `${endpoint}?${params}`;
		}

		const response = await this.#request.request({ url: endpoint, method, data, headers: {...headers, ...newHeaders} });
		return response;
	}
}

module.exports = Consume;
