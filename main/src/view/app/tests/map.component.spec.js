describe('Map Component Test', () => {
  let controller, mapService, $componentController;

  beforeEach(() => {
    angular.mock.module('angular-maps');
    angular.mock.inject((_$componentController_, _mapService_) => {
      mapService = _loginService_;
      controller = _$componentController_('mapComponent', null, null);
      $componentController = _$componentController_;
    });
  });
});