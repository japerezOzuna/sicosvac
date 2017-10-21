/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mx.lania.sicosvac.config;

import mx.lania.sicosvac.servicios.ServicioUsuarios;
import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;

/**
 *
 * @author José Antonio Pérez Ozuna
 */

@Configurable
@EnableWebSecurity
public class ConfiguracionSecurity extends WebSecurityConfigurerAdapter{

    @Autowired
    ServicioUsuarios usuariosDetailsService;
    
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
            auth.userDetailsService(usuariosDetailsService);
    }

    // Metodo para ignorar algunas peticiones o patrones de peticion
    @Override
    public void configure(WebSecurity web) throws Exception {
            super.configure(web);
    }    
    
    @Override
    protected void configure(HttpSecurity http) throws Exception {
            http
                // inicia configuracion
                .authorizeRequests()
                // ignora "/", "/index.html", "/app/**",
                .antMatchers("/", "/index.html", "/login.jsp").permitAll()
                // todas las URL restantes requieren autenticación
                .anyRequest().fullyAuthenticated().and()
                // habilita autenticación básica
                .httpBasic().and()
                // Sin sesiones en servidor
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
                // deshabilita CSRF - Cross Site Request Forgery
                .csrf().disable();
    }    
}   
