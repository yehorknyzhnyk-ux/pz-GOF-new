import { Singleton } from './creational/Singleton';
import { RoadLogistics } from './creational/FactoryMethod';
import { Facade } from './structural/Facade';
import { PrinterAdapter } from './structural/Adapter';
import { Context, ConcreteStrategy } from './behavioral/Strategy';
import { EventManager, User } from './behavioral/Observer';

console.log("--- 1. Singleton ---");
Singleton.getInstance().log();

console.log("\n--- 2. Factory Method ---");
new RoadLogistics().planDelivery();

console.log("\n--- 3. Facade ---");
new Facade().start();

console.log("\n--- 4. Adapter ---");
new PrinterAdapter().print("Тестовий друк");

console.log("\n--- 5. Strategy ---");
new Context(new ConcreteStrategy()).run();

console.log("\n--- 6. Observer ---");
const events = new EventManager();
events.subscribe(new User("Егор"));
events.notify("Завдання виконано!");