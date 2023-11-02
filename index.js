const Consume = require('./Consume');
const Request = require('./Request');
const Status = require('./Status');

const status = new Status();

module.exports = {
	request: async (method, values = {}) => {
		status.setSyncing(true);
		status.setPending();
		const consume = new Consume(new Request());
		const response = await consume.request(method, values);
		const { error } = response;
		error ? status.setError() : status.setSuccess();
		status.setSyncing(false);
		return response;
	},
	getStatus: () => status.status,
	isSyncing: () => status.syncing,
};
