<%-- 
    Document   : login
    Created on : 6/10/2017, 03:10:53 PM
    Author     : Antonio Perez
--%>
<!--
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html ng-app="appSicosvac">
    <head>
         <link href="theme/css/bootstrap.min.css" rel="stylesheet">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">        
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.6/jquery.min.js" type="text/javascript"></script>
        <script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/jquery-ui.min.js" type="text/javascript"></script>
        <link href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/themes/base/jquery-ui.css" rel="Stylesheet" type="text/css" />         
        
        <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.2/angular.js"></script> 
        <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.2/angular-resource.js"></script>    
        <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/2.5.0/ui-bootstrap-tpls.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-grid/4.0.7/ui-grid.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.3.2/angular-ui-router.js"></script>        
        <script src="https://code.angularjs.org/1.6.2/angular-route.js"></script> 
        <script src="js/app_1.js" type = "text/javascript"></script>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>SICOSVAC</title>
    </head>
    <body>-->
    <div class="container">    
        <div id="loginbox" style="margin-top:50px;" class="mainbox col-md-6 col-md-offset-3 col-sm-10 col-sm-offset-2">                    
            <div class="panel panel-default" >
                    <div class="panel-heading">
                        <div class="panel-title" align="center"><b>Sistema de Control y Seguimiento de Vacunación en Menores</b></div>
                        <!-- <div style="float:right; font-size: 80%; position: relative; top:-10px"><a href="#">¿Olvidó su contraseña?</a></div> -->
                    </div>     

                    <div style="padding-top:30px" class="panel-body" >

                        <div style="display:none" id="login-alert" class="alert alert-danger col-sm-12"></div>
                            <div class="imgwrapper">
                                <img src="https://image.ibb.co/fzU8ow/logoss2017_500px.png" alt="" width="480" height="140" class="img-responsive">
                            </div>
                        <br>    
                        <section>
                        <form ng-submit="login()" id="loginform" class="form-horizontal" role="form">
                                    
                            <div style="margin-bottom: 25px" class="input-group">
                                        <span class="input-group-addon"><i class="fa fa-user-md fa-lg" aria-hidden="true"></i></span>
                                        <input id="login-username" type="text"  ng-model="credentials.username" class="form-control" name="username" value="" placeholder="Usuario (Correo electrónico)">                                        
                                    </div>
                                
                            <div style="margin-bottom: 25px" class="input-group">
                                        <span class="input-group-addon"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                                        <input id="login-password" type="password" ng-model="credentials.password" class="form-control" name="password" placeholder="Password">
                                    </div>

                                <div class="row col-lg-12">
                                   
                                </div>

                                <div style="margin-top:10px" class="form-group">
                                    <!-- Button class= controls right-->

                                    <div class="col-lg-12">
                                      <button type="submit" class="btn btn-primary">Acceder</button>
                                      <!-- <div style="float:right; font-size: 80%; position: relative; top:-20px"><a href="#">¿Olvidó su contraseña?</a></div> -->
                                      <!-- <a id="btn-fblogin"  href="#" onClick="$('#loginbox').hide(); $('#signupbox').show()" class="btn btn-primary">¿Olvidó su contraseña?</a> -->
                                    </div>
                                </div>
                                <div class="alert alert-info margin-top-5" ng-show="error">{{mensaje}}</div>
<!--
                                <div class="form-group">
                                    <div class="col-md-12 control">
                                        <div style="border-top: 1px solid#888; padding-top:15px; font-size:85%" >
                                            Don't have an account! 
                                        <a href="#" onClick="$('#loginbox').hide(); $('#signupbox').show()">
                                            Sign Up Here
                                        </a>
                                        </div>
                                    </div>
                                </div>   
-->
                        </form>  
                        </section>
                    </div>                     
            </div>  
        </div>

        <div id="signupbox" style="display:none; margin-top:50px" class="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <div class="panel-title">Pre-registro</div>
                            <div style="float:right; font-size: 85%; position: relative; top:-10px"><a id="signinlink" href="#" onclick="$('#signupbox').hide(); $('#loginbox').show()">Volver a inicio de sesión</a></div>
                        </div>  
                        <div class="panel-body" >
                            <form id="signupform" class="form-horizontal" role="form">
                                
                                <div id="signupalert" style="display:none" class="alert alert-danger">
                                    <p>Error:</p>
                                    <span></span>
                                </div>
                                    
                                
                                  
                                <div class="form-group">
                                    <label for="email" class="col-md-3 control-label">Email</label>
                                    <div class="col-md-9">
                                        <input type="text" class="form-control" name="email" placeholder="Email Address">
                                    </div>
                                </div>
                                    
                                <div class="form-group">
                                    <label for="firstname" class="col-md-3 control-label">First Name</label>
                                    <div class="col-md-9">
                                        <input type="text" class="form-control" name="firstname" placeholder="First Name">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="lastname" class="col-md-3 control-label">Last Name</label>
                                    <div class="col-md-9">
                                        <input type="text" class="form-control" name="lastname" placeholder="Last Name">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="password" class="col-md-3 control-label">Password</label>
                                    <div class="col-md-9">
                                        <input type="password" class="form-control" name="passwd" placeholder="Password">
                                    </div>
                                </div>
                                    
                                <div class="form-group">
                                    <label for="icode" class="col-md-3 control-label">Invitation Code</label>
                                    <div class="col-md-9">
                                        <input type="text" class="form-control" name="icode" placeholder="">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <!-- Button -->                                        
                                    <div class="col-md-offset-3 col-md-9">
                                        <button id="btn-signup" type="button" class="btn btn-info"><i class="icon-hand-right"></i> &nbsp Sign Up</button>
                                        <span style="margin-left:8px;">or</span>  
                                    </div>
                                </div>
                                
                                <div style="border-top: 1px solid #999; padding-top:20px"  class="form-group">
                                    
                                    <div class="col-md-offset-3 col-md-9">
                                        <button id="btn-fbsignup" type="button" class="btn btn-primary"><i class="icon-facebook"></i>   Sign Up with Facebook</button>
                                    </div>                                           
                                        
                                </div>
                                
                                
                                
                            </form>
                         </div>
                    </div>

               
               
                
         </div> 
    </div>
<!--
            <script src="theme/js/jquery.js"></script>
            <script src="theme/js/bootstrap-datepicker.js"></script>
            <!-- Bootstrap Core JavaScript --
            <script src="theme/js/bootstrap.min.js"></script>        
    </body>
</html>
-->