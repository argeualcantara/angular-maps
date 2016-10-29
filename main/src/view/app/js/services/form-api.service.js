export class FormApiService {
	constructor($http) {
		this.http = $http;
	}

	saveRoute(route) {
		let req = {
			method: 'POST',
			url: 'http://localhost:8080/greeting',
			data: route,
			headers: {'Access-Control-Allow-Origin': '*'}
		};
		this.http(req);
	}
}

FormApiService.$inject = ['$http'];