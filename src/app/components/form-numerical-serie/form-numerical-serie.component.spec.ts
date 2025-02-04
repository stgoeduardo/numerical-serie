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

});