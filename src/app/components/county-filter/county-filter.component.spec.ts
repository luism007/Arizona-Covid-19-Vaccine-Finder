import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountyFilterComponent } from './county-filter.component';

describe('CountyFilterComponent', () => {
  let component: CountyFilterComponent;
  let fixture: ComponentFixture<CountyFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountyFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountyFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
