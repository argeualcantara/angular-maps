import './form.scss';

class FormController {
	constructor(formApiService, mapService) {
		this.mapService = mapService;
		this.formApiService = formApiService;
	}

	saveRoute() {
		let route = {
			routeName: this.routeName,
			routeDate: this.routeDate,
			routeStops: this.mapService.currentPathStops,
			routePath: this.mapService.currentRoute._latlngs
		};
		console.log(route);
		this.formApiService.saveRoute(route);
	}

}

FormController.$inject = ['formApiService', 'mapService'];

export const FormComponent = {
	controller: FormController,
	controllerAs: '$ctrl',
	template: require('./form.html')
};