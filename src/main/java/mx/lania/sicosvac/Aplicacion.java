/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mx.lania.sicosvac;
import java.util.EnumSet;
import javax.servlet.DispatcherType;
import javax.servlet.FilterRegistration;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.ServletRegistration;
import org.sitemesh.builder.SiteMeshFilterBuilder;
import org.sitemesh.config.ConfigurableSiteMeshFilter;
import org.sitemesh.webapp.SiteMeshFilter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.WebApplicationInitializer;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.AnnotationConfigWebApplicationContext;
import org.springframework.web.filter.CharacterEncodingFilter;
import org.springframework.web.servlet.DispatcherServlet;

/**
 *
 * @author José Antonio Pérez Ozuna
 */
public class Aplicacion implements WebApplicationInitializer{

    private final static Logger Logger = LoggerFactory.getLogger(Aplicacion.class);
    
    @Override
    public void onStartup(ServletContext contextoServlets) throws ServletException {
        Logger.debug("onStartup()");
        WebApplicationContext contextoSpring = getContext();
        ServletRegistration.Dynamic servlet = contextoServlets.addServlet("despachador", new DispatcherServlet(contextoSpring));
        servlet.setLoadOnStartup(2);
        servlet.addMapping("/");
        
        addFilters(contextoServlets);
    }

    private WebApplicationContext getContext() {
        Logger.debug("Contexto de Spring");
        AnnotationConfigWebApplicationContext contexto = new AnnotationConfigWebApplicationContext();
        String nombreClase = this.getClass().getCanonicalName();
        String paqueteClase = nombreClase.substring(0, nombreClase.lastIndexOf('.'));
        Logger.trace("Paquete: {}", paqueteClase);
        contexto.setConfigLocation(paqueteClase + ".config");
        return contexto;
    }
             
    private void addFilters(ServletContext contexto) {
        EnumSet<DispatcherType> dispatcherTypes = EnumSet.of(DispatcherType.REQUEST, DispatcherType.FORWARD, DispatcherType.ERROR);

        CharacterEncodingFilter characterEncodingFilter = new CharacterEncodingFilter();
        characterEncodingFilter.setEncoding("UTF-8");
        characterEncodingFilter.setForceEncoding(true);

        FilterRegistration.Dynamic characterEncoding = contexto.addFilter("characterEncoding", characterEncodingFilter);
        characterEncoding.addMappingForUrlPatterns(dispatcherTypes, true, "/*");
        characterEncoding.setAsyncSupported(true);
        
        /*// Filtro de Sitemesh 
        ConfigurableSiteMeshFilter filtroSitemesh = new ConfigurableSiteMeshFilter();
        FilterRegistration.Dynamic sitemesh = contexto.addFilter("sitemesh", filtroSitemesh);
        sitemesh.addMappingForUrlPatterns(dispatcherTypes, true, "/*");
        */        
    }
    
}
