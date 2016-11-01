import './route-table.scss';

import { HTTP_STATUS } from '../../app.constants';

class RouteTableController {
	constructor(formService) {
		this.formService = formService;
		this.loadRouteList();
	}

	loadRouteList() {
		this.formService.listAllRoutes().then((response) => {
			this.formService.routeList = response.data;
		});
	}

	editRoute(index) {
		this.formService.setCurrentRoute(index);
		this.formService.isEditing = true;
	}

	deleteRoute(index) {
		let confirmDelete = confirm('Warning the route will be delete, cofirm?');
		if(confirmDelete) {
			this.formService.deleteRoute(index).then((response) => {
				if(response.status == HTTP_STATUS.OK) {
					this.loadRouteList();
				}
			});
		}
	}
}

RouteTableController.$inject = ['formService'];

export const RouteTableComponent = {
	controller: RouteTableController,
	controllerAs: '$ctrl',
	template: require('./route-table.html')
};