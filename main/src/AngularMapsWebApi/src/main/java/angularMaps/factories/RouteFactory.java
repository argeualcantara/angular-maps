package angularMaps.factories;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import angularMaps.repositories.RouteRepository;

@Component
public class RouteFactory {
	@Autowired
    private RouteRepository service;
	
	public RouteRepository getRouteService() {
		return service;
	}
}
