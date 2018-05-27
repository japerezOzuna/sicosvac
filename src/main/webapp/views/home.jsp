<%-- 
    Document   : home
    Created on : 24/09/2017, 10:18:35 AM
    Author     : José Antonio Pérez Ozuna
--%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title></title>
    </head>
    <body>
        <div ng-controller="ControladorHome">
            <br>
        <!--<img src="imagenes/sslogo2017.png" alt=""/>-->
            <div class="imgwrapper">            
                <!-- <img src="https://www.ssaver.gob.mx/wp-content/uploads/2017/09/LOGOSTRA4410.png" alt="logostra4-01" width="500" height="186" class="img-responsive"> -->
                <img src="https://image.ibb.co/fzU8ow/logoss2017_500px.png" width="500" height="186" class="img-responsive">
            </div>
            <div><h2>Sistema de Control y Seguimiento de Vacunación en Menores</h2></div>
            <div>Jurisdicción Sanitaria:&nbsp;{{usuario.principal.centro.jurisdiccion.claveJurisdiccion+' - '+usuario.principal.centro.jurisdiccion.nombreJurisdiccion}}</div>
            <div>Centro de responsabilidad:&nbsp;{{usuario.principal.centro.nombreCentro}}</div>
        </div>
    </body>
</html>
