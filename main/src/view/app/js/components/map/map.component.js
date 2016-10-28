import './map.scss';

import { ZOOM_VALUES, TILE_LAYERS } from '../../app.constants';

class MapController {
  constructor(mapService) {
    this.mapService = mapService;
    this.mapService.map = L.map('mapid').setView(this.mapService.currentPath[0], ZOOM_VALUES.initialZoom);

    L.tileLayer(TILE_LAYERS[this.tileLayer], {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: ZOOM_VALUES.maxZoom
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
  template: require('./map.html'),
  bindings: {
    tileLayer: '@'
  }
}