import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccineSiteListComponent } from './vaccine-site-list.component';

describe('VaccineSiteListComponent', () => {
  let component: VaccineSiteListComponent;
  let fixture: ComponentFixture<VaccineSiteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccineSiteListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccineSiteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
