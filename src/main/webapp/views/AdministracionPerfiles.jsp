<%-- 
    Document   : AdministracionPerfiles
    Created on : 9/09/2017, 01:17:13 PM
    Author     : José Antonio Pérez Ozuna
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Administración de perfiles</title>
    </head>
    <body><br>
        <section ng-controller="ControladorPerfiles">
            <div class="panel panel-default">
                <div class="panel-heading">Administración de perfiles</div>
                <div class="panel-body">
                    <form name="AdministraPerfiles" id="AdministraPerfiles">
                        <fieldset>  <legend>1.- ¿Que desea hacer?</legend>
                            <div class="row col-lg-8">
                                <div class="form-group col-lg-4">
                                    <!--<input type="button" onClick="location.href='PerfilMenor.jsp'" id="btnMenores"  value="Dar de alta un menor" class="btn btn-primary form-control" />-->
                                    <input type="button" ng-click="ruta('altaPerfilMenor')" id="btnMenores"  value="Dar de alta un menor" class="btn btn-primary form-control" />
                                </div>
                                <div class="form-group col-lg-4">
                                    <!--<input type="button" onClick="location.href='PerfilTutor.jsp'" id="btnTutores"  value="Dar de alta un tutor" class="btn btn-default form-control" />--->
                                    <input type="button" ng-click="ruta('altaPerfilTutor')" id="btnTutores"  value="Dar de alta un tutor" class="btn btn-default form-control" />
                                </div>
                            </div>
                        </fieldset>
                        <br>
            <fieldset><legend>Modificar Perfil de un menor</legend>
                <div class="row col-lg-8">
                    <div class="form-group col-lg-12">
                        <label id="Label1">1.-Introduzca un Curp</label>
                    </div>
                    <div class="form-group col-lg-8">
                        <!--Style="text-transform: uppercase"-->
                        <input type="text" ng-model="menorBuscado" id="txtBuscaMenor" class="form-control"  placeholder="CURP"  Style="text-transform: uppercase"/>
                    </div>
                    <div class="form-group col-lg-4">
                        <input type="button" ng-click="buscaMenor(menorBuscado)" id="btnBuscarMenor"  value="Buscar" class="btn btn-primary"/>
                    </div>
                    <div class="form-group col-lg-12">
                        <label id="lblVerifica">2.-Verifique los datos</label>
                    </div>
                    <div class="form-group col-lg-12">
                        <textarea ng-model="datosMenor" id="txtAInfoMenor" class="form-control" TextMode="multiline" Columns="50" Rows="4"  disabled/></textarea>
                    </div>
                    <div class="form-group col-lg-6">
                        <input type="button" ng-click="modificarPerfilMenor()" id="btnModificaMenor"  value="Modificar Perfil" class="btn btn-primary form-control"/>
                    </div>
                </div>
            </fieldset>
            <fieldset><legend>Modificar Perfil de un tutor</legend>
                <div class="row col-lg-8">
                    <div class="form-group col-lg-12">
                        <label id="Label2">1.-Introduzca un Curp o un Usuario</label>
                    </div>
                    <div class="form-group col-lg-8">
                        <input type="text" ng-model="tutorBuscado" id="txtBuscaTutor" class="form-control"  placeholder="CURP" Style="text-transform: uppercase"/>
                    </div>
                    <div class="form-group col-lg-4">
                        <input type="button" ng-click="buscaTutor(tutorBuscado)" id="btnBuscaTutor"  value="Buscar" class="btn btn-primary"/>
                    </div>
                    <div class="form-group col-lg-12">
                        <label id="Label3">2.-Verifique los datos</label>
                    </div>
                    <div class="form-group col-lg-12">
                        <textarea id="txtAVerificaTutor" ng-model="datosTutor" class="form-control" TextMode="multiline" Columns="50" Rows="4"  disabled /></textarea>
                    </div>
                    <div class="form-group col-lg-6">
                        <input type="button" ng-click="modificarPerfilTutor()" id="btnModificaTutor"  value="Modificar Perfil" class="btn btn-primary form-control"/>
                    </div>
                </div>
            </fieldset>
        </form>
            <!-- modal de confirmacion o error-->
            <div class="modal fade" id="modalConfirmaPerfil" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div id="upModal">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                    <h4 class="modal-title">
                                        <span id="lblModalTitle"></spanl></h4>
                                </div>
                                <div class="modal-body">
                                    <span id="lblModalBody"></span>
                                </div>
                                <div class="modal-footer" id="footerModal">
                                    <input type="button" ng-click="" id="btnCerrar"  value="Cerrar" class="btn btn-info" aria-hidden="true" data-dismiss="modal" />
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </section>            
    </body>
</html>
