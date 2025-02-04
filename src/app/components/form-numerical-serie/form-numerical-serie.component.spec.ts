import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormNumericalSerieComponent } from "./form-numerical-serie.component";
import { ReactiveFormsModule } from "@angular/forms";

describe('FormNumericalSerieComponent', () => {
  let component: FormNumericalSerieComponent;
  let fixture: ComponentFixture<FormNumericalSerieComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [FormNumericalSerieComponent],
      imports: [ReactiveFormsModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNumericalSerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the form numerical serie', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with expected controls and validations', () => {
    expect(component.serieForm).toBeDefined();
    
    const control = component.serieForm.get('randomNumber');
    expect(control).toBeTruthy();
    
    // Debe ser requerido
    control?.setValue('');
    expect(control?.valid).toBeFalse();
    expect(control?.errors?.['required']).toBeTrue();

    // Debe aceptar solo números
    control?.setValue('abc');
    expect(control?.valid).toBeFalse();
    expect(control?.errors?.['pattern']).toBeTruthy();

    // Debe ser válido con números
    control?.setValue('123');
    expect(control?.valid).toBeTrue();
  });

  it('should emit the form value when valid', () => {
    spyOn(component.sendValue, 'emit');

    component.serieForm.get('randomNumber')?.setValue(123); // Valor válido
    component.send();

    expect(component.sendValue.emit).toHaveBeenCalledWith(123);
  });

  it('should emit empty string when invalid but has a value', () => {
    spyOn(component.sendValue, 'emit');

    component.serieForm.get('randomNumber')?.setValue('abc'); // Valor inválido (no es un número)
    component.send();

    expect(component.sendValue.emit).toHaveBeenCalledWith(undefined);
  });

  it('should emit -1 when invalid and empty', () => {
    spyOn(component.sendValue, 'emit');

    component.serieForm.get('randomNumber')?.setValue(undefined); // Campo vacío (inválido)
    component.send();

    expect(component.sendValue.emit).toHaveBeenCalledWith(-1);
  });

});