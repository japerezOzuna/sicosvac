/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mx.lania.sicosvac.oad;

import java.util.List;
import mx.lania.sicosvac.entidades.VacunaMenor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

/**
 *
 * @author José Antonio Pérez Ozuna
 */

public interface VacunasMenoresOad extends JpaRepository<VacunaMenor, Integer>{
    @Query(value="SELECT vm FROM VacunaMenor vm WHERE vm.menor.idMenor=?1")
    public List<VacunaMenor> buscarVacunaMenorPorMenor(int idMenor);
    
    @Query(value="SELECT vm FROM VacunaMenor vm WHERE vm.menor.idMenor=?1 and vm.vacuna.idVacuna=?2")
    public List<VacunaMenor> buscarVacunaMenorPorVacuna(int idMenor, int idVacuna);
    
    @Query(value="SELECT vm FROM VacunaMenor vm WHERE vm.menor.idMenor=?1 and vm.estatus=?2")
    public List<VacunaMenor> buscarVacunaMenorPorEstatus(int idMenor, String estatus);
    
    @Query(value="SELECT vm FROM VacunaMenor vm WHERE vm.menor.idMenor=?1 and vm.vacuna.idVacuna=?2 and vm.estatus=?3")
    public List<VacunaMenor> buscarVacunaMenorPorVacunaEstatus(int idMenor, int idVacuna, String estatus);
    
    @Query(value="SELECT vm FROM VacunaMenor vm WHERE vm.menor.idMenor=?1 and vm.vacuna.idVacuna=?2 and vm.catalogoAplicacion.idCatalogo=?3")
    public VacunaMenor buscarVacunaMenorPorVacunaDosis(int idMenor, int idVacuna, int idCatalogoAplicacion);
    
    @Query(value="select vacunas.*" +
                    " from vacunas_menores inner join vacunas" +
                    " on vacunas_menores.id_vacuna = vacunas.id_vacuna" +
                    " where vacunas_menores.id_menor = ?1" +
                    " group by vacunas.id_vacuna,vacunas.codigo_vacuna,vacunas.nombre,"+
                    " vacunas.que_es,vacunas.afectados,vacunas.aplicadaXCS,vacunas.estatus",nativeQuery=true)
    public List<VacunaMenor> buscarVacunasPorAplicar(int idMenor, int idVacunasMenor);
}
