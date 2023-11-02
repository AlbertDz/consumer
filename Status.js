class Status {
	constructor () {
		this.syncing = false;
		this.status = 'offline';
		this.listeners = { syncing: [], status: [] };
	}

	setPending() {
    this.setStatus('pending');
  }

  setError() {
    this.setStatus('error');
  }

  setSuccess() {
    this.setStatus('success');
  }

	setOffline () {
		this.setStatus('offline');
	}

  setStatus(value) {
    this.status = value;
    this.notify('status', value);
  }

	setSyncing (value) {
		this.syncing = value;
		this.notify('syncing', value);
	}

	subscribe(eventType, listener) {
    if (this.listeners[eventType]) {
      this.listeners[eventType].push(listener);
    }
  }

  unsubscribe(eventType, listener) {
    if (this.listeners[eventType]) {
      this.listeners[eventType] = this.listeners[eventType].filter(l => l !== listener);
    }
  }

  notify(eventType, data) {
    if (this.listeners[eventType]) {
      this.listeners[eventType].forEach(listener => listener(data));
    }
  }
}

module.exports = Status;
