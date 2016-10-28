package angularMaps.webApi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "AngularMaps.controllers")
public class App {

    public static void main(String[] args) {
        SpringApplication.run(App.class, args);
    }
}