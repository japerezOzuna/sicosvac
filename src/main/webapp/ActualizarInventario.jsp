<%-- 
    Document   : ActualizarInventario
    Created on : 18/08/2017, 05:23:23 PM
    Author     : José Antonio Pérez Ozuna
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Actualizar inventario</title>
    </head>
    <body><br/>
        <section ng-controller = "ControladorInventario"> 
        <fieldset><legend>Actualizar Inventario de Centro de Salud"</legend>
            <br/>
            <fieldset><legend>1.-Seleccione la jurisdicción sanitaria</legend>
                    <div class="row col-lg-6">
                        <div class="form-group col-lg-12">
                            <label id="lblCentroSalud"  Font-Bold="True">Seleccione la jurisdicción sanitaria</label>
                            <br />
                            <select id="ddlJurisdiccion" class="form-control"
                                    ng-model="jurisdiccion"
                                    ng-options="jurisdiccion as jurisdiccion.nombreJurisdiccion for jurisdiccion in listaJurisdicciones track by jurisdiccion.idJurisdiccion"
                                    ng-change="llenaListaCentros(jurisdiccion)">
                                <option>-Seleccione la Jurisdicción Sanitaria</option>
                            </select>
                        </div>
                    </div>
            </fieldset>
            <br/>
            <fieldset><legend>2.-Seleccione un Centro de responsabilidad</legend>                 
                <div class="row col-lg-6">    
                    <div class="form-group col-lg-12">
                            <label id="lblCentroSalud"  Font-Bold="True">Seleccione el centro de responsabilidad</label>
                            <br />
                            <select id="ddlCentroSalud" class="form-control"
                                    ng-model="centro"
                                    ng-options="centro as centro.nombreCentro for centro in listaCentros track by centro.idCentro"
                                    ng-change="llenaListaVacunas(centro)">
                            </select>
                    </div> 
                </div>
                    <div class="row col-lg-6">
                        <div class="form-group col-lg-12">
                            <label id="lblVerCentro"  Font-Bold="True">Verifique los datos</label>
                            <textarea ng-model="datosCentro" id="txtAVerCentro" class="form-control" TextMode="multiline" Columns="50" Rows="4"  disabled/></textarea>
                        </div>
                    </div>
                </fieldset>
        </fieldset>
        <br />
            <fieldset><legend>3.-Agregue las Vacunas al inventario</legend>
                    <div class="row col-lg-6">
                        <div class="form-group col-lg-12">
                            <label id="lblVacuna"  Font-Bold="True">Seleccione una vacuna para modificar su inventario</label>
                            <br />
                            <select id="ddlVacuna" class="form-control"
                                    ng-model="inventario"
                                    ng-options="inventario as inventario.vacuna.nombre for inventario in listaVacunas track by inventario.vacuna.idVacuna"
                                    ng-change="muestraDatosVacuna(inventario.vacuna)">
                            </select>
                        </div>
                        <div class="form-group col-lg-12">
                            <label id="Label1"  Font-Bold="True">Seleccione la cantidad de vacunas que se agregaran al inventario</label>
                            <br />
                            <input type="number" ng-model="cantidad" id="txtCantidad" name="income" class="form-control">
                        </div>
                        <div class="form-group col-lg-12">
                            <div class="form-group col-lg-9">
                                <input type="button" ng-click="agregarAInventario()" id="btnAgregaAInventario"  value="Agregar a nuevo Inventario" class="btn btn-primary form-control"/>
                            </div>
                        </div>
                    </div>
                    <div class="row col-lg-6">
                        <div class="form-group col-lg-12">
                            <label id="lblVerVacuna">Verifique los datos</label>
                            <textarea ng-model="datosVacuna" id="txtAVerVacuna" class="form-control" TextMode="multiline" Columns="50" Rows="4"  disabled/></textarea>
                        </div>
                    </div>
                </fieldset>
        <br />
        <fieldset><legend>4.-Nuevo Inventario</legend>
                    <div class="row col-lg-6">
                        <div class="form-group col-lg-12">
                            <table id="gvInventarioNuevo" class="table table-striped table-hover table-condensed small-top-margin">
                                <tr>
                                    <th>Vacuna</th>
                                    <th>Cantidad</th>
                            <tbody>
                                <tr>
                                    <td>{{inventario.vacuna.nombre}}</td>
                                    <td>{{inventario.cantidad}}</td>
                                </tr>
                            </tbody>                                   
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div class="row col-lg-12">
                        <br />
                        <div class="form-group col-lg-5">
                            <input type="button" ng-click="confirmarInventario()" id="btnRegistraInventario"  class="btn btn-primary form-control" value="Guardar Nuevo Inventario"/>
                        </div>
                    </div>
        </fieldset>

<!--Modal de confirmación-->        
    <div class="modal fade" id="modalConfirmaInventario" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            <h4 class="modal-title">
                                <label id="lblModalTitle" class="text-danger">Por favor revise cuidadosamente antes de continuar</label></h4>
                        </div>
                        <div class="modal-body">
                                <label id="lblConfirme">Se agregará la siguiente vacuna:</label><br />
                                <br />
                                <div class="form-group col-lg-12">
                                    <table id="gvInventarioNuevo" class="table table-striped table-hover table-condensed small-top-margin">
                                        <tr>
                                            <th>Vacuna</th>
                                            <th>Cantidad</th>
                                    <tbody>
                                        <tr>
                                            <td>{{inventario.vacuna.nombre}}</td>
                                            <td>{{inventario.cantidad}}</td>
                                        </tr>
                                    </tbody>                                   
                                        </tr>
                                    </table>
                                </div>
                                <br />
                                <div class="row col-lg-6">
                                    <div class="form-group col-lg-12">
                                        <label id="lblVerCentro"  Font-Bold="True">Al inventario de:</label>
                                        <textarea ng-model="datosCentro" id="txtAVerCentro" class="form-control" TextMode="multiline" Columns="50" Rows="4"  disabled/></textarea>
                                    </div>
                                </div>
          <!-- FALTA AGREGAR VALIDACION CON CONTRASEÑA-->
                        </div>
                    <div class="modal-footer" id="footerModal">
                            <button type="button" id="btnAceptarAlta" class="btn btn-primary" ng-click="guardarInventario()">Guardar nuevo inventario</button>                            
                            <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
                    </div>    
           </div>    
        </div>
    </div>
    <!-- Modal Confirmacion -->
    <div id="modalConfirmaAltaInventario" class="modal fade" role="dialog">
      <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title text-danger">Inventario actualizado</h4>
          </div>
          <div class="modal-body">
            <p>La cantidad ha sido agregada al inventario</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
          </div>
        </div>
      </div>
    </div>
        </section>
    </body>
</html>
