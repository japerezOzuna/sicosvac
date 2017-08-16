/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mx.lania.sicosvac.config;

import java.util.Properties;
import javax.sql.DataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.AbstractJpaVendorAdapter;
import org.springframework.orm.jpa.vendor.EclipseLinkJpaVendorAdapter;

/**
 *
 * @author José Antonio Perez Ozuna
 */
@Configuration
@PropertySource("classpath:/spring.properties")
@EnableJpaRepositories("${spring.jpa.paqueteoad}")
public class ConfiguracionJpa {
    
    @Autowired
    Environment env;

    @Autowired
    DataSource ds;

    @Bean
    public LocalContainerEntityManagerFactoryBean entityManagerFactory() {
        EclipseLinkJpaVendorAdapter adapter = new EclipseLinkJpaVendorAdapter();

        adapter.setShowSql(Boolean.parseBoolean(env.getProperty("spring.jpa.show-sql")));
        LocalContainerEntityManagerFactoryBean factory = new LocalContainerEntityManagerFactoryBean();
        factory.setJpaVendorAdapter(adapter);
        factory.setPackagesToScan(env.getProperty("spring.jpa.paqueteentidades"));
        factory.setDataSource(ds);
        factory.setJpaProperties(getVendorProperties());
        return factory;
    }    
    
    protected AbstractJpaVendorAdapter createJpaVendorAdapter() {
        EclipseLinkJpaVendorAdapter adapter = new EclipseLinkJpaVendorAdapter();
        return adapter;
    }

    @Bean
    public JpaTransactionManager transactionManager() {
        JpaTransactionManager txManager = new JpaTransactionManager();
        txManager.setEntityManagerFactory(entityManagerFactory().getObject());
        return txManager;
    }

    protected Properties getVendorProperties() {
        Properties props = new Properties();
        props.put("exclude.unlisted.classes", "false");
        props.put("eclipselink.weaving", "false");
        return props;
    }    
}
