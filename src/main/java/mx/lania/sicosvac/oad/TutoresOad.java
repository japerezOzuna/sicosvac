/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mx.lania.sicosvac.oad;

import java.util.List;
import mx.lania.sicosvac.entidades.Tutor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

/**
 *
 * @author José Antonio Perez Ozuna
 */

public interface TutoresOad extends JpaRepository<Tutor, Integer>{
    
    public List<Tutor> findByUsuario(String usuario);
    public List<Tutor> findByCurp(String curp);
    
}
