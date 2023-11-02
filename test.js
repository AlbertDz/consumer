const { request, getStatus, isSyncing, subscribe, unsubscribe } = require('./index.js');

const handleSyncingChange = (newSyncing) => {
	console.log('syncing', newSyncing);
};

const handleStatusChange = (newStatus) => {
	console.log('status', newStatus);
};

(async () => {
	subscribe('syncing', handleSyncingChange);
  subscribe('status', handleStatusChange);

	const data = { name: 'Myanmar' };
	const queryParams = { fullText: true };
	const response = await request('getCountry', { data, queryParams });
	console.log(response);
})();
