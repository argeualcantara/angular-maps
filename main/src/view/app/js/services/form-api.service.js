export class FormApiService {
	constructor($http) {
		this.http = $http;
		this.routeList = [];
	}

	saveRoute(route) {
		let req = {
			method: 'GET',
			url: 'localhost:8080/route',
			data: route
		};
		// return this.http(req);
		return {then: (callback) => { callback(); }};
	}

	editRoute(route) {
		let req = {
			method: 'POST',
			url: 'localhost:8080/route/'+route.routeId,
			data: route
		};
		// return this.http(req);
	}

}

FormApiService.$inject = ['$http'];