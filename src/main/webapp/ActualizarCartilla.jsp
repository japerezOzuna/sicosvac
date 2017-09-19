<%-- 
    Document   : ActualizarCartilla
    Created on : 17/09/2017, 03:26:43 PM
    Author     : José Antonio Pérez Ozuna
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Actualizar cartilla de vacunación</title>
    </head>
    <body>
        <section>            
                <form name="ActualizaCartilla">
                    <fieldset id="panel3"> <legend>Actualizar Cartilla de Vacunacion de menores</legend>
                    <div class="row col-lg-8">
                        <div class="form-group col-lg-12">
                            <label id="lblModifica" Font-Bold="True">1.-Busqueda de menor mediante CURP</label>
                        </div>
                        <div class="form-group col-lg-12">
                            <input type="text" ng-model="menorBuscado" title="El CURP no tiene el formato adecuado revise" id="txtBuscaCurp" class="form-control"  Style="text-transform: uppercase" pattern="^[a-zA-Z]{4}\d{6}[a-zA-Z]{6}\d{2}$" placeholder="CURP del menor" required OnTextChanged="txtBuscaCurp_TextChanged" />
                            <label id="lblError"  ForeColor="Red" ></label>
                        </div>
                        <div class="form-group col-lg-12">
                            <input type="button" ng-click="buscaMenor(menorBuscado)" id="btnBuscar"  value="Buscar" class="btn btn-primary" formnovalidate="true"/>                            
                        </div>
                        <div class="form-group col-lg-12">
                            <label id="lblVerifica" Font-Bold="True">2.-Verifique los datos</label>
                        </div>
                        <div class="form-group col-lg-12">
                            <textarea id="txtAInfoMenor" ng-model="datosMenor" class="form-control" TextMode="multiline" Columns="50" Rows="4"  disabled/></textarea>
                        </div>
                        <div class="form-group col-lg-12">
                            <label id="lblVacuna" Font-Bold="True">3.-Seleccione una vacuna</label>
                        </div>
                        <div class="form-group col-lg-12">
                            <select id="ddlVacuna" ng-model="listaVacunasMenor">
                            </select>
                        </div>
                        <div class="form-group col-lg-12">
                            <label id="Label1"  Font-Bold="True">Aplicaciones Faltantes</label>
                        </div>
                        <div class="form-group col-lg-12">
                            <select id="ddlVacunasFaltantes" ng-model="listaVacunasPorAplicar">
                            </select>
                        </div>
                        <div class="form-group col-lg-12">
                            <label id="lblVacunaverifique"  Font-Bold="True">4.-Verifique datos de la vacuna</label>
                        </div>
                        <div class="form-group col-lg-12">
                            <textarea id="txtAInfoVacuna" ng-model="datosVacuna" class="form-control" TextMode="multiline" Columns="50" Rows="4"  disabled/></textarea>
                        </div>
                        <div class="form-group col-lg-12">
                            <label id="lbldatos"  Font-Bold="True">5.-Datos de aplicación</label>
                        </div>
                        <div class="form-group col-lg-12" ng-class="{'has-error':ActualizaCartilla.fechaAplicacion.$invalid && ActualizaCartilla.fechaAplicacion.$dirty}">
                            <input type="date" ng-model="vacunaMenor.fechaAplicacion" name="fechaAplicacion" id="txtFecha"  class="form-control" placeholder="Fecha de aplicación" required >
                            <span ng-if="ActualizaCartilla.fechaAplicacion.$invalid && ActualizaCartilla.fechaAplicacion.$dirty" class="help-block">Este campo es requerido</span>
                        </div>
                        <div class="form-group col-lg-12" ng-class="{'has-error':ActualizaCartilla.nombreAplicador.$invalid && ActualizaCartilla.nombreAplicador.$dirty}">
                            <input type="text" ng-model="vacunaMenor.nombreAplicador" name="nombreAplicador" id="txtNombreAplicador"  class="form-control" placeholder="Nombre del aplicador" required>
                            <span ng-if="ActualizaCartilla.nombreAplicador.$invalid && ActualizaCartilla.nombreAplicador.$dirty" class="help-block">Este campo es requerido</span>
                        </div>
                        <div class="form-group col-lg-12" ng-class="{'has-error':ActualizaCartilla.nombreFamiliar.$invalid && ActualizaCartilla.nombreFamiliar.$dirty}">
                            <input type="text" ng-model="vacunaMenor.nombreFamiliar"  name="nombreFamiliar" id="txtAcompañante"  class="form-control" placeholder="¿Quien acompaño al menor?" required>
                            <span ng-if="ActualizaCartilla.nombreFamiliar.$invalid && ActualizaCartilla.nombreFamiliar.$dirty" class="help-block">Este campo es requerido</span>
                        </div>
                        <div class="form-group col-lg-12" ng-class="{'has-error':ActualizaCartilla.parentesco.$invalid && ActualizaCartilla.parentesco.$dirty}">
                            <input type="text" ng-model="vacunaMenor.parentesco" name="parentesco" id="txtParentesco"  class="form-control" placeholder="Parentesco" required>
                            <span ng-if="ActualizaCartilla.parentesco.$invalid && ActualizaCartilla.parentesco.$dirty" class="help-block">Este campo es requerido</span>
                        </div>
                        <div class="form-group col-lg-12">
                            <input type="button" ng-click="" id="btnAceptar"  value="Aceptar" class="btn btn-primary" />
                            <input type="button" OnClick="location.href ='index.jsp'" id="btnCancelar"  value="Cancelar" class="btn btn-default" formnovalidate="true"/>
                        </div>
                    </div>
                    </fieldset>
                </fieldset>
            </form>

            <div class="modal fade" id="myModal" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                 <div class="modal-dialog modal-sm">
                     <div id="upModal"  ChildrenAsTriggers="false" UpdateMode="Conditional">
                             <div class="modal-content">
                                 <div class="modal-header">
                                     <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                     <h4 class="modal-title">
                                         <label id="lblModalTitle"  Text=""></label></h4>
                                 </div>
                                 <div class="modal-body">
                                     <label id="lblModalBody"></label>
                                 </div>
                                 <div class="modal-footer" id="footerModal">
                                     <input type="button" id="btnCerrar"  value="Cerrar" class="btn btn-primary" aria-hidden="true" data-dismiss="modal" />
                                 </div>
                             </div>
                     </div>
                 </div>
             </div>                  
        </section>
    </body>
</html>
