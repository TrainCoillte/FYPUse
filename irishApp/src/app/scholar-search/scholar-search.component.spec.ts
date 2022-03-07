import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScholarSearchComponent } from './scholar-search.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DataService } from "../data.service";
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from '../footer/footer.component';
describe('ScholarSearchComponent', () => {
  let component: ScholarSearchComponent;
  let fixture: ComponentFixture<ScholarSearchComponent>;
  let service: DataService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ ScholarSearchComponent ,FooterComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScholarSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.scribe[0] ={Ainm: "",
    Breise: "",
    DataBais: "0000-00-00",
    DataBreithe: "0000-00-00",
    FeachFosta: "",
    FloruitEnd: "0000-00-00",
    FloruitStart: "0000-00-00",
    ID: 1,
    Lamhscribhinni: "",
    Patrun: "",
    Seoladh1: "",
    Seoladh2: "",
    Seoladh3: "",
    Seoladh4: "",
    Seoladh5: "",
    Seoladh6: "",
    Seoladh7: "",
    Seoladh8: "",
    Seoladh9: "",
    Seoladh10: "",
    SliBheatha: ""
    },
    component.scribe[1] ={Ainm: "N/A",
    Breise:  "N/A",
    DataBais:  "N/A",
    DataBreithe:  "N/A",
    FeachFosta:  "N/A",
    FloruitEnd:  "N/A",
    FloruitStart:  "N/A",
    ID: 1,
    Lamhscribhinni:  "N/A",
    Patrun: "N/A",
    Seoladh1:  "N/A",
    Seoladh2:  "N/A",
    Seoladh3:  "N/A",
    Seoladh4:  "N/A",
    Seoladh5:  "N/A",
    Seoladh6:  "N/A",
    Seoladh7:  "N/A",
    Seoladh8:  "N/A",
    Seoladh9:  "N/A",
    Seoladh10:  "N/A",
    SliBheatha:  "N/A"
    },

    component.scribes[0] = {Ainm: "Criostóir Aindreamha ",
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
    SliBheatha: "Hucstaeir ",
  }
  component.scribes[1]={
    Ainm: "Séamus Ó Gribín ",
Breise: "",
DataBais: "N/A",
DataBreithe: "N/A",
FeachFosta: "N/A",
FloruitEnd: "1699-00-00",
FloruitStart: "1696-00-00",
ID: 175,
Lamhscribhinni: "ARÉ 24L17 (127); LNA 33.4.11",
Patrun: "Patrick Logan ",
Seoladh1: "Gar don Lorgain, Co. Ard Mhacha",
Seoladh2: "N/A",
Seoladh3: "N/A",
Seoladh4: "N/A",
Seoladh5: "N/A",
Seoladh6: "N/A",
Seoladh7: "N/A",
Seoladh8: "N/A",
Seoladh9: "N/A",
Seoladh10: "",
SliBheatha: "N/A"
  };
  component.scribes[2]={Ainm: "Aodh Mhac Domhnaill [2] ",
  Breise: "",
  DataBais: "1867-00-00",
  DataBreithe: "N/A",
  FeachFosta: "Peadar Ó Gealacáin, Cathal Ó Cearbhalláin, Brian Ó Searcaigh",
  FloruitEnd: "1867-00-00",
  FloruitStart: "1826-00-00",
  ID: 63,
  Lamhscribhinni: "ARÉ 23O59 (b) (1368); CM L14; COFLA [B1]; COFLA MF13; LPBF 14; LPBF 15; LPBF 16; LPBF 17; LPBF 18; LPBF 19a; OB G16",
  Patrun: "Roibeard Mac Ádhaimh",
  Seoladh1: "Carraig Leice, Inis Caoin, Co. na Mí  ",
  Seoladh2: "Baile Átha Fhirdia, Co. Lú",
  Seoladh3: "Droim Ghaill Íocht., Droim Conrach, Co. na Mí",
  Seoladh4: "Glinntí Aontroma",
  Seoladh5: "Cúil Eachtrann, Cathraí, Co. Aontroma",
  Seoladh6: "Béal Feirste, Co. Aontroma ",
  Seoladh7: "88 Millfield, Béal Feirste, Co. Aontroma ",
  Seoladh8: "Tulacha Beigile, Cill Mhic Réanáin, Co. Dhún na nGall",
  Seoladh9: "An Fál Carrach, Tulacha Beigile, Cill Mhic Réanáin, Co. Dhún na nGall",
  Seoladh10: "",
  SliBheatha: "Máistir scoile, saothraí monarchan "
  };
  });
  

  it('should create', () => {
  
    expect(component).toBeTruthy();
  });
  it('should check the ngOnit', () => {
    component.ngOnInit();
    expect(component).toBeTruthy();
  });
  it('should test the form submission', () => {
    component.onSubmit()
    expect(component.showStringbool).toEqual(false);
  });
  it('should test the form submission if values are null', () => {
    component.profileForm.value.Ainm=null;
    component.profileForm.value.DataBreitheó=null;
    component.profileForm.value.DataBreithechun=null;
    component.profileForm.value.DataBaisó=null;
    component.profileForm.value.DataBaischun=null;
    component.profileForm.value.Patrun=null;
    component.profileForm.value.Topic=null;
    component.profileForm.value.Lamhscribhinni=null;
    component.profileForm.value.FloruitStartó=null;
    component.profileForm.value.FloruitStartchun=null;
    component.profileForm.value.FloruitEndó=null;
    component.profileForm.value.FloruitEndchun=null;
    component.profileForm.value.SliBheatha=null;
    component.profileForm.value.Contae=null;
    component.onSubmit();
    expect(component.scribe).toEqual(component.scribes);
  });
  it('should test that county name changes', () => {
    component.profileForm.value.Contae='Doire';
    component.onSubmit();
    expect(component.profileForm.value.Contae).toEqual( "Dhoire");
    component.profileForm.value.Contae='Aontroim';
    component.onSubmit();
    expect(component.profileForm.value.Contae).toEqual( "Aontroma");
    component.profileForm.value.Contae='An Cabhán';
    component.onSubmit();
    expect(component.profileForm.value.Contae).toEqual( "Chabháin");
    component.profileForm.value.Contae='An Dún';
    component.onSubmit();
    expect(component.profileForm.value.Contae).toEqual( "Dúin");
    component.profileForm.value.Contae='Dún na nGall';
    component.onSubmit();
    expect(component.profileForm.value.Contae).toEqual( "Dhún na nGall");
    component.profileForm.value.Contae='Fear Manach';
    component.onSubmit();
    expect(component.profileForm.value.Contae).toEqual( "Fhear Manach");
    component.profileForm.value.Contae='Muineachán';
    component.onSubmit();
    expect(component.profileForm.value.Contae).toEqual( "Mhuineacháin");
    component.profileForm.value.Contae='Tír Eoghain';
    component.onSubmit();
    expect(component.profileForm.value.Contae).toEqual( "Thír Eoghain");
    component.profileForm.value.Contae='An Iarmhí';
    component.onSubmit();
    expect(component.profileForm.value.Contae).toEqual( "Iarmhí");
    component.profileForm.value.Contae='An Lú';
    component.onSubmit();
    expect(component.profileForm.value.Contae).toEqual( "Lú");
    component.profileForm.value.Contae='An Mhí';
    component.onSubmit();
    expect(component.profileForm.value.Contae).toEqual( "Mí");
    component.profileForm.value.Contae='Cill Dara';
    component.onSubmit();
    expect(component.profileForm.value.Contae).toEqual( "Chill Dara");
    component.profileForm.value.Contae='Longfort';
    component.onSubmit();
    expect(component.profileForm.value.Contae).toEqual( "Longfoirt");
    component.profileForm.value.Contae='Liatroim';
    component.onSubmit();
    expect(component.profileForm.value.Contae).toEqual( "Liatroma");
    component.profileForm.value.Contae='Maigh Eo';
    component.onSubmit();
    expect(component.profileForm.value.Contae).toEqual( "Mhaigh Eo");
    component.profileForm.value.Contae='Sligeach';
    component.onSubmit();
    expect(component.profileForm.value.Contae).toEqual( "Shligigh");
   });
   it('should test that if value is entered and no match to hit else statement', () => {
    component.profileForm.value.Ainm = 'Nathan';
    component.profileForm.value.Contae = 'Example';
    component.profileForm.value.Patrun = 'Example';
    component.profileForm.value.SliBheatha = 'Example';
    component.profileForm.value.Lamhscribhinni = 'Example';
    component.profileForm.value.DataBaisó = '1900';
    component.profileForm.value.DataBaischun = '1500';
    component.profileForm.value.DataBreitheó = '1900';
    component.profileForm.value.DataBreithechun = '1500';
    component.profileForm.value.FloruitEndó= "1500";
    component.profileForm.value.FloruitEndchun = '1500';
    component.profileForm.value.FloruitStartchun = '1500';
    component.profileForm.value.FloruitStartó = '1900';
    component.profileForm.value.Contae = null;
    component.onSubmit();
    expect(component.scribe.length).toEqual(0);
  });
   it('should test that if name is entered, it searches, fills correctly and ignores case', () => {
    component.profileForm.value.Ainm = 'Criostóir';
    component.onSubmit();
    expect(component.scribe.length).toEqual(1);
  });
  it('should test that if Date of birth from range is entered, it searches, fills correctly and ignores case', () => {
    component.profileForm.value.DataBreitheó =1650;
    component.onSubmit();
    expect(component.scribe.length).toEqual(1);
  });
  it('should test that if Date of birth to range is entered, it searches, fills correctly and ignores case', () => {
    component.profileForm.value.DataBreithechun =1850;
    component.onSubmit();
    expect(component.scribe.length).toEqual(1);
  });
  it('should test that if Date of death from range is entered, it searches, fills correctly and ignores case', () => {
    component.profileForm.value.DataBaisó =1850;
    component.onSubmit();
    expect(component.scribe.length).toEqual(2);
  });
  it('should test that if Date of death to range is entered, it searches, fills correctly and ignores case', () => {
    component.profileForm.value.DataBaischun =1890;
    component.onSubmit();
    expect(component.scribe.length).toEqual(2);
  });
  it('should test that if Patrun is entered, it searches, fills correctly and ignores case', () => {
    component.profileForm.value.Patrun ="Patrick";
    component.onSubmit();
    expect(component.scribe.length).toEqual(1);
  });
  it('should test that if Manuscripts is entered, it searches, fills correctly and ignores case', () => {
    component.profileForm.value.Lamhscribhinni = "ARÉ 3C4ii (1019)";
    component.onSubmit();
    expect(component.scribe.length).toEqual(1);
  });
  it('should test that job start date start is entered, it searches, fills correctly and ignores case', () => {
    component.profileForm.value.FloruitStartó = 1650;
    component.onSubmit();
    expect(component.scribe.length).toEqual(3);
  });
  it('should test that job start date end is entered, it searches, fills correctly and ignores case', () => {
    component.profileForm.value.FloruitStartchun = 1850;
    component.onSubmit();
    expect(component.scribe.length).toEqual(3);
  });
  it('should test that job end date end is entered, it searches, fills correctly and ignores case', () => {
    component.profileForm.value.FloruitEndó = 1750;
    component.onSubmit();
    expect(component.scribe.length).toEqual(2);
  });
  it('should test that job end date end is entered, it searches, fills correctly and ignores case', () => {
    component.profileForm.value.FloruitEndchun = 1850;
    component.onSubmit();
    expect(component.scribe.length).toEqual(1);
  });
  it('should test that job is entered, it searches, fills correctly and ignores case', () => {
    component.profileForm.value.SliBheatha = "Hucstaeir";
    component.onSubmit();
    expect(component.scribe.length).toEqual(1);
  });
  it('should test that each address is checked on multiple search parameters', () => {
    component.profileForm.value.Ainm="Aodh";
    component.profileForm.value.Contae = "Dhún na nGall";
    component.onSubmit();
    expect(component.scribe.length).toEqual(1);
    component.profileForm.value.Ainm="Aodh";
    component.profileForm.value.Contae = "Baile Atha Cliath";
    component.onSubmit();
    expect(component.scribe.length).toEqual(0);
  });
});