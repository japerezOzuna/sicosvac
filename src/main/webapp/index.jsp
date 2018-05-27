<%-- 
    Document   : index
    Created on : 14/08/2017, 08:38:44 PM
    Author     : José Antonio Pérez Ozuna
--%>
<!DOCTYPE html>
<html ng-app="appSicosvac">
    <head>        
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="">
    	<meta name="author" content="José Antonio Pérez Ozuna">
        
        <title>SICOSVAC</title>
        <!-- Bootstrap Core CSS -->
        <link href="theme/css/bootstrap.min.css" rel="stylesheet">
        
        <!-- Hoja de estilos de UI-GRID de angular -->        
        <link href="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-grid/4.0.7/ui-grid.min.css" rel="stylesheet">
        <!-- <link href="libs/css/ui-grid/ui-grid.min.css" rel="stylesheet">-->

        <!-- Custom CSS -->
        <link href="theme/css/sb-admin.css" rel="stylesheet">
        <!-- Custom Fonts -->
        <!--<link href="theme/font-awesome-4.7.0/css/font-awesome.min.css" rel="stylesheet" type="text/css">-->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
        <!-- Local <link rel="stylesheet" href="theme/font-awesome/css/font-awesome.min.css"> -->
        
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.6/jquery.min.js" type="text/javascript"></script>
        <script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/jquery-ui.min.js" type="text/javascript"></script>
        <link href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/themes/base/jquery-ui.css" rel="Stylesheet" type="text/css" />

        <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
            <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
            <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
        <![endif]-->
<!-- OK    
        <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.2/angular.js"></script> 
        <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.2/angular-resource.js"></script>    
        <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/2.5.0/ui-bootstrap-tpls.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-grid/4.0.7/ui-grid.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.3.2/angular-ui-router.js"></script>        
        <script src="https://code.angularjs.org/1.6.2/angular-route.js"></script> 
--> 
<!-- En directorios locales     -->
        <script src="libs/angular.js/1.6.2/angular.js"></script>
        <script src="libs/angular.js/1.6.2/angular-resource.js"></script> 
        <script src="libs/angular.js/1.6.2/angular-route.js"></script> 
        <script src="libs/angular.js/1.6.2/angular-ui-router.min.js"></script> 
        <script src="libs/angular.js/1.6.2/ui-bootstrap-tpls.min.js"></script> 
        <script src="libs/angular.js/1.6.2/ui-grid.min.js"></script> 

        <script src="js/app_1.js" type = "text/javascript"></script>
        
        <!-- PARA GENERAR PDF´S -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.5/jspdf.debug.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/2.3.2/jspdf.plugin.autotable.js"></script>
        
       <!-- <script src="js/factory.js" type = "text/javascript"></script>
        <script src="js/ControladorVacunas.js" type = "text/javascript"></script>
        <script src="js/ControladorInventario.js" type = "text/javascript"></script> --> 
       <base href="/sicosvac/">
    </head>
        <body>
            <div id="wrapper" ng-controller="navigation">
               <!-- Navigation -->               
               <div ui-view="nav" ng-controller="navigation"></div>
               <!--
                <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
                    <!-- Brand and toggle get grouped for better mobile display 
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="#">
                            <!--Sistema de Control y Seguimiento de Vacunación en Menores --
                            <img src="https://image.ibb.co/kMfyow/translogover_b4.png">
                            <!--<img src="https://image.ibb.co/dkJy5b/translogover_b3.png"> --
                        </a>
                    </div>
                    <!-- Top Menu Items -

                    <ul class="nav navbar-right top-nav">
                        <li class="dropdown">
                            <a href="" ng-show="user.principal.nombre" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-user"></i>&nbsp;Bienvenido:&nbsp;{{user.principal.nombre}}<b class="caret"></b></a>
                            <ul class="dropdown-menu">
                                <li>
                                    <a ui-sref="perfilAdmin"><i class="fa fa-fw fa-user"></i>&nbsp;Perfil&nbsp;</a>
                                </li>
                                <li class="divider"></li>
                                <li>
                                    <a href="" ng-click="logout()"><i class="fa fa-fw fa-power-off"></i>&nbsp;Cerrar sesión&nbsp;</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <!-- Sidebar Menu Items - These collapse to the responsive navigation menu on small screens --
                    <div class="collapse navbar-collapse navbar-ex1-collapse">
                        <ul class="nav navbar-nav side-nav demo">
                            <li>
                                <a ui-sref="home"><i class="fa fa-home fa-lg" aria-hidden="true"></i>&nbsp;Inicio</a>
                            </li>
                            <li>
                                <a href="javascript:;" data-toggle="collapse" data-target="#Vacunador"><i class="fa fa-eyedropper fa-lg" aria-hidden="true"></i>&nbsp;&nbsp;Vacunador<i class="fa fa-fw fa-caret-down"></i></a>
                                <ul id="Vacunador" class="collapse">
                                    <li>
                                        <!-- <a href="#/actualizarCartilla">&nbsp;Actualizar Cartilla de salud</a> --
                                        <a ui-sref="actualizarCartilla">&nbsp;Actualizar Cartilla de salud</a>
                                    </li>
                                    <li>
                                        <!-- <a href="#/administracionPerfiles">&nbsp;Administrar Perfiles de menores y tutores</a> --
                                        <a ui-sref="administracionPerfiles">&nbsp;Administrar Perfiles de menores y tutores</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="javascript:;" data-toggle="collapse" data-target="#Administrador"><i class="fa fa-user-md fa-lg" aria-hidden="true"></i>&nbsp;&nbsp;Administrador<i class="fa fa-fw fa-caret-down"></i></a>
                                <ul id="Administrador" class="collapse">
                                    <li>
                                        <!--  <a href="#/actualizarInventario">&nbsp;Actualizar Inventario de vacunas</a> --
                                        <a ui-sref="actualizarInventario">&nbsp;Actualizar Inventario de vacunas</a> 
                                    </li>
                                    <li>                                    
                                        <!--<a href="#/administracionPersonal">&nbsp;Administracion Personal</a> --
                                        <a ui-sref="administracionPersonal">&nbsp;Administracion Personal</a>                                    
                                    </li>
                                    <li>                                    
                                        <!-- <a href="#/reportesVacunas">&nbsp;Reportes de vacunas aplicadas</a> --
                                        <a ui-sref="reportesVacunas">&nbsp;Reportes de vacunas aplicadas</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="javascript:;" data-toggle="collapse" data-target="#especiales"><i class="fa fa-asterisk fa-lg" aria-hidden="true"></i>&nbsp;&nbsp;Actividades especiales<i class="fa fa-fw fa-caret-down"></i></a>
                                <ul id="especiales" class="collapse">
                                    <li>                                    
                                        <!-- <a href="#/administracionVacunas">&nbsp;Administracion de Vacunas</a> --
                                        <a ui-sref="administracionVacunas">&nbsp;Administracion de Vacunas</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <!-- <a href="#/informacion"><i class="fa fa-fw fa-desktop"></i>&nbsp;Información</a> --
                                <a ui-sref="informacion"><i class="fa fa-fw fa-desktop"></i>&nbsp;Información</a>
                            </li>
                        </ul>
                    </div>
                    <!-- /.navbar-collapse --
                </nav> 
                -->
                
                <div id="page-wrapper">

                    <div class="container-fluid">
                        
                        <div ui-view="content"></div>
                        <!-- <div ng-view=""></div> -->

                    </div>
                    <!-- /.container-fluid -->

                </div>
                <!-- /#page-wrapper -->

            </div>
            <!-- /#wrapper -->

            <!-- jQuery -->
            <script src="theme/js/jquery.js"></script>
            <script src="theme/js/bootstrap-datepicker.js"></script>
            <!-- Bootstrap Core JavaScript -->
            <script src="theme/js/bootstrap.min.js"></script>
        </body>
</html>
