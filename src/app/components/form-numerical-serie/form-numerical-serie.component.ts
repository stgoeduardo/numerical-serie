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
    @Output() isFormValid: EventEmitter<boolean> = new EventEmitter<boolean>();

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
        const value = this.serieForm.valid ?
            this.serieForm.get('randomNumber')?.value :
            ((this.serieForm?.get('randomNumber')?.value ? undefined : -1))
        this.sendValue.emit(value);
    }

}