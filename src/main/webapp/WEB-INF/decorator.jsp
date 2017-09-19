<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<html ng-app="appSicosvac">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="">
    	<meta name="author" content="José Antonio Pérez Ozuna">
        
        <title>Sistema de Control y Seguimiento de Vacunación en Menores - <sitemesh:write property='title'/></title>
        <!-- Bootstrap Core CSS -->
        <link href="theme/css/bootstrap.min.css" rel="stylesheet">

        <!-- Custom CSS -->
        <link href="theme/css/sb-admin.css" rel="stylesheet">
        <!-- Custom Fonts -->
        <!--<link href="theme/font-awesome-4.7.0/css/font-awesome.min.css" rel="stylesheet" type="text/css">-->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
        
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.6/jquery.min.js" type="text/javascript"></script>
        <script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/jquery-ui.min.js" type="text/javascript"></script>
        <link href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/themes/base/jquery-ui.css" rel="Stylesheet" type="text/css" />

        <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
            <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
            <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
        <![endif]-->
    
        <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.2/angular.js"></script> 
        <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.2/angular-resource.js"></script>    
        <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/2.5.0/ui-bootstrap-tpls.min.js"></script>
        <script src="https://code.angularjs.org/1.6.2/angular-route.js"></script> 
        <script src="js/app_1.js" type = "text/javascript"></script>
       <!-- <script src="js/factory.js" type = "text/javascript"></script>
        <script src="js/ControladorVacunas.js" type = "text/javascript"></script>
        <script src="js/ControladorInventario.js" type = "text/javascript"></script> -->
        <sitemesh:write property='head'/>
    </head>
    <body>
        <div id="wrapper">
           <!-- Navigation -->
            <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#">SICOSVAC</a>
                </div>
                <!-- Top Menu Items -->
                <ul class="nav navbar-right top-nav">
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-user"></i>&nbsp;Bienvenido:&nbsp;<b class="caret"></b></a>
                        <ul class="dropdown-menu">
                            <li>
                                <a href="PerfilAdmin.jsp"><i class="fa fa-fw fa-user"></i>&nbsp;Perfil&nbsp;</a>
                            </li>
                            <li class="divider"></li>
                            <li>
                                <a href=""><i class="fa fa-fw fa-power-off"></i>&nbsp;Log out&nbsp;</a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <!-- Sidebar Menu Items - These collapse to the responsive navigation menu on small screens -->
                <div class="collapse navbar-collapse navbar-ex1-collapse">
                    <ul class="nav navbar-nav side-nav demo">
                        <li>
                            <a href="index.jsp"><i class="fa fa-home" aria-hidden="true"></i></i>&nbsp;Inicio</a>
                        </li>
                        <li>
                            <a href="javascript:;" data-toggle="collapse" data-target="#Vacunador"><i class="fa fa-eyedropper" aria-hidden="true"></i>&nbsp;&nbsp;Vacunador<i class="fa fa-fw fa-caret-down"></i></a>
                            <ul id="Vacunador" class="collapse">
                                <li>
                                    <a href="ActualizarCartilla.jsp">&nbsp;Actualizar Cartilla de salud</a>
                                </li>
                                <li>
                                    <a href="AdministracionPerfiles.jsp">&nbsp;Administrar Perfiles de menores y tutores</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:;" data-toggle="collapse" data-target="#Administrador"><i class="fa fa-user-md" aria-hidden="true"></i>&nbsp;&nbsp;Administrador<i class="fa fa-fw fa-caret-down"></i></a>
                            <ul id="Administrador" class="collapse">
                                <li>
                                    <a href="ActualizarInventario.jsp">&nbsp;Actualizar Inventario de vacunas</a> 
                                </li>
                                <li>                                    
                                    <a href="AdministracionPersonal.jsp">&nbsp;Administracion Personal</a>                                    
                                </li>
                                <li>                                    
                                    <a href="ReportesVacunas.jsp">&nbsp;Reportes de vacunas aplicadas</a>                                    
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:;" data-toggle="collapse" data-target="#especiales"><i class="fa fa-asterisk" aria-hidden="true"></i>&nbsp;&nbsp;Actividades especiales<i class="fa fa-fw fa-caret-down"></i></a>
                            <ul id="especiales" class="collapse">
                                <li>                                    
                                    <a href="AdministracionVacunas.jsp">&nbsp;Administracion de Vacunas</a>                                    
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href=""><i class="fa fa-fw fa-desktop"></i>&nbsp;Acerca de...</a>
                        </li>
                    </ul>
                </div>
                <!-- /.navbar-collapse -->
            </nav>

            <div id="page-wrapper">

                <div class="container-fluid">
                    
                    <sitemesh:write property='body'/>

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
            </div>
        </div>
    </body>
</html>
