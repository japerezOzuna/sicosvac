<%-- 
    Document   : ModificarPerfilMenor
    Created on : 9/09/2017, 02:13:26 PM
    Author     : José Antonio Pérez Ozuna
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body><br>
        <section ng-controller="ControladorModificaMenores">
            <div class="panel panel-default">
            <div class="panel-heading">Registro de menores</div>
            <div class="panel-body">            
            <form name="ModificaPerfilMenor">
                <fieldset><legend>Datos generales del menor</legend>
                <div class="form-group col-lg-8">
                    <div class="form-group col-lg-12" ng-class="{'has-error':ModificaPerfilMenor.nombre.$invalid && ModificaPerfilMenor.nombre.$dirty}">
                        <input type="text" ng-model="menor.nombre" name="nombre" id="txtNombres"  class="form-control" placeholder="Nombre(s)" required>
                        <span ng-if="ModificaPerfilMenor.nombre.$invalid && ModificaPerfilMenor.nombre.$dirty" class="help-block">Este campo es requerido</span>
                    </div>
                    <div class="form-group col-lg-12" ng-class="{'has-error':ModificaPerfilMenor.apellidos.$invalid && ModificaPerfilMenor.apellidos.$dirty}">
                        <input type="text" ng-model="menor.apellidos" name="apellidos" id="txtApellidos"  class="form-control" placeholder="Apellidos(s)" required>
                        <span ng-if="ModificaPerfilMenor.apellidos.$invalid && ModificaPerfilMenor.apellidos.$dirty" class="help-block">Este campo es requerido</span>
                    </div>
                    <div class="form-group col-lg-6" ng-class="{'has-error':ModificaPerfilMenor.fechaNac.$invalid && ModificaPerfilMenor.fechaNac.$dirty}">
                        <input type="date" format-date ng-model="menor.fechaNac" name="fechaNac" id="txtFecha"  class="form-control" placeholder="Fecha de nacimiento" required>
                        <span ng-if="ModificaPerfilMenor.fechaNac.$invalid && ModificaPerfilMenor.fechaNac.$dirty" class="help-block">Este campo es requerido</span>
                    </div>
                    <div class="form-group col-lg-6" ng-class="{'has-error':ModificaPerfilMenor.fechaNac.$invalid && ModificaPerfilMenor.fechaNac.$dirty}">
                        <select ng-model="menor.sexo" convert-to-number id="ddlSexo" class="form-control" >
                            <option value="0">--Seleccione un Sexo--</option>
                            <option value="1">Hombre</option>
                            <option value="2">Mujer</option>
                        </select>
                        <span ng-if="ModificaPerfilMenor.sexo.$invalid && ModificaPerfilMenor.sexo.$dirty" class="help-block">Este campo es requerido</span>
                    </div>
                    <div class="form-group col-lg-12" ng-class="{'has-error':ModificaPerfilMenor.curp.$invalid && ModificaPerfilMenor.curp.$dirty}">
                        <input type="text" ng-model="menor.curp" name="curp" id="txtCurp"  class="form-control" placeholder="CLAVE UNICA DE REGISTRO DE POBLACION" pattern="^[a-zA-Z]{4}\d{6}[a-zA-Z]{6}\d{2}$" required>
                        <span ng-if="ModificaPerfilMenor.curp.$invalid && ModificaPerfilMenor.curp.$dirty" class="help-block">Este campo es requerido</span>
                    </div>
                    <div class="form-group col-lg-12">
                        <textarea id="txtObservaciones" ng-model="menor.observaciones" class="form-control" TextMode="multiline" Columns="50" Rows="4"  placeholder="Observaciones" /></textarea>
                    </div>
                </div>
            </fieldset>
                <fieldset><legend>Dirección</legend>
                <div class="form-group col-lg-8">
                    <div class="form-group col-lg-6" ng-class="{'has-error':ModificaPerfilMenor.calle.$invalid && ModificaPerfilMenor.calle.$dirty}">
                        <input type="text" ng-model="menor.calle" name="calle" id="txtCalle"  class="form-control" placeholder="Calle" required>
                        <span ng-if="ModificaPerfilMenor.calle.$invalid && ModificaPerfilMenor.calle.$dirty" class="help-block">Este campo es requerido</span>
                    </div>
                    <div class="form-group col-lg-3" ng-class="{'has-error':ModificaPerfilMenor.numero.$invalid && ModificaPerfilMenor.numero.$dirty}">
                        <input type="text" ng-model="menor.numero" name="numero" id="txtNumero"  class="form-control" placeholder="Numero" required>
                        <span ng-if="ModificaPerfilMenor.numero.$invalid && ModificaPerfilMenor.numero.$dirty" class="help-block">Este campo es requerido</span>
                    </div>
                    <div class="form-group col-lg-3" ng-class="{'has-error':ModificaPerfilMenor.codigoPostal.$invalid && ModificaPerfilMenor.codigoPostal.$dirty}">
                        <input type="number" ng-model="menor.codigoPostal" name="codigoPostal" id="txtCodigoPostal"  class="form-control" placeholder="Codigo Postal" required>
                        <span ng-if="ModificaPerfilMenor.codigoPostal.$invalid && ModificaPerfilMenor.codigoPostal.$dirty" class="help-block">Este campo es requerido</span>
                    </div>
                    <div class="form-group col-lg-4" ng-class="{'has-error':ModificaPerfilMenor.colonia.$invalid && ModificaPerfilMenor.colonia.$dirty}">
                        <input type="text" ng-model="menor.colonia" name="colonia" id="txtColonia"  class="form-control" placeholder="Colonia" required>
                        <span ng-if="ModificaPerfilMenor.colonia.$invalid && ModificaPerfilMenor.colonia.$dirty" class="help-block">Este campo es requerido</span>
                    </div>
                    <div class="form-group col-lg-4" ng-class="{'has-error':ModificaPerfilMenor.municipio.$invalid && ModificaPerfilMenor.municipio.$dirty}">
                        <input type="text" ng-model="menor.municipio" name="municipio" id="txtMunicipio"  class="form-control" placeholder="Municipio" required>
                        <span ng-if="ModificaPerfilMenor.municipio.$invalid && ModificaPerfilMenor.municipio.$dirty" class="help-block">Este campo es requerido</span>
                    </div>
                    <div class="form-group col-lg-4" ng-class="{'has-error':ModificaPerfilMenor.estado.$invalid && ModificaPerfilMenor.estado.$dirty}">
                        <input type="text" ng-model="menor.estado" name="estado" id="txtEstado"  class="form-control" placeholder="Estado" required>
                        <span ng-if="ModificaPerfilMenor.estado.$invalid && ModificaPerfilMenor.estado.$dirty" class="help-block">Este campo es requerido</span>
                    </div>
                </div>
            </fieldset>
                <fieldset id="panel1"  ><legend>Datos de tutor</legend>
                <div class="row col-lg-8">
                    <div class="form-group col-lg-12">
                        <label id="Label2">1.-Introduzca un Curp o un Usuario</label>
                    </div>
                    <div class="form-group col-lg-8">
                        <input type="text" ng-model="tutorBuscado" id="txtBuscaTutor" class="form-control"  placeholder="CURP O USUARIO" />
                    </div>
                    <div class="form-group col-lg-4">
                        <input type="button" ng-click="buscaTutor(tutorBuscado)" id="btnBuscaTutor"  value="Buscar" class="btn btn-primary"/>
                    </div>
                    <div class="form-group col-lg-12">
                        <label id="Label3">2.-Verifique los datos</label>
                    </div>
                    <div class="form-group col-lg-12">
                        <textarea ng-model="datosTutor" id="txtAVerificaTutor" class="form-control" TextMode="multiline" Columns="50" Rows="4"  disabled/></textarea>
                    </div>
                </div>
                <div class="row col-lg-12">  
                    <div class="form-group col-lg-4">
                        <input type="button" ng-click="guardaPerfilMenor()" id="btnGuardaPerfil"  value="Guardar Perfil" class="btn btn-primary form-control"/>
                    </div>
                    <div class="form-group col-lg-4">
                        <input type="button" ng-click="ruta('administracionPerfiles')"  id="btnCancelar"  value="Cancelar" class="btn btn-default form-control" />
                    </div>
                </div>
            </fieldset>
                <fieldset><legend>Historial de vacunación</legend>
                <div class="form-group col-lg-8">
                    <div class="form-group col-lg-6">
                <select id="ddlVacuna" class="form-control"
                        ng-model="vacuna" 
                        ng-options="vacuna as vacuna.nombre for vacuna in vacunas track by vacuna.idVacuna">
                    <option value="">Todas las vacunas</option>
                </select>
                    </div>
                    <div class="form-group col-lg-6">
                        <select id="ddlEstatus"  class="form-control" ng-model="filtroEstatus">
                            <option Value="">Todas las vacunas</option>
                            <option value="Aplicada">Vacunas aplicadas</option>
                            <option Value="Por aplicar">Vacunas por aplicar</option>
                        </select>
                    </div>
                    <div class="form-group col-lg-3">
                        <input type="button" id="btnFiltrar"  ng-click="aplicaFiltro()" class="btn btn-primary form-control" value="Filtrar" formnovalidate="true"/>
                    </div>
                    <div class="form-group col-lg-3">
                        <input type="button" id="btnImprimir" ng-click="generaPDF(menor)" class="btn btn-info form-control" value="Imprimir Historial" formnovalidate="true"/>
                    </div>
                </div>
                <div class="form-group col-lg-8">
                    <!-- <div ui-grid="gridOptions" class="grid" ui-grid-selection></div> -->
                    <table id="gvCartilla" class="table table-responsive table-bordered table-striped table-hover table-condensed small-top-margin">
                        <thead>
                        <tr>
                                <th>Vacuna</th>   
                                <th>Dosis</th>
                                <th>Edad en meses</th>
                                <th>Fecha de aplicación</th>
                                <th>Fecha sugerida</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr ng-repeat="vm in listaVacunasMenores">
                                <td>{{vm.vacuna.nombre}}</td>
                                <td>{{vm.catalogoAplicacion.dosis}}</td>
                                <td>{{vm.catalogoAplicacion.edadMeses}}</td>
                                <td>{{vm.fechaAplicacion | date:'dd/MM/yyyy'}}</td>
                                <td>{{vm.fechaSugerida | date:'dd/MM/yyyy'}}</td>
                                <td><a href="" ng-click="editaVacunaMenor(vm)" data-toggle="tooltip" title="Editar aplicación"><i class="fa fa-pencil-square-o" aria-hidden="true" style="color:orange"></i></a></td>
                            </tr>    
                        </tbody>
                    </table>
                </div>
            </fieldset>
                <fieldset><legend>Modificar aplicación</legend>
                <div class="form-group col-lg-8">
                    <label>Asigne un estatus a esta Vacuna</label><br />
                    <select id="ddlEstatusSelect" ng-model="vacunaMenor.estatus" ng-disabled="!editaVM" class="form-control">
                        <option Value="Aplicada">Aplicada</option>
                        <option Value="Por aplicar">Por aplicar</option>
                    </select>
                </div>
                <div class="form-group col-lg-8">
                    <input type="date" format-date ng-model="vacunaMenor.fechaAplicacion" ng-disabled="!editaVM" id="txtFechaApl"  class="form-control" placeholder="Fecha de aplicacion">
                </div>
                <div class="form-group col-lg-8">
                    <input type="text" ng-model="vacunaMenor.lugarAplicacion" ng-disabled="!editaVM" id="txtLugarAplicacion"  class="form-control" placeholder="Lugar de Aplicacion">
                </div>
                <div class="form-group col-lg-8">
                    <input type="text" ng-model="vacunaMenor.nombreAplicador" ng-disabled="!editaVM" id="txtNombreAplicador"  class="form-control" placeholder="Nombre del Aplicador">
                </div>
                <div class="form-group col-lg-8">
                    <input type="text" ng-model="vacunaMenor.nombreFamiliar" ng-disabled="!editaVM" id="txtNombreFamiliar"  class="form-control" placeholder="¿Quien Acompaño al menor">
                </div>
                <div class="form-group col-lg-8">
                    <input type="text" ng-model="vacunaMenor.parentesco" ng-disabled="!editaVM" id="txtParentesco"  class="form-control" placeholder="Parentesco">
                </div>
                <div class="row col-lg-12">
                    <div class="form-group col-lg-4">
                        <input type="button" ng-click="confirmaActualizacionVM()" ng-disabled="!editaVM" id="btnGuardarAplicacion"  value="Guardar Datos de aplicación" class="btn btn-primary form-control"/>
                    </div>
                </div>
            </fieldset>
            </form>
            </div>
            </div>

            <!-- modal de impresion de cartilla-->
            <div class="modal fade" id="modalImprimeHistorial" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg"  role="document">
                    <div id="upModalX">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                    <h4 class="modal-title">
                                        <label id="lblModalTitleX"></label></h4>
                                </div>
                                    <div class="modal-body">
                                        <div class="form-group col-lg-12">
                                            <div class="form-group col-lg-6">
                                                <img src="https://image.ibb.co/cyEkJw/translogover.png" width="200" height="46" border="0" />
                                            </div>
                                        </div>
                                        <br>                                        
                                        <center><h2>HISTORIAL DE VACUNACIÓN</h2></center>
                                        <br>
                                        
                                        <div class="form-group col-lg-12">
                                            <div class="form-group col-lg-6">
                                                <label>DATOS GENERALES DEL MENOR</label><br><br>
                                                <label>CURP:</label> {{menor.curp}}<br>
                                                <label>Nombre:</label> {{menor.nombre+' '+menor.apellidos}}<br>
                                                <label>Fecha de nacimiento:</label>{{menor.fechaNac|date:'dd-MM-yyyy'}}<br>
                                                <div ng-show="menor.sexo===1" ><label>Sexo:&nbsp;</label>MASCULINO</div>
                                                <div ng-show="menor.sexo===2"><label>Sexo:&nbsp;</label>FEMENINO</div>
                                            </div>
                                            <div class="form-group col-lg-6">
                                                <label id="Label3">DATOS DEL TUTOR</label><br><br>
                                                <label>CURP:</label> {{tutorAGuardar.curp}}<br>
                                                <label>Nombre:</label> {{tutorAGuardar.nombre+' '+tutorAGuardar.apellidos}}<br>
                                                <label>Dirección:</label> {{tutorAGuardar.calle+' '+tutorAGuardar.numero}}<br>
                                                <label>Colonia:</label> {{tutorAGuardar.colonia}}<br>
                                                <label>Municipio:</label> {{tutorAGuardar.municipio+', '+tutorAGuardar.estado}}<br>
                                            </div>                                     
                                        </div>
                                        <label>VACUNAS APLICADAS Y POR APLICAR</label>
                                        
                                            <div id="historial">
                                        <table id="gvCartillaModal" class="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th>Vacuna</th>   
                                                    <th>Dosis</th>
                                                    <th>Edad (meses)</th>
                                                    <th>Fecha de aplicación</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr ng-repeat="vm in listaVacunasMenores">
                                                    <td>{{vm.vacuna.nombre}}</td>
                                                    <td>{{vm.catalogoAplicacion.dosis}}</td>
                                                    <td>{{vm.catalogoAplicacion.edadMeses}}</td>
                                                    <td>{{vm.fechaAplicacion | date:'dd/MM/yyyy'}}</td>
                                                </tr>    
                                            </tbody>
                                        </table>
                                    </div>
                                    </div>
                                <div class="modal-footer" id="footerModal">
                                    <input type="button" id="btnModifica"  ng-click="generaPDF(menor)" value="Genera PDF" class="btn btn-info" aria-hidden="true" data-dismiss="modal" />
                                </div>
                            </div>
                    </div>
                </div>
            </div>             
            
            
            <!-- modal de confirmación genérico-->
            <div class="modal fade" id="myModalGen" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div id="upModalGen">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                    <h4 class="modal-title">
                                        <label id="lblModalTitleGen"></label></h4>
                                </div>
                                    <div class="modal-body">
                                        <label id="lblModalBodyGen"></label>
                                    </div>
                                <div class="modal-footer" id="footerModal">
                                    <input type="button" id="btnModifica"  value="Cerrar" class="btn btn-info" aria-hidden="true" data-dismiss="modal" />
                                </div>
                            </div>
                    </div>
                </div>
            </div>            
            <!-- Modal confirma modificacion -->
            <div class="modal fade" id="modalConfirmaEstatus" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div id="upModal">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                    <h4 class="modal-title">
                                        <span id="lblModalTitle"></span>
                                    </h4>
                                </div>
                                <div class="modal-body">
                                        <span id="lblModalBody"></span>
                                </div>
                                <div class="modal-footer" id="footerModal">
                                    <button type="button" id="btnEliminar" class="btn btn-primary" ng-click="guardaVacunaMenor('Por aplicar')">Sí</button>
                                    <button type="button" class="btn btn-default" aria-hidden="true" data-dismiss="modal">No</button>
                                </div>
                            </div>
                    </div>
                </div>
            </div>            
        </section>
    </body>
</html>

