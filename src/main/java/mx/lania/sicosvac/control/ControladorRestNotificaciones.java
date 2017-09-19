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
import mx.lania.sicosvac.entidades.Notificacion;
import mx.lania.sicosvac.oad.NotificacionesOad;

/**
 *
 * @author José Antonio Perez Ozuna
 */

@RestController
@RequestMapping("notificaciones")
public class ControladorRestNotificaciones {
    @Autowired
    NotificacionesOad notificacionesOad;
    
    @RequestMapping(value="", method = RequestMethod.GET)
    public List<Notificacion> getNotificacion(){
        return notificacionesOad.findAll();
    }
 
    @RequestMapping(value="/{id}",method=RequestMethod.GET)
    public Notificacion getNotificacionById(@PathVariable("id") Integer idNotificacion){
        return notificacionesOad.findOne(idNotificacion);
    }
    
    @RequestMapping(value="",method=RequestMethod.POST)
    public Notificacion agregarNotificacion(@RequestBody Notificacion notificacion){
        notificacionesOad.save(notificacion);
        return notificacion;
    }
    
    @RequestMapping(value="/{id}", method = RequestMethod.PUT)
    public Notificacion actualizarNotificacion(@RequestBody Notificacion notificacion,
            @PathVariable("id") Integer idNotificacion){      
        notificacionesOad.save(notificacion);
        return notificacion;
    }    
    
    @RequestMapping(value="/{id}", method = RequestMethod.DELETE)
    public void eliminarNotificacion(@PathVariable("id") Integer idNotificacion){      
        notificacionesOad.delete(idNotificacion);
    }                 
}
