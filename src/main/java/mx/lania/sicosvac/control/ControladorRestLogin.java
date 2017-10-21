/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mx.lania.sicosvac.control;

import java.security.Principal;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author José Antonio Pérez Ozuna
 */

@RestController
public class ControladorRestLogin {
    
    @RequestMapping("/usuario")
    public Principal usuario(Principal principal) {
            return principal;
    }
}
