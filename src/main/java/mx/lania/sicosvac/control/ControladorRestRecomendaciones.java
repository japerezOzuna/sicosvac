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
import mx.lania.sicosvac.entidades.Recomendacion;
import mx.lania.sicosvac.oad.RecomendacionesOad;
import org.springframework.web.bind.annotation.RequestParam;

/**
 *
 * @author José Antonio Perez Ozuna
 */

@RestController
@RequestMapping("recomendaciones")
public class ControladorRestRecomendaciones {
    @Autowired
    RecomendacionesOad recomendacionesOad;
    
    @RequestMapping(value="", method = RequestMethod.GET)
    public List<Recomendacion> getRecomendacion(){
        return recomendacionesOad.findAll();
    }

    @RequestMapping(value="",method = RequestMethod.GET, params = {"idVacuna"})
    public List<Recomendacion> getRecomendacionByVacuna(@RequestParam("idVacuna") int idVacuna){
        return recomendacionesOad.buscarRecomendacionesPorVacuna(idVacuna);
    }    
    
    @RequestMapping(value="/{id}",method=RequestMethod.GET)
    public Recomendacion getRecomendacionById(@PathVariable("id") Integer idRecomendacion){
        return recomendacionesOad.findOne(idRecomendacion);
    }
    
    @RequestMapping(value="",method=RequestMethod.POST)
    public Recomendacion agregarRecomendacion(@RequestBody Recomendacion recomendacion){
        recomendacionesOad.save(recomendacion);
        return recomendacion;
    }
    
    @RequestMapping(value="/{id}", method = RequestMethod.PUT)
    public Recomendacion actualizarRecomendacion(@RequestBody Recomendacion recomendacion,
            @PathVariable("id") Integer idRecomendacion){      
        recomendacionesOad.save(recomendacion);
        return recomendacion;
    }    
    
    @RequestMapping(value="/{id}", method = RequestMethod.DELETE)
    public void eliminarRecomendacion(@PathVariable("id") Integer idRecomendacion){      
        recomendacionesOad.delete(idRecomendacion);
    }            
}
