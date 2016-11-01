describe('Map Component Test', () => {
  let controller, $componentController;

  beforeEach(() => {
    angular.mock.module('angular-maps');
    angular.mock.inject((_$componentController_) => {
      controller = _$componentController_('mapComponent', null, null);
      $componentController = _$componentController_;
    });
  });

  it('Should call clearMap when removeAllMarkers is pressed', () => {
  	spyOn(controller.mapService, 'clearMap');
  	controller.removeAllMarkers();
  	expect(controller.mapService.clearMap).toHaveBeenCalled();
  });

  it('Should call getPath', () => {
  	spyOn(controller.mapService, 'getPath');
  	controller.mapService.currentMarkers = [{}, {}];
  	controller.createPath();
  	expect(controller.mapService.getPath).toHaveBeenCalled();
  });

  it('Should not call getPath', () => {
  	spyOn(controller.mapService, 'getPath');
  	controller.createPath();
  	expect(controller.mapService.getPath).not.toHaveBeenCalled();
  });
});