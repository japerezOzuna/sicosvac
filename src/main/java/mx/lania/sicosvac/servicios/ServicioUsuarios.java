/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mx.lania.sicosvac.servicios;

/**
 *
 * @author José Antonio Pérez Ozuna
 */

import mx.lania.sicosvac.entidades.Administrador;
import mx.lania.sicosvac.oad.AdministradoresOad;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class ServicioUsuarios implements UserDetailsService{
    
    @Autowired
    AdministradoresOad administradoresOad;
    
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
            Administrador usuario = administradoresOad.findOneByUsername(username);
            return usuario;
    }
}
