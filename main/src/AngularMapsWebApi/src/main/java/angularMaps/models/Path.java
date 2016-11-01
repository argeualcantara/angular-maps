package angularMaps.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Path extends LatLng{
	
	@Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;
	
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

}
