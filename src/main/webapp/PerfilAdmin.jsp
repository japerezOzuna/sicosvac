<%-- 
    Document   : PerfilAdmin
    Created on : 17/09/2017, 08:52:46 PM
    Author     : José Antonio Pérez Ozuna
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Modificar perfil de usuario</title>
    </head>
    <body>
        <section>
            <form name="modificaPerfil">
                <fieldset id="PnlPerfil"><legend>1.- Aquí podrá Modificar su información de perfil</legend>
                <div class="form-group col-lg-8">
                    <div class="form-group col-lg-12" ng-class="{'has-error':modificaPerfil.nombre.$invalid && modificaPerfil.nombre.$dirty}">
                        <label id="lblnombre">Nombre(s):</label>
                        <input type="text" ng-model="Administrador.nombre" name="nombre" id="txtNombre"  class="form-control" placeholder="Nombre(s):" required>
                        <span ng-if="modificaPerfil.nombre.$invalid && modificaPerfil.nombre.$dirty" class="help-block">Este campo es requerido</span>
                    </div>
                    <div class="form-group col-lg-12" ng-class="{'has-error':modificaPerfil.apellidos.$invalid && modificaPerfil.apellidos.$dirty}">
                        <label id="Label1">Apellidos(s):</label>
                        <input type="text" ng-model="Administrador.apellidos" name="apellidos" id="txtApellidos"  class="form-control" placeholder="Apellido(s):" required>
                        <span ng-if="modificaPerfil.apellidos.$invalid && modificaPerfil.apellidos.$dirty" class="help-block">Este campo es requerido</span>
                    </div>
                    <div class="form-group col-lg-12" ng-class="{'has-error':modificaPerfil.usuario.$invalid && modificaPerfil.usuario.$dirty}">
                        <label id="Label2">Usuario:</label>
                        <input type="email" ng-model="Administrador.usuario" name="usuario" id="txtcorreo"  class="form-control" placeholder="Usuario:" required disabled>
                        <span ng-if="modificaPerfil.usuario.$invalid && modificaPerfil.usuario.$dirty" class="help-block">Este campo es requerido</span>
                        <a href="" id="lbCambiaCorreo"  ng-show="!modEmail" ng-click="confirmaEmail()" >Cambiar Correo</a>
                    </div>
                    <div id="Confirmacorreo" class="form-group col-lg-12" ng-show="modEmail" ng-class="{'has-error':modificaPerfil.usuarioConfirma.$invalid && modificaPerfil.usuarioConfirma.$dirty}">
                        <label id="Label6">Confirma Usuario:</label>
                        <input type="email"  ng-model="usuarioConfirma" name="usuarioConfirma" id="txtConfirmaCorreo"  class="form-control" placeholder="Confirme Usuario:" required>
                        <span ng-if="modificaPerfil.usuarioConfirma.$invalid && modificaPerfil.usuarioConfirma.$dirty" class="help-block">Este campo es requerido</span>
                    </div>
                    <div class="form-group col-lg-6" ng-class="{'has-error':modificaPerfil.password.$invalid && modificaPerfil.password.$dirty}">
                        <label id="Label3">Contraseña:</label>
                        <input type="password" ng-model="Administrador.password" name="password" id="txtcontraseña"  class="form-control" placeholder="Contraseña:" required disabled>
                        <span ng-if="modificaPerfil.password.$invalid && modificaPerfil.password.$dirty" class="help-block">Este campo es requerido</span>
                        <a href="" id="lbCambiaContraseña" ng-show="!modPassword"   ng-click="confirmaPassword()">Cambiar Contraseña</a>
                    </div>

                    <div id="Confirmacontraseña" class="form-group col-lg-6" ng-show="modPassword" ng-class="{'has-error':modificaPerfil.passwordConfirma.$invalid && modificaPerfil.passwordConfirma.$dirty}">
                        <label id="Label4">Confirme contraseña:</label>
                        <input type="password" ng-model="passwordConfirma" name="passwordConfirma" id="txtconfirmacontraseña"  class="form-control" placeholder="Confirme su contraseña:" required>
                        <span ng-if="modificaPerfil.passwordConfirma.$invalid && modificaPerfil.passwordConfirma.$dirty" class="help-block">Este campo es requerido</span>
                    </div>
                    <div class="form-group col-lg-12">
                        <label id="Label5">Centro de salud</label>
                        <select id="ddlCentroSalud"  class="form-control">
                        </select>
                        <a href="" id="lbCentroSalud">Cambiar mi Centro de Responsabilidad</a>
                    </div>
                    <div class="form-group col-lg-4">
                        <input type="button" id="btnGuardar"  value="Guardar" class="btn btn-primary form-control"/>
                    </div>
                    <div class="form-group col-lg-4">
                        <input type="button" id="btnCancelar"  value="Cancelar" class="btn btn-default form-control" formnovalidate="true"/>
                    </div>
                </div>
            </fieldset>                
            </form>
            <!-- estructura de modal no modificar solo cambiar labels-->
            <div class="modal fade" id="myModal" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div id="upModal"  ChildrenAsTriggers="false" UpdateMode="Conditional">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                    <h4 class="modal-title">
                                        <label id="lblModalTitle"></label></h4>
                                </div>
                                <div class="modal-body">
                                    <label id="lblModalBody"></label>
                                </div>
                                <div class="modal-footer" id="footerModal">
                                    <input type="button" id="btnSeguir"  value="Si" class="btn btn-primary" aria-hidden="true" data-dismiss="modal"/>
                                </div>
                            </div>
                    </div>
                </div>
            </div>            
        </section>
    </body>
</html>
