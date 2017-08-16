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
@Table(name = "tutores")
//@NamedQueries({
//    @NamedQuery(name = "Tutores.findAll", query = "SELECT t FROM Tutores t")})
public class Tutor implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @NotNull
    @Column(name = "id_tutor")
    private Integer idTutor;
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
    @Basic(optional = false)
    @NotNull
    @Column(name = "fecha_nac")
    @Temporal(TemporalType.DATE)
    private Date fechaNac;
    @Basic(optional = false)
    @NotNull
    @Column(name = "sexo")
    private int sexo;
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
    @Size(max = 18)
    @Column(name = "curp")
    private String curp;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "usuario")
    private String usuario;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "password")
    private String password;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 100)
    @Column(name = "token")
    private String token;
    @Basic(optional = false)
    @NotNull
    @Column(name = "codigo_activacion")
    private int codigoActivacion;
    @Basic(optional = false)
    @NotNull
    @Column(name = "activacion_email")
    private int activacionEmail;
    @Basic(optional = false)
    @NotNull
    @Column(name = "activacion_admin")
    private int activacionAdmin;
    @Column(name = "estatus")
    private Integer estatus;
    /*@OneToMany(cascade = CascadeType.ALL, mappedBy = "idTutor")
    private Collection<Menor> menoresCollection;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "idTutor")
    private Collection<Notificacion> notificacionesCollection;*/
    @JoinColumn(name = "id_rol", referencedColumnName = "id_rol")
    @ManyToOne(optional = false)
    private Rol idRol;

    public Tutor() {
    }

    public Tutor(Integer idTutor) {
        this.idTutor = idTutor;
    }

    public Tutor(Integer idTutor, String nombre, String apellidos, Date fechaNac, int sexo, String usuario, String password, String token, int codigoActivacion, int activacionEmail, int activacionAdmin) {
        this.idTutor = idTutor;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.fechaNac = fechaNac;
        this.sexo = sexo;
        this.usuario = usuario;
        this.password = password;
        this.token = token;
        this.codigoActivacion = codigoActivacion;
        this.activacionEmail = activacionEmail;
        this.activacionAdmin = activacionAdmin;
    }

    public Integer getIdTutor() {
        return idTutor;
    }

    public void setIdTutor(Integer idTutor) {
        this.idTutor = idTutor;
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

    public Date getFechaNac() {
        return fechaNac;
    }

    public void setFechaNac(Date fechaNac) {
        this.fechaNac = fechaNac;
    }

    public int getSexo() {
        return sexo;
    }

    public void setSexo(int sexo) {
        this.sexo = sexo;
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

    public String getCurp() {
        return curp;
    }

    public void setCurp(String curp) {
        this.curp = curp;
    }

    public String getUsuario() {
        return usuario;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public int getCodigoActivacion() {
        return codigoActivacion;
    }

    public void setCodigoActivacion(int codigoActivacion) {
        this.codigoActivacion = codigoActivacion;
    }

    public int getActivacionEmail() {
        return activacionEmail;
    }

    public void setActivacionEmail(int activacionEmail) {
        this.activacionEmail = activacionEmail;
    }

    public int getActivacionAdmin() {
        return activacionAdmin;
    }

    public void setActivacionAdmin(int activacionAdmin) {
        this.activacionAdmin = activacionAdmin;
    }

    public Integer getEstatus() {
        return estatus;
    }

    public void setEstatus(Integer estatus) {
        this.estatus = estatus;
    }
/*
    public Collection<Menor> getMenoresCollection() {
        return menoresCollection;
    }

    public void setMenoresCollection(Collection<Menor> menoresCollection) {
        this.menoresCollection = menoresCollection;
    }

    public Collection<Notificacion> getNotificacionesCollection() {
        return notificacionesCollection;
    }

    public void setNotificacionesCollection(Collection<Notificacion> notificacionesCollection) {
        this.notificacionesCollection = notificacionesCollection;
    }
*/
    public Rol getIdRol() {
        return idRol;
    }

    public void setIdRol(Rol idRol) {
        this.idRol = idRol;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (idTutor != null ? idTutor.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Tutor)) {
            return false;
        }
        Tutor other = (Tutor) object;
        if ((this.idTutor == null && other.idTutor != null) || (this.idTutor != null && !this.idTutor.equals(other.idTutor))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "mx.lania.sicosvac.entidades.Tutores[ idTutor=" + idTutor + " ]";
    }
    
}
