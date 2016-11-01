import { API_KEY } from '../app.constants';

export class MapApiService {
	constructor($http) {
		this.http = $http;
		this.directionsService = new google.maps.DirectionsService();
	}

	getPath(currentPathStops, callback) {
		let googleWaypoints = [];
		for(let stop of currentPathStops) {
			googleWaypoints.push({location: stop, stopover: true});
		}
		let request = {
			origin: googleWaypoints[0].location,
			destination: googleWaypoints[googleWaypoints.length -1].location,
			waypoints: googleWaypoints,
			provideRouteAlternatives: false,
			travelMode: google.maps.TravelMode.DRIVING
		}
		this.directionsService.route(request, callback);
	}
}

MapApiService.$inject = ['$http'];