import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AzVaccineHomeComponent } from './az-vaccine-home.component';

describe('AzVaccineHomeComponent', () => {
  let component: AzVaccineHomeComponent;
  let fixture: ComponentFixture<AzVaccineHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AzVaccineHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AzVaccineHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
