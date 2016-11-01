export class FormApiService {
	constructor($http) {
		this.http = $http;
	}

	saveRoute(route) {
		let req = {
			method: 'POST',
			url: 'http://localhost:8080/route',
			data: route,
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		};
		return this.http(req);
	}

	editRoute(route) {
		let req = {
			method: 'POST',
			url: 'localhost:8080/route/'+route.routeId,
			data: route,
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		};
		return this.http(req);
	}

	listAllRoutes() {
		let req = {
			method: 'GET',
			url: 'http://localhost:8080/routes',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		};
		return this.http(req);
	}

}

FormApiService.$inject = ['$http'];