 /* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var appSicosvac = angular.module('appSicosvac',['ngRoute','ngResource','ui.bootstrap','ui.grid','ui.grid.pagination','ui.grid.selection']);

//Directiva para convertir a números los strings de los valores en los "select"
appSicosvac.directive('convertToNumber', function() {
    return {
        require: 'ngModel',
        link: function (scope, element, attrs, ngModel) {                
            ngModel.$parsers.push(function(val) {                    
                return parseInt(val, 10);
            });
            ngModel.$formatters.push(function (val) {                    
                return '' + val;
            });
        }
    };
});

appSicosvac.directive("formatDate", function(){
  return {
   require: 'ngModel',
    link: function(scope, elem, attr, modelCtrl) {
      modelCtrl.$formatters.push(function(modelValue){
        return new Date(modelValue);
      });
    }
  };
});

appSicosvac.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);

appSicosvac.config(['$routeProvider',function($routeProvider) {
        
        $routeProvider.when('/', {
             templateUrl: "home.jsp",
             controller: "ControladorHome"
         });  
        
        $routeProvider.when('/informacion', {
             templateUrl: "info.jsp",
             controller: "ControladorHome"
         });         

        $routeProvider.when('/actualizarCartilla', {
             templateUrl: "ActualizarCartilla.jsp",
             controller: "ControladorActualizaCartilla"
         });
        
        $routeProvider.when('/administracionPerfiles', {
             templateUrl: "AdministracionPerfiles.jsp",
             controller: "ControladorPerfiles"
         });
         
        $routeProvider.when('/altaPerfilTutor', {
             templateUrl: "PerfilTutor.jsp",
             controller: "ControladorTutores"
         });
        
        $routeProvider.when('/modificarPerfilTutor', {
             templateUrl: "ModificarPerfilTutor.jsp",
             controller: "ControladorModificaTutores"
         });
         
        $routeProvider.when('/altaPerfilMenor', {
             templateUrl: "PerfilMenor.jsp",
             controller: "ControladorMenores"
         });
        
        $routeProvider.when('/modificarPerfilMenor', {
             templateUrl: "ModificarPerfilMenor.jsp",
             controller: "ControladorModificaMenores"
         });
         
        $routeProvider.when('/actualizarInventario', {
             templateUrl: "ActualizarInventario.jsp",
             controller: "ControladorInventario"
         });         

        $routeProvider.when('/administracionPersonal', {
             templateUrl: "AdministracionPersonal.jsp",
             controller: "ControladorAdministracionPersonal"
         });     
         
        $routeProvider.when('/reportesVacunas', {
             templateUrl: "ReportesVacunas.jsp",
             controller: "ControladorReportes"
         });            
         
        $routeProvider.when('/administracionVacunas', {
             templateUrl: "AdministracionVacunas.jsp",
             controller: "ControladorAdminVacunas"
         });            
         
        $routeProvider.when('/altaVacuna', {
             templateUrl: "AltaVacuna.jsp",
             controller: "ControladorVacunas"
         });           
         
        $routeProvider.when('/modificarVacuna', {
             templateUrl: "ModificarVacuna.jsp",
             controller: "ControladorVacunas"
         });                    
      
        $routeProvider.when('/registroUsuarios', {
             templateUrl: "RegistroUsuarios.jsp",
             controller: "ControladorRegistroUsuarios"
         });        
        
        $routeProvider.when('/perfilAdmin', {
             templateUrl: "PerfilAdmin.jsp",
             controller: "ControladorPerfilAdmin"
         });           
        //$locationProvider.html5Mode(true);
}]);
    
appSicosvac.factory('servPasaObjeto', function() {
    savedData = {};
    function set(data) {
        savedData = data;
    }
    function get() {
        return savedData;
    }
    return {
        set: set,
        get: get
    };
});

appSicosvac.factory("serviciosVarios",['$location', function($location) {
  function ruta(ruta){
      $location.url(ruta);
      return ruta;
  };
  return{
        ruta:ruta
  };
  }]);

appSicosvac.factory('Vacuna',[
    '$resource',
    function($resource){
        return $resource('vacunas/:idVacuna',{idVacuna: '@_id'},
        {   update: {
                method: 'PUT'
            }
        });
    }
]);

appSicosvac.factory('UltimaVacuna',[
    '$resource',
    function($resource){
        return $resource('vacunas/ultimavacuna');
    }
]);

appSicosvac.factory('VacunaMenor',[
    '$resource',
    function($resource){
        return $resource('vacunasMenores/:idVacunasMenor');
    }
]);

appSicosvac.factory('CatalogoAplicacion',[
    '$resource',
    function($resource){
        return $resource('catalogoAplicaciones/:idCatalogo');
    }
]);
appSicosvac.factory('Recomendacion',[
    '$resource',
    function($resource){
        return $resource('recomendaciones/:idRecomendacion');
    }
]);
appSicosvac.factory('Contraindicacion',[
    '$resource',
    function($resource){
        return $resource('contraindicaciones/:idContraindicacion');
    }
]);
        
appSicosvac.factory('EfectoAdverso',[
    '$resource',
    function($resource){
        return $resource('efectosAdversos/:idEfecto');
    }
]);

appSicosvac.factory('Jurisdiccion',[
    '$resource',
    function($resource){
        return $resource('jurisdicciones/:idJurisdiccion');
    }
]);

appSicosvac.factory('Centro',[
    '$resource',
    function($resource){
        return $resource('centros/:idCentro');
    }
]);

appSicosvac.factory('Inventario',[
    '$resource',
    function($resource){
        return $resource('inventario/:idInventario');
    }
]);

appSicosvac.factory('InventarioDisponible',[
    '$resource',
    function($resource){
        return $resource('inventario/disponible');
    }
]);

appSicosvac.factory('Tutor',[
    '$resource',
    function($resource){
        return $resource('tutores/:idTutor');
    }
]);

appSicosvac.factory('Rol',[
    '$resource',
    function($resource){
        return $resource('roles/:idRol');
    }
]);

appSicosvac.factory('Menor',[
    '$resource',
    function($resource){
        return $resource('menores/:idMenor',{idMenor: '@_id'},
        {   update: {
                method: 'PUT'
            }
        });
    }
]);

appSicosvac.factory('Administrador',[
    '$resource',
    function($resource){
        return $resource('administradores/:idAdministrador',{idAdministrador: '@_id'},
        {   update: {
                method: 'PUT'
            }
        });
    }
]);

appSicosvac.controller('ControladorHome',[function(){
        
}    
]);

appSicosvac.controller('ControladorAdminVacunas',['$scope','$location',function($scope,$location){
    $scope.ruta = function(ruta){
        $location.url(ruta);
    };
}    
]);

appSicosvac.controller('ControladorVacunas',[
    '$scope','$log','$window','$location','Vacuna','VacunaMenor','CatalogoAplicacion','Recomendacion','Contraindicacion','EfectoAdverso','Menor','Inventario','Centro',
    function($scope, $log, $window,$location, Vacuna, VacunaMenor, CatalogoAplicacion, Recomendacion, Contraindicacion, EfectoAdverso, Menor, Inventario, Centro){  
        /*Obtenemos todas las vacunas de la base de datos*/        
        $scope.listaVacunas = Vacuna.query();
        $scope.en_edicion=false;
        /*Declaración de arreglos para crear las tablas dinámicas con los datos adicionales para la vacuna*/
        $scope.dosis = [[]];
        $scope.dosis.length=0;
        $scope.recomendaciones = [[]];
        $scope.recomendaciones.length=0;
        $scope.contraindicaciones = [];
        $scope.contraindicaciones.length=0;
        $scope.efectos = [];
        $scope.efectos.length=0;
        /*Funciones para llenar y vaciar las tablas dinámicas con los datos adicionales para la vacuna*/
        $scope.agregarDosis = function(){
            $scope.errortextD = "";
            if (!$scope.dose || !$scope.edad ) {return;}
            if ($scope.dosis.indexOf($scope.dose) === -1 
                    && $scope.dosis.indexOf($scope.edad) === -1) {                
                $scope.dosis.push([$scope.dose, $scope.edad]);                
                $scope.hayDosis = true;                
                $scope.errortextD = "";
            }else {
                $scope.errortextD = "La dosis ya se encuentra en la lista";
            }	
        };       
        $scope.eliminarDosis = function ( idx ) {
            $scope.dosis.splice(idx, 1);
            if($scope.dosis.length === 0){
                $scope.hayDosis = false;
            }
        };
        
        $scope.agregarRecomendacion = function(){
            $scope.errortextR = "";
            if (!$scope.recomendacion || !$scope.tiempoRecomendacion ) {return;}
            if ($scope.recomendaciones.indexOf($scope.recomendacion) === -1 
                    && $scope.recomendaciones.indexOf($scope.tiempoRecomendacion) === -1) {
                $scope.recomendaciones.push([$scope.recomendacion, $scope.tiempoRecomendacion]);
                $scope.hayRecomendaciones = true;
                $scope.errortextR = "";
            }else {
                $scope.errortextR = "La recomendación ya se encuentra en la lista";
            }	
        };       
        $scope.eliminarRecomendacion = function ( idx ) {
            $scope.recomendaciones.splice(idx, 1);
            if($scope.recomendaciones.length === 0){
                $scope.hayRecomendaciones = false;
            }
        };
        
        $scope.agregarContraindicacion = function(){
            $scope.errortextCI = "";
            if (!$scope.contraindicacion) {return;}
            if ($scope.contraindicaciones.indexOf($scope.contraindicacion) === -1) {
                $scope.contraindicaciones.push($scope.contraindicacion);
                $scope.hayContraindicaciones = true;
                $scope.errortextCI = "";
            }else {
                $scope.errortextCI = "La contraindicación ya se encuentra en la lista";
            }	
        };       
        $scope.eliminarContraindicacion = function ( idx ) {
            $scope.contraindicaciones.splice(idx, 1);
            if($scope.contraindicaciones.length === 0){
                $scope.hayContraindicaciones = false;
            }
        };       
        
        $scope.agregarEfecto = function(){
            $scope.errortextEA = "";
            if (!$scope.efectoAdverso) {return;}
            if ($scope.efectos.indexOf($scope.efectoAdverso) === -1) {
                $scope.efectos.push($scope.efectoAdverso);
                $scope.hayEfectos=true;
                $scope.errortextEA = "";
            }else {
                $scope.errortextEA = "El efecto ya se encuentra en la lista";
            }	
        };        

        $scope.eliminarEfecto = function ( idx ) {
            $scope.efectos.splice(idx, 1);
            if($scope.efectos.length===0){
                $scope.hayEfectos=false;
            }
        };
      
        $scope.confirmaAlta = function(){
            if($scope.dosis.length>0){
                $('#modalConfirmaAlta').modal('show');
            }else{
                $('#modalDosis').modal('show');              
                //return;
            }            
        };
        
        $scope.confirmaEliminacion = function(){
            $('#modalConfirmaEliminar').modal('show');
        };
        
        /*Se guarda la información general de la vacuna*/
        $scope.vacuna = new Vacuna();
        $scope.guardarVacuna = function(){          
            if($scope.en_edicion===false){                
                $scope.vacuna.$save(function(){
                    /*Despues de guardar la vacuna se guardan los datos adicionales*/
                    $scope.idVacuna=$scope.vacuna.idVacuna;
                    //Genera mucho trafico, no se esta usando, se implementó en el API
                    //$scope.guardaNuevoInventario($scope.idVacuna);
                    $scope.guardaAdicionales($scope.idVacuna);
                    $scope.limpiaformulario();
                });            
                $('#modalConfirmaAlta').modal('hide');
            }else{
                $scope.vacuna.$update({idVacuna:$scope.vacuna.idVacuna},function(){
                    $('#modalConfirmaModificacion').modal('show');                    
                });
            }
        };
        
        //Funcional, se conserva como historial, pero no se está usando.
        $scope.guardaNuevoInventario = function(idVacuna){
            //Guarda nuevo inventario de la vacuna por cada centro
            $scope.listaCentros = Centro.query(function(){
                $scope.listaCentros.forEach(function(centro,indice,array){
                    console.log("Centro: "+centro.clues+' Vacuna: '+$scope.idVacuna);
                    $scope.inventario = new Inventario();
                    $scope.inventario.vacuna=idVacuna;
                    $scope.inventario.centro=centro.idCentro;
                    $scope.inventario.cantidad=0;
                    $scope.inventario.$save(function(){
                        $log.debug('Nuevo inventario creado');
                    });
                });
            });                    
        };
        
        $scope.guardaAdicionales = function(idVacuna){
            //Se guardan los datos adicionales asociados a la vacuna
            //Se registran las dosis
            console.log("Dosis "+$scope.dosis.length+' Vacuna '+$scope.vacuna.idVacuna);
            $scope.dosis.forEach(function(registroDosis){                        
                $scope.regDosis = new CatalogoAplicacion();
                $scope.regDosis.vacuna = idVacuna;
                $scope.regDosis.dosis = registroDosis[0];
                $scope.regDosis.edadMeses = registroDosis[1];
                $scope.regDosis.estatus = 1;
                $scope.regDosis.$save(function(){
                    $log.debug('Dosis guardada');
                    //Por cada menor se crea un registro de vacuna por aplicar
                    //Funcional pero no se esta usando, se implementó en el API
                    /*$scope.listaMenores = Menor.query(function(){
                        $scope.listaMenores.forEach(function(menor,indice,array){                                      
                            console.log(idVacuna+' '+menor.nombre+' '+$scope.regDosis.idCatalogo);
                            $scope.vacunaMenor = new VacunaMenor();
                            $scope.vacunaMenor.menor = menor.idMenor;
                            $scope.vacunaMenor.vacuna = idVacuna;
                            $scope.vacunaMenor.catalogoAplicacion = $scope.regDosis.idCatalogo;
                            $scope.vacunaMenor.fechaSugerida = menor.fechaNac+($scope.regDosis.edadMeses*2678400000);
                            $scope.vacunaMenor.estatus="Por aplicar";
                            $scope.vacunaMenor.recibirNotificaciones="SI";
                            $scope.vacunaMenor.$save(function(){
                                $log.debug('Dosis guardada');
                                console.log('vacuna por aplicar guardada: '+$scope.vacunaMenor.idVacunasMenor);
                            });
                        });
                   });*/
                });
            });  
            //Se guardan las recmendaciones asociadas a la vacuna
            console.log("recomendaciones "+$scope.recomendaciones.length+' Vacuna '+idVacuna);
            $scope.recomendaciones.forEach(function(registroRecomendacion){
                $scope.regRecomendacion = new Recomendacion();
                $scope.regRecomendacion.vacuna = idVacuna;
                $scope.regRecomendacion.descripcion = registroRecomendacion[0];
                $scope.regRecomendacion.tiempo = registroRecomendacion[1];
                $scope.regRecomendacion.$save(function(){
                   $log.debug('Recomendacion guardada'); 
                });                        
            });
            //Se guardan las contraindicaciones asociadas a la vacuna
            console.log("contraindicaciones "+$scope.contraindicaciones.length+' Vacuna '+idVacuna);
            $scope.contraindicaciones.forEach(function(registroContraindicacion){                        
                $scope.regContraindicacion = new Contraindicacion();
                $scope.regContraindicacion.vacuna = idVacuna;
                $scope.regContraindicacion.descripcion = registroContraindicacion;
                $scope.regContraindicacion.$save(function(){
                   $log.debug('Contraindicacion guardada'); 
                });                        
            });
            //Se guardan los efectosAdversos asociados a la vacuna
            console.log("efectos "+$scope.efectos.length+' Vacuna '+idVacuna);
            $scope.efectos.forEach(function(registroEfectoAdverso){                        
                $scope.regEfectoAdverso = new EfectoAdverso();
                $scope.regEfectoAdverso.vacuna =  idVacuna;
                $scope.regEfectoAdverso.descripcion = registroEfectoAdverso;
                $scope.regEfectoAdverso.$save(function(){
                   $log.debug('Efecto adverso guardado'); 
                });                        
            });
        };
             
        $scope.editarVacuna = function(vac){            
            $scope.en_edicion=true;
            $scope.vacuna = new Vacuna(vac);
            $scope.listaDosis = CatalogoAplicacion.query({idVacuna:vac.idVacuna});
            $scope.listaRecomendaciones = Recomendacion.query({idVacuna:vac.idVacuna});
            $scope.listaContraindicaciones = Contraindicacion.query({idVacuna:vac.idVacuna});
            $scope.listaEfectosAdversos = EfectoAdverso.query({idVacuna:vac.idVacuna});
            $scope.hayDosis=true;
            $scope.hayRecomendaciones=true;
            $scope.hayContraindicaciones=true;
            $scope.hayEfectos=true;
        };

        $scope.modAgregarDosis = function(vacuna){
            //Se agrega la nueva dosis asociada a la vacuna (Petición directa)
            $scope.nuevaDosis = new CatalogoAplicacion();
            $scope.nuevaDosis.vacuna = vacuna.idVacuna;
            $scope.nuevaDosis.dosis = $scope.dose;
            $scope.nuevaDosis.edadMeses = $scope.edad;
            $scope.nuevaDosis.estatus = 1;
            $scope.nuevaDosis.$save(function(value){
                //Por cada menor se crea un registro de vacuna por aplicar
                //Funcional pero no se esta usando, se implementó en el API
                /*$scope.listaMenores = Menor.query(function(){
                    $scope.listaMenores.forEach(function(menor,indice,array){                                      
                        console.log(idVacuna+' '+menor.nombre+' '+$scope.regDosis.idCatalogo);
                        $scope.vacunaMenor = new VacunaMenor();
                        $scope.vacunaMenor.menor = menor.idMenor;
                        $scope.vacunaMenor.vacuna = vacuna.idVacuna;
                        $scope.vacunaMenor.catalogoAplicacion = $scope.nuevaDosis.idCatalogo;
                        $scope.vacunaMenor.fechaSugerida = menor.fechaNac+($scope.nuevaDosis.edadMeses*2678400000);
                        $scope.vacunaMenor.estatus="Por aplicar";
                        $scope.vacunaMenor.recibirNotificaciones="SI";
                        $scope.vacunaMenor.$save(function(){
                            $log.debug('Dosis guardada');
                            console.log('vacuna por aplicar guardada: '+$scope.vacunaMenor.idVacunasMenor);
                        });
                    });
               });*/
               $scope.dose='';
               $scope.edad='';
               $scope.listaDosis.push(value);
               $log.debug('Dosis guardada');
               $scope.muestraAlertaConfirmacion('modalGenerico','Dosis agregada','Se ha agregado la información de la dosis a la vacuna');
            });            
        };
        
        $scope.modEliminarDosis = function (dosis,vac) {
            if($scope.listaDosis.length>1){
                CatalogoAplicacion.delete(dosis,function(){                            
                    var indice = $scope.listaDosis.findIndex(function(elem){
                        return elem.idCatalogo === dosis.idCatalogo;
                    });
                    $scope.listaContraindicaciones.splice(indice,1);
                    $scope.listaDosis = CatalogoAplicacion.query({idVacuna:vac.idVacuna});
                    $scope.muestraAlertaConfirmacion('modalGenerico','Dosis eliminada','La información de la dosis de la vacuna ha sido eliminada');
                });        
            }else{
                $scope.muestraAlertaConfirmacion('modalGenerico','No se puede eliminar la dosis','Se requiere al menos una dosis para la vacuna');
                return;
            };
        };        

        $scope.modAgregarRecomendacion = function(vacuna){
            //Se guarda la recomendacion asociada a la vacuna (petición directa)
            if (!$scope.recomendacion || !$scope.tiempoRecomendacion ) {return;}
            $scope.nuevaRecomendacion = new Recomendacion();
            $scope.nuevaRecomendacion.vacuna = vacuna.idVacuna;
            $scope.nuevaRecomendacion.descripcion = $scope.recomendacion;
            $scope.nuevaRecomendacion.tiempo = $scope.tiempoRecomendacion;
            $scope.nuevaRecomendacion.$save(function(value){
                $scope.recomendacion = '';
                $scope.listaRecomendaciones.push(value);
                $log.debug('Recomendacion guardada');
                $scope.muestraAlertaConfirmacion('modalGenerico','Recomendación agregada','Se ha agregado la recomendación a la vacuna');
            });                        
        };
        
        $scope.modEliminarRecomendacion = function (recomendacion) {
            Recomendacion.delete(recomendacion,function(){                            
                var indice = $scope.listaRecomendaciones.findIndex(function(elem){
                    return elem.idRecomendacion === recomendacion.idRecomendacion;
                });
                $scope.listaRecomendaciones.splice(indice,1);
                $scope.muestraAlertaConfirmacion('modalGenerico','Recomendación eliminada','La recomendación de la vacuna ha sido eliminada');
            });
        };

        $scope.modAgregarContraindicacion = function(vacuna){
            //Se guarda la contraindicación asociada a la vacuna (petición directa)
            if (!$scope.contraindicacion) {return;}
            $scope.nuevaContraindicacion = new Contraindicacion();
            $scope.nuevaContraindicacion.vacuna = vacuna.idVacuna;
            $scope.nuevaContraindicacion.descripcion = $scope.contraindicacion;
            $scope.nuevaContraindicacion.$save(function(value){
                $scope.contraindicacion = '';
                $scope.listaContraindicaciones.push(value);
                $log.debug('Contraindicación guardada');
                $scope.muestraAlertaConfirmacion('modalGenerico','Contraindicación agregada','Se ha agregado la contraindicación a la vacuna');
            });                        
        };        
        
        $scope.modEliminarContraindicacion = function (contraindicacion) {
            Contraindicacion.delete(contraindicacion,function(){                            
                var indice = $scope.listaContraindicaciones.findIndex(function(elem){
                    return elem.idContraindicacion === contraindicacion.idContraindicacion;
                });
                $scope.listaContraindicaciones.splice(indice,1);
                $scope.muestraAlertaConfirmacion('modalGenerico','Contraindicación eliminada','La contraindicación de la vacuna ha sido eliminada');
            });
        };

        $scope.modAgregarEfecto = function(vacuna){
            //Se guarda el efecto adverso asociada a la vacuna (petición directa)
            if (!$scope.efectoAdverso) {return;}
            $scope.nuevoEfecto = new EfectoAdverso();
            $scope.nuevoEfecto.vacuna = vacuna.idVacuna;
            $scope.nuevoEfecto.descripcion = $scope.efectoAdverso;
            $scope.nuevoEfecto.$save(function(value){
                $scope.efectoAdverso = '';
                $scope.listaEfectosAdversos.push(value);
                $log.debug('Efecto adverso guardado');
                $scope.muestraAlertaConfirmacion('modalGenerico','Efecto adverso agregado','Se ha agregado el efecto adverso a la vacuna');
            });                        
        };

        $scope.modEliminarEfecto = function (efecto) {
            EfectoAdverso.delete(efecto,function(){                            
                var indice = $scope.listaEfectosAdversos.findIndex(function(elem){
                    return elem.idEfecto === efecto.idEfecto;
                });
                $scope.listaEfectosAdversos.splice(indice,1);
                $scope.muestraAlertaConfirmacion('modalGenerico','Efecto adverso eliminado','El efecto adverso de la vacuna ha sido eliminado');
            });
        };        
        
        $scope.eliminarVacuna = function(vacuna){
            Vacuna.delete(vacuna,function(){        
                $('#modalConfirmaEliminar').modal('hide');
                $scope.ruta('/administracionVacunas');
                //$window.location.href = 'AdministracionVacunas.jsp';
            });
        };

        $scope.limpiaformulario = function(){                                
            $scope.dosis.length=0;
            $scope.recomendaciones.length=0;
            $scope.contraindicaciones.length=0;
            $scope.efectos.length=0;                
            $scope.dose='';
            $scope.edad='';
            $scope.recomendacion='';
            $scope.contraindicacion='';
            $scope.efectoAdverso='';
            $scope.altaVacuna.$setPristine();
            $scope.vacuna = new Vacuna();
        };

        $scope.muestraAlertaConfirmacion = function(modal,titulo, mensaje){
            $('#lblModalTitle').text(titulo);
            $('#lblModalBody').text(mensaje);            
            $('#'+modal).modal('show');
        };        

        $scope.ruta = function(ruta){
            $location.url(ruta);
        };        
        
        $scope.alertas = [];
        $scope.agregarAlerta = function(alerta){
            $scope.alertas.push(alerta);
            $scope.avisoAlerta=true;
        };
        $scope.quitarAlerta = function(indice){
            $scope.alertas.splice(indice,1);
        };
    }   
]);

appSicosvac.controller('ControladorInventario',[
    '$scope','$log','$window','Inventario','Vacuna','Jurisdiccion','Centro',
    function($scope, $log, $window, Inventario, Vacuna, Jurisdiccion, Centro){  

        $scope.listaJurisdicciones = Jurisdiccion.query();        
        $scope.cantidades = [[]];
        $scope.cantidades.length=0;        
        
        $scope.llenaListaCentros = function(juris){
            $scope.listaCentros = Centro.query({idJurisdiccion:juris.idJurisdiccion});
        };
        
        $scope.llenaListaVacunas = function(centro){
            $scope.datosCentro = 'Clues: '+centro.clues+
                    '\nNombre: '+centro.nombreCentro+
                    '\nCalle: '+centro.calle+' Num. '+centro.numero+
                    '\nColonia: '+centro.colonia+
                    '\nMunicipio: '+centro.municipio;
            
            $scope.listaVacunas = Inventario.query({idCentro:centro.idCentro});
        };
        
        $scope.muestraDatosVacuna = function(inventario){
            $scope.datosVacuna = 'Nombre: '+inventario.nombre+
                    '\nClave: '+inventario.codigoVacuna+
                    '\n¿Qué es?\n'+inventario.queEs;
        };
        
        $scope.agregarAInventario = function(){
            $scope.inventario.cantidad+=$scope.cantidad;
        };
        
        $scope.confirmarInventario = function() {
           $('#modalConfirmaInventario').modal('show');              
        };
        
        $scope.guardarInventario = function() {
            $('#modalConfirmaInventario').modal('hide');             
            $scope.inventario.$save(function(){                            
                $('#modalConfirmaAltaInventario').modal('show');  
            });            
        };
        /*Funciones para llenar y vaciar la tabla dinamica con las cantidades*/
        $scope.agregarCantidades = function(){
            $scope.errortextD = "";
            if (!$scope.cantidad) {return;}
            if ($scope.cantidades.indexOf($scope.cantidad) === -1
                    && $scope.cantidades.indexOf($scope.inventario.vacuna.nombre) === -1) {                
                $scope.cantidades.push([$scope.inventario.vacuna.nombre, $scope.cantidad]);                
                $scope.hayCantidades = true;                
                $scope.errortextD = "";
            }else {
                $scope.cantidad+=$scope.cantidad;
            }	
        };       
        $scope.eliminarCantidades = function ( idx ) {
            $scope.cantidades.splice(idx, 1);
            if($scope.cantidades.length === 0){
                $scope.hayCantidades = false;
            }
        };        
    }
]);

appSicosvac.controller('ControladorPerfiles',[
    '$scope','$log','$routeParams','$location','$window','Tutor','Menor','servPasaObjeto','serviciosVarios',
    function($scope, $log, $routeParams,$location,$window, Tutor, Menor, servPasaObjeto, serviciosVarios){
        $scope.datosMenor='';
        $scope.datosTutor='';
        
        $scope.enviaObjetoAUrl = function(objeto) {
            servPasaObjeto.set(objeto);
        };
        
        $scope.ruta = function(ruta){
            $location.url(ruta);
        };
          
        $scope.modificarPerfilTutor = function(){
            if($scope.datosTutor.length>0){
                servPasaObjeto.set($scope.tutor[0]);
                $location.url('/modificarPerfilTutor');
            }
        };
        
        $scope.modificarPerfilMenor = function(){
            if($scope.datosMenor.length>0){
                servPasaObjeto.set($scope.menor[0]);
                $location.url('/modificarPerfilMenor');
            }
        };        
        
        $scope.muestraAlertaConfirmacion = function(modal,titulo, mensaje){
            $('#lblModalTitle').text(titulo);
            $('#lblModalBody').text(mensaje);            
            $('#'+modal).modal('show');
        };
              
        $scope.buscaTutor = function(tutorBuscado){
            if(tutorBuscado){
                $scope.tutor =  Tutor.query({curp:tutorBuscado},function(){
                    if($scope.tutor.length>0){
                        $scope.datosTutor = $scope.tutor[0].nombre+' '+$scope.tutor[0].apellidos+
                                '\n'+$scope.tutor[0].calle+' '+$scope.tutor[0].numero+', Colonia '+$scope.tutor[0].colonia+
                                '\n'+$scope.tutor[0].municipio+', '+$scope.tutor[0].estado;
                        servPasaObjeto.set($scope.tutor[0]);
                    }else{
                        $scope.muestraAlertaConfirmacion('modalConfirmaPerfil','Tutor no encontrado','La CURP del tutor no se encuentra registrada, verifique.');
                        $scope.datosTutor="";
                    }
                });
            }
        };
        
        $scope.buscaMenor = function(menorBuscado){
            if(menorBuscado){
                $scope.menor =  Menor.query({curp:menorBuscado},function(){
                    if($scope.menor.length>0){
                        $scope.fechaNac = new Date($scope.menor[0].fechaNac);
                        $scope.fechaNac = $scope.fechaNac.toLocaleDateString("es-Es",{ year: 'numeric', month: 'long', day: 'numeric' });
                        $scope.datosMenor = ' Nombre: '+$scope.menor[0].nombre+' '+$scope.menor[0].apellidos+
                                '\n Fecha de nacimiento: '+$scope.fechaNac+
                                '\n Tutor: '+$scope.menor[0].tutor.nombre+' '+$scope.menor[0].tutor.apellidos+
                                '\n '+$scope.menor[0].municipio+', '+$scope.menor[0].estado;
                    }else{
                        $scope.muestraAlertaConfirmacion('myModal','Menor no encontrado','La CURP del menor no se encuentra registrada, verifique.');
                        $scope.datosMenor="";
                    }
                });
            }
        }; 
    }
]);

appSicosvac.controller('ControladorTutores',[
    '$scope','$log','$window','$location','Tutor','Rol',
    function($scope, $log, $window, $location, Tutor, Rol){ 

        $scope.ruta = function(ruta){
            $location.url(ruta);
        };
        
        $scope.muestraAlertaConfirmacion = function(modal,titulo, mensaje){
            $('#lblModalTitle').text(titulo);
            $('#lblModalBody').text(mensaje);            
            $('#'+modal).modal('show');
        };
        
        $scope.tutor = new Tutor();
            $scope.confirmaAltaPerfilTutor = function(){
                var usuarios=0, curps=0;
                $scope.tutor.fechaNac = new Date($scope.tutor.fechaNac);
                $scope.rol = Rol.get({idRol:4});            
                if(($scope.tutor.usuario === $scope.usuarioConfirma) && $scope.tutor.usuario !== '' && $scope.usuarioConfirma !==''){
                    if(($scope.tutor.password === $scope.passwordConfirma) && $scope.tutor.password !== ''  && $scope.passwordConfirma !== ''){
                        $scope.tutoresPorUsuario = Tutor.query({usuario:$scope.tutor.usuario},function(){
                            usuarios = $scope.tutoresPorUsuario.length;
                            if(usuarios===0){
                                $scope.tutoresPorCurp = Tutor.query({curp:$scope.tutor.curp},function(){
                                    curps=$scope.tutoresPorCurp.length;
                                    if(curps===0){
                                        $scope.tutor.rol=$scope.rol;
                                        $scope.tutor.codigoActivacion=Math.floor(Math.random() * 10000) + 1;
                                        $scope.tutor.activacionEmail=0;
                                        $scope.tutor.activacionAdmin=0;
                                        $scope.tutor.token='';
                                        $scope.tutor.estatus=0;
                                        $scope.tutor.$save(function(){                            
                                            $scope.muestraAlertaConfirmacion('modalConfirmacionError','Perfil guardado','El perfil del tutor se guardó correctamente');                                        
                                        });
                                    }else{
                                        $scope.muestraAlertaConfirmacion('modalConfirmacionError','CURP no aceptada','La CURP ya se encuentra registrada en el sistema');                         
                                    }
                                });
                            }else{
                                $scope.muestraAlertaConfirmacion('modalConfirmacionError','Usuario inválido','El correo electrónico ya se encuentra registrado en el sistema');                         
                            }
                        });                    
                    }else{
                            $scope.muestraAlertaConfirmacion('modalConfirmacionError','Contraseña no confirmada','Las contraseñas introducidas no coinciden');                
                        }
                }else{
                        $scope.muestraAlertaConfirmacion('modalConfirmacionError','Correo no confirmado','Los correos electrónicos introducidos no coinciden');            
                    }
            };
    }
]);

appSicosvac.controller('ControladorModificaTutores',[
    '$scope','$log','$location','Tutor','Rol','servPasaObjeto',
    function($scope, $log, $location, Tutor, Rol,  servPasaObjeto){ 
        $scope.ruta = function(ruta){
            $location.url(ruta);
        };

        $scope.muestraAlertaConfirmacion = function(modal,titulo, mensaje){
            $('#lblModalTitle').text(titulo);
            $('#lblModalBody').text(mensaje);            
            $('#'+modal).modal('show');
        };
        
        $scope.modEmail=false;
        $scope.confirmaEmail = function(){
            $scope.modEmail=true;
        };

        $scope.tutor = new Tutor(servPasaObjeto.get()); 
        //Se debe convertir la fecha de nacimiento a objeto tipo fecha para que el input type="date" pueda aceptarlo.
        $scope.tutor.fechaNac = new Date($scope.tutor.fechaNac);        
        $scope.confirmaModificacionTutor = function(){
            var usuarios=0, curps=0;
            //$scope.tutor.fechaNac = new Date($scope.tutor.fechaNac);
            if($scope.modEmail===false){
                $scope.tutoresPorCurp = Tutor.query({curp:$scope.tutor.curp},function(){
                    curps=$scope.tutoresPorCurp.length;
                    if(curps===0){
                        $scope.tutor.$save(function(){                            
                            $scope.muestraAlertaConfirmacion('modalConfirmacionError','Perfil guardado','El perfil del tutor se guardó correctamente');                                        
                        });
                    }else{
                        if($scope.tutoresPorCurp[0].idTutor===$scope.tutor.idTutor){
                            $scope.tutor.$save(function(){                            
                                $scope.muestraAlertaConfirmacion('modalConfirmacionError','Perfil guardado','El perfil del tutor se guardó correctamente');                                        
                            });
                        }else{                        
                            $scope.muestraAlertaConfirmacion('modalConfirmacionError','CURP no aceptada','La CURP ya se encuentra registrada en el sistema');                         
                        }   
                    }
                });               
            }else{
                if(($scope.tutor.usuario === $scope.usuarioConfirma) && $scope.tutor.usuario !== '' && $scope.usuarioConfirma !== ''){
                        $scope.tutoresPorUsuario = Tutor.query({usuario:$scope.tutor.usuario},function(){
                            usuarios = $scope.tutoresPorUsuario.length;
                            if(usuarios === 0 || $scope.tutoresPorUsuario[0].idTutor === $scope.tutor.idTutor){
                                $scope.tutoresPorCurp = Tutor.query({curp:$scope.tutor.curp},function(){
                                    curps=$scope.tutoresPorCurp.length;
                                    if(curps === 0 || $scope.tutoresPorCurp[0].idTutor === $scope.tutor.idTutor){
                                        $scope.tutor.$save(function(){                            
                                            $scope.muestraAlertaConfirmacion('modalConfirmacionError','Perfil guardado','El perfil del tutor se guardó correctamente');                                        
                                        });
                                    }else{
                                        $scope.muestraAlertaConfirmacion('modalConfirmacionError','CURP no aceptada','La CURP ya se encuentra registrada en el sistema');                         
                                    }
                                });
                            }else{
                                $scope.muestraAlertaConfirmacion('modalConfirmacionError','Usuario inválido','El correo electrónico ya se encuentra registrado en el sistema');                         
                            }
                        });                    
                }else{
                        $scope.muestraAlertaConfirmacion('modalConfirmacionError','Correo no confirmado','Los correos electrónicos introducidos no coinciden');            
                }                
            }
        };        
    }
]);

appSicosvac.controller('ControladorMenores',[
    '$scope','$log','$window','$location','Tutor','Rol','Menor','CatalogoAplicacion','VacunaMenor',
    function($scope, $log, $window,$location, Tutor, Rol, Menor, CatalogoAplicacion, VacunaMenor) { 

        $scope.ruta = function(ruta){
            $location.url(ruta);
        };
        
        $scope.muestraAlertaConfirmacion = function(modal,titulo, mensaje){
            $('#lblModalTitle').text(titulo);
            $('#lblModalBody').text(mensaje);            
            $('#'+modal).modal('show');
        };
        
        $scope.buscaTutor = function(tutorBuscado){
            $scope.tutor =  Tutor.query({curp:tutorBuscado},function(){
                if($scope.tutor.length>0){
                    $scope.datosTutor = $scope.tutor[0].nombre+' '+$scope.tutor[0].apellidos+
                            '\n'+$scope.tutor[0].calle+' '+$scope.tutor[0].numero+', Colonia '+$scope.tutor[0].colonia+
                            '\n'+$scope.tutor[0].municipio+', '+$scope.tutor[0].estado;
                }else{
                    $scope.muestraAlertaConfirmacion('modalConfirmaAltaPerfilMenor','Tutor no encontrado','La CURP del tutor no se encuentra registrada, verifique.');
                    $scope.datosTutor="";
                }
            });
        };
        /*
        $scope.creaCartilla = function(menor){
            //Por cada dosis registrada en el catálogo de aplicaciones se crea un registro de vacuna por aplicar al menor
            //Genera mucho tráfico, no se está usando
            $scope.listaDosis = CatalogoAplicacion.query(function(){
                $scope.listaDosis.forEach(function(dosis,indice,array){                                      
                    console.log(dosis.idVacuna+' '+menor.idMenor+' '+dosis.idCatalogo);
                    $scope.vacunaMenor = new VacunaMenor();
                    $scope.vacunaMenor.fechaSugerida = menor.fechaNac+(dosis.edadMeses*2678400000);
                    $scope.vacunaMenor.estatus="Por aplicar";
                    $scope.vacunaMenor.recibirNotificaciones="SI";
                    $scope.vacunaMenor.vacuna = dosis.idVacuna;
                    $scope.vacunaMenor.catalogoAplicacion = dosis.idCatalogo;                    
                    $scope.vacunaMenor.menor = menor.idMenor;
                    $scope.vacunaMenor.$save(function(){
                        $log.debug('Vacuna por aplicar guardada');
                        console.log('Vacuna por aplicar guardada: '+$scope.vacunaMenor.idVacunasMenor);
                    });
                });
           });
        };*/
        
        $scope.menor = new Menor();        
        $scope.guardaPerfilMenor = function(){
            if($scope.tutor.length>0){
                $scope.menoresPorCurp = Menor.query({curp:$scope.menor.curp},function(){
                    confirm($scope.menoresPorCurp.length);
                    if($scope.menoresPorCurp.length===0){
                        $scope.menor.crip='';
                        $scope.menor.tutor=$scope.tutor[0];
                        $scope.menor.$save(function(menor){
                            //Una vez creado el perfil del menor, se crea pre-llena la cartilla (vacunas por aplicar)
                            //Se pasó la implementación al API
                            //$scope.creaCartilla(menor);
                            $scope.muestraAlertaConfirmacion('modalConfirmaAltaPerfilMenor','Perfil guardado','El perfil del menor se guardó correctamente'); 
                        });                        
                    }else{
                        $scope.muestraAlertaConfirmacion('modalConfirmaAltaPerfilMenor','CURP no aceptada','La CURP del menor ya se encuentra registrada en el sistema');
                    }
                });
            };
        };
    }
]);


appSicosvac.controller('ControladorModificaMenores',[
    '$scope','$log','$location','Tutor','Menor','VacunaMenor','servPasaObjeto', 
    function($scope, $log, $location, Tutor, Menor, VacunaMenor, servPasaObjeto){ 
       
        $scope.ruta = function(ruta){
            $location.url(ruta);
        };
        
        $scope.muestraAlertaConfirmacion = function(modal,titulo, mensaje){
            $('#lblModalTitle').text(titulo);
            $('#lblModalBody').text(mensaje);            
            $('#'+modal).modal('show');
        };
        
        Array.prototype.unique = function(a){
                return function(){
                    return this.filter(a);
                };
            }(function(a,b,c){
                return c.indexOf(a,b+1)<0;
        });
        
        $scope.eliminateDuplicates = function(arr) {
            var i,
            len=arr.length,
            out=[],
            obj={};

            for (i=0;i<len;i++) {
               obj[arr[i]]=0;
            }
            for (i in obj) {
               out.push(i);
            }
            return out;
        };
        
        $scope.vacunas = [];        
        $scope.menor = new Menor(servPasaObjeto.get());
        $scope.listaVacunasMenores = VacunaMenor.query({idMenor:$scope.menor.idMenor},function(){
            $scope.listaVacunasMenores.forEach(function(vacunaMenor,indice){
                $scope.vacunas[indice] = vacunaMenor.vacuna;
                //$scope.vacunas.push([$scope.dose, $scope.edad]);                
            });  
        });
        $scope.vacunas = $scope.vacunas.unique();
        
        //Se debe convertir la fecha de nacimiento a objeto tipo fecha para que el input type="date" pueda aceptarlo.
        $scope.menor.fechaNac = new Date($scope.menor.fechaNac);
        $scope.tutorBuscado = $scope.menor.tutor.curp;
        $scope.tutorAGuardar = $scope.menor.tutor;
        $scope.datosTutor = $scope.menor.tutor.nombre+' '+$scope.menor.tutor.apellidos+
                            '\n'+$scope.menor.tutor.calle+' '+$scope.menor.tutor.numero+', Colonia '+$scope.menor.tutor.colonia+
                            '\n'+$scope.menor.tutor.municipio+', '+$scope.menor.tutor.estado;        
        
        $scope.buscaTutor = function(tutorBuscado){
            $scope.tutor =  Tutor.query({curp:tutorBuscado},function(){
                if($scope.tutor.length>0){
                    $scope.datosTutor = $scope.tutor[0].nombre+' '+$scope.tutor[0].apellidos+
                            '\n'+$scope.tutor[0].calle+' '+$scope.tutor[0].numero+', Colonia '+$scope.tutor[0].colonia+
                            '\n'+$scope.tutor[0].municipio+', '+$scope.tutor[0].estado;
                    $scope.tutorAGuardar = $scope.tutor[0];
                }else{
                    $scope.muestraAlertaConfirmacion('modalConfirmaAltaPerfilMenor','Tutor no encontrado','La CURP del tutor no se encuentra registrada, verifique.');
                    $scope.datosTutor="";
                }
            });
        };
        
        //Crea data Grid con angular ui-grid, funcional pero no se está usando
       /* $scope.llenaCartilla = function(idMenor){
            $scope.listaVacunasMenores = VacunaMenor.query({idMenor:idMenor},function(){                
            });
            console.log($scope.listaVacunasMenores.length);
            $scope.gridOptions = {
                rowHeight: 'auto',
                enableFiltering: false,
                enableSorting: false,
                enableRowSelection: true,
                enableSelectAll: false
            };
            
            $scope.gridOptions.columnDefs = [
              { field:'vacuna.nombre',displayName:'Vacuna' },
              { field:'catalogoAplicacion.dosis',displayName:'dosis'},
              { field:'catalogoAplicacion.edadMeses',displayName:'Edad en meses'},
              { field:'fechaAplicacion',displayName:'Fecha de Aplicación',type: 'date'},
              { field:'fechaSugerida',displayName:'Fecha sugerida',type: 'date'}
            ];            
            
            $scope.gridOptions.data=$scope.listaVacunasMenores;
        };
        $scope.llenaCartilla($scope.menor.idMenor);*/
        
        
        /* 
        //Sin uso      
        $scope.filtraPorVacuna = function(){
            
        };
        
        $scope.filtraPorEstatus = function(){
            $scope.filtroEstatus;   
        };*/
        
        $scope.aplicaFiltro = function(){
            console.log('Menor: '+$scope.menor+'Vacuna: '+$scope.vacuna+' Estatus: '+$scope.filtroEstatus);
            $scope.vacunas.length=0;
            if(!$scope.vacuna && !$scope.filtroEstatus){
                $scope.listaVacunasMenores = VacunaMenor.query({idMenor:$scope.menor.idMenor},function(){
                    $scope.listaVacunasMenores.forEach(function(vacunaMenor,indice){
                        $scope.vacunas[indice] = vacunaMenor.vacuna;
                    });
                });
            }else{
                if(!$scope.vacuna && $scope.filtroEstatus){
                    $scope.listaVacunasMenores = VacunaMenor.query({idMenor:$scope.menor.idMenor,estatus:$scope.filtroEstatus},function(){
                        $scope.listaVacunasMenores.forEach(function(vacunaMenor,indice){
                            $scope.vacunas[indice] = vacunaMenor.vacuna;
                        });
                    });
                } else {
                    if($scope.vacuna && !$scope.filtroEstatus){
                        $scope.listaVacunasMenores = VacunaMenor.query({idMenor:$scope.menor.idMenor,idVacuna:$scope.vacuna.idVacuna},function(){
                            $scope.listaVacunasMenores.forEach(function(vacunaMenor,indice){
                                $scope.vacunas[indice] = vacunaMenor.vacuna;
                            });
                        });                        
                    }else{
                        if($scope.vacuna && $scope.filtroEstatus){
                            $scope.listaVacunasMenores = VacunaMenor.query({idMenor:$scope.menor.idMenor,idVacuna:$scope.vacuna.idVacuna,estatus:$scope.filtroEstatus},function(){
                                $scope.listaVacunasMenores.forEach(function(vacunaMenor,indice){
                                    $scope.vacunas[indice] = vacunaMenor.vacuna;
                                });
                            });                                             
                        }
                    }
                }
            }
        };
                
        $scope.editaVM=false;
        $scope.estatusInicial='';
        $scope.editaVacunaMenor = function(vm){
            $scope.vacunaMenor = new VacunaMenor(vm);
            $scope.vacunaMenor.fechaAplicacion = new Date($scope.vacunaMenor.fechaAplicacion);
            if($scope.vacunaMenor.estatus==='Por aplicar'){
                $scope.editaVM=false;
                $scope.muestraAlertaConfirmacion('modalConfirmacionVM','Acción no permitida','Esta vacuna no se puede modificar porque no ha sido aplicada');                 
            }else{
                $scope.estatusInicial = $scope.vacunaMenor.estatus;
                $scope.editaVM=true;
            }
        };
        
        $scope.confirmaActualizacionVM = function(){
            if($scope.estatusInicial==='Aplicada' && $scope.vacunaMenor.estatus==='Por aplicar'){
                $scope.muestraAlertaConfirmacion('modalConfirmaEstatus','Confirme la acción',"¿Esta seguro que desea cambiar el estatus de esta vacuna a 'Por aplicar'?");                 
            }else{
                $scope.guardaVacunaMenor('Aplicada');
                $scope.editaVM=false;
            }            
        };
        
        $scope.guardaVacunaMenor = function(tipo){
            $('#modalConfirmaEstatus').modal('hide');
            if(tipo==='Aplicada'){
                $scope.vacunaMenor.fechaAplicacion = new Date($scope.vacunaMenor.fechaAplicacion);
            }else{
                $scope.vacunaMenor.fechaAplicacion=null;
            }
            $scope.vacunaMenor.$save(function(value){
                var indice = $scope.listaVacunasMenores.findIndex(function(elem){
                        return elem.idVacunasMenor === $scope.vacunaMenor.idVacunasMenor;
                });
                $scope.listaVacunasMenores[indice] = value;
                $scope.muestraAlertaConfirmacion('modalConfirmacionVM','Información guardada','La aplicación de la vacuna se guardó correctamente');                 
            });
            $scope.editaVM=false;
        };
        
        $scope.guardaPerfilMenor = function(){
            if($scope.menor.tutor.idTutor){
                $scope.menoresPorCurp = Menor.query({curp:$scope.menor.curp},function(){
                    if($scope.menoresPorCurp.length===0 || $scope.menoresPorCurp[0].idMenor === $scope.menor.idMenor){
                        $scope.menor.fechaNac = new Date($scope.menor.fechaNac);
                        $scope.menor.tutor=$scope.tutorAGuardar;
                        $scope.menor.$update({ idMenor: $scope.menor.idMenor },function(){
                            $scope.muestraAlertaConfirmacion('modalConfirmacionVM','Perfil guardado','El perfil del menor se guardó correctamente'); 
                        });                        
                    }else{
                        $scope.muestraAlertaConfirmacion('modalConfirmacionVM','CURP no aceptada','La CURP del menor ya se encuentra registrada en el sistema');
                    }
                });
            };
        };        
    }
]);


appSicosvac.controller('ControladorActualizaCartilla',[
    '$scope','$log','$location','Tutor','Menor','Vacuna','VacunaMenor','CatalogoAplicacion','Inventario','Centro','InventarioDisponible',
    function($scope, $log, $location, Tutor, Menor, Vacuna, VacunaMenor, CatalogoAplicacion, Inventario, Centro, InventarioDisponible) { 
        
        $scope.ruta = function(ruta){
            $location.url(ruta);
        };
        
        $scope.muestraAlertaConfirmacion = function(modal,titulo, mensaje){
            $('#lblModalTitle').text(titulo);
            $('#lblModalBody').text(mensaje);            
            $('#'+modal).modal('show');
        };
        
        $scope.listaCentros = Centro.query();
        
        $scope.llenaListaVacunas = function(centro){
            //agregar centro cuando se implemente
            //$scope.listaVacunas = Inventario.query({idCentro:centro.idCentro});
            if(centro){
                $scope.listaVacunas = InventarioDisponible.query();
            }
        };
        
        $scope.llenaListaDosis = function(vacuna){
            //agregar centro cuando se implemente
            //$scope.listaVacunas = Inventario.query({idCentro:centro.idCentro});            
            if($scope.inventario){
                $scope.listaDosisPorAplicar = CatalogoAplicacion.query({idVacuna:vacuna.idVacuna});                
            }
        };
              
        $scope.muestraDatosVacuna = function(vacuna){
            if(vacuna){
                $scope.datosVacuna = 'Nombre: '+vacuna.nombre+
                        '\nClave: '+vacuna.codigoVacuna+
                        '\n¿Qué es?\n'+vacuna.queEs;
                $scope.vacunaSeleccionada = new Vacuna(vacuna);
                $scope.llenaListaDosis(vacuna);
            }
        };

        $scope.editaVM=false;
        $scope.estatusInicial='';
        $scope.editaVacunaMenor = function(dosis){
            if(dosis){                
                console.log('Menor: '+$scope.menor[0].idMenor+' Vacuna: '+$scope.vacunaSeleccionada.nombre+' Dosis: '+dosis.idCatalogo+' - '+dosis.dosis);
                $scope.vacunaMenor  = VacunaMenor.get({idMenor:$scope.menor[0].idMenor,idVacuna:$scope.vacunaSeleccionada.idVacuna,idCatalogo:dosis.idCatalogo},function(){
                    if($scope.vacunaMenor.estatus==='Por aplicar'){
                        $scope.vacunaMenor.fechaAplicacion = new Date();
                        $scope.editaVM=true;                
                    }else{
                        $scope.vacunaMenor.fechaAplicacion = new Date($scope.vacunaMenor.fechaAplicacion);
                        $scope.muestraAlertaConfirmacion('myModal','Acción no permitida','Esta dosis ya fue aplicada');                 
                        $scope.estatusInicial = $scope.vacunaMenor.estatus;
                        $scope.editaVM=false;
                    }                   
                });
            }else{
                console.log('No hay dosis seleccionada');
            }
        };      
        
        $scope.registraAplicacion = function(){
            $scope.vacunaMenor.fechaAplicacion = new Date($scope.vacunaMenor.fechaAplicacion);
            $scope.vacunaMenor.lugarAplicacion = $scope.inventario.centro.nombreCentro;
            $scope.vacunaMenor.aplicoCs = 'SI';
            $scope.vacunaMenor.estatus = 'Aplicada';
            //console.log($scope.vacunaMenor.fechaAplicacion+'-'+$scope.vacunaMenor.lugarAplicacion+'-'+$scope.vacunaMenor.aplicoCs);
            $scope.vacunaMenor.$save(function(){
                $scope.nuevoInventario = new Inventario($scope.inventario);
                $scope.nuevoInventario.cantidad-=1;
                $scope.nuevoInventario.$save();
                $scope.muestraAlertaConfirmacion('modalConfirmaAplicacion','Vacuna registrada','La aplicacion de esta vacuna se realizo correctamente. Desea Registrar otra vacuna');
            });
        };
        
        $scope.limpiarFormulario = function(){
            $scope.datosVacuna='';
            $scope.datosMenor='';
            $scope.menorBuscado='';
            $scope.vacunaMenor = '';
            $scope.listaDosisPorAplicar='';
            $scope.listaVacunas='';
            $scope.ActualizaCartilla.$setPristine();
            $scope.editaVM=false;
            $('#modalConfirmaAplicacion').modal('hide');
        };
        
        $scope.restarAInventario = function(){
            $scope.inventario.cantidad-=1;
        };

        $scope.buscaMenor = function(menorBuscado){
            if(menorBuscado){
                $scope.menor =  Menor.query({curp:menorBuscado},function(){
                    if($scope.menor.length>0){
                        $scope.fechaNac = new Date($scope.menor[0].fechaNac);
                        $scope.fechaNac = $scope.fechaNac.toLocaleDateString("es-Es",{ year: 'numeric', month: 'long', day: 'numeric' });
                        $scope.datosMenor = ' Nombre: '+$scope.menor[0].nombre+' '+$scope.menor[0].apellidos+
                                '\n Fecha de nacimiento: '+$scope.fechaNac+
                                '\n Tutor: '+$scope.menor[0].tutor.nombre+' '+$scope.menor[0].tutor.apellidos+
                                '\n '+$scope.menor[0].municipio+', '+$scope.menor[0].estado;
                    }else{
                        $scope.muestraAlertaConfirmacion('myModal','Menor no encontrado','La CURP que esta buscando no se ha encontrado, es posible que el menor no este registrado o que este mal escrito, revise');
                        $scope.datosMenor="";
                    }
                });
                //Remplazar 1 por idCentro cuando se implemente
                $scope.llenaListaVacunas(1);
            }
        };   
    }
]);

appSicosvac.controller('ControladorReportes',['$scope','Jurisdiccion','Centro','Vacuna',
    function($scope,Jurisdiccion,Centro,Vacuna){
        $scope.listaJurisdicciones = Jurisdiccion.query();              
        $scope.llenaListaCentros = function(juris){
            $scope.listaCentros = Centro.query({idJurisdiccion:juris.idJurisdiccion});
        };       
    }
]);


appSicosvac.controller('ControladorAdministracionPersonal',['$scope','$location','Jurisdiccion','Centro','Administrador','Rol',
    function($scope,$location,Jurisdiccion,Centro,Administrador,Rol){
        
        $scope.ruta = function(ruta){
            $location.url(ruta);
        };
        
        $scope.muestraAlertaConfirmacion = function(modal,titulo, mensaje){
            $('#lblModalTitle').text(titulo);
            $('#lblModalBody').text(mensaje);            
            $('#'+modal).modal('show');
        };
        
        $scope.listaJurisdicciones = Jurisdiccion.query();              
        $scope.listaRoles = Rol.query();
        $scope.llenaListaCentros = function(juris){
            $scope.editaUsuario=false;
            if($scope.jurisdiccion){
                $scope.listaCentros = Centro.query({idJurisdiccion:juris.idJurisdiccion});
            }            
        };     
        //Pre-llenado - Verificar
        //Se debe incializar centro
        if(!$scope.centro){
            $scope.listaPersonal = Administrador.query({},function(){      
            });
        }else{
            $scope.listaPersonal = Administrador.query({idCentro:$scope.centro.idCentro},function(){  
            });
        }
        
        $scope.aplicaFiltro = function(){
            $scope.editaUsuario=false;
            //console.log('Juris: '+$scope.jurisdiccion+' Centro: '+$scope.centro+' Estatus: '+$scope.filtroEstatus);
            if(!$scope.jurisdiccion && !$scope.centro && !$scope.filtroEstatus){
                $scope.listaPersonal = Administrador.query(function(){        
                });
                $scope.llenaListaPersonal($scope.listaPersonal);                
            }else{
                if($scope.jurisdiccion && !$scope.centro && !$scope.filtroEstatus){
                    $scope.listaPersonal = Administrador.query({idJurisdiccion:$scope.jurisdiccion.idJurisidiccion},function(){
                    });
                    $scope.llenaListaPersonal($scope.listaPersonal);        
                } else {
                    if(!$scope.jurisdiccion && $scope.centro && !$scope.filtroEstatus){
                        $scope.listaPersonal = Administrador.query({idCentro:$scope.centro.idCentro},function(){        
                        });
                        $scope.llenaListaPersonal($scope.listaPersonal);        
                    }else{
                        if(!$scope.jurisdiccion && !$scope.centro && $scope.filtroEstatus){
                            $scope.listaPersonal = Administrador.query({estatus:$scope.filtroEstatus},function(){        
                            });                                             
                            $scope.llenaListaPersonal($scope.listaPersonal);        
                        }else{
                            if(!$scope.jurisdiccion && $scope.centro && $scope.filtroEstatus){
                                $scope.listaPersonal = Administrador.query({idCentro:$scope.centro.idCentro, estatus:$scope.filtroEstatus},function(){        
                                });
                                $scope.llenaListaPersonal($scope.listaPersonal);        
                            }else{
                                if($scope.jurisdiccion && $scope.centro && $scope.filtroEstatus){
                                    $scope.listaPersonal = Administrador.query({idCentro:$scope.centro.idCentro, estatus:$scope.filtroEstatus},function(){      
                                    });
                                    $scope.llenaListaPersonal($scope.listaPersonal);        
                                }                                
                            }
                        }
                    }
                }
            }
        };        

        //$scope.listaPersonal = Administrador.query(function(){});
        //Se configura inicializa el GRID
        $scope.gridOptions = {
            rowHeight: 'auto',
            paginationPageSizes:false,
            paginationPageSize:6,
            enableFiltering: false,
            enableSorting: true,
            enableHiding: false,
            enableRowSelection: true,
            enableRowHeaderSelection: false,
            multiSelect:false,
            enableSelectAll: false,
            noUnselect:true
        };
        $scope.gridOptions.columnDefs = [
          { field:'nombre',displayName:'Nombre'},
          { field:'apellidos',displayName:'Apellidos'},
          { field:'username',displayName:'Usuario'}
        ];     
        //Implementacion de evento al hacer click en una fila
        $scope.gridOptions.onRegisterApi = function( gridApi ) {
        $scope.gridApi = gridApi;
           gridApi.selection.on.rowSelectionChanged($scope,function(row){
               $scope.editaAdministrador(row.entity);
          });
        };
       
        //Funcion que vuelve a generar el grid para usarse cada vez que se actualice la info.
        $scope.llenaListaPersonal = function(datos){
            $scope.gridOptions.columnDefs = [
              { field:'nombre',displayName:'Nombre'},
              { field:'apellidos',displayName:'Apellidos'},
              { field:'username',displayName:'Usuario'}
            ];                        
            $scope.gridOptions.data = datos;
        };            
        
        $scope.llenaListaPersonal($scope.listaPersonal);
        
        $scope.editaUsuario=false;
        $scope.editaAdministrador = function(administrador){
            $scope.editaUsuario=true;
            $scope.administrador = new Administrador(administrador);
        };
        
        $scope.confirmaModificacionUsuario = function(){
            $('#myModal').modal('hide');
            if($scope.administrador.estatus){
                $scope.administrador.$save(function(value){
                    var indice = $scope.listaPersonal.findIndex(function(elem){
                            return elem.idAdministrador === $scope.administrador.idAdministrador;
                    });
                    $scope.listaPersonal[indice] = value;
                    $scope.muestraAlertaConfirmacion('myModal','Información guardada','Los datos del usuario se modificaron correctamente');                 
                });
                $scope.editaUsuario=false;
                $scope.limpiaFormulario();
            }else{
                $scope.muestraAlertaConfirmacion('myModal','Error','Debe asignar un estatus al usuario');                 
            }
        };
        
        $scope.limpiaFormulario = function(){
            $scope.administrador='';
            $scope.administraUsuario.$setPristine();            
        };
    }
]);


appSicosvac.controller('ControladorRegistroUsuarios',['$scope','$location','Jurisdiccion','Centro','Administrador','Rol',
    function($scope,$location,Jurisdiccion,Centro, Administrador,Rol){
        
        $scope.ruta = function(ruta){
            $location.url(ruta);
        };
        
        $scope.muestraAlertaConfirmacion = function(modal,titulo, mensaje){
            $('#lblModalTitle').text(titulo);
            $('#lblModalBody').text(mensaje);            
            $('#'+modal).modal('show');
        };
        
        $scope.listaJurisdicciones = Jurisdiccion.query();              
        $scope.listaRoles = Rol.query();
        $scope.llenaListaCentros = function(juris){
            $scope.datosCentro = '';
            $scope.listaCentros = Centro.query({idJurisdiccion:juris.idJurisdiccion});
        };
        
        $scope.llenaDatosCentro = function(centro) {
            if(centro){
                $scope.datosCentro = 'Clues: '+centro.clues+
                    '\nNombre: '+centro.nombreCentro+
                    '\nCalle: '+centro.calle+' Num. '+centro.numero+
                    '\nColonia: '+centro.colonia+
                    '\nMunicipio: '+centro.municipio;            
            }
        };
        
        $scope.administrador = new Administrador();
        $scope.confirmaRegistroUsuario = function(){
            if(!$scope.centro){
                $scope.muestraAlertaConfirmacion('myModal','Error','Debe asignar un Centro de Responsabilidad');
            }else{
                if(!$scope.rol){
                    $scope.muestraAlertaConfirmacion('myModal','Error','Debe asignar un Rol al usuario');
                }else{
                    $scope.administrador.centro = $scope.centro.idCentro;
                    $scope.administrador.rol = $scope.rol.idRol;
                    $scope.administrador.codigoActivacion = Math.floor(Math.random() * 10000) + 1;
                    $scope.administrador.activacionEmail = 1;
                    $scope.administrador.activacionAdmin = 1;
                    $scope.administrador.estatus = 1;
                    $scope.administrador.$save(function(){
                        $scope.muestraAlertaConfirmacion('myModal','Datos guardados','El usuario se ha registrado correctamente');
                    });
                }
            }
        };
    }
]);

appSicosvac.controller('ControladorPerfilAdmin',[function(){
        
}    
]);
