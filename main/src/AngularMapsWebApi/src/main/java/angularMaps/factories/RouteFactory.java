package angularMaps.factories;

import org.springframework.beans.factory.annotation.Autowired;

import angularMaps.repositories.RouteRepository;

public class RouteFactory {
	@Autowired //don't forget the setter
    private RouteRepository repository;
	
	public RouteRepository getRouteRepository() {
		return repository;
	}
}
