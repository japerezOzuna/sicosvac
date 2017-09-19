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
import mx.lania.sicosvac.entidades.EfectoAdverso;
import mx.lania.sicosvac.oad.EfectosAdversosOad;
import org.springframework.web.bind.annotation.RequestParam;

/**
 *
 * @author José Antonio Perez Ozuna
 */

@RestController
@RequestMapping("efectosAdversos")
public class ControladorRestEfectosAdversos {
    @Autowired
    EfectosAdversosOad efectosAdversosOad;
    
    @RequestMapping(value="", method = RequestMethod.GET)
    public List<EfectoAdverso> getEfectoAdverso(){
        return efectosAdversosOad.findAll();
    }
    
    @RequestMapping(value="",method = RequestMethod.GET, params = {"idVacuna"})
    public List<EfectoAdverso> getEfectoAdversoByVacuna(@RequestParam("idVacuna") int idVacuna){
        return efectosAdversosOad.buscarEfectosPorVacuna(idVacuna);
    }
 
    @RequestMapping(value="/{id}",method=RequestMethod.GET)
    public EfectoAdverso getEfectoAdversoById(@PathVariable("id") Integer idEfectoAdverso){
        return efectosAdversosOad.findOne(idEfectoAdverso);
    }
    
    @RequestMapping(value="",method=RequestMethod.POST)
    public EfectoAdverso agregarEfectoAdverso(@RequestBody EfectoAdverso efectoAdverso){
        efectosAdversosOad.save(efectoAdverso);
        return efectoAdverso;
    }
    
    @RequestMapping(value="/{id}", method = RequestMethod.PUT)
    public EfectoAdverso actualizarEfectoAdverso(@RequestBody EfectoAdverso efectoAdverso,
            @PathVariable("id") Integer idEfectoAdverso){      
        efectosAdversosOad.save(efectoAdverso);
        return efectoAdverso;
    }    
    
    @RequestMapping(value="/{id}", method = RequestMethod.DELETE)
    public void eliminarEfectoAdverso(@PathVariable("id") Integer idEfectoAdverso){      
        efectosAdversosOad.delete(idEfectoAdverso);
    }        
    
}
