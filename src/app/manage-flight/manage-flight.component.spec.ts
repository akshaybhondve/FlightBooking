import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageFlightComponent } from './manage-flight.component';

describe('ManageFlightComponent', () => {
  let component: ManageFlightComponent;
  let fixture: ComponentFixture<ManageFlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageFlightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
