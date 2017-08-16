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
import mx.lania.sicosvac.entidades.Tutor;
import mx.lania.sicosvac.oad.TutoresOad;

/**
 *
 * @author José Antonio Perez Ozuna
 */

@RestController
@RequestMapping("tutores")
public class ControladorRestTutores {
    @Autowired
    TutoresOad tutoresOad;
    
    @RequestMapping(value="",method = RequestMethod.GET)
    public List<Tutor> getTutor(){
        return tutoresOad.findAll();
    }
    
    @RequestMapping(value="/{id}",method=RequestMethod.GET)
    public Tutor getTutorById(@PathVariable("id") Integer idTutor){
        return tutoresOad.findOne(idTutor);
    }
    
    @RequestMapping(value="",method=RequestMethod.POST)
    public Tutor agregarTutor(@RequestBody Tutor tutor){
        tutoresOad.save(tutor);
        return tutor;
    }
    
    @RequestMapping(value="/{id}", method = RequestMethod.DELETE)
    public void eliminarTutor(@PathVariable("id") Integer idTutor){      
        tutoresOad.delete(idTutor);
    }
}
