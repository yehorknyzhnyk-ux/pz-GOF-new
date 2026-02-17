interface Transport { deliver(): void; }
class Truck implements Transport { deliver() { console.log("оставка вантажівкою по суші."); } }
class Ship implements Transport { deliver() { console.log("оставка судном по морю."); } }

export abstract class Logistics {
    abstract createTransport(): Transport;
    planDelivery() {
        const transport = this.createTransport();
        transport.deliver();
    }
}
export class RoadLogistics extends Logistics { createTransport() { return new Truck(); } }
export class SeaLogistics extends Logistics { createTransport() { return new Ship(); } }
