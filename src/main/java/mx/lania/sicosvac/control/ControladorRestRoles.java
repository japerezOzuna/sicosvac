/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mx.lania.sicosvac.control;

import java.util.List;
import mx.lania.sicosvac.entidades.Rol;
import mx.lania.sicosvac.oad.RolesOad;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Antonio Perez
 */
@RestController
@RequestMapping("roles")
public class ControladorRestRoles {
    @Autowired
    RolesOad rolesOad;
    
        @RequestMapping(value="",method = RequestMethod.GET)
    public List<Rol> getRol(){
        return rolesOad.findAll();
    }
    
    @RequestMapping(value="/{id}",method=RequestMethod.GET)
    public Rol getTutorById(@PathVariable("id") Integer idRol){
        return rolesOad.findOne(idRol);
    }
}
