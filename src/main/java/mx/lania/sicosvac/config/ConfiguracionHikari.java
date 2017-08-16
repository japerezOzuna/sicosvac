/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mx.lania.sicosvac.config;

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;
import java.io.IOException;
import java.util.Properties;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.sql.DataSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.support.PropertiesLoaderUtils;

/**
 *
 * @author José Antonio Perez Ozuna
 */
@Configuration
public class ConfiguracionHikari {
    @Bean(destroyMethod = "close")
    public DataSource dataSource() {
        try {
            Properties hcProps = PropertiesLoaderUtils.loadProperties(new ClassPathResource("/db.properties"));
            HikariConfig hc = new HikariConfig(hcProps);
            return new HikariDataSource(hc);

        } catch (IOException ex) {
            Logger.getLogger(ConfiguracionHikari.class.getName()).log(Level.SEVERE, null, ex);
            return null;
        }

    }    
}
