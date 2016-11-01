describe('Route Table Component Test', () => {
  let controller, $componentController;

  beforeEach(() => {
    angular.mock.module('angular-maps');
    angular.mock.inject((_$componentController_) => {
      controller = _$componentController_('routeTableComponent', null, null);
      $componentController = _$componentController_;
    });
  });

  it('Should call listAllRoutes', () => {
    let mockResponse = {
      then: (callback) => {
        let response = {
          data: [{routeName: 'argeu'}]
        };
        callback(response);
      }
    };
    spyOn(controller.formService, 'listAllRoutes').and.returnValue(mockResponse);
  	controller.loadRouteList();
  	expect(controller.formService.listAllRoutes).toHaveBeenCalled();
  });

  it('Should call editRoute', () => {
  	spyOn(controller.formService, 'setCurrentRoute');
  	controller.editRoute(0);
  	expect(controller.formService.setCurrentRoute).toHaveBeenCalled();
  });

  it('Should call deleteRoute', () => {
    let mockResponse = {
      then: (callback) => {
        let response = {
          status: 200
        };
        callback(response);
      }
    };
    spyOn(controller.formService, 'deleteRoute').and.returnValue(mockResponse);
    spyOn(window, 'confirm').and.returnValue(true);
    controller.deleteRoute(0);
    expect(controller.formService.deleteRoute).toHaveBeenCalled();
  });

  it('Should not call deleteRoute', () => {
    let mockResponse = {
      then: (callback) => {
        let response = {
          status: 200
        };
        callback(response);
      }
    };
    spyOn(controller.formService, 'deleteRoute').and.returnValue(mockResponse);
    spyOn(window, 'confirm').and.returnValue(false);
  	controller.deleteRoute(0);
  	expect(controller.formService.deleteRoute).not.toHaveBeenCalled();
  });
});