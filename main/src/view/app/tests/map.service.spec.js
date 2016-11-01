describe('Map Service Test', () => {
	let service;
	beforeEach(() => {
		angular.mock.module('angular-maps');
		angular.mock.inject(( _$injector_) => {
			service = _$injector_.get('mapService');
		});
	});

	it('clearRoute should empty Map Service arrays', () => {
		service.currentMarkers.push('a');
		service.currentPathStops.push('a');
		service.clearRoute();
		expect(service.currentMarkers).toEqual([]);
		expect(service.currentPathStops).toEqual([]);
	});

	it('getPath should return true', () => {
		expect(service.getPath).toBeTruthy();
	})
});