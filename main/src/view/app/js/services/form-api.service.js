import { API_URLS } from '../app.constants';

export class FormApiService {
	constructor($http) {
		this.http = $http;
	}

	saveRoute(route) {
		let req = this.getRequest(API_URLS.ROUTE, 'POST');
		req.data = route;
		return this.http(req);
	}

	deleteRoute(route) {
		let req = this.getRequest(API_URLS.ROUTE + '/' + route.id, 'DELETE');
		return this.http(req);
	}

	listAllRoutes() {
		let req = this.getRequest(API_URLS.ROUTE_LIST, 'GET');
		return this.http(req);
	}

	getRequest(url, method) {
		return {
			method: method,
			url: url,
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		};
	}

}

FormApiService.$inject = ['$http'];