package angularMaps.webApi;

import angularMaps.models.LatLng;
import junit.framework.Test;
import junit.framework.TestCase;
import junit.framework.TestSuite;

public class LatLngTest extends TestCase {
	/**
     * Create the test case
     *
     * @param testName name of the test case
     */
    public LatLngTest( String testName )
    {
        super( testName );
    }

    /**
     * @return the suite of tests being tested
     */
    public static Test suite()
    {
        return new TestSuite( LatLngTest.class );
    }
    
    public void testConstructor(){
    	LatLng latlng = new LatLng((double) 100, (double) 100);
    	assertEquals(latlng.getLat(), (double) 100);
    	assertEquals(latlng.getLng(), (double) 100);
    }
}
