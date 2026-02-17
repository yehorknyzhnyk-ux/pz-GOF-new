interface Listener { update(event: string): void; }

export class EventManager {
    private listeners: Listener[] = [];
    subscribe(l: Listener) { this.listeners.push(l); }
    notify(data: string) {
        this.listeners.forEach(l => l.update(data));
    }
}

export class User implements Listener {
    constructor(private name: string) {}
    update(event: string) { console.log(`${this.name} отримав сповіщення: ${event}`); }
}