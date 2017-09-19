/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mx.lania.sicosvac.entidades;

import java.io.Serializable;
import java.util.Collection;
import java.util.Date;
import java.util.Set;
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
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

/**
 *
 * @author José Antonio Perez Ozuna
 */
@Entity
@Table(name = "vacunas_menores")
//@NamedQueries({
//    @NamedQuery(name = "VacunasMenores.findAll", query = "SELECT v FROM VacunasMenores v")})
public class VacunaMenor implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @NotNull
    @Column(name = "id_vacunas_menor")
    private Integer idVacunasMenor;
    @Column(name = "fecha_aplicacion")
    @Temporal(TemporalType.DATE)
    private Date fechaAplicacion;
    @Column(name = "fecha_sugerida")
    @Temporal(TemporalType.DATE)
    private Date fechaSugerida;
    @Size(max = 2)
    @Column(name = "aplico_cs")
    private String aplicoCs;
    @Size(max = 70)
    @Column(name = "lugar_aplicacion")
    private String lugarAplicacion;
    @Size(max = 50)
    @Column(name = "nombre_aplicador")
    private String nombreAplicador;
    @Size(max = 50)
    @Column(name = "nombre_familiar")
    private String nombreFamiliar;
    @Size(max = 50)
    @Column(name = "parentesco")
    private String parentesco;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 20)
    @Column(name = "estatus")
    private String estatus;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 2)
    @Column(name = "recibir_notificaciones")
    private String recibirNotificaciones;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "vacunaMenor")
    private Set<ReporteVacuna> reportesVacunas;
    @JoinColumn(name = "id_catalogo", referencedColumnName = "id_catalogo")
    @ManyToOne(optional = false)
    private CatalogoAplicacionVacuna catalogoAplicacion;
    @JoinColumn(name = "id_menor", referencedColumnName = "id_menor")
    @ManyToOne(optional = false)
    private Menor menor;
    @JoinColumn(name = "id_vacuna", referencedColumnName = "id_vacuna")
    @ManyToOne(optional = false)
    private Vacuna vacuna;

    public VacunaMenor() {
    }

    public VacunaMenor(Integer idVacunasMenor) {
        this.idVacunasMenor = idVacunasMenor;
    }

    public VacunaMenor(Integer idVacunasMenor, String estatus, String recibirNotificaciones) {
        this.idVacunasMenor = idVacunasMenor;
        this.estatus = estatus;
        this.recibirNotificaciones = recibirNotificaciones;
    }

    public Integer getIdVacunasMenor() {
        return idVacunasMenor;
    }

    public void setIdVacunasMenor(Integer idVacunasMenor) {
        this.idVacunasMenor = idVacunasMenor;
    }

    public Date getFechaAplicacion() {
        return fechaAplicacion;
    }

    public void setFechaAplicacion(Date fechaAplicacion) {
        this.fechaAplicacion = fechaAplicacion;
    }

    public Date getFechaSugerida() {
        return fechaSugerida;
    }

    public void setFechaSugerida(Date fechaSugerida) {
        this.fechaSugerida = fechaSugerida;
    }

    public String getAplicoCs() {
        return aplicoCs;
    }

    public void setAplicoCs(String aplicoCs) {
        this.aplicoCs = aplicoCs;
    }

    public String getLugarAplicacion() {
        return lugarAplicacion;
    }

    public void setLugarAplicacion(String lugarAplicacion) {
        this.lugarAplicacion = lugarAplicacion;
    }

    public String getNombreAplicador() {
        return nombreAplicador;
    }

    public void setNombreAplicador(String nombreAplicador) {
        this.nombreAplicador = nombreAplicador;
    }

    public String getNombreFamiliar() {
        return nombreFamiliar;
    }

    public void setNombreFamiliar(String nombreFamiliar) {
        this.nombreFamiliar = nombreFamiliar;
    }

    public String getParentesco() {
        return parentesco;
    }

    public void setParentesco(String parentesco) {
        this.parentesco = parentesco;
    }

    public String getEstatus() {
        return estatus;
    }

    public void setEstatus(String estatus) {
        this.estatus = estatus;
    }

    public String getRecibirNotificaciones() {
        return recibirNotificaciones;
    }

    public void setRecibirNotificaciones(String recibirNotificaciones) {
        this.recibirNotificaciones = recibirNotificaciones;
    }
/*
    public Collection<ReporteVacuna> getReportesVacunasCollection() {
        return reportesVacunasCollection;
    }

    public void setReportesVacunasCollection(Collection<ReporteVacuna> reportesVacunasCollection) {
        this.reportesVacunasCollection = reportesVacunasCollection;
    }
*/
    public CatalogoAplicacionVacuna getCatalogoAplicacion() {
        return catalogoAplicacion;
    }

    public void setCatalogoAplicacion(CatalogoAplicacionVacuna catalogoAplicacion) {
        this.catalogoAplicacion = catalogoAplicacion;
    }

    public Menor getMenor() {
        return menor;
    }

    public void setMenor(Menor menor) {
        this.menor = menor;
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
        hash += (idVacunasMenor != null ? idVacunasMenor.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof VacunaMenor)) {
            return false;
        }
        VacunaMenor other = (VacunaMenor) object;
        if ((this.idVacunasMenor == null && other.idVacunasMenor != null) || (this.idVacunasMenor != null && !this.idVacunasMenor.equals(other.idVacunasMenor))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "mx.lania.sicosvac.entidades.VacunasMenores[ idVacunasMenor=" + idVacunasMenor + " ]";
    }
    
}
