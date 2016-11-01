package angularMaps.models;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

@Entity
public class Route {
	
	@Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;
	private String routeName;
	private Date routeDate;
	private Long carId;
	

	@OneToMany(cascade = CascadeType.PERSIST, orphanRemoval = true)
	@JoinColumn(name = "path_id")
	private List<Path> routePath;
	
	@OneToMany(cascade = CascadeType.PERSIST, orphanRemoval = true)
	@JoinColumn(name = "stop_id")
	private List<Stop> routeStops;
	
	public Route() {
		
	}
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getRouteName() {
		return routeName;
	}
	public void setRouteName(String routeName) {
		this.routeName = routeName;
	}
	public Date getRouteDate() {
		return routeDate;
	}
	public void setRouteDate(Date routeDate) {
		this.routeDate = routeDate;
	}
	public Long getCarId() {
		return carId;
	}
	public void setCarId(Long carId) {
		this.carId = carId;
	}
	public List<Path> getRoutePath() {
		return routePath;
	}
	public void setRoutePath(List<Path> routePath) {
		this.routePath = routePath;
	}
	public List<Stop> getRouteStops() {
		return routeStops;
	}
	public void setRouteStops(List<Stop> routeStops) {
		this.routeStops = routeStops;
	}
	
	@Override
    public String toString() {
        return String.format(
                "Route[id=%d, routeName='%s', carId='%s']",
                id, routeName, carId);
    }

}
