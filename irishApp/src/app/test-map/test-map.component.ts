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
  [x: string]: any;
  map: L.Map;
  counties: FeatureCollection;
  json: GeoJsonObject | undefined;
  countyArray: any[] = [];
  bool: boolean = true;

  private initMap(): void {
    var southWest = L.latLng(51.157, -11.4),
      northEast = L.latLng(55.486, -5.247),
      bounds = L.latLngBounds(southWest, northEast);
    this.map = L.map("map", {
      center: [53.374146, -7.462381],
      zoom: 1,
    });
    const tiles = L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        maxZoom: 10,
        minZoom: 7.5,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );
    this.map.fitBounds(bounds);
    tiles.addTo(this.map);
    this.map.setMaxBounds(bounds);
    this.map.on("drag", () => {
      this.map.panInsideBounds(bounds, { animate: false });
    });
    const info = new (L.Control.extend({
      options: { position: "topright" },
    }))();

    info.onAdd = function (map) {
      var div = L.DomUtil.create("div", "info");
      div.innerHTML = "<h4>Scríobhaithe na hÉireann </h4>";
      return div;
    };

    info.addTo(this.map);
    const legend = new (L.Control.extend({
      options: { position: "bottomright" },
    }))();
    legend.onAdd = function (map) {
      var div = L.DomUtil.create("div", "info legend");
      var grades = [0, 5, 10, 15, 20];
      var labels = [];
      var from, to;

      for (var i = 0; i < grades.length; i++) {
        from = grades[i];
        to = grades[i + 1];

        labels.push(
          '<i style="background:' +
            getColor(from + 1) +
            '"></i> ' +
            from +
            (to ? "&ndash;" + to : "+")
        );
      }
      div.innerHTML = labels.join("<br>");
      return div;
    };
    legend.addTo(this.map);
    this.http.get("assets/Counties.json").subscribe((json: any) => {
      console.log(json);
      this.json = json;
      L.geoJSON(this.json, {
        onEachFeature: (feature, layer) => (
          console.log(feature.properties.CONTAE),
          layer.on({
            add: (e) => this.resetFeature(e),
            mouseover: (e) => this.highlightFeature(e),
            mouseout: (e) => this.resetFeature(e),
            click: (e) => (this.zoomToFeature(e,layer,feature)),
          }),
          layer.bindTooltip(feature.properties.CONTAE, {
            className:'popup2',
            // permanent: true,
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
          this.countyArray.push(data.arrayOfScribes[i]);
        }
    });
  }
  ngAfterViewInit(): void {
    this.initMap();
  }

  setLegend() {
    var div = L.DomUtil.create("div", "info legend");
    var grades = [0, 5, 10, 15, 20];
    var labels = [];
    var from, to;

    for (var i = 0; i < grades.length; i++) {
      from = grades[i];
      to = grades[i + 1];

      labels.push(
        '<i style="background:' +
          this.getColor(from + 1) +
          '"></i> ' +
          from +
          (to ? "&ndash;" + to : "+")
      );
    }
    div.innerHTML = labels.join("<br>");
    return div;
  }
  getColor(d: any) {
    return d > 20
      ? "#4B0082"
      : d > 15
      ? "#0000FF"
      : d > 10
      ? "#7B68EE"
      : d > 5
      ? "#00008B"
      : d > 0
      ? "#E6E6FA"
      : "#00BFFF";
  }
  click(e: any, layer: L.Layer) {
    var div = L.DomUtil.create("div", "popup");
    var labels = [];
     labels.push(e.properties.CONTAE);
     console.log(this.countyArray);
    // labels.push('<h1 ' + e.properties.CONTAE + '/>');
      for (var i = 0; i < this.countyArray.length; i++) {
        if (this.countyArray[i].Seoladh1.includes(e.properties.CONTAE||e.properties.GAEILGE) || 
        this.countyArray[i].Seoladh2.includes(e.properties.CONTAE||e.properties.GAEILGE)||
        this.countyArray[i].Seoladh3.includes(e.properties.CONTAE||e.properties.GAEILGE)||
        this.countyArray[i].Seoladh4.includes(e.properties.CONTAE||e.properties.GAEILGE)||
        this.countyArray[i].Seoladh5.includes(e.properties.CONTAE||e.properties.GAEILGE)||
        this.countyArray[i].Seoladh6.includes(e.properties.CONTAE||e.properties.GAEILGE)||
        this.countyArray[i].Seoladh7.includes(e.properties.CONTAE||e.properties.GAEILGE)||
        this.countyArray[i].Seoladh8.includes(e.properties.CONTAE||e.properties.GAEILGE)||
        this.countyArray[i].Seoladh9.includes(e.properties.CONTAE||e.properties.GAEILGE)) {
        labels.push(this.countyArray[i].Ainm);
        }
      }
      if(labels.length==0)
      {
        labels.push("Níl aon scríobhaithe sa chontae seo");
      }
    div.innerHTML = labels.join("<br>");
   
layer.bindTooltip
    layer.bindPopup(div,{
      className:'popup',
    })
    labels=[];
  }
  zoomToFeature(e: any,layer: L.Layer,feature: Feature<Geometry, any>) {
    this.map.fitBounds(e.target.getBounds());
    console.log(e)
    this.map.setView(e.latlng, 13);
    var myIcon = L.divIcon({className: 'my-div-icon'});
    L.marker([e.latlng.lat,e.latlng.lng], {icon: myIcon}).addTo(this.map);
    this.click(feature, layer);
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
    console.log(e.target.feature.properties.SCRIBES);
    layer.setStyle({
      weight: 3,
      opacity: 1.0,
      color: "grey",
      fillOpacity: 1,
      fillColor: this.getColor(e.target.feature.properties.SCRIBES),
    });
  }
}
function getColor(d: any) {
  return d > 20
    ? "#4B0082"
    : d > 15
    ? "#0000FF"
    : d > 10
    ? "#7B68EE"
    : d > 5
    ? "#00008B"
    : d > 0
    ? "#E6E6FA"
    : "#00BFFF";
}
