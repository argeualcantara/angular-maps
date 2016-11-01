package angularMaps.webApi;

import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;

import angularMaps.models.Route;
import angularMaps.repositories.RouteRepository;
import junit.framework.Test;
import junit.framework.TestCase;
import junit.framework.TestSuite;

/**
 * Unit test for simple Route Controller.
 */
@RunWith(SpringRunner.class)
@DataJpaTest
public class RouteControllerTest extends TestCase{
	
	@Autowired
    private TestEntityManager entityManager;
	
	@Autowired RouteRepository repository;
	
    /**
     * Create the test case
     *
     * @param testName name of the test case
     */
    public RouteControllerTest( String testName )
    {
        super( testName );
    }

    /**
     * @return the suite of tests being tested
     */
    public static Test suite()
    {
        return new TestSuite( RouteControllerTest.class );
    }

	/**
	 * Assert that the route is saved
	 */
	public void testRouteShouldBeSaved() {
		Route route = new Route();
		route.setId(1L);
		route.setRouteName("Argeu");

		assertEquals(route.getRouteName(), "Argeu");
	}
}
