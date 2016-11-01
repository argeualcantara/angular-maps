export class FormService {
  constructor(formApiService, mapService) {
    this.formApiService = formApiService;
    this.mapService = mapService;
    this.routeList = [];
    this.currentRoute = this.getBlankRoute();
    this.isEditing = false;
  }

  getBlankRoute() {
    return {
      routePath: [],
      routeStops: []
    };
  }

  saveCurrentRoute() {
    this.formApiService.saveRoute(this.currentRoute).then(() => {
      if(this.currentRoute.index != null) {
        let index = this.currentRoute.index;
        this.routeList[index] = this.currentRoute;
      } else {
        this.routeList.push(this.currentRoute);
      }
      this.mapService.clearMap();
      this.currentRoute = this.getBlankRoute();
    });
  }

  setCurrentRoute(index) {
    this.mapService.clearMap();
    this.currentRoute = Object.assign({}, this.routeList[index]);
    this.currentRoute.index = index;

    for(let latlng of this.currentRoute.routeStops) {
      this.mapService.addMarker(latlng);
      this.mapService.currentPathStops.push(latlng);
    }

    this.mapService.setCurrentRoutePath(this.currentRoute.routePath);
  }

  listAllRoutes() {
    return this.formApiService.listAllRoutes();
  }

}

FormService.$inject = ['formApiService', 'mapService'];