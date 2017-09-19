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
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
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
@Table(name = "jurisdicciones")
//@NamedQueries({
//    @NamedQuery(name = "Jurisdicciones.findAll", query = "SELECT j FROM Jurisdicciones j")})
public class Jurisdiccion implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @NotNull
    @Column(name = "id_jurisdiccion")
    private Integer idJurisdiccion;
    @Size(max = 2)
    @Column(name = "clave_jurisdiccion")
    private String claveJurisdiccion;
    @Size(max = 100)
    @Column(name = "nombre_jurisdiccion")
    private String nombreJurisdiccion;
    /*@OneToMany(cascade = CascadeType.ALL, mappedBy = "idJurisdiccion")
    private Collection<Centro> centrosCollection;*/

    public Jurisdiccion() {
    }

    public Jurisdiccion(Integer idJurisdiccion) {
        this.idJurisdiccion = idJurisdiccion;
    }

    public Integer getIdJurisdiccion() {
        return idJurisdiccion;
    }

    public void setIdJurisdiccion(Integer idJurisdiccion) {
        this.idJurisdiccion = idJurisdiccion;
    }

    public String getClaveJurisdiccion() {
        return claveJurisdiccion;
    }

    public void setClaveJurisdiccion(String claveJurisdiccion) {
        this.claveJurisdiccion = claveJurisdiccion;
    }

    public String getNombreJurisdiccion() {
        return nombreJurisdiccion;
    }

    public void setNombreJurisdiccion(String nombreJurisdiccion) {
        this.nombreJurisdiccion = nombreJurisdiccion;
    }
/*
    public Collection<Centro> getCentrosCollection() {
        return centrosCollection;
    }

    public void setCentrosCollection(Collection<Centro> centrosCollection) {
        this.centrosCollection = centrosCollection;
    }
*/
    @Override
    public int hashCode() {
        int hash = 0;
        hash += (idJurisdiccion != null ? idJurisdiccion.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Jurisdiccion)) {
            return false;
        }
        Jurisdiccion other = (Jurisdiccion) object;
        if ((this.idJurisdiccion == null && other.idJurisdiccion != null) || (this.idJurisdiccion != null && !this.idJurisdiccion.equals(other.idJurisdiccion))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "mx.lania.sicosvac.entidades.Jurisdicciones[ idJurisdiccion=" + idJurisdiccion + " ]";
    }
    
}
