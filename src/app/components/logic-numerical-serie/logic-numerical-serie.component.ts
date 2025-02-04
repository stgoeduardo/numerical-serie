import { Component, EventEmitter, Input, Output, SimpleChanges } from "@angular/core";

@Component({
    selector: 'app-logic-numerical-serie',
    template: ``,
    standalone: false
})
export class LogicNumericalSerieComponent {
    
    @Input() randomNumber: number;
    @Output() resultNumericalSerie: EventEmitter<number> = new EventEmitter<number>();

    constructor() {
        this.randomNumber = 0;
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['randomNumber'].currentValue) {
            this.getResultNumericalSerie();
        }
    }
    
    private getResultNumericalSerie(): void {
        const n = parseInt(this.randomNumber.toString(), 10);
        const result = this.solveNumericalSerie(n);
        this.resultNumericalSerie.emit(result);
    }

    private solveNumericalSerie(n: number): number {
        const triangular = this.getTriangularNumber(n - 1);
        const primo = this.getPrimo(n - 1);
        const fibonacci = this.getFibonacci(n + 2);
        return (4 * triangular) - (2 * primo) + fibonacci;
    }
    
    private getTriangularNumber(n: number): number {
        let sum = 0;
        if (n > 0) {
            for (let i = 1 ; i <= n ; i++) {
                sum += i;
            }
        }
        return sum;   
    }

    private getPrimo(n: number): number {
        let counter = 0;
        let primo = 0;
        let number = 2;
        if (n > 0) {
            while(counter < n) {
                if (this.isPrimo(number)) {
                    primo = number;
                    counter++;
                }
                number++;
            }
        }
        return primo;
    }

    private isPrimo(num: number): boolean {
        let counter = 0;
        for (let i = 1 ; i <= num ; i++) {
            if ((num % i) === 0) {
                counter++;
            }
        }
        return counter === 2;
    }

    private getFibonacci(n: number) {
        const arrFibonacci = [0, 1];
        if (n === 0) return arrFibonacci[0];
        if (n === 1) return arrFibonacci[1];
        let i = 0;
        while (arrFibonacci.length <= n) {
            const add = arrFibonacci[i] + arrFibonacci[i + 1];
            arrFibonacci.push(add);
            i++;
        }
        return arrFibonacci[arrFibonacci.length - 1];
    }

}