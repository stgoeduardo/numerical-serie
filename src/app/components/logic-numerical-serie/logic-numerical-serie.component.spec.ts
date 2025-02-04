import { ComponentFixture, TestBed } from "@angular/core/testing";
import { LogicNumericalSerieComponent } from "./logic-numerical-serie.component";

describe('LogicNumericalSerieComponent', () => {
  let component: LogicNumericalSerieComponent;
  let fixture: ComponentFixture<LogicNumericalSerieComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [LogicNumericalSerieComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogicNumericalSerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the logical numerical serie', () => {
    expect(component).toBeTruthy();
  });

  it('should call getResultNumericalSerie() when randomNumber changes', () => {
    spyOn(component, 'getResultNumericalSerie' as any);
    
    component.ngOnChanges({ randomNumber: { currentValue: 5, previousValue: 0, firstChange: false, isFirstChange: () => false } });

    expect(component['getResultNumericalSerie']).toHaveBeenCalled();
  });

  it('should emit the correct result when getResultNumericalSerie() is called', () => {
    spyOn(component.resultNumericalSerie, 'emit');

    component.randomNumber = 5;
    component['getResultNumericalSerie']();

    expect(component.resultNumericalSerie.emit).toHaveBeenCalled();
  });

  it('should correctly calculate triangular numbers', () => {
    expect(component['getTriangularNumber'](0)).toBe(0);
    expect(component['getTriangularNumber'](5)).toBe(15);    
  });

  it('should correctly find  prime numbers', () => {
    expect(component['getPrimo'](1)).toBe(2);
    expect(component['getPrimo'](2)).toBe(3);
    expect(component['getPrimo'](3)).toBe(5);
  });

  it('should correctly determine if a number is prime', () => {
    expect(component['isPrimo'](2)).toBeTrue();
    expect(component['isPrimo'](3)).toBeTrue();
    expect(component['isPrimo'](4)).toBeFalse();
    expect(component['isPrimo'](5)).toBeTrue();
  });

  it('should correctly calculate Fibonacci numbers', () => {
    expect(component['getFibonacci'](0)).toBe(0);
    expect(component['getFibonacci'](1)).toBe(1);
    expect(component['getFibonacci'](5)).toBe(5);
    expect(component['getFibonacci'](7)).toBe(13);
  });

  it('should correctly solve the numerical series', () => {
    const n = 5;
    const triangular = (4 * component['getTriangularNumber'](n - 1));
    const primo = (2 * component['getPrimo'](n - 1));
    const fibonacci = component['getFibonacci'](n + 2);
    expect(component['solveNumericalSerie'](n)).toBe(triangular - primo + fibonacci);// con 5 es 39
  });

});