import './form.scss';

import {Fixtures} from '../../fixtures.js';

class FormController {
	constructor(mapService, formService) {
		this.mapService = mapService;
		this.formService = formService;
		this.formService.routeList = Fixtures.routeList;
	}

	saveRoute() {
		if(this.mapService.currentPathStops.length > 1) {
			angular.element('input[type=text]').removeClass('required');
			this.formService.currentRoute.routeStops = this.mapService.currentPathStops;
			this.formService.currentRoute.routePath = this.mapService.currentRoutePath._latlngs;
			console.log(this.formService.currentRoute);
			this.formService.saveCurrentRoute();
		} else {
			angular.element('input[type=text]').addClass('required');
		}
	}

	cancelEdit() {
		this.mapService.clearMap();
		this.formService.currentRoute = null;
		this.formService.isEditing = false;
	}

}

FormController.$inject = ['mapService', 'formService'];

export const FormComponent = {
	controller: FormController,
	controllerAs: '$ctrl',
	template: require('./form.html')
};