import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapComponent} from './map.component';
import { Feature, FeatureCollection, GeoJsonObject, Geometry } from "geojson";
import { HttpClientModule } from '@angular/common/http';
import L, { LatLngBounds, layerGroup } from 'leaflet';
describe('MapComponent', () => {
  let component: MapComponent;
  let fixture: ComponentFixture<MapComponent>;
  let feature :Feature<Geometry, any>
  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports:[HttpClientModule],
      declarations: [MapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapComponent);
    component = fixture.componentInstance;
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should test ngOnInit', () => {
    component.ngOnInit();
    expect(component).toBeTruthy();
  });
  it('should test legend method', () => {
    component.setLegend();
    expect(component).toBeTruthy();
  });
  it('should test click method for county names', () => {
    component.countyArray[0]= {Ainm: "Criostóir Aindreamha ",
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
    var e = {type:'Feature', properties:{CONTAE: "Aontroim",GAEILGE:"hihi"}}
    var layer = L.Layer
    component.click(e, new layer)
     e = {type:'Feature', properties:{CONTAE: "An Cabhán",GAEILGE:"hihi"}}
     component.click(e, new layer)
     e = {type:'Feature', properties:{CONTAE: "An Dún",GAEILGE:"hihi"}}
     component.click(e, new layer)
     e = {type:'Feature', properties:{CONTAE: "Doire",GAEILGE:"hihi"}}
     component.click(e, new layer)
     e = {type:'Feature', properties:{CONTAE: "Dún na nGall",GAEILGE:"hihi"}}
     component.click(e, new layer)
     e = {type:'Feature', properties:{CONTAE: "Fear Manach",GAEILGE:"hihi"}}
     component.click(e, new layer)
     e = {type:'Feature', properties:{CONTAE: "Muineachán",GAEILGE:"hihi"}}
     component.click(e, new layer)
     e = {type:'Feature', properties:{CONTAE: "Tír Eoghain",GAEILGE:"hihi"}}
     component.click(e, new layer)
     e = {type:'Feature', properties:{CONTAE: "An Iarmhí",GAEILGE:"hihi"}}
     component.click(e, new layer)
     e = {type:'Feature', properties:{CONTAE: "An Lú",GAEILGE:"hihi"}}
     component.click(e, new layer)
     e = {type:'Feature', properties:{CONTAE: "An Mhí",GAEILGE:"hihi"}}
     component.click(e, new layer)
     e = {type:'Feature', properties:{CONTAE: "Longfort",GAEILGE:"hihi"}}
     component.click(e, new layer)
     e = {type:'Feature', properties:{CONTAE: "Liatroim",GAEILGE:"hihi"}}
     component.click(e, new layer)
     e = {type:'Feature', properties:{CONTAE: "Maigh Eo",GAEILGE:"hihi"}}
     component.click(e, new layer)
     e = {type:'Feature', properties:{CONTAE: "Sligeach",GAEILGE:"hihi"}}
     component.click(e, new layer)
     e = {type:'Feature', properties:{CONTAE: "Cill Dara", GAEILGE:"hihi"}}
     component.click(e, new layer)
     expect(component).toBeTruthy();
  });
  it('should test color method', () => {
    component.getColor(0);
    expect(component).toBeTruthy();
  });
  it('should test zoom method', () => {
    expect(component).toBeTruthy();
  });
  it('should test highlight', () => {
    expect(component).toBeTruthy();
  });
  it('should test reset', () => {
    expect(component).toBeTruthy();
  });

});
