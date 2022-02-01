import { Component, AfterViewInit } from "@angular/core";
import { Feature, FeatureCollection, GeoJsonObject, Geometry } from "geojson";
import { HttpClient } from "@angular/common/http";
import { DataService } from "../data.service";
import * as L from "leaflet";
const iconRetinaUrl = "assets/marker-icon-2x.png";
const iconUrl = "assets/marker-icon.png";
const shadowUrl = "assets/marker-shadow.png";
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41],
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: "app-map",
  templateUrl: "test-map.component.html",
  styleUrls: ["test-map.component.css"],
})
export class TestMapComponent implements AfterViewInit {
  map: L.Map;
  counties: FeatureCollection;
  json: GeoJsonObject | undefined;
  LúArray: any[] = [];
  bool: boolean = true;

  private initMap(): void {
    var southWest = L.latLng(51.157, -11.4),
      northEast = L.latLng(55.486, -5.247),
      bounds = L.latLngBounds(southWest, northEast);
    this.map = L.map("map", {
      center: [53.174146, -7.462381],
      zoom: 1,
      maxBounds: bounds,
    });
    const tiles = L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        maxZoom: 10,
        minZoom: 8,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );
    tiles.addTo(this.map);
    this.http.get("assets/Counties.json").subscribe((json: any) => {
      console.log(json);
      this.json = json;
      L.geoJSON(this.json, {
        style: (feature) => ({
          weight: 3,
          opacity: 1.0,
          color: "green",
          fillOpacity: 0.8,
        }),
        onEachFeature: (feature, layer) => (
          console.log(feature.properties.CONTAE),
          layer.on({
            mouseover: (e) => this.highlightFeature(e),
            mouseout: (e) => this.resetFeature(e),
            click: (e) => (this.zoomToFeature(e), this.Click(feature, layer)),
          }),
          layer.bindTooltip(feature.properties.CONTAE, {
            permanent: true,
            direction: "center",
          })
        ),
      }).addTo(this.map);
    });
  }

  constructor(private http: HttpClient, private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.sendGetRequest().subscribe((data: any) => {
      for (var i = 0; i < data.arrayOfScribes.length; i++) {
        if(data.arrayOfScribes[i].Seoladh1.includes("Lú") ||data.arrayOfScribes[i].Seoladh2.includes("Lú") ||data.arrayOfScribes[i].Seoladh3.includes("Lú"))
        {
          var Name = data.arrayOfScribes[i].Ainm;
          this.LúArray.push(Name);
        }
      }
    });
  }
  ngAfterViewInit(): void {
    this.initMap();
  }

  Click(e:any, layer: L.Layer) {
    console.log(e.properties.GAEILGE);
    if(e.properties.GAEILGE.includes("Lú"))
    {
      console.log(this.LúArray)
      for(var i=0; i<this.LúArray.length;i++){
        layer.bindPopup(this.LúArray[i])
      };
    }
    
  }
  zoomToFeature(e: any) {
    this.map.fitBounds(e.target.getBounds());
    this.map.setView(e.latlng, 13);
  }

  highlightFeature(e: any) {
    const layer = e.target;

    layer.setStyle({
      weight: 10,
      opacity: 1.0,
      color: "#DFA612",
      fillOpacity: 0.8,
      fillColor: "#DFA612",
    });
  }

  resetFeature(e: any) {
    const layer = e.target;

    layer.setStyle({
      weight: 3,
      opacity: 1.0,
      color: "green",
      fillOpacity: 0.8,
      fillColor: "green",
    });
  }
}
