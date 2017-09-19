/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mx.lania.sicosvac.control;

import java.util.List;
import mx.lania.sicosvac.entidades.Jurisdiccion;
import mx.lania.sicosvac.oad.JurisdiccionesOad;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author José Antonio Perez Ozuna
 */

@RestController
@RequestMapping("jurisdicciones")
public class ControladorRestJurisdicciones {
    
    @Autowired
    JurisdiccionesOad jurisdiccionesOad;
    
    @RequestMapping(value="",method=RequestMethod.GET)
    public List<Jurisdiccion> getJurisdiccion(){
        return jurisdiccionesOad.findAll();
    }
/*
    @RequestMapping(value="",method = RequestMethod.GET, params = {"idJurisdiccion"})
    public List<Jurisdiccion> getRecomendacionByVacuna(@RequestParam("idVacuna") int idVacuna){
        return catalogoAplicacionesOad.buscarCatalogoAplicacionPorVacuna(idVacuna);
    } 
 */   
    @RequestMapping(value="/{id}",method=RequestMethod.GET)
    public Jurisdiccion getJurisdiccionById(@PathVariable("id") Integer idJurisdiccion){
        return jurisdiccionesOad.findOne(idJurisdiccion);
    }
    
    @RequestMapping(value="",method=RequestMethod.POST)
    public Jurisdiccion agregarJurisdiccion(@RequestBody Jurisdiccion jurisdiccion){
        jurisdiccionesOad.save(jurisdiccion);
        return jurisdiccion;
    }

    @RequestMapping(value="/{id}", method = RequestMethod.PUT)
    public Jurisdiccion actualizarJurisdiccion(@RequestBody Jurisdiccion jurisdiccion, 
            @PathVariable("id") Integer idJurisdiccion){      
        jurisdiccionesOad.save(jurisdiccion);
        return jurisdiccion;
    }
    
    @RequestMapping(value="/{id}", method = RequestMethod.DELETE)
    public void eliminarJurisdiccion(@PathVariable("id") Integer idJurisdiccion){      
        jurisdiccionesOad.delete(idJurisdiccion);
    }    
   
}
