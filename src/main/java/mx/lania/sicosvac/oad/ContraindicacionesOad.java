/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mx.lania.sicosvac.oad;

import java.util.List;
import mx.lania.sicosvac.entidades.Contraindicacion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

/**
 *
 * @author José Antonio Perez Ozuna
 */

public interface ContraindicacionesOad extends JpaRepository<Contraindicacion, Integer>{
    
    @Query(value="SELECT c FROM Contraindicacion c WHERE c.vacuna.idVacuna=?1")
    public List<Contraindicacion> buscarContraindicacionesPorVacuna(int idVacuna);
}
