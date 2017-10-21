/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mx.lania.sicosvac.oad;

import java.util.List;
import mx.lania.sicosvac.entidades.Administrador;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

/**
 *
 * @author José Antonio Perez Ozuna
 */

public interface AdministradoresOad extends JpaRepository<Administrador, Integer>{

    @Query(value="SELECT a FROM Administrador a WHERE a.centro.jurisdiccion.idJurisdiccion=?1 and a.estatus=?2")
    public List<Administrador> buscarAdministradorPorJurisEstatus(int idJurisdiccion, int estatus);
    
    @Query(value="SELECT a FROM Administrador a WHERE a.centro.idCentro=?1 and a.estatus=?2")
    public List<Administrador> buscarAdministradorPorCentroEstatus(int idCentro, int estatus);

    @Query(value="SELECT a FROM Administrador a WHERE a.centro.jurisdiccion.idJurisdiccion=?1")
    public List<Administrador> buscarAdministradorPorJurisdiccion(int idJurisdiccion);    
    
    @Query(value="SELECT a FROM Administrador a WHERE a.centro.idCentro=?1")
    public List<Administrador> buscarAdministradorPorCentro(int idCentro);
    
    public Administrador findOneByUsername(String username);
    
    public List<Administrador> findByEstatus(int estatus);    
}
