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
  templateUrl: "map.component.html",
  styleUrls: ["map.component.css"],
})
export class MapComponent implements AfterViewInit {
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
        minZoom: 7,
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
      var grades = [1, 5, 10, 15, 20];
      var labels = [];
      var from, to;

      for (var i = 0; i < grades.length; i++) {
        from = grades[i];
        to = grades[i + 1];

        labels.push(
          '<i style="background:' +
            getColorLegend(from + 1) +
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
      this.json = json;
      L.geoJSON(this.json, {
        onEachFeature: (feature, layer) => (
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
  getColor(color: any) {
    return color > 20
      ? "#4B0082"
      : color > 15
      ? "#0000FF"
      : color > 10
      ? "#7B68EE"
      : color > 5
      ? "#00008B"
      : color > 0
      ? "#E6E6FA"
      : "#00BFFF";
  }
  click(e: any, layer: L.Layer) {
    var div = L.DomUtil.create("div", "popup");
    var labels = [];
     labels.push(e.properties.CONTAE);
     if(e.properties.CONTAE =="Aontroim")
        {
          e.properties.CONTAE = "Aontroma";
        }
        else if(e.properties.CONTAE =="An Cabhán")
        {
          e.properties.CONTAE = "Chabháin";
        }
        else if(e.properties.CONTAE =="An Dún")
        {
          e.properties.CONTAE = "Dúin";
        }
        else if(e.properties.CONTAE =="Doire")
        {
          e.properties.CONTAE = "Dhoire";
        }
        else if(e.properties.CONTAE =="Dún na nGall")
        {
          e.properties.CONTAE = "Dhún na nGall";
        }
        else if(e.properties.CONTAE =="Fear Manach")
        {
          e.properties.CONTAE = "Fhear Manach";
        }
        else if(e.properties.CONTAE =="Muineachán")
        {
          e.properties.CONTAE = "Mhuineacháin";
        }
        else if(e.properties.CONTAE=="Tír Eoghain")
        {
          e.properties.CONTAE = "Thír Eoghain";
        }
        else if(e.properties.CONTAE =="An Iarmhí")
        {
          e.properties.CONTAE = "Iarmhí";
        }
        else if(e.properties.CONTAE =="An Lú")
        {
          e.properties.CONTAE = "Lú";
        }
        else if(e.properties.CONTAE =="An Mhí")
        {
          e.properties.CONTAE = "Mí";
        }
        else if(e.properties.CONTAE =="Cill Dara")
        {
          e.properties.CONTAE = "Chill Dara";
        }
        else if(e.properties.CONTAE =="Longfort")
        {
          e.properties.CONTAE = "Longfoirt";
        }
        else if(e.properties.CONTAE =="Liatroim")
        {
          e.properties.CONTAE = "Liatroma";
        }
        else if(e.properties.CONTAE =="Maigh Eo")
        {
          e.properties.CONTAE = "Mhaigh Eo";
        }
        else if(e.properties.CONTAE =="Sligeach")
        {
          e.properties.CONTAE = "Shligigh";
        }
    // labels.push('<h1 ' + e.properties.CONTAE + '/>');
      for (var i = 0; i < this.countyArray.length; i++) {
        if (this.countyArray[i].Seoladh1.includes(e.properties.CONTAE) || 
        this.countyArray[i].Seoladh2.includes(e.properties.CONTAE)||
        this.countyArray[i].Seoladh3.includes(e.properties.CONTAE)||
        this.countyArray[i].Seoladh4.includes(e.properties.CONTAE)||
        this.countyArray[i].Seoladh5.includes(e.properties.CONTAE)||
        this.countyArray[i].Seoladh6.includes(e.properties.CONTAE)||
        this.countyArray[i].Seoladh7.includes(e.properties.CONTAE)||
        this.countyArray[i].Seoladh8.includes(e.properties.CONTAE)||
        this.countyArray[i].Seoladh9.includes(e.properties.CONTAE)) {
        labels.push(this.countyArray[i].Ainm);
        }
      }
      if(labels.length==1)
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
    layer.setStyle({
      weight: 3,
      opacity: 1.0,
      color: "grey",
      fillOpacity: 1,
      fillColor: this.getColor(e.target.feature.properties.SCRIBES),
    });
  }
}
function getColorLegend(legendColor: any) {
  return legendColor > 20
    ? "#4B0082"
    : legendColor > 15
    ? "#0000FF"
    : legendColor > 10
    ? "#7B68EE"
    :legendColor> 5
    ? "#00008B"
    : legendColor> 0
    ? "#E6E6FA"
    : "#00BFFF";
}