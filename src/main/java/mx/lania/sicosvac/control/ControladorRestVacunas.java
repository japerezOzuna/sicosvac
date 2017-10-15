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
import mx.lania.sicosvac.entidades.Vacuna;
import mx.lania.sicosvac.oad.VacunasOad;
import mx.lania.sicosvac.servicios.ServicioInventario;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 *
 * @author José Antonio Perez Ozuna
 */

@RestController
@RequestMapping("vacunas")

public class ControladorRestVacunas {
    private final static Logger LOGGER = LoggerFactory.getLogger(ControladorRestVacunas.class);
    
    @Autowired
    VacunasOad vacunasOad;
    
    @Autowired
    ServicioInventario servInventario;
    
    @RequestMapping(value="",method=RequestMethod.GET)
    public List<Vacuna> getVacuna(){
        return vacunasOad.findAll();
    }
    
    @RequestMapping(value="{id}",method=RequestMethod.GET)
    public Vacuna getVacunaById(@PathVariable("id") Integer idVacuna){
        return vacunasOad.findOne(idVacuna);
        
    }
    
    @RequestMapping(value="/ultimavacuna",method=RequestMethod.GET)
    public List<Vacuna> getUltimaVacuna(){
        return vacunasOad.findFirstByOrderByIdVacunaDesc();
    }
    
    @RequestMapping(value="",method=RequestMethod.POST)
    public Vacuna agregarVacuna(@RequestBody Vacuna vacuna){
        vacuna.setEstatus(1);
        LOGGER.debug("Datos recibidos: "+vacuna.getNombre()+" - "+String.valueOf(vacuna.getCodigoVacuna())+" - "+
                vacuna.getQueEs()+" - "+vacuna.getAfectados()+" - "+vacuna.getAplicadaXCS()+" - "+String.valueOf(vacuna.getEstatus()));
        vacunasOad.save(vacuna);
        servInventario.creaInventarioInicial(vacuna);
        return vacuna;
    }

    @RequestMapping(value="/{id}", method = RequestMethod.PUT)
    public Vacuna actualizarVacuna(@RequestBody Vacuna vacuna,
            @PathVariable("id") Integer idVacuna){      
        vacunasOad.save(vacuna);
        return vacuna;
    }
    
    @RequestMapping(value="/{id}", method = RequestMethod.DELETE)
    public void eliminarVacuna(@PathVariable("id") Integer idVacuna){      
        vacunasOad.delete(idVacuna);
    }
}
