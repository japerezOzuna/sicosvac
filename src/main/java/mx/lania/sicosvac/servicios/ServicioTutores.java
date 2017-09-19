/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mx.lania.sicosvac.servicios;

import mx.lania.sicosvac.entidades.Tutor;
import mx.lania.sicosvac.oad.TutoresOad;
import org.springframework.stereotype.Service;
import org.apache.commons.codec.digest.DigestUtils;
import org.springframework.beans.factory.annotation.Autowired;

/**
 *
 * @author José Antonio Perez Ozuna
 */

@Service
public class ServicioTutores {
    @Autowired
    TutoresOad tutoresOad;
    
    public void guardarTutor(Tutor tutor){
        //String passwordCifrado = DigestUtils.md5Hex(tutor.password);
        //tutor.setPassword(DigestUtils.md5Hex(tutor.password));
    }
}
