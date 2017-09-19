/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mx.lania.sicosvac.entidades;

import java.io.Serializable;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

/**
 *
 * @author José Antonio Perez Ozuna
 */
@Entity
@Table(name = "efectos_adversos")
//@NamedQueries({
//    @NamedQuery(name = "EfectosAdversos.findAll", query = "SELECT e FROM EfectosAdversos e")})
public class EfectoAdverso implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @NotNull
    @Column(name = "id_efecto")
    private Integer idEfecto;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 500)
    @Column(name = "descripcion")
    private String descripcion;
    @JoinColumn(name = "id_vacuna", referencedColumnName = "id_vacuna")
    @ManyToOne(optional = false)
    private Vacuna vacuna;

    public EfectoAdverso() {
    }

    public EfectoAdverso(Integer idEfecto) {
        this.idEfecto = idEfecto;
    }

    public EfectoAdverso(Integer idEfecto, String descripcion) {
        this.idEfecto = idEfecto;
        this.descripcion = descripcion;
    }

    public Integer getIdEfecto() {
        return idEfecto;
    }

    public void setIdEfecto(Integer idEfecto) {
        this.idEfecto = idEfecto;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Vacuna getVacuna() {
        return vacuna;
    }

    public void setVacuna(Vacuna vacuna) {
        this.vacuna = vacuna;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (idEfecto != null ? idEfecto.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof EfectoAdverso)) {
            return false;
        }
        EfectoAdverso other = (EfectoAdverso) object;
        if ((this.idEfecto == null && other.idEfecto != null) || (this.idEfecto != null && !this.idEfecto.equals(other.idEfecto))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "mx.lania.sicosvac.entidades.EfectosAdversos[ idEfecto=" + idEfecto + " ]";
    }
    
}
