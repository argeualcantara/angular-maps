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
      id: -1,
      routePath: [],
      routeStops: [],
      routeName: '',
      carId: ''
    };
  }

  saveCurrentRoute() {
    this.formApiService.saveRoute(this.currentRoute).then(() => {
      this.listAllRoutes().then((response) => {
        this.routeList = response.data;
      });

      this.mapService.clearMap();
      this.currentRoute = this.getBlankRoute();
    });
  }

  setCurrentRoute(index) {
    this.mapService.clearMap();
    if(this.routeList[index].routeDate) {
      this.routeList[index].routeDate = new Date(this.routeList[index].routeDate);
    }
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

  deleteRoute(index) {
    let route = this.routeList[index];
    return this.formApiService.deleteRoute(route);
  }

}

FormService.$inject = ['formApiService', 'mapService'];