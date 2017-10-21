/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mx.lania.sicosvac.entidades;

import com.fasterxml.jackson.annotation.JsonIgnore;
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

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

/**
 *
 * @author José Antonio Perez Ozuna
 */
@Entity
@Table(name = "administradores")
//@NamedQueries({
//    @NamedQuery(name = "Administradores.findAll", query = "SELECT a FROM administradores a")})
public class Administrador implements Serializable, UserDetails {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @NotNull
    @Column(name = "id_administrador")
    private Integer idAdministrador;
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
    @Size(min = 1, max = 50)
    @Column(name = "usuario")
    private String username;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "password")
    private String password;
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
    @Basic(optional = false)
    @NotNull
    @Column(name = "estatus")
    private int estatus;
    //@JsonIgnore
    @JoinColumn(name = "id_centro", referencedColumnName = "id_centro")
    @ManyToOne(optional = false)
    private Centro centro;
    //@JsonIgnore
    @JoinColumn(name = "id_rol", referencedColumnName = "id_rol")
    @ManyToOne(optional = false)
    private Rol rol;

    public Administrador() {
    }

    public Administrador(Integer idAdministrador) {
        this.idAdministrador = idAdministrador;
    }

    public Administrador(Integer idAdministrador, String nombre, String apellidos, String username, String password, int codigoActivacion, int activacionEmail, int activacionAdmin, int estatus) {
        this.idAdministrador = idAdministrador;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.username = username;
        this.password = password;
        this.codigoActivacion = codigoActivacion;
        this.activacionEmail = activacionEmail;
        this.activacionAdmin = activacionAdmin;
        this.estatus = estatus;
    }

    public Integer getIdAdministrador() {
        return idAdministrador;
    }

    public void setIdAdministrador(Integer idAdministrador) {
        this.idAdministrador = idAdministrador;
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

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
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

    public int getEstatus() {
        return estatus;
    }

    public void setEstatus(int estatus) {
        this.estatus = estatus;
    }

    public Centro getCentro() {
        return centro;
    }

    public void setCentro(Centro centro) {
        this.centro = centro;
    }

    public Rol getRol() {
        return rol;
    }

    public void setRol(Rol rol) {
        this.rol = rol;
    }

    //Sobreescritura de métodos de Spring Security
    @JsonIgnore
    @Override
    public boolean isEnabled() {
            return true;
    }

    @JsonIgnore
    @Override
    public boolean isCredentialsNonExpired() {
            return true;
    }

    @JsonIgnore
    @Override
    public boolean isAccountNonLocked() {
            return true;
    }

    @JsonIgnore
    @Override
    public boolean isAccountNonExpired() {
            return true;
    }

    @JsonIgnore
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
            Collection<GrantedAuthority> authorities = new ArrayList<>();
            authorities.add(new SimpleGrantedAuthority(rol.getDescripcion()));
            return authorities;
    }
    //Hasta aquí Spring Security
    
    @Override
    public int hashCode() {
        int hash = 0;
        hash += (idAdministrador != null ? idAdministrador.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Administrador)) {
            return false;
        }
        Administrador other = (Administrador) object;
        if ((this.idAdministrador == null && other.idAdministrador != null) || (this.idAdministrador != null && !this.idAdministrador.equals(other.idAdministrador))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "mx.lania.sicosvac.entidades.Administradores[ idAdministrador=" + idAdministrador + " ]";
    }
    
}
