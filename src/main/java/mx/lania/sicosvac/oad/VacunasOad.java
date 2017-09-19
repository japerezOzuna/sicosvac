/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mx.lania.sicosvac.oad;

import java.util.List;
import mx.lania.sicosvac.entidades.Vacuna;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

/**
 *
 * @author José Antonio Perez Ozuna
 */

public interface VacunasOad extends JpaRepository<Vacuna, Integer>{
            
    //@Query(value="SELECT v FROM Vacuna v order by v.id desc")
    //public Vacuna obtieneUltimaVacuna();
    public List<Vacuna> findFirstByOrderByIdVacunaDesc();
}
