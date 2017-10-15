/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mx.lania.sicosvac.servicios;

import java.util.List;
import mx.lania.sicosvac.entidades.Centro;
import mx.lania.sicosvac.entidades.Inventario;
import mx.lania.sicosvac.entidades.Vacuna;
import mx.lania.sicosvac.oad.InventarioOad;
import mx.lania.sicosvac.oad.CentrosOad;
import mx.lania.sicosvac.oad.VacunasOad;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author José Antonio Pérez Ozuna
 */
@Service
public class ServicioInventario {
    @Autowired
    InventarioOad inventarioOad;
    
    @Autowired
    CentrosOad centrosOad;
    
    public void creaInventarioInicial(Vacuna vacuna){
        List<Centro> listaCentros;
        listaCentros = centrosOad.findAll();
        for(Centro centro:listaCentros){
            Inventario inventario = new Inventario();
            inventario.setCantidad(0);
            inventario.setVacuna(vacuna);
            inventario.setCentro(centro);
            inventarioOad.save(inventario);
        }
    }
}
