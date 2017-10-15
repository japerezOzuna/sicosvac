/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mx.lania.sicosvac.oad;

import java.util.List;
import mx.lania.sicosvac.entidades.Inventario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

/**
 *
 * @author José Antonio Perez Ozuna
 */

public interface InventarioOad extends JpaRepository<Inventario, Integer>{
    
    @Query(value="SELECT i FROM Inventario i WHERE i.centro.idCentro=?1")
    public List<Inventario> buscarInventarioPorCentro(int idCentro);
    
    @Query(value="SELECT i FROM Inventario i WHERE i.centro.idCentro=?1 and i.cantidad>0")
    public List<Inventario> buscarInventarioDisponiblePorCentro(int idCentro);
    
    @Query(value="SELECT i FROM Inventario i WHERE i.cantidad>0")
    public List<Inventario> buscarInventarioDisponible();
    
}
