import { Component, AfterViewInit } from '@angular/core';
import { FeatureCollection, GeoJsonObject } from 'geojson';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';
const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-map',
  templateUrl: 'test-map.component.html',
  styleUrls: ['test-map.component.css']
})
export class TestMapComponent implements AfterViewInit {


 
  public map: L.Map | L.LayerGroup<any>;
  counties:FeatureCollection;
  json: GeoJsonObject | undefined;
   Dmarker:any;
   Gmarker:any;
   Cmarker:any;
   TMarker:any;
   bool: boolean = true;

   private initMap(): void {
    this.map = L.map('map', {
      center: [ 53.174146, -7.462381 ],
      zoom: 1
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 10,
      minZoom: 7,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    tiles.addTo(this.map);
    this.map.fitBounds
    this.http.get("assets/Counties.json").subscribe((json: any) => {
      console.log(json);
      this.json = json;
      L.geoJSON(this.json,
        {
          style:(feature) => ({
            weight:3,
            opacity:0.5,
            color:'green',
            fillOpacity:0.8,
            fillColor:'green'
          }),
          onEachFeature: (feature, layer) => (
            layer.on({
              mouseover: (e) => (this.highlightFeature(e)),
              mouseout: (e) => (this.resetFeature(e)),
              // click:(e) =>(this.map.fitBounds(e.target.getBounds())),
            })
          )
          
        }).addTo(this.map);
        
    });

  }

  constructor(private http: HttpClient, ) { }
  ngAfterViewInit(): void {
    
    
    this.initMap();
  }
  
  // zoomToFeature(e:any) {
    
  //   // this.map.fitBounds(e.target.getBounds());
  //   this.map.setView(e.latlng, 13);
  // }
 

highlightFeature(e:any) {
  const layer = e.target;

  layer.setStyle({
    weight: 10,
    opacity: 1.0,
    color: '#DFA612',
    fillOpacity: 1.0,
    fillColor: '#FAE042'
  });
}

resetFeature(e:any) {
  const layer = e.target;

  layer.setStyle({
    weight: 3,
    opacity: 0.5,
    color: '#008f68',
    fillOpacity: 0.8,
    fillColor: '#6DB65B'
  });
}



}

