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
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
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
@Table(name = "catalogo_aplicaciones_vacunas")
//@NamedQueries({
//    @NamedQuery(name = "CatalogoAplicacionesVacunas.findAll", query = "SELECT c FROM CatalogoAplicacionesVacunas c")})
public class CatalogoAplicacionVacuna implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @NotNull
    @Column(name = "id_catalogo")
    private Integer idCatalogo;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 30)
    @Column(name = "dosis")
    private String dosis;
    @Basic(optional = false)
    @NotNull
    @Column(name = "edad_meses")
    private int edadMeses;
    @Basic(optional = false)
    @NotNull
    @Column(name = "estatus")
    private int estatus;
    @JoinColumn(name = "id_vacuna", referencedColumnName = "id_vacuna")
    @ManyToOne(optional = false)
    private Vacuna idVacuna;
    /*@OneToMany(cascade = CascadeType.ALL, mappedBy = "idCatalogo")
    private Collection<VacunaMenor> vacunasMenoresCollection;*/

    public CatalogoAplicacionVacuna() {
    }

    public CatalogoAplicacionVacuna(Integer idCatalogo) {
        this.idCatalogo = idCatalogo;
    }

    public CatalogoAplicacionVacuna(Integer idCatalogo, String dosis, int edadMeses, int estatus) {
        this.idCatalogo = idCatalogo;
        this.dosis = dosis;
        this.edadMeses = edadMeses;
        this.estatus = estatus;
    }

    public Integer getIdCatalogo() {
        return idCatalogo;
    }

    public void setIdCatalogo(Integer idCatalogo) {
        this.idCatalogo = idCatalogo;
    }

    public String getDosis() {
        return dosis;
    }

    public void setDosis(String dosis) {
        this.dosis = dosis;
    }

    public int getEdadMeses() {
        return edadMeses;
    }

    public void setEdadMeses(int edadMeses) {
        this.edadMeses = edadMeses;
    }

    public int getEstatus() {
        return estatus;
    }

    public void setEstatus(int estatus) {
        this.estatus = estatus;
    }

    public Vacuna getIdVacuna() {
        return idVacuna;
    }

    public void setIdVacuna(Vacuna idVacuna) {
        this.idVacuna = idVacuna;
    }
/*
    public Collection<VacunaMenor> getVacunasMenoresCollection() {
        return vacunasMenoresCollection;
    }

    public void setVacunasMenoresCollection(Collection<VacunaMenor> vacunasMenoresCollection) {
        this.vacunasMenoresCollection = vacunasMenoresCollection;
    }
*/
    @Override
    public int hashCode() {
        int hash = 0;
        hash += (idCatalogo != null ? idCatalogo.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof CatalogoAplicacionVacuna)) {
            return false;
        }
        CatalogoAplicacionVacuna other = (CatalogoAplicacionVacuna) object;
        if ((this.idCatalogo == null && other.idCatalogo != null) || (this.idCatalogo != null && !this.idCatalogo.equals(other.idCatalogo))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "mx.lania.sicosvac.entidades.CatalogoAplicacionesVacunas[ idCatalogo=" + idCatalogo + " ]";
    }
    
}
