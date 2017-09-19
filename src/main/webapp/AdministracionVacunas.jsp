<%-- 
    Document   : AdministracionVacunas
    Created on : 18/08/2017, 04:52:22 PM
    Author     : José Antonio Pérez Ozuna
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Administración de vacunas</title>
    </head>
    <body><br>
        <fieldset><legend>1.-¿Que desea hacer?</legend>
                <div class="row col-lg-8">
                    <div class="form-group col-lg-5">
                        <input type="button" id="btnAltaVacuna" value="Dar de alta una vacuna" class="btn btn-primary form-control" formnovalidate="true" OnClick="location.href ='AltaVacuna.jsp'" />
                    </div>
                    <div class="form-group col-lg-5">
                        <input type="button" id="btnModificaVacuna" value="Modificar una vacuna existente" class="btn btn-default form-control" formnovalidate="true" OnClick="location.href ='ModificarVacuna.jsp'" />
                    </div>
                </div>
        </fieldset>
    </body>
</html>
