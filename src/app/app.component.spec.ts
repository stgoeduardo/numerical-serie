import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormNumericalSerieComponent } from './components/form-numerical-serie/form-numerical-serie.component';
import { LogicNumericalSerieComponent } from './components/logic-numerical-serie/logic-numerical-serie.component';
import { ResultsNumericalSerieComponent } from './components/results-numerical-serie/results-numerical-serie.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([])
      ],
      declarations: [
        AppComponent,
        FormNumericalSerieComponent,
        LogicNumericalSerieComponent,
        ResultsNumericalSerieComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should have randomNumber defined', () => {
    expect(component.randomNumber).toBe(0);
  });

  it('should have result defined', () => {
    expect(component.result).toBe(0);
  });

  it('should have isSendFirstValue defined', () => {
    expect(component.isSendFirstValue).toBe(false);
  });

  it('should be able to set values to properties', () => {
    component.randomNumber = 10;
    component.result = 20;
    component.isSendFirstValue = false;
    expect(component.randomNumber).toBe(10);
    expect(component.result).toBe(20);
    expect(component.isSendFirstValue).toBe(false);
  });
});
