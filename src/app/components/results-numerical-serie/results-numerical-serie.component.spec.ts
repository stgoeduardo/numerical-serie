import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ResultsNumericalSerieComponent } from "./results-numerical-serie.component";

describe('ResultsNumericalSerieComponent', () => {
  let component: ResultsNumericalSerieComponent;
  let fixture: ComponentFixture<ResultsNumericalSerieComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [ResultsNumericalSerieComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsNumericalSerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the results numerical serie', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize result with zero', () => {
    expect(component.result).toBe(0);
  });

});