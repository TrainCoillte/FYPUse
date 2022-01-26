import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScholarSearchComponent } from './scholar-search.component';

describe('ScholarSearchComponent', () => {
  let component: ScholarSearchComponent;
  let fixture: ComponentFixture<ScholarSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScholarSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScholarSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
