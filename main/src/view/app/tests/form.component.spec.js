describe('Form Component Test', () => {
  let controller, $componentController;

  beforeEach(() => {
    angular.mock.module('angular-maps');
    angular.mock.inject((_$componentController_) => {
      controller = _$componentController_('formComponent', null, null);
      $componentController = _$componentController_;
    });
  });

  it('Should save route', () => {
  	spyOn(controller.formService, 'saveCurrentRoute');
  	controller.mapService.currentPathStops = [ {lat:3.19829, lng: -38.783687}, {lat:3.19829, lng: -38.783687}];
  	controller.mapService.currentRoutePath = {};
  	controller.mapService.currentRoutePath._latlng = [{lat:3.19829, lng: -38.783687}, {lat:3.19829, lng: -38.783687}];
  	controller.saveRoute();
  	expect(controller.formService.saveCurrentRoute).toHaveBeenCalled();
  });

  it('Should not save route', () => {
  	spyOn(controller.formService, 'saveCurrentRoute');
  	controller.mapService.currentPathStops = [];
  	controller.saveRoute();
  	expect(controller.formService.saveCurrentRoute).not.toHaveBeenCalled();
  });

  it('Should call clearMap when cancelEdit is pressed', () => {
  	spyOn(controller.mapService, 'clearMap');
  	controller.cancelEdit();
  	expect(controller.mapService.clearMap).toHaveBeenCalled();
  });

});