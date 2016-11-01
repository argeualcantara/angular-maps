import './route-table.scss';

class RouteTableController {
	constructor(formService) {
		this.formService = formService;
		this.formService.listAllRoutes().then((response) => {
			this.formService.routeList = response.data;
		});
	}

	editRoute(index) {
		this.formService.setCurrentRoute(index);
		this.formService.isEditing = true;
	}
}

RouteTableController.$inject = ['formService'];

export const RouteTableComponent = {
	controller: RouteTableController,
	controllerAs: '$ctrl',
	template: require('./route-table.html')
};