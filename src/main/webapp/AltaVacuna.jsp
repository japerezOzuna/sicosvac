<%-- 
    Document   : AltaVacuna
    Created on : 18/08/2017, 01:48:39 PM
    Author     : José Antonio Pérez Ozuna
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <script src="js/ControladorVacunas.js" type = "text/javascript"></script>
        <title>Alta de vacunas</title>
    </head>
    <body><br>
      <section ng-controller = "ControladorVacunas">   
        <div class="panel panel-default">
        <div class="panel-heading">Registro de vacunas</div>
        <div class="panel-body">
        <form name="altaVacuna">
        <fieldset><legend>Agregue los datos de la vacuna</legend>
            <!--<div class="form-group">
                <label class="col-lg-12">Para dar de alta una vacuna llene los siguientes campos:</label>
            </div>-->
            <div class="row col-lg-8">
                    <div class="form-group col-lg-12" ng-class="{'has-error':altaVacuna.nombre.$invalid && altaVacuna.nombre.$dirty}">
                        <input type="text" ng-model="vacuna.nombre" name="nombre" id="txtNombre" class="form-control" placeholder="Nombre de la vacuna:" required>                                                
                        <span ng-if="altaVacuna.nombre.$invalid && altaVacuna.nombre.$dirty" class="help-block">Este campo es requerido</span>
                    </div>
                    <div class="form-group col-lg-12" ng-class="{'has-error':altaVacuna.codigoVacuna.$invalid && altaVacuna.codigoVacuna.$dirty}">
                        <input type="number" ng-model="vacuna.codigoVacuna" name="codigoVacuna" id="txtCodigoVacuna"  class="form-control" placeholder="Codigo de vacuna:" min="1" required>
                            <span ng-if="altaVacuna.codigoVacuna.$invalid && altaVacuna.codigoVacuna.$dirty" class="help-block">Este campo es requerido</span>
                    </div>
                    <div class="form-group col-lg-12" ng-class="{'has-error':altaVacuna.queEs.$invalid && altaVacuna.queEs.$dirty}">
                        <textarea ng-model="vacuna.queEs" name="queEs" id="txtQueEs" class="form-control"  cols="50" rows="4" placeholder="Descripcion de la vacuna" required/></textarea>
                        <span ng-if="altaVacuna.queEs.$invalid && altaVacuna.queEs.$dirty" class="help-block">Este campo es requerido</span>
                    </div>
                    <div class="form-group col-lg-12" ng-class="{'has-error':altaVacuna.afectados.$invalid && altaVacuna.afectados.$dirty}">
                        <textarea ng-model="vacuna.afectados" name="afectados" id="txtAfectados" class="form-control"  cols="50" rows="4"  placeholder="¿A quienes afecta?" required/></textarea>
                        <span ng-if="altaVacuna.afectados.$invalid && altaVacuna.afectados.$dirty" class="help-block">Este campo es requerido</span>
                    </div>
                    <div class="form-group col-lg-12">
                        <label class="col-lg-12"><input type="checkbox" ng-model="vacuna.aplicadaXCS" ng-true-value="'SI'" ng-false-value="'NO'"  id="cBAplicaCS"/>¿Es aplicada por el centro de salud?</label>
                    </div>
                </div>
        </fieldset>
        <fieldset><legend>Agregue las dosis que serán suministradas y la edad recomendada</legend>
                <div class="row col-lg-8">
                    <div class="form-group col-lg-6">
                        <input type="text" ng-model="dose" id="txtDosis" class="form-control"  placeholder="Dosis" />
                        <br />
                        <input type="number" ng-model="edad" id="txtMeses" class="form-control" min="1"  placeholder="Edad en meses" />
                    </div>
                    <div class="form-group col-lg-6">
                        <input type="button" ng-click="agregarDosis()" id="btnD"  value="Agregar Dosis" class="btn btn-primary form-control" formnovalidate="true"/>
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
                                <tr ng-repeat="row in dosis">
                                    <td ng-repeat="col in row">{{col}}</td>
                                    <td><a href="" ng-click="eliminarDosis($index)" title="Eliminar"><i class="fa fa-times fa-lg" style="color:red"></i></a></td>                                    
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
                        <input type="button" ng-click="agregarRecomendacion()" id="btnAgregaR"  value="Agregar Recomendacion" class="btn btn-primary form-control" formnovalidate="true"/>
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
                                <tr ng-repeat="row in recomendaciones">
                                    <td ng-repeat="col in row">{{col}}</td>
                                    <td><a href="" ng-click="eliminarRecomendacion($index)" title="Eliminar"><i class="fa fa-times fa-lg" style="color:red"></i></a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </fieldset>
        <fieldset><legend>Agregue Contraindicaciones</legend>
                <div class="row col-lg-8">
                    <div class="form-group col-lg-6">
                        <textarea ng-model="contraindicacion" id="txtContraindicacion" class="form-control" TextMode="multiline" tr="50" Rows="4"  placeholder="Nueva Contraindicacion" /></textarea>
                    </div>
                    <div class="form-group col-lg-6">
                        <input type="button" ng-click="agregarContraindicacion()" id="btnAgregaC"  value="Agregar Contraindicación" class="btn btn-primary form-control" formnovalidate="true"/>
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
                                <tr ng-repeat="ci in contraindicaciones">
                                    <td>{{ci}}</td>
                                    <td><a href="" ng-click="eliminarContraindicacion($index)" title="Eliminar"><i class="fa fa-times fa-lg" style="color:red"></i></a></td>
                                </tr>
                            </tbody>
                        </table>
                        <p ng-show="hayContraindicaciones" class="bg-danger">{{errortextCI}}</p>
                    </div>
                </div>
            </fieldset>
        <fieldset><legend>Efectos adversos</legend>
                <div class="row col-lg-8">
                    <div class="form-group col-lg-6">
                        <textarea ng-model="efectoAdverso" id="txtEfecto" class="form-control" TextMode="multiline" Columns="50" Rows="4" runat="server" placeholder="Nuevo Efecto Adverso" /></textarea>
                    </div>
                    <div class="form-group col-lg-6">
                        <input type="button"  ng-click="agregarEfecto()" id="btnAE"  value="Agregar Efecto adverso" class="btn btn-primary form-control" formnovalidate="true"/>
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
                                <tr ng-repeat="efecto in efectos">
                                    <td>{{efecto}}</td>
                                    <td><a href="" ng-click="eliminarEfecto($index)" title="Eliminar"><i class="fa fa-times fa-lg" style="color:red"></i></a></td>
                                </tr>
                            </tbody>
                        </table>
                        <p ng-show="hayEfectos" class="bg-danger">{{errortextEA}}</p>
                    </div>
                </div>
            </fieldset>     

              
            <div class="row col-lg-8">
                <div class="form-group col-lg-5">
                    <input type="button" ng-click="confirmaAlta()" ng-disabled="altaVacuna.$invalid" id="btnConfirmaAlta" value="Guardar Vacuna" class="btn btn-primary form-control" />
                </div>
                <div class="form-group col-lg-5">
                    <input type="button" ng-click="ruta('/administracionVacunas')" id="btnCancelarAlta" value="Cancelar" class="btn btn-default form-control" formnovalidate="true" OnClick="" />
                </div>
            </div>
        </form>          
            </div>
            </div>
<!-- Modal de confirmacion de alta-->
    <div class="modal fade" id="modalConfirmaAlta" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            <h4 class="modal-title">
                                <label id="lblModalTitle"></label>¿Esta seguro que desea agregar una nueva vacuna?</h4>
                        </div>
                        <div class="modal-body">
                                <label id="lblConfirme">Confirme los datos</label><br />
                                <br />
                                <label id="lblNombreConfirma" >Nombre de la vacuna: {{vacuna.nombre}}</label><br />
                                <label id="lblCodigoConfirma" >Codigo de la vacuna:{{vacuna.codigoVacuna}} </label><br />
                                <label id="lblDescripcionConfirma" >Descripcion: {{vacuna.queEs}} </label><br />
                                <label id="lblAfectadosConfirma" >Afectados: {{vacuna.afectados}}</label><br />
                                <label id="lblCentroSaludConfirma">Aplicada por centro de salud: {{vacuna.aplicadaXCS}}</label><br />
                                <br />
                                    <table ng-show="hayDosis" id="gvDosis" class="table table-striped table-hover table-condensed small-top-margin">                          
                                            <tr>
                                                <th>Dosis</th>
                                                <th>Edad</th>
                                            </tr>                                                    
                                            <tbody>
                                                <tr ng-repeat="row in dosis">
                                                    <td ng-repeat="col in row">{{col}}</td>
                                                </tr>
                                            </tbody>
                                    </table>
                                    <table ng-show="hayRecomendaciones" id="gvRecomendaciones"  class="table table-striped table-hover table-condensed small-top-margin">
                                        <tr>
                                            <th>Recomendación</th>
                                            <th>Tiempo</th>                                                                          
                                        </tr>        
                                        <tbody>
                                            <tr ng-repeat="row in recomendaciones">
                                                <td ng-repeat="col in row">{{col}}</td>                                                
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table ng-show="hayContraindicaciones" id="gvContraindicaciones" class="table table-striped table-hover table-condensed small-top-margin">
                                        <tr>
                                            <th>Contraindicación</th>
                                        </tr>        
                                        <tbody>
                                            <tr ng-repeat="ci in contraindicaciones">
                                                <td>{{ci}}</td>
                                            </tr>
                                        </tbody>
                                    </table>                                    
                                    <table ng-show="hayEfectos" id="gvEfectos" class="table table-striped table-hover table-condensed small-top-margin">
                                        <tr>
                                            <th>Efecto</th>                               
                                        </tr>
                                        <tbody>
                                            <tr ng-repeat="efecto in efectos">
                                                <td>{{efecto}}</td>
                                            </tr>
                                        </tbody>
                                    </table>                                    
                        </div>
                    <div class="modal-footer" id="footerModal">
                            <button type="button" id="btnAceptarAlta" class="btn btn-primary" ng-click="guardarVacuna()">Aceptar</button>                            
                    </div>    
           </div>    
        </div>
    </div>

    <!-- Modal Confirmacion -->
    <div id="modalDosis" class="modal fade" role="dialog">
      <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-   title">Faltan las dosis</h4>
          </div>
          <div class="modal-body">
            <p>No se han agregado dosis para esta vacuna, se requiere al menos una dosis</p>
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
