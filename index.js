const Consume = require('./Consume');
const Request = require('./Request');

const request = async (method, values = {}) => {
	const consume = new Consume(new Request());
	const response = await consume.request(method, values);
	return response;
}

module.exports = request;
