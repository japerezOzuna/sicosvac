/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mx.lania.sicosvac.oad;

import java.util.List;
import mx.lania.sicosvac.entidades.Contraindicacion;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author José Antonio Perez Ozuna
 */

public interface ContraindicacionesOad extends JpaRepository<Contraindicacion, Integer>{
    
}
