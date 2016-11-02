package angularMaps.webApi;

import java.util.List;

import javax.persistence.EntityManagerFactory;
import javax.sql.DataSource;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseBuilder;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseType;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.stereotype.Component;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.TestExecutionListeners;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.support.DependencyInjectionTestExecutionListener;
import org.springframework.test.context.support.DirtiesContextTestExecutionListener;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.transaction.PlatformTransactionManager;

import angularMaps.models.Route;
import angularMaps.repositories.RouteRepository;
import angularMaps.webApi.RouteControllerTest.RepoFactory4Test;
import angularMaps.webApi.RouteControllerTest.TestController;
import junit.framework.TestCase;

/**
 * Unit test for simple Route Controller.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration(classes = {TestController.class, RepoFactory4Test.class})
@TestExecutionListeners( { DependencyInjectionTestExecutionListener.class,
    DirtiesContextTestExecutionListener.class } )

public class RouteControllerTest extends TestCase{
	
	@Autowired
	TestController controller;
	

	/**
	 * Assert that the route is saved
	 */
	@Test
	public void testRouteShouldBeSaved() {
		Route route = new Route();
		route.setId(1L);
		route.setRouteName("Argeu");
		
		Route newRoute = controller.saveRoute(route);
		List<Route> routes = controller.getRoutes();
		
		assertEquals(routes.size(), 1);
		assertEquals(newRoute.getRouteName(), route.getRouteName());
	}
	
	@Component
	static class TestController
	{
		@Autowired
		private RouteRepository routeRepo;
		
		/**
		 * @return
		 */
		public Route saveRoute(Route route)
		{
			return routeRepo.save(route);
		}
		
		/**
		 * @return
		 */
		public List<Route> getRoutes()
		{
			return (List<Route>) routeRepo.findAll();
		}
	}
	
	@Configuration
	@EnableJpaRepositories( basePackageClasses = RouteRepository.class )
	static class RepoFactory4Test
	{
		@Bean
		public DataSource dataSource()
		{
			EmbeddedDatabaseBuilder builder = new EmbeddedDatabaseBuilder();
			return builder.setType( EmbeddedDatabaseType.H2 ).build();
		}
		
		@Bean
		public EntityManagerFactory entityManagerFactory()
		{
			HibernateJpaVendorAdapter vendorAdapter = new HibernateJpaVendorAdapter();
			vendorAdapter.setGenerateDdl( true );
			
			LocalContainerEntityManagerFactoryBean factory = new LocalContainerEntityManagerFactoryBean();
			factory.setJpaVendorAdapter( vendorAdapter );
			factory.setPackagesToScan( Route.class.getPackage().getName() );
			factory.setDataSource( dataSource() );
			factory.afterPropertiesSet();
			
			return factory.getObject();
		}
		
		@Bean
		public PlatformTransactionManager transactionManager()
		{
			JpaTransactionManager txManager = new JpaTransactionManager();
			txManager.setEntityManagerFactory( entityManagerFactory() );
			return txManager;
		}
	}
}


