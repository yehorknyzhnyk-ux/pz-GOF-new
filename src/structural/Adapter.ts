class OldPrinter {
    printOld(text: string) { console.log(`Старий принтер: ${text}`); }
}

interface NewPrinter { print(text: string): void; }

export class PrinterAdapter implements NewPrinter {
    private oldPrinter = new OldPrinter();
    print(text: string) {
        this.oldPrinter.printOld(text); // Адаптуємо метод
    }
}