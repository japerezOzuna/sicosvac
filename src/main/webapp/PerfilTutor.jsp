<%-- 
    Document   : Perfiltutor
    Created on : 5/09/2017, 09:54:30 PM
    Author     : José Antonio Pérez Ozuna
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Registro de tutores</title>
    </head>
    <body><br>
        <section ng-controller="ControladorTutores">
            <div class="panel panel-default">
            <div class="panel-heading">Registro de tutores</div>
            <div class="panel-body">
            <form name="altaTutor" id="altaTutor">
            <fieldset><legend>Datos generales del tutor</legend>
                <div class="form-group col-lg-8">
                    <div class="form-group col-lg-12" ng-class="{'has-error':altaTutor.nombre.$invalid && altaTutor.nombre.$dirty}">
                        <input type="text" ng-model="tutor.nombre"  name="nombre" id="txtNombres"  class="form-control" placeholder="Nombre(s)" required>
                        <span ng-if="altaTutor.nombre.$invalid && altaTutor.nombre.$dirty" class="help-block">Este campo es requerido</span>
                    </div>                    
                    <div class="form-group col-lg-12" ng-class="{'has-error':altaTutor.apellidos.$invalid && altaTutor.apellidos.$dirty}">
                        <input type="text" ng-model="tutor.apellidos" name="apellidos" id="txtApellidos"  class="form-control" placeholder="Apellidos(s)" required>
                        <span ng-if="altaTutor.apellidos.$invalid && altaTutor.apellidos.$dirty" class="help-block">Este campo es requerido</span>
                    </div>
                    <div class="form-group col-lg-6" ng-class="{'has-error':altaTutor.fechanac.$invalid && altaTutor.fechanac.$dirty}">
                        <input type="date" format-date ng-model="tutor.fechaNac" name="fechanac" id="txtFecha"  class="form-control" placeholder="Fecha de nacimiento" required >
                        <span ng-if="altaTutor.fechanac.$invalid && altaTutor.fechanac.$dirty" class="help-block">Este campo es requerido</span>
                    </div>
                    <div class="form-group col-lg-6" ng-class="{'has-error':altaTutor.sexo.$invalid && altaTutor.sexo.$dirty}">
                        <select ng-model="tutor.sexo" name="sexo" id="ddlSexo" class="form-control" required >
                            <option>--Seleccione un Sexo--</option>
                            <option value="1">Hombre</option>
                            <option value="2">Mujer</option>
                        </select>
                    </div>
                    <div class="form-group col-lg-12" ng-class="{'has-error':altaTutor.curp.$invalid && altaTutor.curp.$dirty}">
                        <input type="text" ng-model="tutor.curp" name="curp" id="txtCurp"  class="form-control" placeholder="CLAVE UNICA DE REGISTRO DE POBLACION" pattern="^[a-zA-Z]{4}\d{6}[a-zA-Z]{6}\d{2}$" required>
                        <span ng-if="altaTutor.curp.$invalid && altaTutor.curp.$dirty" class="help-block">Este campo es requerido</span>
                    </div>
                </div>
            </fieldset>
            <fieldset><legend>Dirección</legend>
                <div class="form-group col-lg-8" >
                    <div class="form-group col-lg-6" ng-class="{'has-error':altaTutor.calle.$invalid && altaTutor.calle.$dirty}">
                        <input type="text" ng-model="tutor.calle" name="calle" id="txtCalle"  class="form-control" placeholder="Calle" required>
                        <span ng-if="altaTutor.calle.$invalid && altaTutor.calle.$dirty" class="help-block">Este campo es requerido</span>
                    </div>
                    <div class="form-group col-lg-3" ng-class="{'has-error':altaTutor.numero.$invalid && altaTutor.numero.$dirty}">
                        <input type="text" ng-model="tutor.numero" name="numero" id="txtNumero"  class="form-control" placeholder="Numero" required>
                        <span ng-if="altaTutor.numero.$invalid && altaTutor.numero.$dirty" class="help-block">Este campo es requerido</span>
                    </div>
                    <div class="form-group col-lg-3" ng-class="{'has-error':altaTutor.cp.$invalid && altaTutor.cp.$dirty}">
                        <input type="number" ng-model="tutor.codigoPostal" name="cp" id="txtCodigoPostal"  class="form-control" placeholder="Codigo Postal" required>
                        <span ng-if="altaTutor.cp.$invalid && altaTutor.cp.$dirty" class="help-block">Este campo es requerido</span>
                    </div>
                    <div class="form-group col-lg-4" ng-class="{'has-error':altaTutor.colonia.$invalid && altaTutor.colonia.$dirty}">
                        <input type="text" ng-model="tutor.colonia" name="colonia" id="txtColonia"  class="form-control" placeholder="Colonia" required>
                        <span ng-if="altaTutor.colonia.$invalid && altaTutor.colonia.$dirty" class="help-block">Este campo es requerido</span>
                    </div>
                    <div class="form-group col-lg-4" ng-class="{'has-error':altaTutor.municipio.$invalid && altaTutor.municipio.$dirty}">
                        <input type="text" ng-model="tutor.municipio" name="municipio" id="txtMunicipio"  class="form-control" placeholder="Municipio" required>
                        <span ng-if="altaTutor.municipio.$invalid && altaTutor.municipio.$dirty" class="help-block">Este campo es requerido</span>
                    </div>
                    <div class="form-group col-lg-4" ng-class="{'has-error':altaTutor.estado.$invalid && altaTutor.estado.$dirty}">
                        <input type="text" ng-model="tutor.estado" name="estado" id="txtEstado"  class="form-control" placeholder="Estado" required>
                        <span ng-if="altaTutor.estado.$invalid && altaTutor.estado.$dirty" class="help-block">Este campo es requerido</span>
                    </div>
                </div>
            </fieldset>
            <fieldset><legend>Datos de inicio de sesión</legend>
                <div class="form-group col-lg-8">
                    <div class="form-group col-lg-6" ng-class="{'has-error':altaTutor.email.$invalid && altaTutor.email.$dirty}">
                        <input type="email" ng-model="tutor.usuario" name="email" id="txtEmail"  class="form-control" placeholder="Correo electrónico" required>
                        <span ng-if="altaTutor.email.$invalid && altaTutor.email.$dirty" class="help-block">Este campo es requerido</span>
                    </div>
                    <div class="form-group col-lg-6" ng-class="{'has-error':altaTutor.email2.$invalid && altaTutor.email2.$dirty}">
                        <input type="email" ng-model="usuarioConfirma" name="email2" id="txtConfirmeEmail"  class="form-control" placeholder="Confirme correo electrónico" required>
                        <span ng-if="altaTutor.email2.$invalid && altaTutor.email2.$dirty" class="help-block">Este campo es requerido</span>
                    </div>
                    <div class="form-group col-lg-12">
                        <!--<a href="" id="lbModificaCorreo"  OnClick="" Visible="False">Modificar Correo</a>-->
                    </div>
                    <div class="form-group col-lg-6" ng-class="{'has-error':altaTutor.password.$invalid && altaTutor.password.$dirty}">
                        <input type="password" ng-model="tutor.password" name="password" id="txtContraseña"  class="form-control" placeholder="Contraseña" required>
                        <span ng-if="altaTutor.password.$invalid && altaTutor.password.$dirty" class="help-block">Este campo es requerido</span>
                    </div>
                    <div class="form-group col-lg-6" ng-class="{'has-error':altaTutor.password2.$invalid && altaTutor.password2.$dirty}">
                        <input type="password" ng-model="passwordConfirma" name="password2" id="txtConfirmaContraseña"  class="form-control" placeholder="Confirme Contraseña" required>
                        <span ng-if="altaTutor.password2.$invalid && altaTutor.password2.$dirty" class="help-block">Este campo es requerido</span>
                    </div>                  
                    <div class="row col-lg-8">
                        <div class="form-group col-lg-5">
                            <input type="submit" ng-click="confirmaAltaPerfilTutor()" ng-disabled="altaTutor.$invalid" id="btnConfirmaAltaPerfiltutor" value="Guardar perfil" class="btn btn-primary form-control" />
                        </div>
                        <div class="form-group col-lg-5">
                            <input type="button" ng-click="ruta('/administracionPerfiles')" id="btnCancelarAltaPerfiltutor" value="Cancelar" class="btn btn-default form-control"/>
                        </div>
                    </div>
                </div>                      
                </div>
            </div>
            </fieldset>
            </form>            
            <!-- modal de confirmacion o error-->
            <div class="modal fade" id="modalConfirmacionError" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
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
                                    <input type="button" ng-click="ruta('/administracionPerfiles')" id="btnCerrar"  value="Cerrar" class="btn btn-info" aria-hidden="true" data-dismiss="modal" />
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    </body>
</html>
