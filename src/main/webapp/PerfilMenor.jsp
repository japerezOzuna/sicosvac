<%-- 
    Document   : PerfilMenor
    Created on : 9/09/2017, 02:13:26 PM
    Author     : José Antonio Pérez Ozuna
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Registro de menores</title>
    </head>
    <body>
        <section ng-controller="ControladorMenores">
            <form name="altaMenor" id="altaMenor">
                <fieldset><legend>Datos generales del menor</legend>
                <div class="form-group col-lg-8">
                    <div class="form-group col-lg-12" ng-class="{'has-error':altaMenor.nombre.$invalid && altaMenor.nombre.$dirty}">
                        <input type="text" ng-model="menor.nombre" name="nombre" id="txtNombres"  class="form-control" placeholder="Nombre(s)" required>
                        <span ng-if="altaMenor.nombre.$invalid && altaMenor.nombre.$dirty" class="help-block">Este campo es requerido</span>
                    </div>
                    <div class="form-group col-lg-12" ng-class="{'has-error':altaMenor.apellidos.$invalid && altaMenor.apellidos.$dirty}">
                        <input type="text" ng-model="menor.apellidos" id="txtApellidos" name="apellidos" class="form-control" placeholder="Apellidos(s)" required>
                        <span ng-if="altaMenor.apellidos.$invalid && altaMenor.apellidos.$dirty" class="help-block">Este campo es requerido</span>
                    </div>
                    <div class="form-group col-lg-6" ng-class="{'has-error':altaMenor.fechanac.$invalid && altaMenor.fechanac.$dirty}">
                        <input type="date" ng-model="menor.fechaNac" id="txtFecha" name="fechanac"  class="form-control" placeholder="Fecha de nacimiento" required>
                        <span ng-if="altaMenor.fechanac.$invalid && altaMenor.fechanac.$dirty" class="help-block">Este campo es requerido</span>
                    </div>
                    <div class="form-group col-lg-6" ng-class="{'has-error':altaMenor.sexo.$invalid && altaMenor.sexo.$dirty}">
                        <select ng-model="menor.sexo" id="ddlSexo" name="sexo" class="form-control" >
                            <option>--Seleccione un Sexo--</option>
                            <option value="1">Hombre</option>
                            <option value="2">Mujer</option>
                        </select>
                        <span ng-if="altaMenor.sexo.$invalid && altaMenor.sexo.$dirty" class="help-block">Este campo es requerido</span>
                    </div>
                    <div class="form-group col-lg-12" ng-class="{'has-error':altaMenor.curp.$invalid && altaMenor.curp.$dirty}">
                        <input type="text" ng-model="menor.curp" id="txtCurp" name="curp" class="form-control" placeholder="CLAVE UNICA DE REGISTRO DE POBLACION" pattern="^[a-zA-Z]{4}\d{6}[a-zA-Z]{6}\d{2}$" Style="text-transform: uppercase" required>
                        <span ng-if="altaMenor.curp.$invalid && altaMenor.curp.$dirty" class="help-block">Este campo es requerido</span>
                    </div>
                    <div class="form-group col-lg-12">
                        <textarea ng-model="menor.observaciones" id="txtObservaciones" name="observaciones" class="form-control" TextMode="multiline" Columns="50" Rows="4"  placeholder="Observaciones" /></textarea>
                    </div>
                </div>
            </fieldset>
                <fieldset><legend>Direccion</legend>
                <div class="form-group col-lg-8">
                    <div class="form-group col-lg-6" ng-class="{'has-error':altaMenor.calle.$invalid && altaMenor.calle.$dirty}">
                        <input type="text" ng-model="menor.calle" id="txtCalle" name="calle" class="form-control" placeholder="Calle" required>
                        <span ng-if="altaMenor.calle.$invalid && altaMenor.calle.$dirty" class="help-block">Este campo es requerido</span>
                    </div>
                    <div class="form-group col-lg-3"  ng-class="{'has-error':altaMenor.numero.$invalid && altaMenor.numero.$dirty}">
                        <input type="text" ng-model="menor.numero" id="txtNumero" name="numero" class="form-control" placeholder="Numero" required>
                        <span ng-if="altaMenor.numero.$invalid && altaMenor.numero.$dirty" class="help-block">Este campo es requerido</span>
                    </div>
                    <div class="form-group col-lg-3" ng-class="{'has-error':altaMenor.cp.$invalid && altaMenor.cp.$dirty}">
                        <input type="number" ng-model="menor.codigoPostal" name="cp" id="txtCodigoPostal"  class="form-control" placeholder="Codigo Postal" required>
                        <span ng-if="altaMenor.cp.$invalid && altaMenor.cp.$dirty" class="help-block">Este campo es requerido</span>
                    </div>
                    <div class="form-group col-lg-4" ng-class="{'has-error':altaMenor.colonia.$invalid && altaMenor.colonia.$dirty}">
                        <input type="text" ng-model="menor.colonia" name="colonia" id="txtColonia"  class="form-control" placeholder="Colonia" required>
                        <span ng-if="altaMenor.colonia.$invalid && altaMenor.colonia.$dirty" class="help-block">Este campo es requerido</span>
                    </div>
                    <div class="form-group col-lg-4" ng-class="{'has-error':altaMenor.municipio.$invalid && altaMenor.municipio.$dirty}">
                        <input type="text" ng-model="menor.municipio" name="municipio" id="txtMunicipio"  class="form-control" placeholder="Municipio" required>
                        <span ng-if="altaMenor.municipio.$invalid && altaMenor.municipio.$dirty" class="help-block">Este campo es requerido</span>
                    </div>
                    <div class="form-group col-lg-4" ng-class="{'has-error':altaMenor.estado.$invalid && altaMenor.estado.$dirty}">
                        <input type="text" ng-model="menor.estado" name="estado" id="txtEstado"  class="form-control" placeholder="Estado" required>
                        <span ng-if="altaMenor.estado.$invalid && altaMenor.estado.$dirty" class="help-block">Este campo es requerido</span>
                    </div>
                </div>
            </fieldset>
                <fieldset id="panel1"  ><legend>Datos de tutor</legend>
                <div class="row col-lg-8">
                    <div class="form-group col-lg-12">
                        <label id="Label2">1.-Introduzca un Curp o un Usuario</label>
                    </div>
                    <div class="form-group col-lg-8">
                        <input type="text" ng-model="tutorBuscado" id="txtBuscaTutor" class="form-control"  placeholder="CURP" Style="text-transform: uppercase" />
                    </div>
                    <div class="form-group col-lg-4">
                        <input type="button" ng-click="buscaTutor(tutorBuscado)" id="btnBuscaTutor"  value="Buscar" class="btn btn-primary"/>
                    </div>
                    <div class="form-group col-lg-12">
                        <label id="Label3">2.-Verifique los datos</label>
                    </div>
                    <div class="form-group col-lg-12">
                        <textarea ng-model="datosTutor" id="txtAVerificaTutor" class="form-control" TextMode="multiline" Columns="50" Rows="4"  disabled required/></textarea>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="form-group col-lg-5">
                        <input type="submit" ng-click="guardaPerfilMenor()" ng-disabled="altaMenor.$invalid" id="btnGuardaPerfil"  value="Guardar Perfil" class="btn btn-primary form-control"/>
                    </div>
                    <div class="form-group col-lg-5">
                        <input type="button" OnClick="location.href ='AdministracionPerfiles.jsp'"  id="btnCancelar"  value="Cancelar" class="btn btn-default form-control" />
                    </div>
                </div>
            </fieldset>
            </form>
            <!-- modal de confirmacion o error-->
            <div class="modal fade" id="modalConfirmaAltaPerfilMenor" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-sm">
                    <div id="upModal"  ChildrenAsTriggers="false" UpdateMode="Conditional">
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
                                        <input type="button" ng-click="location.href ='AdministracionPerfiles.jsp'" id="btnCerrar"  value="Cerrar" class="btn btn-primary" aria-hidden="true" data-dismiss="modal" />
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    </body>
</html>
