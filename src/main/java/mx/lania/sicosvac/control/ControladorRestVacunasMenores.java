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
import mx.lania.sicosvac.entidades.VacunaMenor;
import mx.lania.sicosvac.oad.VacunasMenoresOad;

/**
 *
 * @author José Antonio Perez Ozuna
 */

@RestController
@RequestMapping("vacunasmenores")
public class ControladorRestVacunasMenores {
    @Autowired
    VacunasMenoresOad vacunasMenoresOad;
    
    @RequestMapping(value="", method = RequestMethod.GET)
    public List<VacunaMenor> getVacunaMenor(){
        return vacunasMenoresOad.findAll();
    }
 
    @RequestMapping(value="/{id}",method=RequestMethod.GET)
    public VacunaMenor getVacunaMenorById(@PathVariable("id") Integer idVacunaMenor){
        return vacunasMenoresOad.findOne(idVacunaMenor);
    }
    
    @RequestMapping(value="",method=RequestMethod.POST)
    public VacunaMenor agregarVacunaMenor(@RequestBody VacunaMenor vacunaMenor){
        vacunasMenoresOad.save(vacunaMenor);
        return vacunaMenor;
    }
    
    @RequestMapping(value="/{id}", method = RequestMethod.DELETE)
    public void eliminarVacunaMenor(@PathVariable("id") Integer idVacunaMenor){      
        vacunasMenoresOad.delete(idVacunaMenor);
    }    
    
}
