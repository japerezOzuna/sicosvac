<%-- 
    Document   : RegistroUsuarios
    Created on : 17/09/2017, 09:33:08 PM
    Author     : José Antonio Pérez Ozuna
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Registro de usuarios</title>
    </head>
    <body>
        <section>
            <form name="registroUsuario">
                <fieldset><legend>Pre-registro de Personal de centros de salud</legend>
                <div class="form-group col-lg-12">
                    <label id="Label1"  Font-Bold="true" Font-Size="Smaller">Introduzca los siguientes campos para poder registrar su cuenta. Una vez que estos datos sean
                        validados por el administrador, se le enviara un codigo de verificacion para activar su cuenta y pueda iniciar. sesión</label>
                </div>
                <div class="row col-lg-6">
                    <div class="form-group col-lg-12" ng-class="{'has-error':registroUsuario.nombre.$invalid && registroUsuario.nombre.$dirty}">
                        <input type="text" ng-model="Administrador.nombre" name="nombre" id="txtNombre"  class="form-control" placeholder="Nombre(s):" required>
                        <span ng-if="registroUsuario.nombre.$invalid && registroUsuario.nombre.$dirty" class="help-block">Este campo es requerido</span>
                    </div>

                    <div class="form-group col-lg-12" ng-class="{'has-error':registroUsuario.apellidos.$invalid && registroUsuario.apellidos.$dirty}">
                        <input type="text" ng-model="Administrador.apellidos" name="apellidos" id="txtApellidos"  class="form-control" placeholder="Apellidos(s):" required>
                        <span ng-if="registroUsuario.apellidos.$invalid && registroUsuario.apellidos.$dirty" class="help-block">Este campo es requerido</span>
                    </div>

                    <div class="form-group col-lg-12" ng-class="{'has-error':registroUsuario.centro.$invalid && registroUsuario.centro.$dirty}">
                        <label id="lblCombobox"  Font-Bold="True" value="Seleccione su Centro de Responsabilidad"></label>
                        <br />
                        <select ng-model="Administrador.centro" name="centro" id="ddlCentroSalud" class="form-group">
                            <option>-Seleccione el Centro de Responsabilidad</option>
                        </select>
                        <span ng-if="registroUsuario.centro.$invalid && registroUsuario.centro.$dirty" class="help-block">Este campo es requerido</span>
                    </div>

                    <div class="form-group col-lg-12">
                        <label id="lblverifique"  Font-Bold="True">Verifique los datos</label>
                        <textarea id="txtAVerifique" class="form-control" TextMode="multiline" Columns="50" Rows="4"  disabled></textarea>
                    </div>
                </div>
            </fieldset>
                <fieldset id="Panel2"><legend>Datos para Inicio de sesión</legend>
                <div class="row col-lg-6">
                    <div class="form-group col-lg-12">
                        <label id="lblnota"  Font-Bold="False" Font-Size="Smaller" ForeColor="Red">Nota: Este correo le servira para iniciar sesión y recuperar su contraseña en caso de olvidarla,
                            asegurese de que sea un correo vigente</label>
                    </div>

                    <div class="form-group col-lg-12" ng-class="{'has-error':registroUsuario.usuario.$invalid && registroUsuario.usuario.$dirty}">
                        <input type="email" ng-model="Administrador.usuario" name="usuario" id="txtcorreo"  class="form-control" placeholder="Correo Electronico:" required>
                        <span ng-if="registroUsuario.usuario.$invalid && registroUsuario.usuario.$dirty" class="help-block">Este campo es requerido</span>
                    </div>

                    <div class="form-group col-lg-12" ng-class="{'has-error':registroUsuario.usuarioConfirma.$invalid && registroUsuario.usuarioConfirma.$dirty}">
                        <input type="email" ng-model="usuarioConfirma" name="usuarioConfirma" id="txtConfirmaCorreo"  class="form-control" placeholder="Confirme su correo:" required>
                        <span ng-if="registroUsuario.usuarioConfirma.$invalid && registroUsuario.usuarioConfirma.$dirty" class="help-block">Este campo es requerido</span>
                    </div>

                    <div class="form-group col-lg-12" ng-class="{'has-error':registroUsuario.password.$invalid && registroUsuario.password.$dirty}">
                        <input type="password" ng-model="Administrador.password" name="password" id="txtcontraseña"  class="form-control" placeholder="Contraseña:" required>
                        <span ng-if="registroUsuario.password.$invalid && registroUsuario.password.$dirty" class="help-block">Este campo es requerido</span>
                    </div>

                    <div class="form-group col-lg-12" ng-class="{'has-error':registroUsuario.passwordConfirma.$invalid && registroUsuario.passwordConfirma.$dirty}">
                        <input type="password" ng-model="passwordConfirma" name="passwordConfirma" id="txtconfirmacontraseña"  class="form-control" placeholder="Confirme su contraseña:" required>
                        <span ng-if="registroUsuario.passwordConfirma.$invalid && registroUsuario.passwordConfirma.$dirty" class="help-block">Este campo es requerido</span>
                        <br />
                    </div>

                    <br />
                    <div class="form-group col-lg-5">
                        <input type="button" id="btnRegistra"  value="Registrarse" class="btn btn-primary form-control"/>
                    </div>

                    <div class="form-group col-lg-5">
                        <input type="button" id="btnCancelar"  value="Cancelar" class="btn btn-default form-control" formnovalidate="true"/>
                    </div>
                </div>
            </fieldset>
            </form>
            <!-- estructura de modal no modificar solo cambiar labels-->
            <div class="modal fade" id="myModal" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-sm">
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
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </body>
</html>
