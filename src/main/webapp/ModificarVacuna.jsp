<%-- 
    Document   : ModificarVacuna
    Created on : 18/08/2017, 01:48:39 PM
    Author     : José Antonio Pérez Ozuna
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Modificación de vacunas</title>
    </head>
    <body><br>
        <section ng-controller = "ControladorVacunas"> 
        <div class="panel panel-default">
        <div class="panel-heading">Registro de vacunas</div>
        <div class="panel-body">        
        <form name="modificaVacuna">
        <fieldset><legend>Modificación de vacunas</legend>
            <div class="row col-lg-8">
            <div class="form-group col-lg-12">
                <label class="col-lg-12">Seleccione una vacuna para modificar su información</label>
                    <br />
                <select id="ddlVacuna" class="form-control"
                        ng-model="vacuna" 
                        ng-options="vacuna as vacuna.nombre for vacuna in listaVacunas track by vacuna.idVacuna"
                        ng-change="editarVacuna(vacuna)">
                    <option>Elija una opción</option>
                </select>
            </div>            
            </div>
            <div class="row col-lg-8">
                    <div class="form-group col-lg-12" ng-class="{'has-error':altaVacuna.nombre.$invalid && altaVacuna.nombre.$dirty}">
                        <input type="text" ng-model="vacuna.nombre" name="nombre" id="txtNombre" class="form-control" placeholder="Nombre de la vacuna:" required>
                        <span ng-if="altaVacuna.nombre.$invalid && altaVacuna.nombre.$dirty" class="help-block">Este campo es requerido</span>
                    </div>
                    <div class="form-group col-lg-12" ng-class="{'has-error':altaVacuna.codigoVacuna.$invalid && altaVacuna.codigoVacuna.$dirty}">
                        <input type="number" id="txtCodigoVacuna" ng-model="vacuna.codigoVacuna" name="codigoVacuna" class="form-control" placeholder="Codigo de vacuna:" required>
                        <span ng-if="altaVacuna.codigoVacuna.$invalid && altaVacuna.codigoVacuna.$dirty" class="help-block">Este campo es requerido</span>
                    </div>
                    <div class="form-group col-lg-12" ng-class="{'has-error':altaVacuna.queEs.$invalid && altaVacuna.queEs.$dirty}">
                        <textarea ng-model="vacuna.queEs" name="queEs" id="txtQueEs" class="form-control"  Columns="50" Rows="4" placeholder="Descripcion de la vacuna" required /></textarea>
                        <span ng-if="altaVacuna.queEs.$invalid && altaVacuna.queEs.$dirty" class="help-block">Este campo es requerido</span>
                    </div>
                    <div class="form-group col-lg-12" ng-class="{'has-error':altaVacuna.afectados.$invalid && altaVacuna.afectados.$dirty}">
                        <textarea ng-model="vacuna.afectados" name="afectados" id="txtAfectados" class="form-control"  Columns="50" Rows="4"  placeholder="¿A quienes afecta?" required /></textarea>
                        <span ng-if="altaVacuna.afectados.$invalid && altaVacuna.afectados.$dirty" class="help-block">Este campo es requerido</span>
                    </div>
                    <div class="form-group col-lg-12">
                        <label class="col-lg-12"><input type="checkbox"  ng-model="vacuna.aplicadaXCS" ng-true-value="'SI'" ng-false-value="'NO'" id="cBAplicaCS" />¿Es aplicada por el centro de salud?</label>
                    </div>
                </div>
                <div class="row col-lg-12">
                    <div class="form-group col-lg-4">
                        <input type="button" ng-click="guardarVacuna()" ng-disabled="modificaVacuna.$invalid" id="btnConfirmaAlta" value="Guardar" class="btn btn-primary form-control" />
                    </div>
                    <div class="form-group col-lg-4">
                        <input type="button" ng-click="ruta('/administracionVacunas')" id="btnCancelarAlta" value="Cancelar" class="btn btn-default form-control" formnovalidate="true"  />
                    </div>
                </div>
        </fieldset>
        <br />
        <br />
        <fieldset><legend>Agregue las dosis que seran suministradas y la edad recomendada</legend>
                <div class="row col-lg-8">
                    <div class="form-group col-lg-6">
                        <input type="text" ng-model="dose"  id="txtDosis" class="form-control"  placeholder="Dosis" />
                        <br />
                        <input type="text" ng-model="edad" id="txtMeses" class="form-control" type="number" min="1"  placeholder="Edad en meses" />
                    </div>
                    <div class="form-group col-lg-6">
                        <input type="button" ng-click="modAgregarDosis(vacuna)" id="btnD"  value="Agregar Dosis" class="btn btn-primary form-control" formnovalidate="true" />
                    </div>
                </div>
                <div class="row col-lg-8">
                    <div class="form-group col-lg-12">
                        <table ng-show="hayDosis" id="gvDosis" class="table table-striped table-hover table-condensed small-top-margin">
                            <tr>
                                <th>Dosis</th>
                                <th>Edad</th>
                                <th></th>                                
                            </tr>          
                            <tbody>
                                <tr ng-repeat="dose in listaDosis">
                                    <td>{{dose.dosis}}</td>
                                    <td>{{dose.edadMeses}}</td>
                                    <td><a href="" ng-click="modEliminarDosis(dose,vacuna)" title="Eliminar"><i class="fa fa-times fa-lg" style="color:red"></i></a></td>                                    
                                </tr>
                            </tbody>                            
                        </table>
                    </div>
                </div>
            </fieldset>
        <fieldset><legend>Agregue recomendaciones</legend>
                <div class="row col-lg-8">
                    <div class="form-group col-lg-6">
                        <textarea ng-model="recomendacion" id="txtRecomendacion" class="form-control" Columns="50" Rows="4"  placeholder="Nueva Recomendacion" /></textarea>
                    </div>
                    <div class="form-group col-lg-6">
                        <label id="lblTiempo"> Tiempo de la recomendacion</label>
                        <br />
                        <select ng-model="tiempoRecomendacion" id="ddlTiempo" class="form-control">
                            <!--<option>--Seleccione un momento para la recomendacion--</option>-->
                            <option>Pre Vacunacion</option>
                            <option>Post Vacunacion</option>
                        </select>
                        <br />
                        <br />
                        <input type="button" ng-click="modAgregarRecomendacion(vacuna)" id="btnAgregaRecomendacion"  value="Agregar Recomendacion" class="btn btn-primary form-control" formnovalidate="true" />
                    </div>
                </div>
                <div class="row col-lg-8">
                    <div class="form-group col-lg-12">
                        <table ng-show="hayRecomendaciones" id="gvRecomendaciones"  class="table table-striped table-hover table-condensed small-top-margin">
                            <tr>
                                <th>Recomendación</th>
                                <th>Tiempo</th>
                                <th></th>                                
                            </tr>        
                            <tbody>
                                <tr ng-repeat="recomendacion in listaRecomendaciones">
                                    <td>{{recomendacion.descripcion}}</td>
                                    <td>{{recomendacion.tiempo}}</td>
                                    <td><a href="" ng-click="modEliminarRecomendacion(recomendacion)" title="Eliminar"><i class="fa fa-times fa-lg" style="color:red"></i></a></td>
                                </tr>
                            </tbody>                           
                        </table>
                    </div>
                </div>
            </fieldset>
        <fieldset><legend>Agregue Contraindicaciones</legend>
                <div class="row col-lg-8">
                    <div class="form-group col-lg-6">
                        <textarea ng-model="contraindicacion" id="txtAgregaContraInd" class="form-control" TextMode="multiline" tr="50" Rows="4"  placeholder="Nueva Contraindicacion" /></textarea>
                    </div>
                    <div class="form-group col-lg-6">
                        <input type="button" ng-click="modAgregarContraindicacion(vacuna)" id="btnAgregaC"  value="Agregar Contraindicación" class="btn btn-primary form-control" formnovalidate="true" />
                    </div>
                </div>
                <div class="row col-lg-8">
                    <div class="form-group col-lg-12">
                        <table ng-show="hayContraindicaciones" id="gvContraindicaciones" class="table table-striped table-hover table-condensed small-top-margin">
                            <tr>
                                <th>Contraindicación</th>
                                <th></th>                                
                            </tr>        
                            <tbody>
                                <tr ng-repeat="ci in listaContraindicaciones">
                                    <td>{{ci.descripcion}}</td>
                                    <td><a href="" ng-click="modEliminarContraindicacion(ci)" title="Eliminar"><i class="fa fa-times fa-lg" style="color:red"></i></a></td>
                                </tr>
                            </tbody>                          
                        </table>
                        <p ng-show="hayContraindicaciones" class="bg-danger">{{errortextCI}}</p>
                    </div>
                </div>
            </fieldset>
        <fieldset><legend>Agregue Efectos adversos</legend>
                <div class="row col-lg-8">
                    <div class="form-group col-lg-6">
                        <textarea ng-model="efectoAdverso" id="txtEfectos" class="form-control" TextMode="multiline" Columns="50" Rows="4" runat="server" placeholder="Nuevo Efecto Adverso" /></textarea>
                    </div>
                    <div class="form-group col-lg-6">
                        <input type="button" ng-click="modAgregarEfecto(vacuna)" id="btnAE"  value="Agregar Efecto adverso" class="btn btn-primary form-control" formnovalidate="true" />
                    </div>
                </div>
                <div class="row col-lg-8">
                    <div class="form-group col-lg-12">
                        <table ng-show="hayEfectos" id="gvEfectos" class="table table-striped table-hover table-condensed small-top-margin">
                            <tr>
                                <th>Efecto</th>
                                <th></th>                                
                            </tr>
                            <tbody>
                                <tr ng-repeat="efecto in listaEfectosAdversos">
                                    <td>{{efecto.descripcion}}</td>
                                    <td><a href="" ng-click="modEliminarEfecto(efecto)" title="Eliminar"><i class="fa fa-times fa-lg" style="color:red"></i></a></td>
                                </tr>
                            </tbody>
                        </table>
                        <p ng-show="hayEfectos" class="bg-danger">{{errortextEA}}</p>
                    </div>
                </div>
            </fieldset>     
            <div class="row col-lg-12">
                <div class="form-group col-lg-8">
                    <input type="button" ng-click="confirmaEliminacion()"  ng-disabled="modificaVacuna.$invalid" id="btnEliminar" value="Eliminar Vacuna" class="btn btn-danger form-control" />
                </div>
            </div>
        </form>
        </div>
        </div>
    <!-- Modal confirma modificacion de vacuna -->
    <div id="modalConfirmaModificacion" class="modal fade" role="dialog">
      <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Vacuna guardada</h4>
          </div>
          <div class="modal-body">
            <p>La información de la vacuna se modificó exitosamente</p>
          </div>
          <div class="modal-footer">            
            <button type="button" ng-click="ruta('/administracionVacunas')" class="btn btn-default" data-dismiss="modal">Cerrar</button>
          </div>
        </div>
      </div>
    </div> 
        
        <!-- Modal confirma eliminacion -->
        <div id="modalConfirmaEliminar" class="modal fade" role="dialog">
          <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">¿Esta Seguro que desea eliminar esta vacuna y todos los registros relacionados?</h4>
          </div>
          <div class="modal-body">
            <p>Nota: No se eliminaran registros de alguna dosis de esta vacuna que hallan sido aplicadas</p>
          </div>
          <div class="modal-footer">
            <button type="button" id="btnEliminar" class="btn btn-primary" ng-click="eliminarVacuna(vacuna)">Sí</button>
            <button type="button" class="btn btn-default" data-dismiss="modal">No</button>
          </div>
        </div>
      </div>
    </div> 

    <!-- Modal de confirmación genérico -->
    <div id="modalGenerico" class="modal fade" role="dialog">
      <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title">
                <span id="lblModalTitle"></spanl></h4>
            </h4>
          </div>
          <div class="modal-body">
            <span id="lblModalBody"></span>
          </div>
          <div class="modal-footer">            
            <button type="button" class="btn btn-info" data-dismiss="modal">Cerrar</button>
          </div>
        </div>
      </div>
    </div>        
        </section>
    </body>
</html>
