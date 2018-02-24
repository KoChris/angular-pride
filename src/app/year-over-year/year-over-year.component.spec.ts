import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YearOverYearComponent } from './year-over-year.component';

describe('YearOverYearComponent', () => {
  let component: YearOverYearComponent;
  let fixture: ComponentFixture<YearOverYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YearOverYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YearOverYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
