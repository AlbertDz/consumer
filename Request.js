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
			const defaultResponse = { error: true, message: 'Request error' };
			if (error.response) {
				if (!error.response.data) return defaultResponse;
				const response = this.#formatResponse(error.response);
				response.error = true;
				return response;
			} else return defaultResponse;
		}
	}
};

module.exports = Request;
