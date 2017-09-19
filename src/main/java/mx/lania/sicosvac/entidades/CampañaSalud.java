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
@Table(name = "campa\u00f1as_salud")
//@NamedQueries({
//    @NamedQuery(name = "Campa\u00f1asSalud.findAll", query = "SELECT c FROM Campa\u00f1asSalud c")})
public class CampañaSalud implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @NotNull
    @Column(name = "id_campa\u00f1a")
    private Integer idCampaña;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "nombre_campa\u00f1a")
    private String nombreCampaña;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 200)
    @Column(name = "descripcion")
    private String descripcion;
    @Column(name = "inicio_campa\u00f1a")
    @Temporal(TemporalType.DATE)
    private Date inicioCampaña;
    @Basic(optional = false)
    @NotNull
    @Column(name = "fin_campa\u00f1a")
    @Temporal(TemporalType.DATE)
    private Date finCampaña;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 150)
    @Column(name = "lineamientos")
    private String lineamientos;
    @Basic(optional = false)
    @NotNull
    @Column(name = "estatus")
    private int estatus;
    @JoinColumn(name = "id_vacuna", referencedColumnName = "id_vacuna")
    @ManyToOne(optional = false)
    private Vacuna vacuna;

    public CampañaSalud() {
    }

    public CampañaSalud(Integer idCampaña) {
        this.idCampaña = idCampaña;
    }

    public CampañaSalud(Integer idCampaña, String nombreCampaña, String descripcion, Date finCampaña, String lineamientos, int estatus) {
        this.idCampaña = idCampaña;
        this.nombreCampaña = nombreCampaña;
        this.descripcion = descripcion;
        this.finCampaña = finCampaña;
        this.lineamientos = lineamientos;
        this.estatus = estatus;
    }

    public Integer getIdCampaña() {
        return idCampaña;
    }

    public void setIdCampaña(Integer idCampaña) {
        this.idCampaña = idCampaña;
    }

    public String getNombreCampaña() {
        return nombreCampaña;
    }

    public void setNombreCampaña(String nombreCampaña) {
        this.nombreCampaña = nombreCampaña;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Date getInicioCampaña() {
        return inicioCampaña;
    }

    public void setInicioCampaña(Date inicioCampaña) {
        this.inicioCampaña = inicioCampaña;
    }

    public Date getFinCampaña() {
        return finCampaña;
    }

    public void setFinCampaña(Date finCampaña) {
        this.finCampaña = finCampaña;
    }

    public String getLineamientos() {
        return lineamientos;
    }

    public void setLineamientos(String lineamientos) {
        this.lineamientos = lineamientos;
    }

    public int getEstatus() {
        return estatus;
    }

    public void setEstatus(int estatus) {
        this.estatus = estatus;
    }

    public Vacuna getVacuna() {
        return vacuna;
    }

    public void setVacuna(Vacuna idVacuna) {
        this.vacuna = idVacuna;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (idCampaña != null ? idCampaña.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof CampañaSalud)) {
            return false;
        }
        CampañaSalud other = (CampañaSalud) object;
        if ((this.idCampaña == null && other.idCampaña != null) || (this.idCampaña != null && !this.idCampaña.equals(other.idCampaña))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "mx.lania.sicosvac.entidades.Campa\u00f1asSalud[ idCampa\u00f1a=" + idCampaña + " ]";
    }
    
}
