const axios = require('axios');

class Request {
	#formatResponse (response) {
		const { data } = response;
		return data;
	}

	async request ({ url, method, data = {}, headers = {} }) {
		try {
			const response = await axios({ url, method, data, headers });
			return this.#formatResponse(response);
		} catch (error) {
			if (error.response) return this.#formatResponse(error.response);
			else return { error: true, message: error.message };
		}
	}
};

module.exports = Request;
