/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mx.lania.sicosvac.control;

import java.util.List;
import mx.lania.sicosvac.entidades.Centro;
import mx.lania.sicosvac.oad.CentrosOad;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author José Antonio Perez Ozuna
 */

@RestController
@RequestMapping("centros")
public class ControladorRestCentros {
    
    @Autowired
    CentrosOad centrosOad;
    
    @RequestMapping(value="",method=RequestMethod.GET)
    public List<Centro> getCentro(){
        return centrosOad.findAll();
    }

    @RequestMapping(value="",method = RequestMethod.GET, params = {"idJurisdiccion"})
    public List<Centro> getCentroByJurisdiccion(@RequestParam("idJurisdiccion") int idJurisdiccion){
        return centrosOad.buscarCentroPorJurisdiccion(idJurisdiccion);
    } 
    
    @RequestMapping(value="/{id}",method=RequestMethod.GET)
    public Centro getCentroById(@PathVariable("id") Integer idCentro){
        return centrosOad.findOne(idCentro);
    }
    
    @RequestMapping(value="",method=RequestMethod.POST)
    public Centro agregarCentro(@RequestBody Centro centro){
        centrosOad.save(centro);
        return centro;
    }

    @RequestMapping(value="/{id}", method = RequestMethod.PUT)
    public Centro actualizarCentro(@RequestBody Centro centro, 
            @PathVariable("id") Integer idCentro){      
        centrosOad.save(centro);
        return centro;
    }
    
    @RequestMapping(value="/{id}", method = RequestMethod.DELETE)
    public void eliminarCentro(@PathVariable("id") Integer idCentro){      
        centrosOad.delete(idCentro);
    }      
}
