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
    <body><br>
        <section>
            <div class="panel panel-default">
            <div class="panel-heading">Administración de cuentas de usuario</div>
            <div class="panel-body">            
            <form name="administraUsuario"> 
                <fieldset>  <legend>Registro</legend>
                    <div class="row col-lg-8">
                        <div class="form-group col-lg-4">
                            <!--<input type="button" onClick="location.href='PerfilMenor.jsp'" id="btnMenores"  value="Dar de alta un menor" class="btn btn-primary form-control" />-->
                            <input type="button" ng-click="ruta('registroUsuarios')" id="btnRegistroUsuario"  value="Dar de alta un usuario" class="btn btn-primary form-control" />
                        </div>
                    </div>
                </fieldset>  <br>             
                <fieldset id="pnlActivaciondecuentas"><legend>Administración</legend>
                <div class="form-group col-lg-12">
                    <label id="lblActivacion">Seleccione la Jurisdicción Sanitaria</label>
                </div>                      
                <div class="form-group col-lg-8">
                    <div class="col-lg-6">
                        <select id="ddlJurisdiccion" class="form-control" ng-disabled="admin"
                                        ng-model="jurisdiccion"
                                        ng-options="jurisdiccion as jurisdiccion.nombreJurisdiccion for jurisdiccion in listaJurisdicciones track by jurisdiccion.idJurisdiccion"
                                        ng-change="llenaListaCentros(jurisdiccion)">
                                    <option Value="">-Todas las jurisdicciones-</option>
                        </select>
                     </div>
                </div>
                <div class="form-group col-lg-12">
                    <label id="lblActivacion">Seleccione el Centro de Responsabilidad</label>
                </div>
                <div class="form-group col-lg-8">
                    <div class="form-group col-lg-6">
                            <select id="ddlCentroSalud" class="form-control" ng-disabled="admin"
                                    ng-model="centro"
                                    ng-options="centro as centro.nombreCentro for centro in listaCentros track by centro.idCentro">
                                <option Value="">-Todos los centros-</option>
                            </select>
                    </div>
                    <div class="form-group col-lg-6">
                        <select id="ddlEstatus"  ng-model="filtroEstatus" class="form-control">
                            <option Value="">--Todos los Estatus--</option>
                            <option Value="1">Cuentas Activadas</option>
                            <option Value="2">Cuentas No Activadas</option>
                        </select>
                    </div>
                    <div class="form-group row col-lg-12">
                        <div class="form-group col-lg-3">
                            <input type="button" ng-click="aplicaFiltro()" id="btnFiltrar"  class="btn btn-primary form-control" value="Filtrar" formnovalidate="true"/>
                        </div>
                    </div>  
                </div>
                <div class="form-group col-lg-8" ui-i18n="es">
                    <!-- Div para llenar UI-GRID -->
                    <div ui-grid="gridOptions"  ui-grid-pagination ui-grid-selection class="grid"></div>
                </div>
            </fieldset>
                <fieldset id="pnlDatos"><legend>Datos de la cuenta</legend>
                <div class="form-group col-lg-8" ng-class="{'has-error':administraUsuario.nombre.$invalid && administraUsuario.nombre.$dirty}">
                    <input type="text" ng-model="administrador.nombre" ng-disabled="!editaUsuario" name="nombre" id="txtNombre"  class="form-control" placeholder="Nombre(s):" required>
                    <span ng-if="administraUsuario.nombre.$invalid && administraUsuario.nombre.$dirty" class="help-block">Este campo es requerido</span>
                </div>
                <div class="form-group col-lg-8" ng-class="{'has-error':administraUsuario.apellidos.$invalid && administraUsuario.apellidos.$dirty}">
                    <input type="text" ng-model="administrador.apellidos" ng-disabled="!editaUsuario" name="apellidos" id="txtApellidos"  class="form-control" placeholder="Apellido(s):" required>
                    <span ng-if="administraUsuario.apellidos.$invalid && administraUsuario.apellidos.$dirty" class="help-block">Este campo es requerido</span>
                </div>
                <div class="form-group col-lg-8" ng-class="{'has-error':administraUsuario.usuario.$invalid && administraUsuario.username.$dirty}">
                    <input type="email" ng-model="administrador.username" ng-disabled="!editaUsuario" name="username" id="txtcorreo"  class="form-control" placeholder="Usuario:" required>
                    <span ng-if="administraUsuario.username.$invalid && administraUsuario.username.$dirty" class="help-block">Este campo es requerido</span>
                </div>
                <div class="form-group col-lg-8">
                    <label id="Label1">Asigne un rol a este usuario</label><br />
                    <select id="ddlrol" ng-disabled="!editaUsuario" class="form-control"
                            ng-model="administrador.rol"
                            ng-options="rol as rol.descripcion for rol in listaRoles track by rol.idRol"
                            ng-change="">
                        <option>-Seleccione el para de usuario</option>
                    </select>
                </div>
                <div class="form-group col-lg-8" ng-class="{'has-error':administraUsuario.estatus.$invalid && administraUsuario.estatus.$dirty}">
                    <label id="lblestatus">Asigne un estatus a la cuenta</label><br />
                    <select id="ddlEstatusSelect" ng-model="administrador.estatus" ng-disabled="!editaUsuario" name="estatus" class="form-control">
                        <option Value="1">Activada</option>
                        <option Value="2">Desactivada</option>
                    </select>
                    <span ng-if="administraUsuario.estatus.$invalid && administraUsuario.estatus.$dirty" class="help-block">Este campo es requerido</span>
                </div>
                <div class="form-group row col-lg-8">
                    <div class="form-group col-lg-4">
                        <input type="button" ng-click="confirmaModificacionUsuario()" ng-disabled="!editaUsuario" id="btnGuardar"  value="Guardar" class="btn btn-primary form-control"/>
                    </div>
                    <div class="form-group col-lg-4">
                           <input type="button" ng-click="confirmaEliminacionUsuario()"  ng-disabled="!editaUsuario" id="btnEliminar" value="Eliminar" class="btn btn-danger form-control" />
                    </div>                                        
                    <div class="form-group col-lg-4">
                        <input type="button" ng-click="ruta('home')" id="btnCancelar"  value="Cancelar" class="btn btn-default form-control" formnovalidate="true"/>
                    </div>
                </div>                  
            </fieldset>
            <!--
                <fieldset id="pnlOpciones"><legend>Opciones</legend>
                <div class="form-group row col-lg-12">
                    <div class="form-group col-lg-3">
                        <input type="button" id="btnEnviaCorreo"  class="btn btn-default form-control" value="Reenviar Codigo de activacion" formnovalidate="true"/>
                    </div>
                </div>
            </fieldset>
            -->
            </form>
            </div>
            </div>
            <!-- estructura de modal no modificar solo cambiar labels-->
            <div class="modal fade" id="myModal" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div id="upModal">
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
                                    <input type="button" id="btnModifica"  value="Cerrar" class="btn btn-info" aria-hidden="true" data-dismiss="modal" />
                                </div>
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
                <h4 class="modal-title">Eliminar</h4>
              </div>
              <div class="modal-body">
                <p>¿Esta Seguro que desea eliminar este usuario?</p>
              </div>
              <div class="modal-footer">
                <button type="button" id="btnEliminar" class="btn btn-primary" ng-click="eliminarUsuario(administrador)">Sí</button>
                <button type="button" class="btn btn-default" data-dismiss="modal">No</button>
              </div>
            </div>
          </div>
        </div>             
        </section>
    </body>
</html>
