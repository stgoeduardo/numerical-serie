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
    const n = 11;
    const triangular = (4 * component['getTriangularNumber'](n - 1));
    const primo = (2 * component['getPrimo'](n - 1));
    const fibonacci = component['getFibonacci'](n + 2);
    expect(component['solveNumericalSerie'](n)).toBe(triangular - primo + fibonacci);// con 11 es 395
  });

  it('should correctly solve the numerical series with n equal 1 and result 2', () => {
    const n = 1;
    const triangular = (4 * component['getTriangularNumber'](n - 1));
    const primo = (2 * component['getPrimo'](n - 1));
    const fibonacci = component['getFibonacci'](n + 2);
    expect(component['solveNumericalSerie'](n)).toBe(triangular - primo + fibonacci);// con 1 es 2
  });

  it('should correctly solve the numerical series with n equal 2 and result 3', () => {
    const n = 2;
    const triangular = (4 * component['getTriangularNumber'](n - 1));
    const primo = (2 * component['getPrimo'](n - 1));
    const fibonacci = component['getFibonacci'](n + 2);
    expect(component['solveNumericalSerie'](n)).toBe(triangular - primo + fibonacci);// con 2 es 3
  });

  it('should correctly solve the numerical series with n equal 3 and result 11', () => {
    const n = 3;
    const triangular = (4 * component['getTriangularNumber'](n - 1));
    const primo = (2 * component['getPrimo'](n - 1));
    const fibonacci = component['getFibonacci'](n + 2);
    expect(component['solveNumericalSerie'](n)).toBe(triangular - primo + fibonacci);// con 3 es 11
  });

  it('should correctly solve the numerical series with n equal 4 and result 22', () => {
    const n = 4;
    const triangular = (4 * component['getTriangularNumber'](n - 1));
    const primo = (2 * component['getPrimo'](n - 1));
    const fibonacci = component['getFibonacci'](n + 2);
    expect(component['solveNumericalSerie'](n)).toBe(triangular - primo + fibonacci);// con 4 es 22
  });

  it('should correctly solve the numerical series with n equal 5 and result 39', () => {
    const n = 5;
    const triangular = (4 * component['getTriangularNumber'](n - 1));
    const primo = (2 * component['getPrimo'](n - 1));
    const fibonacci = component['getFibonacci'](n + 2);
    expect(component['solveNumericalSerie'](n)).toBe(triangular - primo + fibonacci);// con 5 es 39
  });

  it('should correctly solve the numerical series with n equal 6 and result 59', () => {
    const n = 6;
    const triangular = (4 * component['getTriangularNumber'](n - 1));
    const primo = (2 * component['getPrimo'](n - 1));
    const fibonacci = component['getFibonacci'](n + 2);
    expect(component['solveNumericalSerie'](n)).toBe(triangular - primo + fibonacci);// con 6 es 59
  });

  it('should correctly solve the numerical series with n equal 7 and result 92', () => {
    const n = 7;
    const triangular = (4 * component['getTriangularNumber'](n - 1));
    const primo = (2 * component['getPrimo'](n - 1));
    const fibonacci = component['getFibonacci'](n + 2);
    expect(component['solveNumericalSerie'](n)).toBe(triangular - primo + fibonacci);// con 7 es 92
  });

  it('should correctly solve the numerical series with n equal 8 and result 133', () => {
    const n = 8;
    const triangular = (4 * component['getTriangularNumber'](n - 1));
    const primo = (2 * component['getPrimo'](n - 1));
    const fibonacci = component['getFibonacci'](n + 2);
    expect(component['solveNumericalSerie'](n)).toBe(triangular - primo + fibonacci);// con 8 es 133
  });

  it('should correctly solve the numerical series with n equal 9 and result 195', () => {
    const n = 9;
    const triangular = (4 * component['getTriangularNumber'](n - 1));
    const primo = (2 * component['getPrimo'](n - 1));
    const fibonacci = component['getFibonacci'](n + 2);
    expect(component['solveNumericalSerie'](n)).toBe(triangular - primo + fibonacci);// con 9 es 195
  });

  it('should correctly solve the numerical series with n equal 10 and result 278', () => {
    const n = 10;
    const triangular = (4 * component['getTriangularNumber'](n - 1));
    const primo = (2 * component['getPrimo'](n - 1));
    const fibonacci = component['getFibonacci'](n + 2);
    expect(component['solveNumericalSerie'](n)).toBe(triangular - primo + fibonacci);// con 10 es 278
  });

});