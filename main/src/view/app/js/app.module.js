import 'angular';
import 'leaflet';

import { MapComponent } from './components/map/map.component';

import { MapService } from './services/map.service';


angular.module('angular-maps', [])
  .service('mapService', MapService)
  .component('mapComponent', MapComponent);
