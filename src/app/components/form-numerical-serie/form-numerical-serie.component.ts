import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'app-form-numerical-serie',
    templateUrl: './form-numerical-serie.component.html',
    standalone: false
})
export class FormNumericalSerieComponent implements OnInit {

    @Input() title: string;
    serieForm!: FormGroup;
    @Output() sendValue: EventEmitter<number> = new EventEmitter<number>();

    constructor(private fb: FormBuilder) {
        this.title = 'SNGULAR';
    }

    ngOnInit(): void {
        this.serieForm = this.fb.group({
            randomNumber: ['', [
                Validators.required,
                Validators.pattern("[0-9]*")
            ]]
        });
    }

    send(): void {
        this.sendValue.emit(
            this.serieForm.valid ? this.serieForm.get('randomNumber')?.value : -1
        );
    }

}