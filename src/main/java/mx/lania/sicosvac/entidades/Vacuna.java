/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mx.lania.sicosvac.entidades;

import java.io.Serializable;
import java.util.Collection;
import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

/**
 *
 * @author José Antonio Perez Ozuna
 */
@Entity
@Table(name = "vacunas")
//@NamedQueries({
    //@NamedQuery(name = "Vacunas.findAll", query = "SELECT v FROM Vacunas v")})
public class Vacuna implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @NotNull
    @Column(name = "id_vacuna")
    private Integer idVacuna;
    @Column(name = "codigo_vacuna")
    private Integer codigoVacuna;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 70)
    @Column(name = "nombre")
    private String nombre;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 300)
    @Column(name = "que_es")
    private String queEs;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 200)
    @Column(name = "afectados")
    private String afectados;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 2)
    @Column(name = "aplicadaXCS")
    private String aplicadaXCS;
    @Basic(optional = false)
    @NotNull
    @Column(name = "estatus")
    private int estatus;
    /*@OneToMany(cascade = CascadeType.ALL, mappedBy = "idVacuna")
    private Collection<Recomendacion> recomendacionesCollection;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "idVacuna")
    private Collection<CampañaSalud> campañasSaludCollection;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "idVacuna")
    private Collection<Contraindicacion> contraindicacionesCollection;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "idVacuna")
    private Collection<EfectoAdverso> efectosAdversosCollection;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "idVacuna")
    private Collection<CatalogoAplicacionVacuna> catalogoAplicacionesVacunasCollection;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "idVacuna")
    private Collection<VacunaMenor> vacunasMenoresCollection;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "idVacuna")
    private Collection<Inventario> inventarioCollection;*/

    public Vacuna() {
    }

    public Vacuna(Integer idVacuna) {
        this.idVacuna = idVacuna;
    }

    public Vacuna(Integer idVacuna, String nombre, String queEs, String afectados, String aplicadaXCS, int estatus) {
        this.idVacuna = idVacuna;
        this.nombre = nombre;
        this.queEs = queEs;
        this.afectados = afectados;
        this.aplicadaXCS = aplicadaXCS;
        this.estatus = estatus;
    }

    public Integer getIdVacuna() {
        return idVacuna;
    }

    public void setIdVacuna(Integer idVacuna) {
        this.idVacuna = idVacuna;
    }

    public Integer getCodigoVacuna() {
        return codigoVacuna;
    }

    public void setCodigoVacuna(Integer codigoVacuna) {
        this.codigoVacuna = codigoVacuna;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getQueEs() {
        return queEs;
    }

    public void setQueEs(String queEs) {
        this.queEs = queEs;
    }

    public String getAfectados() {
        return afectados;
    }

    public void setAfectados(String afectados) {
        this.afectados = afectados;
    }

    public String getAplicadaXCS() {
        return aplicadaXCS;
    }

    public void setAplicadaXCS(String aplicadaXCS) {
        this.aplicadaXCS = aplicadaXCS;
    }

    public int getEstatus() {
        return estatus;
    }

    public void setEstatus(int estatus) {
        this.estatus = estatus;
    }
/*
    public Collection<Recomendacion> getRecomendacionesCollection() {
        return recomendacionesCollection;
    }

    public void setRecomendacionesCollection(Collection<Recomendacion> recomendacionesCollection) {
        this.recomendacionesCollection = recomendacionesCollection;
    }

    public Collection<CampañaSalud> getCampañasSaludCollection() {
        return campañasSaludCollection;
    }

    public void setCampañasSaludCollection(Collection<CampañaSalud> campañasSaludCollection) {
        this.campañasSaludCollection = campañasSaludCollection;
    }

    public Collection<Contraindicacion> getContraindicacionesCollection() {
        return contraindicacionesCollection;
    }

    public void setContraindicacionesCollection(Collection<Contraindicacion> contraindicacionesCollection) {
        this.contraindicacionesCollection = contraindicacionesCollection;
    }

    public Collection<EfectoAdverso> getEfectosAdversosCollection() {
        return efectosAdversosCollection;
    }

    public void setEfectosAdversosCollection(Collection<EfectoAdverso> efectosAdversosCollection) {
        this.efectosAdversosCollection = efectosAdversosCollection;
    }

    public Collection<CatalogoAplicacionVacuna> getCatalogoAplicacionesVacunasCollection() {
        return catalogoAplicacionesVacunasCollection;
    }

    public void setCatalogoAplicacionesVacunasCollection(Collection<CatalogoAplicacionVacuna> catalogoAplicacionesVacunasCollection) {
        this.catalogoAplicacionesVacunasCollection = catalogoAplicacionesVacunasCollection;
    }

    public Collection<VacunaMenor> getVacunasMenoresCollection() {
        return vacunasMenoresCollection;
    }

    public void setVacunasMenoresCollection(Collection<VacunaMenor> vacunasMenoresCollection) {
        this.vacunasMenoresCollection = vacunasMenoresCollection;
    }

    public Collection<Inventario> getInventarioCollection() {
        return inventarioCollection;
    }

    public void setInventarioCollection(Collection<Inventario> inventarioCollection) {
        this.inventarioCollection = inventarioCollection;
    }
*/
    @Override
    public int hashCode() {
        int hash = 0;
        hash += (idVacuna != null ? idVacuna.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Vacuna)) {
            return false;
        }
        Vacuna other = (Vacuna) object;
        if ((this.idVacuna == null && other.idVacuna != null) || (this.idVacuna != null && !this.idVacuna.equals(other.idVacuna))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "mx.lania.sicosvac.entidades.Vacunas[ idVacuna=" + idVacuna + " ]";
    }
    
}
