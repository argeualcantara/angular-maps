export class FormApiService {
	constructor($http) {
		this.http = $http;
		this.routeList = [];
	}

	saveRoute(route) {
		let req = {
			method: 'GET',
			url: 'google.com',
			data: route
		};
		// return this.http(req);
		return {then: (callback) => { callback(); }};
	}

}

FormApiService.$inject = ['$http'];