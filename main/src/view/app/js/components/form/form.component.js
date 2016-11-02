import './form.scss';

import {Fixtures} from '../../fixtures.js';

class FormController {
	constructor(mapService, formService) {
		this.mapService = mapService;
		this.formService = formService;
	}

	saveRoute() {
		if(this.mapService.currentPathStops.length > 1) {
			angular.element(document).find('input[type=text]').removeClass('required');
			this.formService.currentRoute.routeStops = this.mapService.currentPathStops;
			this.formService.currentRoute.routePath = this.mapService.currentRoutePath._latlngs;
			console.log(this.formService.currentRoute);
			this.formService.saveCurrentRoute();
		} else {
			if(!this.formService.currentRoute.routeName) {
				angular.element(document).find('input[type=text]:first').addClass('required');
			}
			if(!this.formService.currentRoute.carId) {
				angular.element(document).find('input[type=text]:last').addClass('required');
			}
			alert('Make a route with at least two stops');
		}
	}

	cancelEdit() {
		this.mapService.clearMap();
		this.formService.currentRoute = this.formService.getBlankRoute();
		this.formService.isEditing = false;
	}

}

FormController.$inject = ['mapService', 'formService'];

export const FormComponent = {
	controller: FormController,
	controllerAs: '$ctrl',
	template: require('./form.html')
};