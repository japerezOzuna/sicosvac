/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mx.lania.sicosvac.servicios;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;
import mx.lania.sicosvac.entidades.Menor;
import mx.lania.sicosvac.entidades.VacunaMenor;
import mx.lania.sicosvac.oad.MenoresOad;
import mx.lania.sicosvac.entidades.CatalogoAplicacionVacuna;
import mx.lania.sicosvac.oad.VacunasMenoresOad;
import mx.lania.sicosvac.oad.CatalogoAplicacionesVacunasOad;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author José Antonio Pérez Ozuna
 */
@Service
public class ServicioVacunasMenores {
    @Autowired
    MenoresOad menoresOad;  

    @Autowired
    VacunasMenoresOad vacunasMenoresOad;    
    
    @Autowired
    CatalogoAplicacionesVacunasOad catalogoAplicacionesOad;
    
    
    public void guardaVacunasPorAplicar(Menor menor){
        List<CatalogoAplicacionVacuna> listaDosis;
        listaDosis = catalogoAplicacionesOad.findAll();
        for(CatalogoAplicacionVacuna dosis:listaDosis){
            VacunaMenor vacunaMenor = new VacunaMenor();                
            Calendar fechaSugerida = Calendar.getInstance();
            fechaSugerida.setTime(menor.getFechaNac());
            fechaSugerida.add(Calendar.MONTH,dosis.getEdadMeses());
            vacunaMenor.setEstatus("Por aplicar");
            vacunaMenor.setRecibirNotificaciones("SI");
            vacunaMenor.setFechaSugerida(fechaSugerida.getTime());
            vacunaMenor.setMenor(menor);
            vacunaMenor.setCatalogoAplicacion(dosis);
            vacunaMenor.setVacuna(dosis.getVacuna());
            vacunasMenoresOad.save(vacunaMenor);
        } 
    }
    
    public void guardaDosisPorAplicar(CatalogoAplicacionVacuna dosis){
        List<Menor> listaMenores;
        listaMenores = menoresOad.findAll();
        for(Menor menor:listaMenores){
            VacunaMenor vacunaMenor = new VacunaMenor();                
            Calendar fechaSugerida = Calendar.getInstance();
            fechaSugerida.setTime(menor.getFechaNac());
            fechaSugerida.add(Calendar.MONTH,dosis.getEdadMeses());
            vacunaMenor.setEstatus("Por aplicar");
            vacunaMenor.setRecibirNotificaciones("SI");
            vacunaMenor.setFechaSugerida(fechaSugerida.getTime());
            vacunaMenor.setMenor(menor);
            vacunaMenor.setCatalogoAplicacion(dosis);
            vacunaMenor.setVacuna(dosis.getVacuna());
            vacunasMenoresOad.save(vacunaMenor);
        } 
    }    
}
