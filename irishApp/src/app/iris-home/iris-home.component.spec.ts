import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DataService } from "../data.service";
import { IrisHomeComponent } from './iris-home.component';

import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from '../footer/footer.component';
describe('IrisHomeComponent', () => {
  let component: IrisHomeComponent;
  let fixture: ComponentFixture<IrisHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ IrisHomeComponent,FooterComponent ]
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
