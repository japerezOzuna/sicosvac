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
import org.springframework.web.bind.annotation.RequestParam;


/**
 *
 * @author José Antonio Perez Ozuna
 */

@RestController
@RequestMapping("vacunasMenores")
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
    
    @RequestMapping(value="", method=RequestMethod.GET, params = {"idMenor"})
    public List<VacunaMenor> getVacunaMenorByIdMenor(@RequestParam("idMenor") int idMenor){
        return vacunasMenoresOad.buscarVacunaMenorPorMenor(idMenor);
    } 
    
    @RequestMapping(value="", method=RequestMethod.GET, params = {"idMenor","idVacunasMenor"})
    public List<VacunaMenor> getVacunaPorAplicarByIdMenor(@RequestParam("idMenor") int idMenor,
                                                          @RequestParam("idVacunasMenor") int idVacunasMenor){
        return vacunasMenoresOad.buscarVacunasPorAplicar(idMenor,idVacunasMenor);
    } 
    
    @RequestMapping(value="", method=RequestMethod.GET, params = {"idMenor","idVacuna"})
    public List<VacunaMenor> getVacunaMenorByIdVacuna(@RequestParam("idMenor") int idMenor, 
                                                      @RequestParam("idVacuna") int idVacuna){
        return vacunasMenoresOad.buscarVacunaMenorPorVacuna(idMenor,idVacuna);
    }
    
    @RequestMapping(value="", method=RequestMethod.GET, params = {"idMenor","estatus"})
    public List<VacunaMenor> getVacunaMenorByEstatus(@RequestParam("idMenor") int idMenor, 
                                                     @RequestParam("estatus") String estatus){
        return vacunasMenoresOad.buscarVacunaMenorPorEstatus(idMenor,estatus);
    } 

    @RequestMapping(value="", method=RequestMethod.GET, params = {"idMenor","idVacuna","idCatalogo"})
    public VacunaMenor getVacunaMenorByVacunaDosis(@RequestParam("idMenor") int idMenor, 
                                                           @RequestParam("idVacuna") int idVacuna, 
                                                           @RequestParam("idCatalogo") int idCatalogoAplicacion){
        return vacunasMenoresOad.buscarVacunaMenorPorVacunaDosis(idMenor,idVacuna,idCatalogoAplicacion);
    } 
    
    @RequestMapping(value="",method=RequestMethod.POST)
    public VacunaMenor agregarVacunaMenor(@RequestBody VacunaMenor vacunaMenor){
        vacunasMenoresOad.save(vacunaMenor);
        return vacunaMenor;
    }
    
    @RequestMapping(value="/{id}", method = RequestMethod.PUT)
    public VacunaMenor actualizarVacunaMenor(@RequestBody VacunaMenor vacunaMenor,
            @PathVariable("id") Integer idVacunaMenor){      
        vacunasMenoresOad.save(vacunaMenor);
        return vacunaMenor;
    }    
    
    @RequestMapping(value="/{id}", method = RequestMethod.DELETE)
    public void eliminarVacunaMenor(@PathVariable("id") Integer idVacunaMenor){      
        vacunasMenoresOad.delete(idVacunaMenor);
    }    
    
}
