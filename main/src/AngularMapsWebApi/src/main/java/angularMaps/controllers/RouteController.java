package angularMaps.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import angularMaps.factories.RouteFactory;
import angularMaps.models.Route;

@RestController

@CrossOrigin(origins = "http://localhost:4000")
public class RouteController {

	@Autowired
    private RouteFactory factory;
	
    @ResponseBody
    @RequestMapping(path = "/route", method = RequestMethod.POST)
    public Route saveRoute(@RequestBody Route route) {
    	Route newRoute = factory.getRouteService().save(route);
        return newRoute;
    }
    
    @RequestMapping(path = "/route/{id}", method = RequestMethod.DELETE)
    public void deleteRoute(@PathVariable Long id) {
    	factory.getRouteService().delete(id);
    }
    
    @ResponseBody
    @RequestMapping(path = "/routes", method = RequestMethod.GET)
    public List<Route> listRoutes() {
        return (List<Route>) factory.getRouteService().findAll();
    }
}