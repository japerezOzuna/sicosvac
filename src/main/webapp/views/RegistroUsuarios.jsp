<%-- 
    Document   : RegistroUsuarios
    Created on : 17/09/2017, 09:33:08 PM
    Author     : José Antonio Pérez Ozuna
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Registro de usuarios</title>
    </head>
    <body><br>
        <section>
            <div class="panel panel-default">
            <div class="panel-heading">Administración de cuentas de usuario</div>
            <div class="panel-body">              
            <form name="registroUsuario">
                <fieldset><legend>Registro de personal de centros de responsabilidad</legend>
                <div class="form-group col-lg-12">
                    <label id="Label1"  Font-Bold="true" Font-Size="Smaller">Introduzca los datos de registro</label>
                </div>
                <div class="row col-lg-6">
                    <div class="form-group col-lg-12" ng-class="{'has-error':registroUsuario.nombre.$invalid && registroUsuario.nombre.$dirty}">
                        <input type="text" ng-model="administrador.nombre" name="nombre" id="txtNombre"  class="form-control" placeholder="Nombre(s):" required>
                        <span ng-if="registroUsuario.nombre.$invalid && registroUsuario.nombre.$dirty" class="help-block">Este campo es requerido</span>
                    </div>

                    <div class="form-group col-lg-12" ng-class="{'has-error':registroUsuario.apellidos.$invalid && registroUsuario.apellidos.$dirty}">
                        <input type="text" ng-model="administrador.apellidos" name="apellidos" id="txtApellidos"  class="form-control" placeholder="Apellidos(s):" required>
                        <span ng-if="registroUsuario.apellidos.$invalid && registroUsuario.apellidos.$dirty" class="help-block">Este campo es requerido</span>
                    </div>
                    <div class="form-group col-lg-12">
                        <label id="lblJurisdiccion">Seleccione la Jurisdicción Sanitaria</label>
                    </div>                     
                    <div class="form-group col-lg-12" >
                        <select id="ddlJurisdiccion" class="form-control" ng-disabled="admin"
                                        ng-model="jurisdiccion"
                                        ng-options="jurisdiccion as jurisdiccion.nombreJurisdiccion for jurisdiccion in listaJurisdicciones track by jurisdiccion.idJurisdiccion"
                                        ng-change="llenaListaCentros(jurisdiccion)">
                                    <option>-Seleccione la Jurisdicción Sanitaria</option>
                        </select>
                    </div>
                    <div class="form-group col-lg-12">
                        <label id="lblCentro">Seleccione el Centro de Responsabilidad</label>
                    </div>                    
                    <div class="form-group col-lg-12" ng-class="{'has-error':registroUsuario.centro.$invalid && registroUsuario.centro.$dirty}">
                            <select id="ddlCentroSalud" class="form-control" ng-disabled="admin"
                                    ng-model="centro"
                                    ng-options="centro as centro.nombreCentro for centro in listaCentros track by centro.idCentro"
                                    ng-change="llenaDatosCentro(centro)">
                                <option>-Seleccione el Centro de Responsabilidad</option>
                            </select>
                        <span ng-if="registroUsuario.centro.$invalid && registroUsuario.centro.$dirty" class="help-block">Este campo es requerido</span>
                    </div>

                    <div class="form-group col-lg-12">
                        <label id="lblverifique"  Font-Bold="True">Verifique los datos</label>
                        <textarea id="txtAVerifique" ng-model="datosCentro" class="form-control" TextMode="multiline" Columns="50" Rows="5"  disabled></textarea>
                    </div>
                </div>
                <div class="form-group col-lg-12">
                    <label id="lblRol">Asigne un rol</label>
                </div>                                      
                <div class="form-group col-lg-12" ng-class="{'has-error':registroUsuario.rol.$invalid && registroUsuario.rol.$dirty}">
                            <select id="ddlRol" class="form-control"
                                    ng-model="rol"
                                    ng-options="rol as rol.descripcion for rol in listaRoles track by rol.idRol">
                                <option>-Seleccione un Rol para el usuario</option>
                            </select>
                        <span ng-if="registroUsuario.centro.$invalid && registroUsuario.centro.$dirty" class="help-block">Este campo es requerido</span>
                </div>                    
            </fieldset>
                <fieldset id="Panel2"><legend>Datos para inicio de sesión</legend>
                <div class="row col-lg-6">
                    <div class="form-group col-lg-12">
                        <label id="lblnota"  Font-Bold="False" Font-Size="Smaller" ForeColor="Red">Nota: El correo electrónico servirá como usuario para iniciar sesión y actualizar la contraseña,
                            asegúrese de que sea un correo institucional</label>
                    </div>

                    <div class="form-group col-lg-12" ng-class="{'has-error':registroUsuario.username.$invalid && registroUsuario.username.$dirty}">
                        <input type="email" ng-model="administrador.username" name="username" id="txtcorreo"  class="form-control" placeholder="Correo Electronico:" required>
                        <span ng-if="registroUsuario.username.$invalid && registroUsuario.username.$dirty" class="help-block">Este campo es requerido</span>
                    </div>
                    <!--
                    <div class="form-group col-lg-12" ng-class="{'has-error':registroUsuario.usuarioConfirma.$invalid && registroUsuario.usuarioConfirma.$dirty}">
                        <input type="email" ng-model="usuarioConfirma" name="usuarioConfirma" id="txtConfirmaCorreo"  class="form-control" placeholder="Confirme su correo:" required>
                        <span ng-if="registroUsuario.usuarioConfirma.$invalid && registroUsuario.usuarioConfirma.$dirty" class="help-block">Este campo es requerido</span>
                    </div>
                    -->
                    <div class="form-group col-lg-12" ng-class="{'has-error':registroUsuario.password.$invalid && registroUsuario.password.$dirty}">
                        <input type="text" ng-model="administrador.password" name="password" id="txtcontraseña"  class="form-control" placeholder="Contraseña:" required>
                        <span ng-if="registroUsuario.password.$invalid && registroUsuario.password.$dirty" class="help-block">Este campo es requerido</span>
                    </div>
                    <!--
                    <div class="form-group col-lg-12" ng-class="{'has-error':registroUsuario.passwordConfirma.$invalid && registroUsuario.passwordConfirma.$dirty}">
                        <input type="password" ng-model="passwordConfirma" name="passwordConfirma" id="txtconfirmacontraseña"  class="form-control" placeholder="Confirme su contraseña:" required>
                        <span ng-if="registroUsuario.passwordConfirma.$invalid && registroUsuario.passwordConfirma.$dirty" class="help-block">Este campo es requerido</span>
                        <br />
                    </div>
                    -->
                    <br />
                    <div class="form-group col-lg-5">
                        <input type="button" ng_click="confirmaRegistroUsuario()" ng-disabled="registroUsuario.$invalid" id="btnRegistra"  value="Registrar usuario" class="btn btn-primary form-control"/>
                    </div>

                    <div class="form-group col-lg-5">
                        <input type="button" id="btnCancelar" ng-click="ruta('administracionPersonal')"  value="Cancelar" class="btn btn-default form-control" formnovalidate="true"/>
                    </div>
                </div>
            </fieldset>
            </form>
            </div>
            </div>
            
            <!-- modal de confirmación genérico-->
             
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
                                    <input type="button" ng-click="ruta('administracionPersonal')" id="btnModifica"  value="Cerrar" class="btn btn-info" aria-hidden="true" data-dismiss="modal" />
                                </div>
                            </div>
                    </div>
                </div>
            </div> 
            
            <div class="modal fade" id="myModal2" role="dialog" aria-labelledby="myModalLabel2" aria-hidden="true">
                <div class="modal-dialog">
                    <div id="upModal2">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                    <h4 class="modal-title">
                                        <label id="lblModalTitle">No se puede registrar el usuario</label></h4>
                                </div>
                                    <div class="modal-body">
                                        <label id="lblModalBody">El correo electrónico ya se encuentra registrado</label>
                                    </div>
                                <div class="modal-footer" id="footerModal">
                                    <input type="button" id="btnModifica"  value="Cerrar" class="btn btn-info" aria-hidden="true" data-dismiss="modal" />
                                </div>
                            </div>
                    </div>
                </div>
            </div>             
        </section>
    </body>
</html>
