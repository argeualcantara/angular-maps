export class FormService {
  constructor(formApiService, mapService) {
    this.formApiService = formApiService;
    this.mapService = mapService;
    this.routeList = [];
    this.currentRoute = null;
    this.isEditing = false;
  }

  saveCurrentRoute() {
    this.formApiService.saveRoute(this.currentRoute).then(() => {
      if(this.currentRoute.index != null) {
        this.routeList[this.currentRoute.index] = this.currentRoute;
      } else {
        this.routeList.push(this.currentRoute);
      }
      this.mapService.clearMap();
      this.currentRoute = null;
    });
  }

  setCurrentRoute(index) {
    this.mapService.clearMap();
    this.currentRoute = Object.assign({}, this.routeList[index]);
    this.currentRoute.index = index;

    for(let stop of this.currentRoute.routeStops) {
      let latlng = stop.location.split(',');
      let latlngObj = {lat: latlng[0], lng: latlng[1]};
      let marker = L.marker(latlngObj).addTo(this.mapService.map);
      this.mapService.currentMarkers.push(marker);
      this.mapService.currentPathStops.push(stop);
    }

    this.mapService.setCurrentRoutePath(this.currentRoute.routePath);
  }

}

FormService.$inject = ['formApiService', 'mapService'];