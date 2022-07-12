import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseStudiesComponent } from './case-studies.component';

describe('CaseStudiesComponent', () => {
  let component: CaseStudiesComponent;
  let fixture: ComponentFixture<CaseStudiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseStudiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseStudiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check popup opens', () => {
    component.turnOn1()
    expect(component.isActive).toEqual(true);
  });
  it('should check popup closes', () => {
    component.turnOn1()
    expect(component.isActive).toEqual(true);
    component.closeM()
    expect(component.isActive).toEqual(false);
  });
});

