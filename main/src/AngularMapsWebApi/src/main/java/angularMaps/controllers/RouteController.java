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

import angularMaps.models.Route;
import angularMaps.repositories.RouteRepository;

@RestController

@CrossOrigin(origins = "http://localhost:4000")
public class RouteController {

	@Autowired //don't forget the setter
    private RouteRepository routeRep;
	
    @ResponseBody
    @RequestMapping(path = "/route", method = RequestMethod.POST)
    public Route saveRoute(@RequestBody Route route) {
    	System.out.println(route);
    	routeRep.save(route);
        return route;
    }
    
    @ResponseBody
    @RequestMapping(path = "/route/{id}", method = RequestMethod.GET)
    public Route getRoute(@PathVariable Long id) {
    	return routeRep.findOne(id);
    }
    
    @ResponseBody
    @RequestMapping(path = "/routes", method = RequestMethod.GET)
    public List<Route> listRoutes() {
        return (List<Route>) routeRep.findAll();
    }
}