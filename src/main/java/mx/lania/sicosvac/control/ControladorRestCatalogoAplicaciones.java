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
import mx.lania.sicosvac.entidades.CatalogoAplicacionVacuna;
import mx.lania.sicosvac.oad.CatalogoAplicacionesVacunasOad;

/**
 *
 * @author José Antonio Perez Ozuna
 */
@RestController
@RequestMapping("catalogoaplicaciones")
public class ControladorRestCatalogoAplicaciones {
    @Autowired
    CatalogoAplicacionesVacunasOad catalogoAplicacionesOad;
    
    @RequestMapping(value="",method=RequestMethod.GET)
    public List<CatalogoAplicacionVacuna> getCatalogoAplicacion(){
        return catalogoAplicacionesOad.findAll();
    }
    
    @RequestMapping(value="/{id}",method=RequestMethod.GET)
    public CatalogoAplicacionVacuna getCatalogoAplicacionById(@PathVariable("id") Integer idCatalogoAplicacion){
        return catalogoAplicacionesOad.findOne(idCatalogoAplicacion);
    }
    
    @RequestMapping(value="",method=RequestMethod.POST)
    public CatalogoAplicacionVacuna agregarTutor(@RequestBody CatalogoAplicacionVacuna catalogoAplicacionVacuna){
        catalogoAplicacionesOad.save(catalogoAplicacionVacuna);
        return catalogoAplicacionVacuna;
    }
    
    @RequestMapping(value="/{id}", method = RequestMethod.DELETE)
    public void eliminarCatalogoAplicacion(@PathVariable("id") Integer idCatalogoAplicacion){      
        catalogoAplicacionesOad.delete(idCatalogoAplicacion);
    }
}
