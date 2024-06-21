class eventlistModel {
    #events; // Private property to store events using a Map

    constructor() {
        this.#events = new Map();
    }

    setEvent(events) {
        this.#events = new Map(events);
    }

    getEvent() {
        return Array.from(this.#events.values());
    }

    addEvent(newEvent) {
        this.#events.set(newEvent.id, newEvent);
    }

    removeEvent(id) {
        this.#events.delete(id);
    }
}
