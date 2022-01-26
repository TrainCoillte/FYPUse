import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IrisHomeComponent } from './iris-home.component';

describe('IrisHomeComponent', () => {
  let component: IrisHomeComponent;
  let fixture: ComponentFixture<IrisHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IrisHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IrisHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
