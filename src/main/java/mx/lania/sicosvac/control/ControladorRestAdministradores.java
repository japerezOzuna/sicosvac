/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mx.lania.sicosvac.control;


import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import mx.lania.sicosvac.entidades.Administrador;
import mx.lania.sicosvac.oad.AdministradoresOad;
import org.springframework.web.bind.annotation.RequestParam;
/**
 *
 * @author José Antonio Pérez Ozuna
 */

@RestController
@RequestMapping("administradores")
public class ControladorRestAdministradores {
    @Autowired
    AdministradoresOad administradoresOad;
    
    @RequestMapping(value="",method = RequestMethod.GET)
    public List<Administrador> getAdministrador(){
        return administradoresOad.findAll();
    }
    
    @RequestMapping(value="/{id}",method = RequestMethod.GET)
    public Administrador getAdministradorById(@PathVariable("id") Integer idAdministrador){
        return administradoresOad.findOne(idAdministrador);
    }
    
    @RequestMapping(value="", method=RequestMethod.GET, params = {"idJurisdiccion"})
    public List<Administrador> getAdministradorByJurisdiccion(@RequestParam("idJurisdiccion") int idJurisdiccion){
        return administradoresOad.buscarAdministradorPorJurisdiccion(idJurisdiccion);
    } 
    
    @RequestMapping(value="", method=RequestMethod.GET, params = {"idCentro"})
    public List<Administrador> getAdministradorByCentro(@RequestParam("idCentro") int idCentro){
        return administradoresOad.buscarAdministradorPorCentro(idCentro);
    }     
    
    @RequestMapping(value="", method=RequestMethod.GET, params = {"estatus"})
    public List<Administrador> getAdministradorByEstatus(@RequestParam("estatus") int estatus){
        return administradoresOad.findByEstatus(estatus);
    }
    
    @RequestMapping(value="", method=RequestMethod.GET, params = {"idJurisdiccion","estatus"})
    public List<Administrador> getAdministradorByJurisEstatus(@RequestParam("idJurisdiccion") int idJurisdiccion,
                                                              @RequestParam("estatus") int estatus){
        return administradoresOad.buscarAdministradorPorJurisEstatus(idJurisdiccion,estatus);
    } 
    
    @RequestMapping(value="", method=RequestMethod.GET, params = {"idCentro","estatus"})
    public List<Administrador> getAdministradorByCentroEstatus(@RequestParam("idCentro") int idCentro,
                                                               @RequestParam("estatus") int estatus){
        return administradoresOad.buscarAdministradorPorCentroEstatus(idCentro,estatus);    
    }
    
    @RequestMapping(value="",method=RequestMethod.POST)
    public Administrador agregarAdministrador(@RequestBody Administrador administrador){
        administradoresOad.save(administrador);
        return administrador;
    }
    
    @RequestMapping(value="/{id}", method = RequestMethod.PUT)
    public Administrador actualizarAdministrador(@RequestBody Administrador administrador,
            @PathVariable("id") Integer idAdministrador){      
        administradoresOad.save(administrador);
        return administrador;
    }
    
    @RequestMapping(value="/{id}", method = RequestMethod.DELETE)
    public void eliminarAdministrador(@PathVariable("id") Integer idAdministrador){      
        administradoresOad.delete(idAdministrador);
    }    
}
