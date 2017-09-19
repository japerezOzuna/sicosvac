/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mx.lania.sicosvac.control;

import java.util.Date;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import mx.lania.sicosvac.entidades.Menor;
import mx.lania.sicosvac.oad.MenoresOad;
import org.springframework.web.bind.annotation.RequestParam;
     
/**
 *
 * @author José Antonio Perez Ozuna
 */

@RestController
@RequestMapping("menores")
public class ControladorRestMenores {
    @Autowired
    MenoresOad menoresOad;
    
    @RequestMapping(value="",method = RequestMethod.GET)
    public List<Menor> getMenor(){
        return menoresOad.findAll();
    }
    
    @RequestMapping(value="/{id}",method = RequestMethod.GET)
    public Menor getMenorById(@PathVariable("id") Integer idMenor){
        return menoresOad.findOne(idMenor);
    }
    
    @RequestMapping(value="", method=RequestMethod.GET, params = {"curp"})
    public List<Menor> getMenorByCurp(@RequestParam("curp") String curp){
        return menoresOad.findByCurp(curp);
    }     
    
    @RequestMapping(value="",method=RequestMethod.POST)
    public Menor agregarMenor(@RequestBody Menor menor){
        menoresOad.save(menor);
        return menor;
    }

    @RequestMapping(value="/{id}", method = RequestMethod.PUT)
    public Menor actualizarMenor(@RequestBody Menor menor, 
            @PathVariable("id") Integer idMenor){      
        menoresOad.save(menor);
        return menor;
    }
    
    @RequestMapping(value="/{id}", method = RequestMethod.DELETE)
    public void eliminarMenor(@PathVariable("id") Integer idMenor){      
        menoresOad.delete(idMenor);
    }
}
