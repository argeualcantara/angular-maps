import './map.scss';

class MapController {
  constructor(mapService) {
    this.mapService = mapService;
    this.mapService.map = L.map('mapid').setView(this.mapService.currentPath[0], 17);

    L.tileLayer('https://api.mapbox.com/styles/v1/argeualcantara/ciuslx5ql00vq2inoc0eemgod/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYXJnZXVhbGNhbnRhcmEiLCJhIjoiY2l1c2x2b2g2MDBiZzJ0cnY1NDB3MmtvOSJ9.wm7SbtgDlapj2U_Z42byTg', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 20
    }).addTo(this.mapService.map);

    let markerStart = L.marker(this.mapService.currentPath[0]).addTo(this.mapService.map);
    let markerEnd = L.marker(this.mapService.currentPath[this.mapService.currentPath.length-1]).addTo(this.mapService.map);
    this.mapService.currentMarkers.push(markerStart);
    this.mapService.currentMarkers.push(markerEnd);
    var polyline = L.polyline(this.mapService.currentPath).addTo(this.mapService.map);

    this.mapService.map.on('click', (e) => {
      let marker = L.marker(e.latlng).addTo(this.mapService.map);
      this.mapService.currentMarkers.push(marker);
      console.log(this.mapService.currentMarkers);
    });
  }

  removeAllMarkers(){
    this.mapService.map.removeLayer(this.mapService.currentPath);
    for(let marker of this.mapService.currentMarkers) {
      this.mapService.map.removeLayer(marker);
    }
    this.mapService.currentMarkers = [];
  }

  createPath() {
    let latlngs = [];
    for(let marker of this.mapService.currentMarkers) {
      latlngs.push(marker._latlng);
    }
    var polyline = L.polyline(latlngs).addTo(this.mapService.map);
    this.mapService.currentPath = polyline;
  }
}

MapController.$inject = ['mapService'];

export const MapComponent = {
  controller: MapController,
  controllerAs: '$ctrl',
  template: require('./map.html')
}