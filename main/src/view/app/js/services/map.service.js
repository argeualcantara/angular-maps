export class MapService {
   constructor(mapApiService) {
      this.mapApiService = mapApiService;
      this.map = null;
      this.currentMarkers = [];
      this.currentPath = [];
      this.currentPathStops = [];
   }

   getPath() {
    return this.mapApiService.getPath(this.currentPathStops, (result, status) => {
         if (status == google.maps.DirectionsStatus.OK) {
            console.log(result);
            for(let leg of result.routes[0].legs) {
               for(let step of leg.steps) {
                  let latlng = {
                     lat: step.start_location.lat(),
                     lng: step.start_location.lng()
                  };
                  this.currentPath.push(latlng);
               }
            }
            var polyline = L.polyline(this.currentPath).addTo(this.map);
            this.currentRoute = polyline;
         }
      });
   }
}

MapService.$inject =['mapApiService'];