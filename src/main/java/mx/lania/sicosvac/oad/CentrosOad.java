/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mx.lania.sicosvac.oad;

import java.util.List;
import mx.lania.sicosvac.entidades.Centro;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

/**
 *
 * @author José Antonio Perez Ozuna
 */

public interface CentrosOad extends JpaRepository<Centro, Integer>{
    
    @Query(value="SELECT c FROM Centro c WHERE c.jurisdiccion.idJurisdiccion=?1")
    public List<Centro> buscarCentroPorJurisdiccion(int idJurisdiccion);    
}
