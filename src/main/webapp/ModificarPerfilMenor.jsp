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
    <body>
        <section>
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
                        <input type="date" ng-model="menor.fechaNac" name="fechaNac" id="txtFecha"  class="form-control" placeholder="Fecha de nacimiento" required>
                        <span ng-if="ModificaPerfilMenor.fechaNac.$invalid && ModificaPerfilMenor.fechaNac.$dirty" class="help-block">Este campo es requerido</span>
                    </div>
                    <div class="form-group col-lg-6" ng-class="{'has-error':ModificaPerfilMenor.fechaNac.$invalid && ModificaPerfilMenor.fechaNac.$dirty}">
                        <select ng-model="menor.sexo" id="ddlSexo" class="form-control" >
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
                        <textarea id="txtObservaciones" class="form-control" TextMode="multiline" Columns="50" Rows="4"  placeholder="Observaciones" /></textarea>
                    </div>
                </div>
            </fieldset>
                <fieldset><legend>Direccion</legend>
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
                        <input type="text" ng-model="colonia" name="colonia" id="txtColonia"  class="form-control" placeholder="Colonia" required>
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
                <div class="form-group col-lg-8">
                    <div class="form-group col-lg-4">
                        <input type="button" id="btnGuardaPerfil"  value="Guardar Perfil" class="btn btn-primary"/>
                    </div>
                    <div class="form-group col-lg-4">
                        <input type="button" OnClick=""  id="btnCancelar"  value="Cancelar" class="btn btn-default" />
                    </div>
                </div>
            </fieldset>
                <fieldset><legend>Historial de vacunacion</legend>
                <div class="form-group col-lg-8">
                    <div class="form-group col-lg-6">
                        <select id="ddlVacunas"  class="form-control">
                        </select>
                    </div>
                    <div class="form-group col-lg-6">
                        <select id="ddlEstatus"  class="form-control">
                            <option Value="">Todas las vacunas</option>
                            <option Value="Aplicada">Vacunas Aplicadas</option>
                            <option Value="Por Aplicar">Vacunas por Aplicar</option>
                        </select>
                    </div>
                    <div class="form-group col-lg-3">
                        <input type="button" id="btnFiltrar"  class="btn btn-primary form-control" value="Filtrar" formnovalidate="true"/>
                    </div>
                    <div class="form-group col-lg-3">
                        <input type="button" id="btnImprimir"  class="btn btn-default form-control" value="Imprimir Historial" formnovalidate="true"/>
                    </div>
                </div>
                <div class="form-group col-lg-8">
                    <table id="gvCartilla"  AutoGenerateColumns="False" class="table table-striped table-hover table-condensed small-top-margin" GridLines="None" HorizontalAlign="Center" DataKeyNames="id_vacunas_menor" OnSelectedIndexChanged="gvCartilla_SelectedIndexChanged">
                        <Columns>
                            <asp:BoundField DataField="Vacuna" HeaderText="Vacuna" />
                            <asp:BoundField DataField="dosis" HeaderText="Dosis" />
                            <asp:BoundField DataField="edad_meses" HeaderText="Edad en meses" />
                            <asp:BoundField DataField="fecha_aplicacion" HeaderText="Fecha de Aplicacion" />
                            <asp:BoundField DataField="fecha_sugerida" HeaderText="Fecha sugerida" />
                            <asp:CommandField ShowSelectButton="True" ButtonType="Image" SelectImageUrl="~/image/editar.png" HeaderText="Editar" />
                        </Columns>
                    </table>
                </div>
            </fieldset>
                <fieldset><legend>Modificar Aplicacion</legend>
                <div class="form-group col-lg-8">
                    <label>Asigne un estatus a esta Vacuna</label><br />
                    <select id="ddlEstatusSelect"  class="form-control">
                        <option Value="Aplicada">Aplicada</option>
                        <option Value="Por Aplicar">Por Aplicar</option>
                    </select>
                </div>
                <div class="form-group col-lg-8">
                    <input type="date" id="txtFechaApl"  class="form-control" placeholder="Fecha de aplicacion">
                </div>
                <div class="form-group col-lg-8">
                    <input type="text" id="txtLugarAplicacion"  class="form-control" placeholder="Lugar de Aplicacion">
                </div>
                <div class="form-group col-lg-8">
                    <input type="text" id="txtNombreAplicador"  class="form-control" placeholder="Nombre del Aplicador">
                </div>
                <div class="form-group col-lg-8">
                    <input type="text" id="txtNombreFamiliar"  class="form-control" placeholder="¿Quien Acompaño al menor">
                </div>
                <div class="form-group col-lg-8">
                    <input type="text" id="txtParentesco"  class="form-control" placeholder="Parentesco">
                </div>
                <div class="form-group col-lg-12">
                    <div class="form-group col-lg-4">
                        <input type="button" id="btnGuardarAplicacion"  value="Guardar Datos de aplicación" class="btn btn-primary form-control"/>
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
                                    <input type="button" id="btnModifica"  value="Si" class="btn btn-primary" aria-hidden="true" data-dismiss="modal" />
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    </body>
</html>