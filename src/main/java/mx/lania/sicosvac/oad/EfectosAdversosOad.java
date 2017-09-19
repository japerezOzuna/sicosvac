/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mx.lania.sicosvac.oad;

import java.util.List;
import mx.lania.sicosvac.entidades.EfectoAdverso;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

/**
 *
 * @author José Antonio Perez Ozuna
 */

public interface EfectosAdversosOad extends JpaRepository<EfectoAdverso, Integer> {
    
    @Query(value="SELECT c FROM EfectoAdverso c WHERE c.vacuna.idVacuna=?1")
    public List<EfectoAdverso> buscarEfectosPorVacuna(int idVacuna);
}
