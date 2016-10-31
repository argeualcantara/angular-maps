import './route-table.scss';

class RouteTableController {
  constructor(formService) {
    this.formService = formService;
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