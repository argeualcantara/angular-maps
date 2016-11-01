export class MapService {
	constructor(mapApiService) {
		this.mapApiService = mapApiService;
		this.map = null;
		this.clearRoute();
	}

	clearRoute() {
		this.currentMarkers = [];
		this.currentPathStops = [];
	}

	getPath() {
		return this.mapApiService.getPath(this.currentPathStops, (result, status) => {
			if (status == google.maps.DirectionsStatus.OK) {
				console.log(result);
				let currentPath = []
				for(let leg of result.routes[0].legs) {
					for(let step of leg.steps) {
						let latlng = {
							lat: step.start_location.lat(),
							lng: step.start_location.lng()
						};
						currentPath.push(latlng);
					}
				}
				this.setCurrentRoutePath(currentPath);
			}
		});
	}

	clearMap() {
		if(this.currentRoutePath && this.map) {
			this.map.removeLayer(this.currentRoutePath);
			for(let marker of this.currentMarkers) {
				this.map.removeLayer(marker);
			}
			this.clearRoute();
		}
	}

	setCurrentRoutePath(routePath) {
		if(this,map) {
			let polyline = L.polyline(routePath).addTo(this.map);
	    	this.currentRoutePath = polyline;
		}
	}

	addMarker(latlng) {
		if(this.map) {
		let marker = L.marker(latlng).addTo(this.map);
    	this.currentMarkers.push(marker);
		}
	}
}

MapService.$inject = ['mapApiService'];