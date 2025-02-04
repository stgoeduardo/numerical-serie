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

});