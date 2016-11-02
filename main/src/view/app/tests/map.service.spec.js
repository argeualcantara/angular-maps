
describe('Map Service Test', () => {
	let service;
	beforeEach(() => {
		angular.mock.module('angular-maps');
		angular.mock.inject(( _$injector_) => {
			service = _$injector_.get('mapService');
		});
	});

	it('Should empty marker and stops arrays', () => {
		service.currentMarkers.push('a');
		service.currentPathStops.push('a');
		service.clearStops();
		expect(service.currentMarkers).toEqual([]);
		expect(service.currentPathStops).toEqual([]);
	});

	it('Should gerenate the path', () => {
		spyOn(service.mapApiService, 'getPath');
		service.getPath();
		expect(service.mapApiService.getPath).toHaveBeenCalled();
	});

	it('Should call L.polyline to set polyline on the map', () => {
		service.map = true;
		spyOn(L, 'polyline').and.returnValue({addTo: (x) => {return true;}});
		let latlngs = [{lat: -3.656565, lng: -38.9898989}, {lat: -3.656565, lng: -38.9898989}];
		service.setCurrentRoutePath(latlngs);
		expect(L.polyline).toHaveBeenCalled();
	});

	it('Should call L.marker to set marker on the map', () => {
		service.map = true;
		spyOn(L, 'marker').and.returnValue({addTo: (x) => {return true;}});
		service.addMarker({lat: -3.656565, lng: -38.9898989});
		expect(L.marker).toHaveBeenCalled();
	});
});