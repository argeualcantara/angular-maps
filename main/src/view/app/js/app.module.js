import 'angular';
import 'leaflet';

import 'angular-mocks';

import { MapComponent } from './components/map/map.component';
import { HeaderComponent } from './components/header/header.component';
import { FormComponent } from './components/form/form.component';
import { RouteTableComponent } from './components/route-table/route-table.component';

import { MapService } from './services/map.service';
import { FormService } from './services/form.service';

import { MapApiService } from './services/map-api.service';
import { FormApiService } from './services/form-api.service';


angular.module('angular-maps', ['ngMockE2E'])
  .service('mapService', MapService)
  .service('mapApiService', MapApiService)
  .service('formApiService', FormApiService)
  .service('formService', FormService)
  .component('mapComponent', MapComponent)
  .component('headerComponent', HeaderComponent)
  .component('formComponent', FormComponent)
  .component('routeTableComponent', RouteTableComponent)
  ;
