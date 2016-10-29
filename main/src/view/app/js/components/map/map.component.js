import './map.scss';

import { ZOOM_VALUES, TILE_LAYERS } from '../../app.constants';

class MapController {
  constructor(mapService) {
    this.mapService = mapService;
    this.mapService.map = L.map('mapid').setView([-3.8127535,-38.4976114,], ZOOM_VALUES.initialZoom);

    L.tileLayer(TILE_LAYERS[this.tileLayer], {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: ZOOM_VALUES.maxZoom
    }).addTo(this.mapService.map);

    this.mapService.map.on('click', (e) => {
      let marker = L.marker(e.latlng).addTo(this.mapService.map);
      this.mapService.currentMarkers.push(marker);
      this.mapService.currentPathStops.push({location: e.latlng.lat+', '+e.latlng.lng, stopover: true});
    });
  }

  removeAllMarkers(){
    this.mapService.map.removeLayer(this.mapService.currentRoute);
    for(let marker of this.mapService.currentMarkers) {
      this.mapService.map.removeLayer(marker);
    }
    this.mapService.currentMarkers = [];
  }

  createPath() {
    this.mapService.getPath();
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