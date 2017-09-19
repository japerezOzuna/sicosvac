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
import mx.lania.sicosvac.entidades.Contraindicacion;
import mx.lania.sicosvac.oad.ContraindicacionesOad;
import org.springframework.web.bind.annotation.RequestParam;

/**
 *
 * @author José Antonio Perez Ozuna
 */

@RestController
@RequestMapping("contraindicaciones")
public class ControladorRestContraidicaciones {
    @Autowired
    ContraindicacionesOad contraindicacionesOad;

    @RequestMapping(value="",method = RequestMethod.GET)
    public List<Contraindicacion> getContraindicacion(){
        return contraindicacionesOad.findAll();
    }
    
    @RequestMapping(value="/{id}",method = RequestMethod.GET)
    public Contraindicacion getContraindicacionById(@PathVariable("id") Integer idContraindicacion){
        return contraindicacionesOad.findOne(idContraindicacion);
    }

    @RequestMapping(value="",method = RequestMethod.GET, params = {"idVacuna"})
    public List<Contraindicacion> getContraindicacionesByVacuna(@RequestParam("idVacuna") int idVacuna){
        return contraindicacionesOad.buscarContraindicacionesPorVacuna(idVacuna);
    }
        
    @RequestMapping(value="",method=RequestMethod.POST)
    public Contraindicacion agregarContraindicacion(@RequestBody Contraindicacion contraindicacion){
        contraindicacionesOad.save(contraindicacion);
        return contraindicacion;
    }
    
    @RequestMapping(value="/{id}", method = RequestMethod.PUT)
    public Contraindicacion actualizarContraindicacion(@RequestBody Contraindicacion contraindicacion, 
            @PathVariable("id") Integer idContraindicacion){      
        contraindicacionesOad.save(contraindicacion);
        return contraindicacion;
    }
    
    @RequestMapping(value="/{id}", method = RequestMethod.DELETE)
    public void eliminarContraindicacion(@PathVariable("id") Integer idContraindicacion){      
        contraindicacionesOad.delete(idContraindicacion);
    }    
    
}
