/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mx.lania.sicosvac.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurationSupport;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

/**
 *
 * @author José Antonio Perez Ozuna
 */
@Configuration
@PropertySource("classpath:/spring.properties")
@ComponentScan(basePackages = "${spring.paquetecontroladores}")
public class ConfiguracionMvc extends WebMvcConfigurationSupport {
    
    private final static Logger Logger = LoggerFactory.getLogger(ConfiguracionMvc.class);

    // Paso de recursos estaticos
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        Logger.debug("addResourceHandlers()");
        registry.addResourceHandler("/**/*.js").addResourceLocations("/");
        registry.addResourceHandler("/**/*.css").addResourceLocations("/");
        registry.addResourceHandler("/**/*.html").addResourceLocations("/");
        registry.addResourceHandler("/*.html").addResourceLocations("/");
    }    

    @Bean
    public ViewResolver internalResourceViewResolver() {
        InternalResourceViewResolver internalResourceViewResolver = new InternalResourceViewResolver();
        internalResourceViewResolver.setPrefix("/");
        internalResourceViewResolver.setSuffix(".jsp");
        return internalResourceViewResolver;
    }    
}
