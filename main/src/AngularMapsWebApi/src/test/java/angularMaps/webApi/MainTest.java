package angularMaps.webApi;

import org.junit.Test;
import org.junit.runner.JUnitCore;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
public class MainTest {

    @Test public void run() {
        JUnitCore.runClasses(LatLngTest.class, RouteControllerTest.class);
    }

}