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

  it('should test the state', () => {
    component.function()
    expect(component.state).toEqual(1)
    component.function2()
    expect(component.state).toEqual(2)
    component.function3()
    expect(component.state).toEqual(3)
  });
});
