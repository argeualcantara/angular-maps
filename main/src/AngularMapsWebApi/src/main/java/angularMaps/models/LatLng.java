package angularMaps.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class LatLng {
	
	@Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;
	private Double lat;
	private Double lng;
	
	public LatLng() {

	}
	
	public LatLng(Double lat, Double lng) {
		this.lat = lat;
		this.lng = lng;
	}
	
	public Long getId() {
		return id;
	}
	
	public void setId(Long id) {
		this.id = id;
	}
	
	public Double getLat() {
		return lat;
	}
	public void setLat(Double lat) {
		this.lat = lat;
	}
	public Double getLng() {
		return lng;
	}
	public void setLng(Double lng) {
		this.lng = lng;
	}
	
	@Override
    public String toString() {
        return String.format("%s, %s", lat.toString(), lng.toString());
    }
}
