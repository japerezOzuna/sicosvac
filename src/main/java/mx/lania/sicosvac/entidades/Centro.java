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
@Table(name = "centros")
//@NamedQueries({
//    @NamedQuery(name = "Centros.findAll", query = "SELECT c FROM Centros c")})
public class Centro implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @NotNull
    @Column(name = "id_centro")
    private Integer idCentro;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 11)
    @Column(name = "clues")
    private String clues;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 100)
    @Column(name = "nombre_centro")
    private String nombreCentro;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 90)
    @Column(name = "calle")
    private String calle;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 20)
    @Column(name = "numero")
    private String numero;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "colonia")
    private String colonia;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 65)
    @Column(name = "municipio")
    private String municipio;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 65)
    @Column(name = "localidad")
    private String localidad;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 35)
    @Column(name = "telefono")
    private String telefono;
    @Basic(optional = false)
    @NotNull
    @Column(name = "google_maps_latitud")
    private double googleMapsLatitud;
    @Basic(optional = false)
    @NotNull
    @Column(name = "google_maps_longitud")
    private double googleMapsLongitud;
    @JoinColumn(name = "id_jurisdiccion", referencedColumnName = "id_jurisdiccion")
    @ManyToOne(optional = false)
    private Jurisdiccion jurisdiccion;
    /*@OneToMany(cascade = CascadeType.ALL, mappedBy = "idCentro")
    private Collection<Administrador> administradoresCollection;*/
    /*@OneToMany(cascade = CascadeType.ALL, mappedBy = "idCentro")
    private Collection<Inventario> inventarioCollection;*/

    public Centro() {
    }

    public Centro(Integer idCentro) {
        this.idCentro = idCentro;
    }

    public Centro(Integer idCentro, String clues, String nombreCentro, String calle, String numero, String colonia, String municipio, String localidad, String telefono, double googleMapsLatitud, double googleMapsLongitud) {
        this.idCentro = idCentro;
        this.clues = clues;
        this.nombreCentro = nombreCentro;
        this.calle = calle;
        this.numero = numero;
        this.colonia = colonia;
        this.municipio = municipio;
        this.localidad = localidad;
        this.telefono = telefono;
        this.googleMapsLatitud = googleMapsLatitud;
        this.googleMapsLongitud = googleMapsLongitud;
    }

    public Integer getIdCentro() {
        return idCentro;
    }

    public void setIdCentro(Integer idCentro) {
        this.idCentro = idCentro;
    }

    public String getClues() {
        return clues;
    }

    public void setClues(String clues) {
        this.clues = clues;
    }

    public String getNombreCentro() {
        return nombreCentro;
    }

    public void setNombreCentro(String nombreCentro) {
        this.nombreCentro = nombreCentro;
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

    public String getLocalidad() {
        return localidad;
    }

    public void setLocalidad(String localidad) {
        this.localidad = localidad;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public double getGoogleMapsLatitud() {
        return googleMapsLatitud;
    }

    public void setGoogleMapsLatitud(double googleMapsLatitud) {
        this.googleMapsLatitud = googleMapsLatitud;
    }

    public double getGoogleMapsLongitud() {
        return googleMapsLongitud;
    }

    public void setGoogleMapsLongitud(double googleMapsLongitud) {
        this.googleMapsLongitud = googleMapsLongitud;
    }

    public Jurisdiccion getJurisdiccion() {
        return jurisdiccion;
    }

    public void setJurisdiccion(Jurisdiccion jurisdiccion) {
        this.jurisdiccion = jurisdiccion;
    }
/*
    public Collection<Administrador> getAdministradoresCollection() {
        return administradoresCollection;
    }

    public void setAdministradoresCollection(Collection<Administrador> administradoresCollection) {
        this.administradoresCollection = administradoresCollection;
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
        hash += (idCentro != null ? idCentro.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Centro)) {
            return false;
        }
        Centro other = (Centro) object;
        if ((this.idCentro == null && other.idCentro != null) || (this.idCentro != null && !this.idCentro.equals(other.idCentro))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "mx.lania.sicosvac.entidades.Centros[ idCentro=" + idCentro + " ]";
    }
    
}
