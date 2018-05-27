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

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import mx.lania.sicosvac.entidades.Administrador;
import mx.lania.sicosvac.entidades.Rol;
import mx.lania.sicosvac.oad.AdministradoresOad;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Role;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
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
            //return new org.springframework.security.core.userdetails.User(usuario, getAuthorities(usuario));
    }
 
    
    private Set<GrantedAuthority> getAuthorities(Administrador usuario){
        Set<GrantedAuthority> authorities = new HashSet<GrantedAuthority>();
            GrantedAuthority grantedAuthority = new SimpleGrantedAuthority(usuario.getRol().getDescripcion());
            authorities.add(grantedAuthority);
        return authorities;
    }    
   /* 
    private List<SimpleGrantedAuthority> getAuthorities(String role) {
        List<SimpleGrantedAuthority> authList = new ArrayList<>();
        if (role != null && role.trim().length() > 0) {
            if (role.equals("SUPER_ADMIN")) {
                authList.add(new SimpleGrantedAuthority("ROLE_SUPER_ADMIN"));
            }
            if (role.equals("ADMIN")) {
                authList.add(new SimpleGrantedAuthority("ROLE_ADMIN"));
            }
            if (role.equals("VACUNADOR")) {
                authList.add(new SimpleGrantedAuthority("ROLE_VACUNADOR"));
            }            
            if (role.equals("USUARIO")) {
                authList.add(new SimpleGrantedAuthority("ROLE_USUARIO"));
            }            
        }
        return authList;
    }   */    
}
