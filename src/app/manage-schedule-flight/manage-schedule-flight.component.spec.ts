import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageScheduleFlightComponent } from './manage-schedule-flight.component';

describe('ManageScheduleFlightComponent', () => {
  let component: ManageScheduleFlightComponent;
  let fixture: ComponentFixture<ManageScheduleFlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageScheduleFlightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageScheduleFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
