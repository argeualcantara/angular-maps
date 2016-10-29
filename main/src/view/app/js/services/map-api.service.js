import { API_KEY } from '../app.constants';

export class MapApiService {
	constructor($http) {
		this.http = $http;
		this.directionsService = new google.maps.DirectionsService();
	}

	getPath(latlngs, callback) {
		let request = {
			origin: latlngs[0].location,
			destination: latlngs[latlngs.length -1].location,
			waypoints: latlngs,
			provideRouteAlternatives: false,
			travelMode: google.maps.TravelMode.DRIVING
		}
		this.directionsService.route(request, callback);
	}
}

MapApiService.$inject = ['$http'];