/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mx.lania.sicosvac.entidades;

import java.io.Serializable;
import java.util.Collection;
import java.util.Date;
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
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

/**
 *
 * @author José Antonio Perez Ozuna
 */
@Entity
@Table(name = "menores")
//@NamedQueries({
//    @NamedQuery(name = "Menores.findAll", query = "SELECT m FROM Menores m")})
public class Menor implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @NotNull
    @Column(name = "id_menor")
    private Integer idMenor;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "nombre")
    private String nombre;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "apellidos")
    private String apellidos;
    @Size(max = 18)
    @Column(name = "curp")
    private String curp;
    @Size(max = 20)
    @Column(name = "crip")
    private String crip;
    @Basic(optional = false)
    @NotNull
    @Column(name = "sexo")
    private int sexo;
    @Basic(optional = false)
    @NotNull
    @Column(name = "fecha_nac")
    @Temporal(TemporalType.DATE)
    private Date fechaNac;
    @Size(max = 50)
    @Column(name = "calle")
    private String calle;
    @Size(max = 20)
    @Column(name = "numero")
    private String numero;
    @Size(max = 50)
    @Column(name = "colonia")
    private String colonia;
    @Size(max = 50)
    @Column(name = "municipio")
    private String municipio;
    @Size(max = 50)
    @Column(name = "estado")
    private String estado;
    @Column(name = "codigo_postal")
    private Integer codigoPostal;
    @Size(max = 255)
    @Column(name = "observaciones")
    private String observaciones;
    @JoinColumn(name = "id_tutor", referencedColumnName = "id_tutor")
    @ManyToOne(optional = false)
    private Tutor idTutor;
    /*@OneToMany(cascade = CascadeType.ALL, mappedBy = "idMenor")
    private Collection<VacunaMenor> vacunasMenoresCollection;*/

    public Menor() {
    }

    public Menor(Integer idMenor) {
        this.idMenor = idMenor;
    }

    public Menor(Integer idMenor, String nombre, String apellidos, int sexo, Date fechaNac) {
        this.idMenor = idMenor;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.sexo = sexo;
        this.fechaNac = fechaNac;
    }

    public Integer getIdMenor() {
        return idMenor;
    }

    public void setIdMenor(Integer idMenor) {
        this.idMenor = idMenor;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellidos() {
        return apellidos;
    }

    public void setApellidos(String apellidos) {
        this.apellidos = apellidos;
    }

    public String getCurp() {
        return curp;
    }

    public void setCurp(String curp) {
        this.curp = curp;
    }

    public String getCrip() {
        return crip;
    }

    public void setCrip(String crip) {
        this.crip = crip;
    }

    public int getSexo() {
        return sexo;
    }

    public void setSexo(int sexo) {
        this.sexo = sexo;
    }

    public Date getFechaNac() {
        return fechaNac;
    }

    public void setFechaNac(Date fechaNac) {
        this.fechaNac = fechaNac;
    }

    public String getCalle() {
        return calle;
    }

    public void setCalle(String calle) {
        this.calle = calle;
    }

    public String getNumero() {
        return numero;
    }

    public void setNumero(String numero) {
        this.numero = numero;
    }

    public String getColonia() {
        return colonia;
    }

    public void setColonia(String colonia) {
        this.colonia = colonia;
    }

    public String getMunicipio() {
        return municipio;
    }

    public void setMunicipio(String municipio) {
        this.municipio = municipio;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public Integer getCodigoPostal() {
        return codigoPostal;
    }

    public void setCodigoPostal(Integer codigoPostal) {
        this.codigoPostal = codigoPostal;
    }

    public String getObservaciones() {
        return observaciones;
    }

    public void setObservaciones(String observaciones) {
        this.observaciones = observaciones;
    }

    public Tutor getIdTutor() {
        return idTutor;
    }

    public void setIdTutor(Tutor idTutor) {
        this.idTutor = idTutor;
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
        hash += (idMenor != null ? idMenor.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Menor)) {
            return false;
        }
        Menor other = (Menor) object;
        if ((this.idMenor == null && other.idMenor != null) || (this.idMenor != null && !this.idMenor.equals(other.idMenor))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "mx.lania.sicosvac.entidades.Menores[ idMenor=" + idMenor + " ]";
    }
    
}
