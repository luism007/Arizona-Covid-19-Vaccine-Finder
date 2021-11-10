import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteContentInfoComponent } from './site-content-info.component';

describe('SiteContentInfoComponent', () => {
  let component: SiteContentInfoComponent;
  let fixture: ComponentFixture<SiteContentInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteContentInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteContentInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
