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
import mx.lania.sicosvac.entidades.Inventario;
import mx.lania.sicosvac.oad.InventarioOad;
import org.springframework.web.bind.annotation.RequestParam;

/**
 *
 * @author José Antonio Perez Ozuna
 */
@RestController
@RequestMapping("inventario")
public class ControladorRestInventario {
    @Autowired
    InventarioOad inventarioOad;
    
    @RequestMapping(value="", method = RequestMethod.GET)
    public List<Inventario> getInventario(){
        return inventarioOad.findAll();
    }
 
    @RequestMapping(value="",method = RequestMethod.GET, params = {"idCentro"})
    public List<Inventario> getInventarioByCentro(@RequestParam("idCentro") int idCentro){
        return inventarioOad.buscarInventarioPorCentro(idCentro);
    }     
    
    @RequestMapping(value="/disponible",method = RequestMethod.GET)
    public List<Inventario> getInventarioDisponibleByCentro(){
        return inventarioOad.buscarInventarioDisponible();
    }
    
    @RequestMapping(value="/disponible",method = RequestMethod.GET, params = {"idCentro"})
    public List<Inventario> getInventarioDisponibleByCentro(@RequestParam("idCentro") int idCentro){
        return inventarioOad.buscarInventarioDisponiblePorCentro(idCentro);
    }
    
    @RequestMapping(value="/{id}",method=RequestMethod.GET)
    public Inventario getInventarioById(@PathVariable("id") Integer idInventario){
        return inventarioOad.findOne(idInventario);
    }
    
    @RequestMapping(value="",method=RequestMethod.POST)
    public Inventario agregarInventario(@RequestBody Inventario inventario){
        inventarioOad.save(inventario);
        return inventario;
    }
    
    @RequestMapping(value="/{id}", method = RequestMethod.PUT)
    public Inventario actualizarInventario(@RequestBody Inventario inventario,
            @PathVariable("id") Integer idInventario){      
        inventarioOad.save(inventario);
        return inventario;
    }    
    
    @RequestMapping(value="/{id}", method = RequestMethod.DELETE)
    public void eliminarInventario(@PathVariable("id") Integer idInventario){      
        inventarioOad.delete(idInventario);
    }             
}
