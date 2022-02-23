import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScholarSearchComponent } from './scholar-search.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DataService } from "../data.service";
import { HttpClientModule } from '@angular/common/http';
describe('ScholarSearchComponent', () => {
  let component: ScholarSearchComponent;
  let fixture: ComponentFixture<ScholarSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ ScholarSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScholarSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    var scribes=[{Ainm: "Criostóir Aindreamha ",
    Breise: "",
    DataBais: "1860-11-25T00:25:00.000Z",
    DataBreithe: "1764-00-00",
    FeachFosta: "Brian Ó Tomaltaigh, Risteard Pluincéad ",
    FloruitEnd: "1860-00-00",
    FloruitStart: "1808-00-00",
    ID: 1,
    Lamhscribhinni: "ARÉ 3C4ii (1019)",
    Patrun: "N/A",
    Seoladh1: "Paróiste Pheadair, Droichead Átha, Co. Lú ",
    Seoladh2: "Geata Shráid na gCapall, Droichead Átha, Co Lú ",
    Seoladh3: "71 Sráid Thomáis, Baile Átha Cliath ",
    Seoladh4: "N/A",
    Seoladh5: "N/A",
    Seoladh6: "N/A",
    Seoladh7: "N/A",
    Seoladh8: "N/A",
    Seoladh9: "N/A",
    Seoladh10: "",
    SliBheatha: "Hucstaeir "}];

    var form = {Ainm: "",
    Contae: "",
    DataBais: "",
    DataBreithe: "",
    FloruitEnd: "",
    FloruitStart: "",
    Lamhscribhinni: "",
    Patrun: "",
    SliBheatha: ""};
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should test the form submission', () => {
    component.onSubmit()
    expect(component.showStringbool).toEqual(false);
    console.log(component.profileForm.value);
    console.log(component.scribe);
    console.log(component.scribes);
  });
  it('should test the data given and change values', () => {
  //   component.scribe = [{Ainm: "Criostóir Aindreamha ",
  //   Breise: "",
  //   DataBais: "1860-11-25T00:25:00.000Z",
  //   DataBreithe: "1764-00-00",
  //   FeachFosta: "Brian Ó Tomaltaigh, Risteard Pluincéad ",
  //   FloruitEnd: "1860-00-00",
  //   FloruitStart: "1808-00-00",
  //   ID: 1,
  //   Lamhscribhinni: "ARÉ 3C4ii (1019)",
  //   Patrun: "",
  //   Seoladh1: "Paróiste Pheadair, Droichead Átha, Co. Lú ",
  //   Seoladh2: "Geata Shráid na gCapall, Droichead Átha, Co Lú ",
  //   Seoladh3: "71 Sráid Thomáis, Baile Átha Cliath ",
  //   Seoladh4: "N/A",
  //   Seoladh5: "N/A",
  //   Seoladh6: "N/A",
  //   Seoladh7: "N/A",
  //   Seoladh8: "N/A",
  //   Seoladh9: "",
  //   Seoladh10: "",
  //   SliBheatha: "Hucstaeir "}];
  //   component.onSubmit()
  //   console.log(component.scribe[0]);
  //   // expect(component.scribe[0].Patrun).toEqual("N/A");
  // });
  // it('should test if values match', () => {
  //   expect(component.showStringbool).toEqual(false);
  //   component.scribe = [{Ainm: "Criostóir Aindreamha ",
  //   Breise: "",
  //   DataBais: "1860-11-25T00:25:00.000Z",
  //   DataBreithe: "1764-00-00",
  //   FeachFosta: "Brian Ó Tomaltaigh, Risteard Pluincéad ",
  //   FloruitEnd: "1860-00-00",
  //   FloruitStart: "1808-00-00",
  //   ID: 1,
  //   Lamhscribhinni: "ARÉ 3C4ii (1019)",
  //   Patrun: "N/A",
  //   Seoladh1: "Paróiste Pheadair, Droichead Átha, Co. Lú ",
  //   Seoladh2: "Geata Shráid na gCapall, Droichead Átha, Co Lú ",
  //   Seoladh3: "71 Sráid Thomáis, Baile Átha Cliath ",
  //   Seoladh4: "N/A",
  //   Seoladh5: "N/A",
  //   Seoladh6: "N/A",
  //   Seoladh7: "N/A",
  //   Seoladh8: "N/A",
  //   Seoladh9: "N/A",
  //   Seoladh10: "",
  //   SliBheatha: "Hucstaeir "}];
  //   console.log(component.scribe);
  //   component.profileForm.setValue({
  //   Ainm: "",
  //   Contae: "",
  //   DataBais: "",
  //   DataBreithe: "",
  //   FloruitEnd: "",
  //   FloruitStart: "",
  //   Lamhscribhinni: "",
  //   Patrun: "",
  //   SliBheatha: ""});
  //   component.onSubmit()
  //   expect(component.profileForm.value).toEqual({Ainm: "",
  //   Contae: "",
  //   DataBais: "",
  //   DataBreithe: "",
  //   FloruitEnd: "",
  //   FloruitStart: "",
  //   Lamhscribhinni: "",
  //   Patrun: "",
  //   SliBheatha: ""})
  });
});
