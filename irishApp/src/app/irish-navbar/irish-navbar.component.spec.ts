import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IrishNavbarComponent } from './irish-navbar.component';

describe('IrishNavbarComponent', () => {
  let component: IrishNavbarComponent;
  let fixture: ComponentFixture<IrishNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IrishNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IrishNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
