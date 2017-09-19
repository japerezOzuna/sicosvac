<%-- 
    Document   : ReportesVacunas
    Created on : 17/09/2017, 04:38:08 PM
    Author     : José Antonio Pérez Ozuna
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Reportes de vacunas aplicadas</title>
    </head>
    <body>
            <form name="ReportaVacuna">
            <fieldset id="pnlReportesVacunas"><legend>Reportes de vacunas aplicadas</legend>
                <div id="divfiltro" >
                    <div class="form-group col-lg-12">
                        <label id="lblfiltro">Puede filtrar la lista por centro de salud</label>
                    </div>
                    <div class="form-group col-lg-8">
                        <div class="form-group col-lg-6">
                            <select id="ddlCentroSalud"  class="form-control">
                            </select>
                        </div>
                        <div class="form-group col-lg-3">
                            <input type="button" id="btnFiltrar"  class="btn btn-primary form-control" value="Filtrar" formnovalidate="true"/>
                        </div>
                    </div>
                </div>
                <div class="form-group col-lg-9">
                    <table id="gvReportes" >
                        <tr>
                            <!--
                            <asp:BoundField DataField="nombre" HeaderText="Nombre" />
                            <asp:BoundField DataField="apellidos" HeaderText="Apellidos" />
                            <asp:BoundField DataField="vacuna" HeaderText="Vacuna" />
                            <asp:BoundField DataField="dosis" HeaderText="Dosis" />
                            <asp:BoundField DataField="usuario" HeaderText="Usuario" />
                            <asp:CommandField ShowSelectButton="True" ButtonType="Image" SelectImageUrl="~/image/editar.png" />
                            -->
                        </tr>
                        <SelectedRowStyle BackColor="Gray" />
                    </table>
                </div>
            </fieldset>
            <fieldset id="pnlDatos"><legend>Datos del Reporte</legend>
                <div class="form-group col-lg-9" ng-class="{'has-error':ReportaVacuna.lugarAplicacion.$invalid && ReportaVacuna.lugarAplicacion.$dirty}">
                    <input type="text" ng-model="reporteVacuna.lugarAplicacion" id="txtLugarAplicacion"  name="lugarAplicacion" class="form-control" placeholder="Lugar de Aplicacion:" required disabled>
                    <span ng-if="ReportaVacuna.lugarAplicacion.$invalid && ReportaVacuna.lugarAplicacion.$dirty" class="help-block">Este campo es requerido</span>
                </div>
                <div class="form-group col-lg-9" ng-class="{'has-error':ReportaVacuna.nombreFamiliar.$invalid && ReportaVacuna.nombreFamiliar.$dirty}">
                    <input type="text" ng-model="reporteVacuna.nombreFamiliar" id="txtAcompañante"  name="nombreFamiliar" class="form-control" placeholder="Acompañante del menor:" required disabled>
                    <span ng-if="ReportaVacuna.nombreFamiliar.$invalid && ReportaVacuna.nombreFamiliar.$dirty" class="help-block">Este campo es requerido</span>
                </div>
                <div class="form-group col-lg-5" ng-class="{'has-error':ReportaVacuna.parentesco.$invalid && ReportaVacuna.parentesco.$dirty}">
                    <input type="text" ng-model="reporteVacuna.parentesco" id="txtParentesco"  name="parentesco" class="form-control" placeholder="Parentesco del Acompañante:" required disabled>
                    <span ng-if="ReportaVacuna.parentesco.$invalid && ReportaVacuna.parentesco.$dirty" class="help-block">Este campo es requerido</span>
                </div>
                <div class="form-group col-lg-4" ng-class="{'has-error':ReportaVacuna.fechaAplicacion.$invalid && ReportaVacuna.fechaAplicacion.$dirty}">
                    <input type="text" ng-model="reporteVacuna.fechaAplicacion" id="txtFechaAplicacion"  name="fechaAplicacion" class="form-control" placeholder="Fecha de Aplicacion" required disabled>
                    <span ng-if="ReportaVacuna.fechaAplicacion.$invalid && ReportaVacuna.fechaAplicacion.$dirty" class="help-block">Este campo es requerido</span>
                </div>
                <div class="form-group col-lg-12">
                    <div class="form-group col-lg-4">
                        <input type="button" id="btnAutorizaReporte"  value="Autorizar Reporte" class="btn btn-primary form-control"/>
                    </div>
                    <div class="form-group col-lg-4" >
                        <input type="button" id="btnDenegarReporte"  value="Denegar Reporte" class="btn btn-primary form-control"/>
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
                                        <label id="lblModalTitle"  Text=""></label></h4>
                                </div>
                                <div class="modal-body">
                                    <label id="lblModalBody"  Text=""></label>
                                </div>
                                <div class="modal-footer" id="footerModal">
                                    <input type="button" id="BtCancelar"  value="Cancelar" class="btn btn-info" UseSubmitBehavior="false" aria-hidden="true" data-dismiss="modal" />
                                    <input type="button" id="BtDenegar"  value="Denegar" class="btn btn-primary" UseSubmitBehavior="false" aria-hidden="true" data-dismiss="modal"/>
                                    <input type="button" id="BtAutorizar"  value="Autorizar" class="btn btn-primary" UseSubmitBehavior="false" aria-hidden="true" data-dismiss="modal"/>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    </body>
</html>
