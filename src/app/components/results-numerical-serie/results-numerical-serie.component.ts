import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-results-numerical-serie',
    templateUrl: './results-numerical-serie.component.html',
    standalone: false
})
export class ResultsNumericalSerieComponent {
    @Input() result: number;

    constructor() {
        this.result = 0;
    }
}