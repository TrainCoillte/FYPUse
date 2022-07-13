import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from '../footer/footer.component';

import { CaseStudiesComponent } from './case-studies.component';

describe('CaseStudiesComponent', () => {
  let component: CaseStudiesComponent;
  let fixture: ComponentFixture<CaseStudiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseStudiesComponent,FooterComponent ]
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
    component. showCase1()
    expect(component.isActive).toEqual(true);
    component. showCase2()
    expect(component.isActive1).toEqual(true);
    component. showCase3()
    expect(component.isActive2).toEqual(true);
    component. showCase4()
    expect(component.isActive3).toEqual(true);
    component. showCase5()
    expect(component.isActive4).toEqual(true);

  });
  it('should check popup closes', () => {
    component. showCase1()
    expect(component.isActive).toEqual(true);
    component.closeM()
    expect(component.isActive).toEqual(false);
    component.showCase2()
    expect(component.isActive1).toEqual(true);
    component.closeM()
    expect(component.isActive1).toEqual(false);
    component. showCase3()
    expect(component.isActive2).toEqual(true);
    component.closeM()
    expect(component.isActive2).toEqual(false);
    component. showCase4()
    expect(component.isActive3).toEqual(true);
    component.closeM()
    expect(component.isActive3).toEqual(false);
    component. showCase5()
    expect(component.isActive4).toEqual(true);
    component.closeM()
    expect(component.isActive4).toEqual(false);
  });
});

