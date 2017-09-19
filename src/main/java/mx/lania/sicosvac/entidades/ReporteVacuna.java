/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mx.lania.sicosvac.entidades;

import java.io.Serializable;
import java.util.Date;
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
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

/**
 *
 * @author José Antonio Perez Ozuna
 */
@Entity
@Table(name = "reportes_vacunas")
//@NamedQueries({
//    @NamedQuery(name = "ReportesVacunas.findAll", query = "SELECT r FROM ReportesVacunas r")})
public class ReporteVacuna implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @NotNull
    @Column(name = "id_reporte")
    private Integer idReporte;
    @Basic(optional = false)
    @NotNull
    @Column(name = "fecha_aplicacion")
    @Temporal(TemporalType.DATE)
    private Date fechaAplicacion;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 70)
    @Column(name = "lugar_aplicacion")
    private String lugarAplicacion;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "nombre_familiar")
    private String nombreFamiliar;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "parentesco")
    private String parentesco;
    @JoinColumn(name = "id_vacunas_menor", referencedColumnName = "id_vacunas_menor")
    @ManyToOne(optional = false)
    private VacunaMenor vacunaMenor;

    public ReporteVacuna() {
    }

    public ReporteVacuna(Integer idReporte) {
        this.idReporte = idReporte;
    }

    public ReporteVacuna(Integer idReporte, Date fechaAplicacion, String lugarAplicacion, String nombreFamiliar, String parentesco) {
        this.idReporte = idReporte;
        this.fechaAplicacion = fechaAplicacion;
        this.lugarAplicacion = lugarAplicacion;
        this.nombreFamiliar = nombreFamiliar;
        this.parentesco = parentesco;
    }

    public Integer getIdReporte() {
        return idReporte;
    }

    public void setIdReporte(Integer idReporte) {
        this.idReporte = idReporte;
    }

    public Date getFechaAplicacion() {
        return fechaAplicacion;
    }

    public void setFechaAplicacion(Date fechaAplicacion) {
        this.fechaAplicacion = fechaAplicacion;
    }

    public String getLugarAplicacion() {
        return lugarAplicacion;
    }

    public void setLugarAplicacion(String lugarAplicacion) {
        this.lugarAplicacion = lugarAplicacion;
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

    public VacunaMenor getVacunaMenor() {
        return vacunaMenor;
    }

    public void setVacunaMenor(VacunaMenor vacunaMenor) {
        this.vacunaMenor = vacunaMenor;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (idReporte != null ? idReporte.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof ReporteVacuna)) {
            return false;
        }
        ReporteVacuna other = (ReporteVacuna) object;
        if ((this.idReporte == null && other.idReporte != null) || (this.idReporte != null && !this.idReporte.equals(other.idReporte))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "mx.lania.sicosvac.entidades.ReportesVacunas[ idReporte=" + idReporte + " ]";
    }
    
}
