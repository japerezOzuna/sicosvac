<%-- 
    Document   : AdministracionPersonal
    Created on : 17/09/2017, 07:48:22 PM
    Author     : José Antonio Pérez Ozuna
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Administración de cuentas de usuario</title>
    </head>
    <body>
        <section>
            <form name="administraUsuario">              
                <fieldset id="pnlActivaciondecuentas"><legend>Administracion de cuentas</legend>                
                <div class="form-group col-lg-12">
                    <label id="lblActivacion">Seleccione la Jurisdicción Sanitaria</label>
                </div>                      
                <div class="form-group col-lg-8">
                    <div class="row col-lg-6">
                        <select id="ddlJurisdiccion" class="form-control"
                                        ng-model="jurisdiccion"
                                        ng-options="jurisdiccion as jurisdiccion.nombreJurisdiccion for jurisdiccion in listaJurisdicciones track by jurisdiccion.idJurisdiccion"
                                        ng-change="llenaListaCentros(jurisdiccion)">
                                    <option>-Seleccione la Jurisdicción Sanitaria</option>
                        </select>
                    </div>
                </div>
                <div class="form-group col-lg-12">
                    <label id="lblActivacion">Seleccione un Centro de Responsabilidad para ver las solicitudes de Activacion</label>
                </div>
                <div class="form-group col-lg-8">
                    <div class="form-group col-lg-6">
                            <select id="ddlCentroSalud" class="form-control"
                                    ng-model="centro"
                                    ng-options="centro as centro.nombreCentro for centro in listaCentros track by centro.idCentro"
                                    ng-change="">
                                <option>-Seleccione el Centro de Responsabilidad</option>
                            </select>
                    </div>
                    <div class="form-group col-lg-6">
                        <select id="ddlEstatus"  class="form-control">
                            <option Value="2">--Todos los Estatus--</option>
                            <option Value="1">Cuentas Activadas</option>
                            <option Value="0">Cuentas No Activadas</option>
                        </select>
                    </div>
                    <div class="form-group col-lg-3">
                        <input type="button" id="btnFiltrar"  class="btn btn-primary form-control" value="Filtrar" formnovalidate="true"/>
                    </div>
                </div>
                <div class="form-group col-lg-8">
                    <table id="gvPersonal" class="table table-striped table-hover table-condensed small-top-margin">
                        <tr>
                        <!--<asp:BoundField DataField="nombre" Headervalue="Nombre" />
                            <asp:BoundField DataField="apellidos" Headervalue="Apellidos" />
                            <asp:BoundField DataField="usuario" Headervalue="Usuario" />
                            <asp:CommandField ShowSelectButton="True" ButtonType="Image" SelectImageUrl="~/image/editar.png" />
                        -->
                        </tr>
                    </table>
                </div>
            </fieldset>
                <fieldset id="pnlDatos"><legend>Datos de la cuenta</legend>
                <div class="form-group col-lg-8" ng-class="{'has-error':administraUsuario.nombre.$invalid && administraUsuario.nombre.$dirty}">
                    <input type="text" name="nombre" id="txtNombre"  class="form-control" placeholder="Nombre(s):" required>
                    <span ng-if="administraUsuario.nombre.$invalid && administraUsuario.nombre.$dirty" class="help-block">Este campo es requerido</span>
                </div>
                <div class="form-group col-lg-8" ng-class="{'has-error':administraUsuario.apellidos.$invalid && administraUsuario.apellidos.$dirty}">
                    <input type="text" name="apellidos" id="txtApellidos"  class="form-control" placeholder="Apellido(s):" required>
                    <span ng-if="administraUsuario.apellidos.$invalid && administraUsuario.apellidos.$dirty" class="help-block">Este campo es requerido</span>
                </div>
                <div class="form-group col-lg-8" ng-class="{'has-error':administraUsuario.usuario.$invalid && administraUsuario.usuario.$dirty}">
                    <input type="email" name="usuario" id="txtcorreo"  class="form-control" placeholder="Usuario:" required>
                    <span ng-if="administraUsuario.usuario.$invalid && administraUsuario.usuario.$dirty" class="help-block">Este campo es requerido</span>
                </div>
                <div class="form-group col-lg-8">
                    <label id="Label1">Asigne un rol a este usuario</label><br />
                    <select id="ddlrol"  class="form-control"
                            ng-model="rol"
                            ng-options="rol as rol.descripcion for rol in listaRoles track by rol.idRol"
                            ng-change="">
                        <option>-Seleccione el para de usuario</option>
                    </select>
                </div>
                <div class="form-group col-lg-8">
                    <label id="lblestatus">Asigne un estatus a la cuenta ya sea Activada o Desactivada</label><br />
                    <select id="ddlEstatusSelect"  class="form-control">
                        <option Value="0">Desactivada</option>
                        <option Value="1">Activada</option>
                    </select>
                </div>
                <div class="form-group col-lg-12">
                    <div class="form-group col-lg-4">
                        <input type="button" id="btnGuardar"  value="Guardar" class="btn btn-primary form-control"/>
                    </div>
                </div>
            </fieldset>
                <fieldset id="pnlOpciones"><legend>Opciones</legend>
                    <div class="form-group col-lg-12">
                <div class="form-group col-lg-3">
                    <input type="button" id="btnEnviaCorreo"  class="btn btn-default form-control" value="Reenviar Codigo de activacion" formnovalidate="true"/>
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
