/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mx.lania.sicosvac.control;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import mx.lania.sicosvac.entidades.ReporteVacuna;
import mx.lania.sicosvac.oad.ReportesVacunasOad;

/**
 *
 * @author José Antonio Perez Ozuna
 */

@RestController
@RequestMapping("reportesVacunas")
public class ControladorRestReportesVacunas {
    @Autowired
    ReportesVacunasOad reportesVacunasOad;
    
    @RequestMapping(value="", method = RequestMethod.GET)
    public List<ReporteVacuna> getReporteVacuna(){
        return reportesVacunasOad.findAll();
    }
 
    @RequestMapping(value="/{id}",method=RequestMethod.GET)
    public ReporteVacuna getReporteVacunaById(@PathVariable("id") Integer idReporteVacuna){
        return reportesVacunasOad.findOne(idReporteVacuna);
    }
    
    @RequestMapping(value="",method=RequestMethod.POST)
    public ReporteVacuna agregarReporteVacuna(@RequestBody ReporteVacuna reporteVacuna){
        reportesVacunasOad.save(reporteVacuna);
        return reporteVacuna;
    }
    
    @RequestMapping(value="/{id}", method = RequestMethod.PUT)
    public ReporteVacuna actualizarReporteVacuna(@RequestBody ReporteVacuna reporteVacuna, 
            @PathVariable("id") Integer idReporteVacuna){      
        reportesVacunasOad.save(reporteVacuna);
        return reporteVacuna;
    }    
    
    @RequestMapping(value="/{id}", method = RequestMethod.DELETE)
    public void eliminarReporteVacuna(@PathVariable("id") Integer idReporteVacuna){      
        reportesVacunasOad.delete(idReporteVacuna);
    }            
}
