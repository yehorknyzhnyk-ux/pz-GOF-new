export interface Strategy { do(): void; }
export class ConcreteStrategy implements Strategy { do() { console.log("иконання стратегії"); } }
export class Context {
    private s: Strategy;
    constructor(s: Strategy) { this.s = s; }
    run() { this.s.do(); }
}
