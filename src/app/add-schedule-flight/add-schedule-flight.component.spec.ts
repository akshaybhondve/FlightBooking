import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddScheduleFlightComponent } from './add-schedule-flight.component';

describe('AddScheduleFlightComponent', () => {
  let component: AddScheduleFlightComponent;
  let fixture: ComponentFixture<AddScheduleFlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddScheduleFlightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddScheduleFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
