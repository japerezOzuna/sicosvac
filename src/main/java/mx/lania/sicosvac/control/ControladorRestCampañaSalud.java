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
import mx.lania.sicosvac.entidades.CampañaSalud;
import mx.lania.sicosvac.oad.CampañasSaludOad;

/**
 *
 * @author José Antonio Perez Ozuna
 */

@RestController
@RequestMapping("campañaSalud")
public class ControladorRestCampañaSalud {
    @Autowired
    CampañasSaludOad campañaSaludOad;
    
    @RequestMapping(value="",method = RequestMethod.GET)
    public List<CampañaSalud> getCampañaSalud(){
        return campañaSaludOad.findAll();
    }
    
    @RequestMapping(value="/{id}",method = RequestMethod.GET)
    public CampañaSalud getCampañaSaludById(@PathVariable("id") Integer idCampañaSalud){
        return campañaSaludOad.findOne(idCampañaSalud);
    }
    
    @RequestMapping(value="",method=RequestMethod.POST)
    public CampañaSalud agregarCampañaSalud(@RequestBody CampañaSalud campañaSalud){
        campañaSaludOad.save(campañaSalud);
        return campañaSalud;
    }
    
    @RequestMapping(value="/{id}", method = RequestMethod.PUT)
    public CampañaSalud actualizarCampañaSalud(@RequestBody CampañaSalud campañaSalud,
            @PathVariable("id") Integer idCampañaSalud){      
        campañaSaludOad.save(campañaSalud);
        return campañaSalud;
    }
    
    @RequestMapping(value="/{id}", method = RequestMethod.DELETE)
    public void eliminarCampañaSalud(@PathVariable("id") Integer idCampañaSalud){      
        campañaSaludOad.delete(idCampañaSalud);
    }    
    
}
