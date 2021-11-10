import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccineSiteCardComponent } from './vaccine-site-card.component';

describe('VaccineSiteCardComponent', () => {
  let component: VaccineSiteCardComponent;
  let fixture: ComponentFixture<VaccineSiteCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccineSiteCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccineSiteCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
