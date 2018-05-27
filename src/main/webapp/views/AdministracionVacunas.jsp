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
        <div class="panel panel-default">
            <div class="panel-heading">Administración de vacunas</div>
            <div class="panel-body">
                <fieldset><legend>1.-¿Que desea hacer?</legend>
                        <div class="row col-lg-8">
                            <div class="form-group col-lg-5">
                                <input type="button" ng-click="ruta('altaVacuna')" id="btnAltaVacuna" value="Dar de alta una vacuna" class="btn btn-primary form-control" formnovalidate="true"/>
                            </div>
                            <div class="form-group col-lg-5">
                                <input type="button" ng-click="ruta('modificarVacuna')" id="btnModificaVacuna" value="Modificar una vacuna existente" class="btn btn-default form-control" formnovalidate="true"/>
                            </div>
                        </div>
                </fieldset>
            </div>
        </div>
    </body>
</html>
