class Status {
	constructor () {
		this.syncing = false;
		this.status = 'offline';
	}

	setError () {
		this.status = 'error';
	}

	setPending () {
		this.status = 'pending';
	}

	setSuccess () {
		this.status = 'success';
	}

	setOffline () {
		this.status = 'offline';
	}

	setSyncing (syncing) {
		this.syncing = syncing;
	}
}

module.exports = Status;
