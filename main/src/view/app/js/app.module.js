import 'angular';
import 'leaflet';

import { MapComponent } from './components/map/map.component';
import { HeaderComponent } from './components/header/header.component';
import { FormComponent } from './components/form/form.component';

import { MapService } from './services/map.service';

import { MapApiService } from './services/map-api.service';
import { FormApiService } from './services/form-api.service';


angular.module('angular-maps', [])
  .service('mapService', MapService)
  .service('mapApiService', MapApiService)
  .service('formApiService', FormApiService)
  .component('mapComponent', MapComponent)
  .component('formComponent', FormComponent)
  .component('headerComponent', HeaderComponent)
  ;
