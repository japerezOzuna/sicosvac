
var appSicosvac = angular.module('appSicosvac',['ngRoute','ngResource','ui.router','ui.bootstrap','ui.grid','ui.grid.pagination','ui.grid.selection']);

appSicosvac.run(function($rootScope, $state) {
        //$state.go('login');
	$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
        //$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';	
		if (!$rootScope.authenticated) {
			if (toState.name !== 'login') {
				event.preventDefault();
				//return $state.go('login');
                                $state.go('login');
			}
		} else {
			if (toState.data && toState.data.rol) {
				if (toState.data.rol !== $rootScope.usuario.principal.rol.descripcion){
					console.log("Acceso denegado");
                                        event.preventDefault();
					$state.transitionTo('acceso-denegado');
				}
			}else{
              			if (toState.data && toState.data.rol1 ) {
                                    if ((toState.data.rol1 !== $rootScope.usuario.principal.rol.descripcion) 
                                        && (toState.data.rol2 !== $rootScope.usuario.principal.rol.descripcion)){
					console.log("Acceso denegado");
                                        event.preventDefault();
					$state.transitionTo('acceso-denegado');
				}
                            }            
                        }
		}
	});
});


//Directiva para agregar seguridad a elementos de la interfaz - No terminada
appSicosvac.directive('access', function () {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                var roles = attrs.access.split(',');
                if (roles.length > 0) {
                    if (roles[0]) {
                        element.removeClass('hide');
                    } else {
                        element.addClass('hide');
                    }
                }
            }
        };
    });

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

// Creating the Angular Service for storing logged user details
appSicosvac.service('AuthService', function() {
	return {
		user : null
	};
});


//Ruteo Original 
/*
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
*/

//Ruteo por estados
//Proveedor de estados para cargar paginas "partials" en la plantilla principal
//Sustituye al proveedor de rutas implementado anteriormente
appSicosvac.config(function($stateProvider, $urlRouterProvider,$httpProvider) {
    
    $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
	
    $urlRouterProvider.otherwise('pagina-no-encontrada');
	$stateProvider.state('nav', {
		abstract : true,
		url : '',
		views : {
			'nav@' : {
				templateUrl : 'views/nav.html',
				controller : 'navigation'
			}
		}        
        }).state('login', {
                parent : 'nav',
		url : '/login',
		data : {
		//	rol : 'VACUNADOR'
		},                 
		views : {
			'content@' : {
				templateUrl : 'views/login.jsp',
				controller : 'navigation'
			}
		}
        }).state('home', {
                parent : 'nav',
		url : '/',
		data : {
		//	rol : 'VACUNADOR'
		},                 
		views : {
			'content@' : {
				templateUrl : 'views/home.jsp',
				controller : 'ControladorHome'
			}
		}
	}).state('informacion', {
                parent : 'nav',
		url : '/informacion',
		data : {
		//	rol : 'VACUNADOR'
		},                 
		views : {
			'content@' : {
				templateUrl : 'views/info.jsp',
				controller : 'ControladorHome'
			}
		}                
	}).state('actualizarCartilla', {
                parent : 'nav',
		url : '/actualizarCartilla', 
		data : {
		//	rol : 'VACUNADOR'
		},                 
		views : {
			'content@' : {
				templateUrl : 'views/ActualizarCartilla.jsp',
				controller : 'ControladorActualizaCartilla'
			}
		}
	}).state('administracionPerfiles', {
                parent : 'nav',
		url : '/administracionPerfiles',
		data : {
		//	rol : 'VACUNADOR'
		},                
		views : {
			'content@' : {
				templateUrl : 'views/AdministracionPerfiles.jsp',
				controller : 'ControladorPerfiles'
			}
		}
	}).state('altaPerfilTutor', {
                parent : 'nav',
		url : '/altaPerfilTutor',
		data : {
		//	rol : ['VACUNADOR','ADMIN']
		},                
		views : {
			'content@' : {
				templateUrl : 'views/PerfilTutor.jsp',
				controller : 'ControladorTutores'
			}
		}
	}).state('modificarPerfilTutor', {
                parent : 'nav',
		url : '/modificarPerfilTutor',
		data : {
		//	rol : ['VACUNADOR','ADMIN']
		},                
		views : {
			'content@' : {
				templateUrl : 'views/ModificarPerfilTutor.jsp',
				controller : 'ControladorModificaTutores'
			}
		}
	}).state('altaPerfilMenor', {
                parent : 'nav',
		url : '/altaPerfilMenor',
		data : {
		//	rol : ['VACUNADOR','ADMIN']
		},                
		views : {
			'content@' : {
				templateUrl : 'views/PerfilMenor.jsp',
				controller : 'ControladorMenores'
			}
		}    
	}).state('modificarPerfilMenor', {
                parent : 'nav',
		url : '/modificarPerfilMenor',
		data : {
		//	rol : ['VACUNADOR','ADMIN']
		},                
		views : {
			'content@' : {
				templateUrl : 'views/ModificarPerfilMenor.jsp',
				controller : 'ControladorModificaMenores'
			}
		}
	}).state('actualizarInventario', {
                parent : 'nav',
		url : '/actualizarInventario',
		data : {
			rol1 : 'SUPER_ADMIN',
                        rol2 : 'ADMIN'
		},                
		views : {
			'content@' : {
				templateUrl : 'views/ActualizarInventario.jsp',
				controller : 'ControladorInventario'
			}
		}
	}).state('administracionPersonal', {
                parent : 'nav',
		url : '/administracionPersonal',
		data : {
			rol1 : 'SUPER_ADMIN',
                        rol2 : 'ADMIN'
		},                
		views : {
			'content@' : {
				templateUrl : 'views/AdministracionPersonal.jsp',
				controller : 'ControladorAdministracionPersonal'
			}
		}
	}).state('reportesVacunas', {
                parent : 'nav',
		url : '/reportesVacunas',
		data : {
			rol1 : 'SUPER_ADMIN',
                        rol2 : 'ADMIN'
		},                
		views : {
			'content@' : {
				templateUrl : 'views/ReportesVacunas.jsp',
				controller : 'ControladorReportes'
			}
		}                
	}).state('administracionVacunas', {
                parent : 'nav',
		url : '/administracionVacunas',
		data : {
                    rol : 'SUPER_ADMIN'
		},                
		views : {
			'content@' : {
				templateUrl : 'views/AdministracionVacunas.jsp',
				controller : 'ControladorAdminVacunas'
			}
		}
	}).state('altaVacuna', {
                parent : 'nav',
		url : '/altaVacuna',
		data : {
                    rol : 'SUPER_ADMIN'
		},                
		views : {
			'content@' : {
				templateUrl : 'views/AltaVacuna.jsp',
				controller : 'ControladorVacunas'
			}
		}                
	}).state('modificarVacuna', {
                parent : 'nav',
		url : '/modificarVacuna',
		data : {
                    rol : 'SUPER_ADMIN'
		},                
		views : {
			'content@' : {
				templateUrl : 'views/ModificarVacuna.jsp',
				controller : 'ControladorVacunas'
			}
		}                                
	}).state('registroUsuarios', {
                parent : 'nav',
		url : '/registroUsuarios',
		data : {
			rol1 : 'SUPER_ADMIN',
                        rol2 : 'ADMIN'
		},                
		views : {
			'content@' : {
				templateUrl : 'views/RegistroUsuarios.jsp',
				controller : 'ControladorRegistroUsuarios'
			}
		}                
	}).state('perfilAdmin', {
                parent : 'nav',
		url : '/perfilAdmin',
		data : {
		//	rol : ['VACUNADOR','ADMIN']
		},                
		views : {
			'content@' : {
				templateUrl : 'views/PerfilAdmin.jsp',
				controller : 'ControladorPerfilAdmin'
			}
		}                                
        }).state('pagina-no-encontrada', {
                parent : 'nav',
		url : '/pagina-no-encontrada',
		data : {
		//	rol : ['VACUNADOR','ADMIN']
		},                
		views : {
			'content@' : {
				templateUrl : 'views/home.jsp',
				controller : 'ControladorHome'
			}
		}                                

	}).state('acceso-denegado', {
                parent : 'nav',
		url : '/',
		views : {
			'content@' : {
				templateUrl : 'views/AccesoDenegado.html',
				controller : 'ControladorHome'
			}
		}
	});

        
});


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

appSicosvac.factory("serviciosVarios",['$state', function($state) {
  function ruta(ruta){
      $state.go(ruta);
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
appSicosvac.controller('ControladorHome',['$rootScope', '$location','$http', '$scope', '$state', 'AuthService',  function($rootScope, $location, $http, $scope, $state, AuthService) {
    //$scope.user = AuthService.user;    
    
        $scope.generaPDF = function () {
            var doc = new jsPDF();
            doc.fromHTML($('#contenido').get(0), 15, 15, {'width': 170});
            doc.save('historial' + '.pdf');
        };
}    
]);

appSicosvac.controller('ControladorAdminVacunas',['$scope','$state',function($scope,$state){
    $scope.ruta = function(ruta){
        $state.go(ruta);
    };
}    
]);

appSicosvac.controller('ControladorVacunas',[
    '$scope','$log','$state','Vacuna','VacunaMenor','CatalogoAplicacion','Recomendacion','Contraindicacion','EfectoAdverso','Menor','Inventario','Centro',
    function($scope, $log, $state, Vacuna, VacunaMenor, CatalogoAplicacion, Recomendacion, Contraindicacion, EfectoAdverso, Menor, Inventario, Centro){  
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
        $scope.vacuna.aplicadaXCS = 'NO';
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
                    //console.log("Centro: "+centro.clues+' Vacuna: '+$scope.idVacuna);
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
            //console.log("Dosis "+$scope.dosis.length+' Vacuna '+$scope.vacuna.idVacuna);
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
            //console.log("recomendaciones "+$scope.recomendaciones.length+' Vacuna '+idVacuna);
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
            //console.log("contraindicaciones "+$scope.contraindicaciones.length+' Vacuna '+idVacuna);
            $scope.contraindicaciones.forEach(function(registroContraindicacion){                        
                $scope.regContraindicacion = new Contraindicacion();
                $scope.regContraindicacion.vacuna = idVacuna;
                $scope.regContraindicacion.descripcion = registroContraindicacion;
                $scope.regContraindicacion.$save(function(){
                   $log.debug('Contraindicacion guardada'); 
                });                        
            });
            //Se guardan los efectosAdversos asociados a la vacuna
            //console.log("efectos "+$scope.efectos.length+' Vacuna '+idVacuna);
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
                $scope.ruta('administracionVacunas');
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
            $state.go(ruta);
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
    '$scope','$rootScope','$log','$state','Inventario','Vacuna','Jurisdiccion','Centro',
    function($scope,$rootScope, $log, $state, Inventario, Vacuna, Jurisdiccion, Centro){  
        $scope.ruta = function(ruta){
            $state.go(ruta);
        };

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
        
        if($rootScope.usuario.principal.rol.descripcion==='ADMIN'){
            $scope.jurisdiccion = $rootScope.usuario.principal.centro.jurisdiccion;
            $scope.centro = $rootScope.usuario.principal.centro;
            $scope.llenaListaVacunas($scope.centro);
            $scope.admin = true;            
        }else{
            $scope.listaJurisdicciones = Jurisdiccion.query();        
        }        
        
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
    '$scope','$log','$routeParams','$state','$window','Tutor','Menor','servPasaObjeto','serviciosVarios',
    function($scope, $log, $routeParams,$state,$window, Tutor, Menor, servPasaObjeto, serviciosVarios){
        $scope.datosMenor='';
        $scope.datosTutor='';
        
        $scope.enviaObjetoAUrl = function(objeto) {
            servPasaObjeto.set(objeto);
        };
        
        $scope.ruta = function(ruta){
            $state.go(ruta);
        };
          
        $scope.modificarPerfilTutor = function(){
            if($scope.datosTutor.length>0){
                servPasaObjeto.set($scope.tutor[0]);
                $state.go('modificarPerfilTutor');
            }
        };
        
        $scope.modificarPerfilMenor = function(){
            if($scope.datosMenor.length>0){
                servPasaObjeto.set($scope.menor[0]);
                $state.go('modificarPerfilMenor');
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
    '$scope','$log','$window','$state','Tutor','Rol',
    function($scope, $log, $window, $state, Tutor, Rol){ 

        $scope.ruta = function(ruta){
            $state.go(ruta);
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
    '$scope','$log','$state','Tutor','Rol','servPasaObjeto',
    function($scope, $log, $state, Tutor, Rol,  servPasaObjeto){ 
        $scope.ruta = function(ruta){
            $state.go(ruta);
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
    '$scope','$log','$window','$state','Tutor','Rol','Menor','CatalogoAplicacion','VacunaMenor',
    function($scope, $log, $window,$state, Tutor, Rol, Menor, CatalogoAplicacion, VacunaMenor) { 

        $scope.ruta = function(ruta){
            $state.go(ruta);
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
    '$rootScope','$scope','$log','$state','Tutor','Menor','VacunaMenor','servPasaObjeto', 
    function($rootScope,$scope, $log, $state, Tutor, Menor, VacunaMenor, servPasaObjeto){ 
       
        $scope.ruta = function(ruta){
            $state.go(ruta);
        };
        
        $scope.imprimeHistorial = function(){
            $('#modalImprimeHistorial').modal('show');;
        };
        
        $scope.generaPDF = function (menor) {
            var f = new Date();
            var fn = new Date(menor.fechaNac);
            var imgData = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/4RDoRXhpZgAATU0AKgAAAAgABAE7AAIAAAAKAAAISodpAAQAAAABAAAIVJydAAEAAAAUAAAQzOocAAcAAAgMAAAAPgAAAAAc6gAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEJMQUNLIEJPWAAABZADAAIAAAAUAAAQopAEAAIAAAAUAAAQtpKRAAIAAAADNjQAAJKSAAIAAAADNjQAAOocAAcAAAgMAAAIlgAAAAAc6gAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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ZGMvZWxlbWVudHMvMS4xLyI+PGRjOmNyZWF0b3I+PHJkZjpTZXEgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj48cmRmOmxpPkJMQUNLIEJPWDwvcmRmOmxpPjwvcmRmOlNlcT4NCgkJCTwvZGM6Y3JlYXRvcj48L3JkZjpEZXNjcmlwdGlvbj48L3JkZjpSREY+PC94OnhtcG1ldGE+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw/eHBhY2tldCBlbmQ9J3cnPz7/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAC0AwkDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9av8Agv8AftDftafs/wDxa+AE3wg+N/xG+Fnwz8ZfDrxJFHpngHxBf+Ff7R8deGPEofxLfapqOjy2t7qf/FP+JPBdvaWV5cS2un+Rcz2kMUuoXby/z9f8PFf28/8Ao8H9ov8A8Oz4y/8AltX9T/8AwcRfCH/hNv2L/C3xRs7XzNR+CvxZ0G/vrsJu+y+EvHtpdeDtUjJAzGLnxTc+BjvJ2EwBCpZ0ZP4k65Kt1N6uzs1q+3r3R10rOC0V1dPRd/Tsz7f0b/gpV+31oerabrNr+118ebq50u+tr+C21n4ieINe0m4ltZUmSHUtF1m7vtK1WxlZAlzYajZ3NndRF4Z4ZI2ZT/oY/BH4kWfxj+DPwm+LVgIVs/ib8NvBHj6COAkxQL4u8N6brxtlDM7obV75rd45GMsTxNHL+8RhX+XfX9+P/BD74q/8LP8A+CdXwitLi5+1ar8LdX8a/CrVnL7jH/YPiC51vw/bFSSY/svgzxL4Zt1Qk5SNZFCo6qtUZPmabburq7b2fm30ZNaK5U0krOzsktGvJLqj9b6KKK6TmCv4Tv8AgpB/wUs/ayvP21Pj/oHwo/aK+KXw9+HHw98e6v8ADTwr4a+H/jHVvC2hww+Apv8AhGdY1BodEubRdTu9Y8RadrGqy6nevd3Ekd5FbW86adbWVvB/b78SfG+mfDP4dePviRrRA0b4f+CvFPjfViziNRpnhTQ7/Xr8tIQQgFrYSkuQQo+Yjiv8uvxFr2p+KfEGueJ9auDd6z4j1jU9e1a6bO651PV72fUL+4bJJzNdXEshySctyT1rCvJpRSbV227abafmb0IpuTaTskldX316+SPrX/h4r+3n/wBHg/tF/wDh2fGX/wAtq+8/+CYv7Yf7dfxn/bt/Z0+HWpftO/Gjxd4d1nxlc3vjHw94t8b654o8Pap4K8OaBrHiXxbZ6jpWtXd7Yf6XoOkX1rZXjRLc2WoT2lxYzRXqW7V+H9f0Xf8ABuB8If8AhJ/2mPjL8Zbu18+w+FHwrtfDWnzMny2vif4n64i2dzFIR/rl8N+DfFdmyKf9VqLFsfLnGDk5xV3uur6avr5G0+VQk7LZ9Fu9F08z+zKvkv8AbF/bS+CP7EHwuk+Jfxk1qZZL+W40/wAF+CNEWC78Y+PtcghSaTS/DunTz28QgtElhm1jWr+e00fRrea3N7drdXunWd79YySRxRvLK6RRRI0kkkjKkccaKWd3diFREUFmZiFVQSSAK/zlv+CkX7YGu/toftU/EH4kyapc3Hw90LU73wX8HtIMr/YdJ+HehX1xb6VfQWrErDqHi2VZvFmtuTJL/aGrNZLO9jp+nxQdNSfItN3ov1fyOanDneuy1f6L5/kfYH7S/wDwXk/bW+NWpalY/C3WdK/Zy8BTSyR2Oj+BLWz1fxpLYlmMX9tfELXrCbUf7QXILXfhHTvB0RVUjNs+JJJvyx8YftG/tCfEO5mvPHvx1+MXjS5nYtLN4q+JfjPX3fJJ251TWroKgzhI1ARFwqKqgAeM0VyOUpbtv5/pt+B1qMY7JL5a/fv+Jqtr2uM5kbWdVaQnJkbUbwuTnOSxmLE55znOa2LDx/470plfS/Gvi3TXT7j2HiTWbNlx02tb3sZXHsRXJUUhn0V4Y/a+/ax8FuknhL9pv9oDw35ZBEei/GL4hafbsBj5Jba28Qx280ZwA0U0TxsOGQjiv36/4Ilf8FBv2u/jb+1iPgl8ZfjJr/xR+H+q/DPxjraWPjG20nUtW03WvDz6Tc6fqVj4lXT4fELOYpbuzubS91O7sLiG6aWS1N3Ba3EH8vdftv8A8G/gJ/4KF6PgE4+EHxNJ9h9n0gZPoMkD6kDvWlNvniruzfd+fmRUS5JaLZ9F/kf3U1+X3/BWv9trxp+wz+y/a/ED4Z6fo978SfHnj7SPht4SvNetG1HSvDcmoaJ4h8Q6p4nuNLEsEeqTafpvhyaz02yuJvsg1bU7C8vra/sLS60+6/UGv51v+Dkr/k074Hf9nD2X/qtvH9dU21CTWjS0f3HJBJzinqm9V95/OJ43/wCCpv8AwUL8fz3Fxrn7Wfxc05rhnZ4/BGtW3w2gj3nJW3g+Hll4Yit1XoghVNgHBzzXztrn7T/7S3idnfxL+0P8c/ELyFjI2ufFrx9qzOW+8Xa/8QXBYt/EWJJ714ZRXE5Se7b+b/zO1RS2SXyX+R1N9458a6oxfU/GHinUXb7zX3iDVrtj9WuLuQn8TWfb+I/ENpIJrXXtZtpVYMstvql9DIGHIYPHOrBgQMEHI9axqKQz33wX+1Z+098OZ4bjwH+0T8b/AAg8LB0Tw98U/G+lWzY/gms7TW4rS5hYfK8FxDLDIuUkjZSRX6R/Ab/gvB+3n8Ibyxt/G3irw18fPCsDxx3GjfEvw/Y2uufZAQZRYeNPCUOg64L9wD5V74iPieKJmJexmQKg/F+iqUpLaTXzf5bCcYvdJ/Jfnv8Aif6Cf7CP/BWv9mz9uKS18HafNc/Cb43NbNNL8J/GmoWksutmCJp7yX4f+J4o7Ow8ZwWsKyTTWX2PRvE8VvBdXsvhuPTbaS/P6m1/lY6PrGr+HtW0zX9A1TUNE1zRNQs9W0bWdJvLjTtU0rVNPuI7uw1HTb+0khurK+srqKK5tLu2ljnt540likR0Vh/e9/wR/wD+CgF1+2/8ALvTfiDeW0nx5+DUmleHPiNLGkNsfF+k6hBcHwr8RIbOFY4YJtdj0/UNP8QW9oi28HiLSb68ht9P0/V9LsouinV5vdlv0ff/AIP5nNUpcvvR26rt/wAD8j9cKKKK2MQooooAKKKKACiiigAooooAK+bf2qP2r/gv+xz8KdS+Lnxs8RHSNDt5f7P0PRNOjivvFPjPxDLDLNaeGvCejvPbHUtVuUiklkeae103TbSOfUdYv9P023nu4/pKv8/f/gsZ+1nrv7T/AO2f8RNKi1Wab4Z/AvW9a+Enw50iOZm06N/Dd+dO8a+Joo1b7PPeeK/Fdhe3C6kkay3Hh6x8NWMjyx6ZA5ipPkjdbvRf5/I0pw55Wey1f+XzPcv2p/8AgvX+2B8atT1PSfgteWH7N/w7eWWGwtfCkVprfxFv7Hcwjl1vx3q1lK1heOAkoHg3S/DT2mfsr32oqr3M/wCP3jz4y/F74p3U198Tfip8RviJeXEnmzXPjjxt4l8VzySbt25pNd1O/YkMcrzhf4QABX0v+wV+wn8T/wBvj4xP8NPAl7aeF/Dfh7T4df8AiP8AETVbOa/0rwX4elufstu0dhDNavrPiHWLgS23h7w/HeWLajLb3lzcX2n6Xp2pajZ/1pfCX/ggV/wT++H+mWcPjnwx48+NmtxxRteat438e+IfD9pLeBR5sllonw4vPBtvbWRkyYLLULjWJI49sdxe3jBpX51GpU1vp3b0+SX+Ru5U6elteyV383/mz+E2nI7xuskbtHIjBkdGKujA5DKykFWB5BBBB6V/ogQf8Eiv+CcFvGIo/wBlTwKygAAz6x44uZMD1mufFUszH1ZnLHuaqXX/AAR+/wCCbd4CJf2V/CCBhg/ZfE3xGsTz6Gy8Z25U+6kEdqfsJd4/j/kL28O0vuX+Z/Ar4c+Nfxl8HPG/hH4t/E3ws8JBhfw5498VaG8RX7pjbTNVtTGR2KkY7V/Vj/wb2/tPftBfHC8/aT8GfGb4u+O/itovgvSvhlrPhR/iH4i1LxfrGh3et3fjSx1aOz8Qa7Pe641jewaXpu7TrnULiytpLJJbGC1ee8a5/QjUv+CI/wDwTK1IMR+ze+nStn99pvxb+N1uVz/dgf4jzWYx2/0b65FfTH7KP7B/7M37FSeNT+z74GvPC918QZNHPinUdV8T+I/FN/fW3h8aidG0+G48Qalf/YbGxk1bUphFZpC91Ndl76W6NvZi3uFOcZJtprW9m+3Z+ZE6kJRaSd9LNpd++59hUUUVuYBRRRQAUUUUAFFFFABX4J/8HFt5d2v7CPgyC2uri3h1H9pTwBZ6hFDNJHHe2ieAfitqCWt0iMFuLdL+wsrxYZQ0a3VpbThRLDGy/vZX4Ff8HGn/ACYt4A/7Od8B/wDqtfjDUT+CX+Fl0/jj6/oz+Mn4a3l3p/xG8AX9hcz2V9Y+NvCt5ZXlrLJBdWl3ba7YTW9zbTxMssM8EyJLDLGyyRyIrowZQR/qV1/lmeAP+R78Ff8AY2+HP/TxZV/qZ1lQ+1/27+prX+z/ANvfoFFFFdBzhRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAH8d3/Bype3j/AB//AGcdOe6uH0+1+D2v3ttZNNI1pBeX3jW8gvbqG3LGKO4u4NOsIbmZFEk0dlapIzLBEF+DP+CIl5d2v/BTj9m6K2uZ4Ir+L4w2d9HDLJHHeWi/Ar4mXq210iMFngW8s7S7WKUNGLm1t5wolhjZfun/AIOUv+TjP2eP+yKar/6nWs18Hf8ABEv/AJSefsx/9dPjF/6oD4q1yy/jf9vx/Q61/B/7cf6n+gZRRRXUcgUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAHyp+3L8If+F8fsf/ALR3woitftmpeK/hL4uHh622eZ5ni7RNOk8R+DfkwS2zxXo+jyfKN42Zjw4U1/mlV/qwV/me/tqfCH/hQ37Wn7RHwkitfseneDPiz4ysvD0BTy8eEr/Vp9Y8HSeXgBPP8K6jo9wFXKAS4jZk2seeuvhl6r9V+p0UH8UfR/o/0PmGv6yP+DaX4q+doH7T/wAELu52/wBnax4G+KugWZfPm/2zZal4R8XXKoSNvkf2F4JiZwG3/aEDFfLXf/JvX7Qf8EFPip/wrr/goV4Q8Nz3P2ew+Mfw/wDiB8NbkyPttzdQ6ZD8QtJ3gnb58+qeA7bTrR8F/O1DyEIW4cHKm7Tj62+/T/I1qK8Jel/u1/zP7wKKKK7TiPy6/wCCy/xV/wCFU/8ABOr9oG5t7n7Pq3j3TNB+FWkpv2G7/wCE98Q6dpPiG2DA5OfBf/CTzlAG8xYDGwCMzL/nyV/Xn/wcq/FT+zvhV+zZ8FLa5Bfxd498W/EzVbaNsPHb+AtAtvDOjNcqMN5N5P8AEHV2t1OUebS5XIDwRkfyGVyVneduyS/VnXRVoX7tv9P0YV/bv/wbx/CH/hB/2Jte+Jt3a+XqPxs+LHiTWLO7KbTceFPA8Fp4H0qDJGXW28TaZ42kV87f9LZFUFGZ/wCIiv8ATA/Yo+EP/Chv2Sf2dvhJLa/Y9R8G/CXwdaeIbfZ5e3xbqOlQa14xk8vGU8/xVqWsT7Wy48zDsz7mLoK8m+y/F6f5iru0Uu7/AAWv+RR/bs8cXfw3/Yv/AGp/GunTva6ponwF+KD6PdRsUe11u+8I6ppmi3SMMHdbape2k4AIZjHtDKSGH+abX+jD/wAFUCR/wTx/azIJB/4VNqg49DqGmgj6EEg+oNf5z1Ov8UfR/mKh8MvX9Ar98v8Agi3/AMExPhV+2lB8SPjJ+0Amt6x8MPh94isPBGgeCNE1e/8AD0Xi3xbLpdvruuSeIdc0mS01u10jQtI1LQ/IstC1DTb7UL3WRNNqVrbaa1pqn4G1/bF/wbiKq/sN/EtgoDP+1L45LEDliPhX8FVBJ74UAD2FRSSlNJq6s3b0RdVuMG07O6V/U+zYf+COn/BNaCNIk/ZZ8MMqKFUzeMvijcSEDj55p/HMk0jerSOzHqSTUn/Dnn/gmx/0ax4U/wDCs+Jn/wA21fpbRXVyx/lj9y/yOXnn/NL72fml/wAOef8Agmx/0ax4U/8ACs+Jn/zbV738Af2Fv2Sv2XPEWreLvgL8EPCvw98Ua3pR0LUfENlca7rGsSaM9zBeTaXbah4k1fWbrT7G6u7S0uL2206S1ivpbOze8Wc2lsYvrKinyxW0Uvkv8gcpPRyk12bYV/Ot/wAHJX/Jp3wO/wCzh7L/ANVt4/r+imv51v8Ag5K/5NO+B3/Zw9l/6rbx/U1Pgl6fqh0/jj6/oz+MiiiiuI7T+4X9hn/glR+wB8R/2Rv2bvid44/Z10XxL448efBvwD4r8V65qPjP4mudW1/W/D9lfanftp0XjaLSbP7TdTSS/ZdPsLSyh3eXb20USqg+s7//AII//wDBNvUbV7O4/ZX8HxxOpUvYeJfiLpd0ARjKX2meMrO9jb0dLhXB5DA816t/wTk/5MK/Y/8A+zefhZ/6iem19pV2xjHlj7sfhXRdl5HFKUuaXvS3fV935n84X7VP/Bu78B/FfhvWNc/ZQ8V+JPhV49tbae50jwV4z1u78YfDfXJokZ4dJbVdSjufGvhqa6f92Nbn1jxTbQYjWTRCGkuU/kF8ceCvFXw38Y+Kfh/440S98N+MfBev6r4Y8T6DqCKl7pGuaLezafqVhP5bSRO1vdQSIJoJJbedAs1vLLDJHI3+pvX8DH/Bc/QtJ0T/AIKSfGWXSreG1bXfD3wt13VI4FVI31a5+HPhy0ubgxqAqzXcdjBc3LABp7mWW4kLSzO7ZVoRSUkra2aW2vl8uhtRnJtxbvpdN779+u5+Q1fsR/wQs+Ml/wDCz/goR8OvDwu3g0D40eHfGPwu8QQlz5Mrz6JceLvDMhhJ8trkeLPCmjWMM2BLDb6jeLG2yeaOX8d6+2v+CbU89t+31+yDJbllkb4/fDiBivXyLrxDaWt0D/stbTTK3+yTWMHaUX5r87fqayV4yX91/k/8j/SGoooruOEKKKKACiiigAooooAKKKKACv8AK68Tahf6t4k8QarqjSNqep65q2oai0pJla/vb+4ubtpC3JkNxJIXJ53E55r/AFRa/wA3z/goz+ztrP7L/wC2V8cvhlf2Etnoc/jPVvG3gC4aIpb6l8PPG9/deIPCs9nLgR3Q060u38PajNCBHHreiarabY5LaSNMK60i+ibX3r/gG9B6yXVpP7r3/M/o7/4NrNG0SD9nf9onxDbpbjxHqnxo0fRtVddv2ptE0HwPpd94fSbHz/Z0v/EfiY2275fMkutvO+v6SK/gF/4JJf8ABRKL9g740axa+PIr/UPgP8XYtI0j4jxadDJe6l4V1LSJrv8A4Rzx/pVhHmW+/sVdT1Ky17SrQfa9T0O/mntYr7VNI0mxm/vO8C+PPBfxO8I6B4++HnijRPGfgvxRp8OqeH/E3h3ULfVNI1WxmyFmtby2d42aORXguIGKXFpdRTWt1FDcwyxJVKScEusd183r6E1YtTbez2fyWnqdZRRRWpkFFFFABRRXwr/wUy+Injf4UfsIftK+P/hx4j1Twj410HwFF/YfiXRJ2tNY0WXVfEWh6Ld32lXseJ7DUI9O1K7FnqNq0V5p9w0d7ZzQXUEM0absm+yb+5XGldpd2l959yXFxb2kEtzdTw21tChkmuLiVIYIkHV5ZZGWONB3ZmAHc15JrP7Q/wAAPDkrw+Ifjl8HtCmjJEkWs/EzwVpcqEdQ8d9rcDKRg5DAEYr/ADNfGHxJ+IvxDumvvH/j7xr45vWcyteeMPFOu+JrppD1ka41q/vZi5ycuXLHua4qsHX7R+9/5I3VDvL7l/mz/Tbh/a5/ZRuZhb2/7Tv7PVxOWCiCH40/DeWYsxwqiKPxKzlmPAAXJPAr2jw94o8M+LbBdV8KeItC8TaW7bU1Lw9q+n61YOwGSq3mm3Fzbs2OcCQnHOK/yvK7PwL8RviD8L9et/FPw18c+L/h94ltGRrbX/BXiTWPC+swmNxIgj1LRLyyvFUOA2zzthPVTk0Kv3j9z/zQ3QXST+aX6M/1LaK/k5/4Jk/8F0PGV94x8MfAX9tfWrHW9J8SXlnoHg74+TW1npOqaJq91IlppemfE+OyitdKv9DvpWhs08aw2tlqGj3TLd+K21Wwur7XdF/rGraMlNXXzXVev9amEoODs/k+j9Ar8Cv+DjT/AJMW8Af9nO+A/wD1Wvxhr99a/Ar/AIONP+TFvAH/AGc74D/9Vr8YaU/gl/hY6fxx9f0Z/GD4A/5HvwV/2Nvhz/08WVf6mdf5ZngD/ke/BX/Y2+HP/TxZV/qZ1lQ+1/27+prX+z/29+gUUV/nbf8ABWLxZ4m8Sf8ABQv9qE6/r2rauND+I934b0ZL++uLiLSdB0WwsLPS9I06KSQx2Wn2cCARWtuscXmPLOytPPNI+s58iTte7tvbpfzMoQ521e1lfa/W3kf6JNFfyxf8GzvirxJf6b+174Svdc1S88M6HcfBHWtF0K6vbifS9J1bXh8V7XXL/TbOV2hsrnV7fRNGi1KW3SNrxdLsPP3m1iK/1O04S5oqVrX6fOwpx5ZON726+quFFFFUSFFf5/n/AAWu8W+J9e/4KRftB6brOv6tqWneFJvh/oXhnT7u+uJbHQNHb4XeCdUk07SLRpDb6faT6pqOoancRWsca3Oo315fTiS5uZpX/R7/AINqfFPiR/iV+014Pk1zVJfCx8C+C/Ea+H5b2eXSYtdi8Q3+nDVoLGR2gt7+SwuZLS4uYEjluoFgjuGlW1thFkqt58nL1avftfpbyNXStDn5uidrd7db+fY/rlooorUyCqGqatpeiWM+p61qWn6RptqnmXWoapeW9hY2ydN893dyRW8KZ/ikkUe9fzhf8FPv+C4Z+CHibxH+z5+yGdD1/wCJWgXF1o3j74wanbW2ueG/A2tW7NDeeHfBujziXTPE3irSpw0Osarq6XnhvQ72GXSf7K13UPtp0b+Ub4ufHv41fHvXpfE3xn+Kfjr4mazJNJPHc+MPEmp6zBYmTOYdI065uG03RbNASkNhpFpY2VvH+6gt44wFrGVaMXZLma36L7+vyNo0ZSV2+VPbq/u6fM/0hrv9rH9ljT7o2V/+0t+z/ZXisVa0u/jJ8Ora6VgcFTbzeI0lDA8EFMg8YrrNA+OnwS8WSJD4W+MXws8SzS7fLi0D4g+EtZkk3fd2R6dq9yz7v4doOe1f5eVFR7d/yr73/kX7BfzP7kf0if8AByiQ37Rf7O5BBB+CeqEEHIIPjrWCCCOCCOQR1r4P/wCCJf8Ayk8/Zj/66fGL/wBUB8Va/La4v767itILu9u7qCwiaCxhuLmaaKzgZzI0NpHI7JbxNIS7RwqiFyWILHNfqT/wRL/5Sefsx/8AXT4xf+qA+KtQpc1RSta8o6fNGjXLTcb3tBq/yf8Amf6BlFFFdhxBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFfxDf8HDfwh/4Qb9tvRPiZaWvl6d8bPhR4Z1q8uwmxZ/Ffgia78DarBkDbI9t4a0rwVKz53f6YqMoCKz/281/Of/wcgfCH/hJv2afgz8ZbS186/wDhT8VLvwxfyonzW3hn4n6E/wBruZZAP9SniPwX4Vs1Rj/rdSUpjL5zqq8H5Wf3b/gzSk7TXndff/wUfxn17x+y38U2+CP7SXwI+Lpna3tvh38WvAXivU2DFRLoek+JdOuNftJCORDfaKt/ZT7SGMNxIAQcEeD0VxrR37a/cdm+nc/1X1ZXVXRgysAyspDKysMhlIyCCCCCCQQcilr5O/YS+Kn/AAuz9jb9mj4mSXP2vUPEXwd8FRa9c79/m+KdA0iDw14tbcSTx4m0fVlwxLrja5LhjX1jXendJ90n95wNWbXZtfdofw0/8HBfxU/4Tr9vNvA1vc77L4MfCjwP4PmtkfdFFrniNL/4jajc4yQLifTPGGgWs+DgJp8CFQ6Pn8Na+ov22vip/wALt/a7/aQ+KMdz9rsPFvxi8dXOgz7/ADN3haw1y70fwlHvyQ3k+GdO0mDcuEPl5RVTao+Xa4pu8pPu392y/BHbFWjFdkvy1/Fn1R+w98If+F8/tffs5fCeW1+26b4t+LXhCPxDbbPM8zwjo+pReIfGR2YIby/Cuk6xLhvk+TLkIGNf6XFfxI/8G73wh/4Tb9tLxP8AFC7tfM074K/CbxBqFld7NwtvFvjy6tfBulRbiMRm58LXfjkhw28i3KKpV3ZP7bq6KCtFvu/y0/zOeu7yS7L8Xr+Vj8//APgqj/yjx/az/wCyT6n/AOnHTK/zn6/0YP8Agqj/AMo8f2s/+yT6n/6cdMr/ADn6zr/FH/D+ppQ+GX+L9Ar+hv8A4JO/8FbP2df2EP2cfFvwf+LXgj40+JPEmv8Axm8SfEWzv/h14f8AA2q6HFous+DPh94ctrS5uPEvxE8JX6apHe+E9Rlnhi02a0W1nsnjvZZZJ4bf+eSis4ycXdb6rVX3NZRUlZ7aPR22P7V/+IkH9iX/AKJP+1P/AOEb8Jf/AJ9lH/ESD+xL/wBEn/an/wDCN+Ev/wA+yv4qKKv20+6/8BX+Zn7GHZ/+BP8AyP7V/wDiJB/Yl/6JP+1P/wCEb8Jf/n2V+gH7Dn/BS79nn9v2fx3pvwe074jeGtf+HlvpF/rnh34laDoWj6lc6TrUt1bWmsaTN4Z8UeLtKu7KO7tHs7tJdRtb+2nkty9kYLiKdv8AOor+lv8A4Np/+S3/ALTH/ZKvCP8A6l01VCrOUknaz8rdH5kzpQjFtXuvO/VeR/YLX863/ByV/wAmnfA7/s4ey/8AVbeP6/opr+db/g5K/wCTTvgd/wBnD2X/AKrbx/W1T4Jen6oxp/HH1/Rn8ZFFFFcR2n+kd/wTk/5MK/Y//wCzefhZ/wConptfaVf5sHgj/goF+2x8N/DOheDPA37T3xi8N+E/C+l2eieHfDun+MdRGj6Jo+nQrb2GmaZYzPNBaWNnbokNvbQosUUSKiKFAFdNqH/BTX/goDqcDW1z+118cY43UqW0/wAa3+kzgEY+W60o2V0jejJMrA8gg810KtFJKz0SXTojndGTbfMtW3s+rZ/oYfFn4w/DD4FeB9Z+JHxe8ceHvh/4J0G3kn1DXfEeoRWVuXSJ5Y7HT4GLXer6veeW0Wm6LpVveatqdyUtdPs7m5kSJv8AOe/br/aSX9rj9rD4zfH21s7vTtD8a+JLeDwnp18ES9s/BnhfR9N8JeElvoY3khttRudA0Owv9Vt4JZoYtVu71Y55x+/k8F8ffFP4nfFbVE1z4o/Ebx38SNajDrHq/j3xd4g8YanGspVpFjv/ABDqGo3SLIVUuqygMVUkHaMcHWdSpz2VrJa922aU6ahd3u3p2SXkFfqF/wAEavhnffE3/gov+z1Bb20kuneB9W1/4ma7cKhdNPsfBXhrVdR025mwrBY7jxQ3h7S0c4C3Gow/MCRX5e1/aV/wQM/YW1r4FfCjxD+1B8TdFm0f4hfHbSLDTPAukahbtBqfh74Pw3EOrw6hdRyKk1rcfETVodP1sWcqtjQNC8L36OkmpXNvCqcXKa7J3fov82OpLlg+7Vl6v/JXZ/QtRRRXacQUUUUAFFFFABRRRQAUUUUAFfll/wAFR/8Agm34Z/b6+FtncaDcab4W+P8A8OrW+m+GXjG9Ro9P1a0uP9IvfAHi+aCKW4bw5q9yi3Gn6gkVxdeF9ZY6lZQzWV7rum6t+ptFJpSTT1TGm4tNaNH+XH8VvhN8R/gd498RfDD4s+D9a8C+O/C161jrXh7XbY291A4+aG6tpUaS11LS76Epd6Xq+m3F3peq2MsN9p15dWk0Uz/UX7F3/BQ79pH9hnxK1/8ACbxQupeB9TvY7rxZ8JvFhudT8A+JPuJNdLp6XENx4e19oY40i8R+HrjT9TYQW0GotqemRPpsv91/7Yv7B37Ov7cHg1PDfxn8J58QaXazw+D/AIl+HDb6X8QfBckxaQjSNae2uI7zSpJmaW78Oa5a6p4fu5T9pfTl1CK1vbf+Mj9uv/gkL+0z+xbLq3i+20+T4yfAu1klmi+KfgvTLkz+H7AMfLPxF8KJJe6h4QdFAEurR3GreEyXgj/4SKO9uBp8fLKnKD5o3aXVbr1X/Dr0OqNSM1yysm+j2fo/+GfY/q4/Yb/4K2fsw/trQ6Z4XtNWX4S/G24ijjuPhH451G0iudWvSoMi/D7xMUs9M8cwEiQxWVvDpvipYYZrm78MWtnGt1J+pVf5UcM01tNFcW8ssFxBLHNBPDI0U0M0Th4pYpUKvHLG6q8ciMrI6hlIIBr98v2Dv+C73xw+AL6L8PP2mV1j4+fCKA29jB4mnuo5fjF4NsFKoJLTXNQmih8f2Nsm9v7L8WXcOtPmNLXxda2drFpslwrdJ6f3lt81+q+4idHrDX+6/wBH19H95/bVRXjXwI/aC+D37THw80r4pfBHx1o3jzwbqv7r7bpkrJe6TqKRRy3GieItHuUh1Xw9rtmk0TXWkaxaWd9FHLBcCFrW4t55fZa6N9Vqjn20ejCsPxL4Z8OeM/D+seFPF+gaL4q8L+IdPudJ17w54i0uy1rQta0u8jMV3p2q6TqUFzYahY3MTGOe1u4JYJUJV0YcVuUUAfL+gfsR/sa+FireHv2T/wBnDSZVORc2nwT+HCXhOcjdet4ca7fafuh52CdFAFesad8G/hDo6hNJ+Ffw30tFAAXTvA/hixUADAAW20uIAAcAAYxxXpFFKyWyS+S/yHd9397/AMzjLn4cfDy8tpLO88BeC7uzmUrLa3PhbQ57aVTwVkglsXidSOCGUg9xX5E/8FFv+CQH7PH7RHwm8aeLvgp8MfC3wp/aF8OaJqXiDwjqHw90ay8L6L481LTbWW9PhDxd4a0eG00O+l8SiJrCy8SR2Nvr2m6tNY3c+oXulxX2lX37U0UOKkmmlr5L8NBqTi003p5u3z1P8qBlZWKsCrKSrKwIZWBwQQeQQeCDyDwa/wBCz/gkL+0Tqv7Sf7B/wg8UeJr+XVPGfgWPU/hH4w1CeQzXN7qXgGWGy0W/vJ3/AHtxqOpeC7rwtqeqXMxM1xqV5dzyPI0nmP8Awd/tJaLZ+G/2ifj34d0+JYbDQfjT8UtFsYUAVIrPS/HOu2NtEijhVjhgRVA4AAAr+sP/AINstVuJv2XfjzobuxtdO+PY1SCMk7Un1n4eeELS5ZR0BePQ7UNgc7BntXNRdptd0192x0VleF+zT+/c/o0r8Cv+DjT/AJMW8Af9nO+A/wD1Wvxhr99a/Ar/AIONP+TFvAH/AGc74D/9Vr8Ya3n8Ev8ACzCn8cfX9Gfxg+AP+R78Ff8AY2+HP/TxZV/qZ1/lmeAP+R78Ff8AY2+HP/TxZV/qZ1lQ+1/27+prX+z/ANvfoFf5y3/BUf8A5SE/tbf9lh1//wBFWdf6NNf5y3/BUf8A5SE/tbf9lh1//wBFWdOv8Mf8X6CofFL/AA/qftb/AMGyf/IQ/bS/68/2e/8A0f8AGuv6vK/lD/4Nk/8AkIftpf8AXn+z3/6P+Ndf1eVdL+HH5/myKv8AEl8vyQUUUVoZn+e3/wAFmP8AlJf+1H/2HPh9/wCqg+HtfpB/wbT/APJbv2mf+yV+D/8A1Lrivzf/AOCzH/KS/wDaj/7Dnw+/9VB8Pa/SD/g2n/5Ld+0z/wBkr8H/APqXXFckf43/AG/L9Trl/B/7cj+h/YJX5ef8Fef2vNS/ZB/Y48XeIPB+pvpfxS+J+oQfCn4bX1vJsvtF1TxDZX11r3iu12HzYbjw14W0/WLrS75QY7TxJP4f87KzCOT9Q6/kG/4OV/iRdX3xg/Zq+EC3DLZeF/ht4p+JE9qpKpNdePPFH/CMWtxOAcSNbw/Dm8jtSwJgF1eBCPtEmeipLlg2t9l6vT/M56ceaaT23fy1/wAj+Z9Vub25VEWe7u7ucKiKJJ7m5uZ5MKqqA8s080rgAANJJI2AGY8/2a/8E6/+CGXwW+HXgHwx8T/2v/CUHxR+MXiHT7LW2+GniCSdvAHwzivIkubbQtU0O3lhg8Y+KreGTyvEb6+1/wCG7S9aTTNM0ec6cNf1P+d//gkp8IdO+NX/AAUJ/Zv8La3aR3ug6F4sv/iPq8E6CW2kj+GXh7V/HOlw3UDZSe1vPEOh6Np9xBIrwzRXbRzo8LSKf9ESsaME7yavZ2Se3dv/ACNq02rRTtdXbW/ZL8zxfR/2bv2d/D1lFpmgfAX4L6Hp0KLHDYaR8LfA+m2USKAFSO1s9ChgRVAACqgAAGBUGp/syfs263G0Ws/s+fBDV4n4ePU/hP4Dv42B6hkutAlVs+4Ne30V0WXZfcv8jnu+7+9/5n8Sf/BwH8Efg58Ev2gfgpp/wc+FvgH4V6b4k+E2o6zrul/D3wnong/StT1WLxjqtkmoXOl6BZWGnm6W1ijg85bZXMaKrE4FfL//AARL/wCUnn7Mf/XT4xf+qA+KtfeP/Byl/wAnGfs8f9kU1X/1OtZr4O/4Il/8pPP2Y/8Arp8Yv/VAfFWuV6Vv+34/odS/g/8Abj/U/wBAyiiius5AooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACvhf8A4KYfCH/heH7B/wC074CitftmpD4Yav4z0G3VN9xN4h+Gstt8RNEtbQgbkub/AFDwvBpyFSodbx4ZG8mWQH7oqC5tre9trizu4Irm0u4Jba6tp0WSG4t542imgmjcFZIpY3aORGBV0YqQQSKTV013TX3oadmn2af3M/ypqK9o/aO+Fdx8Dfj/APGn4O3CSr/wrP4oeN/Bdq8u4tdaboHiLUNP0m/Vn+Z4tR0uGzv4JG+aSC5jkIBbFeL1wPTTtod++p/cP/wb1fFX/hN/2Fr7wBc3O+++DPxc8ZeGra0Z9zweHfFcenfEDTrkDJ2Q3Ou+JfFUMa8fvLGdgMEV+qX7W/xUHwQ/Zf8A2gfi0lz9lvfAXwi8e+INGl3+WW8R2vhy/TwzbI+RslvPEEmmWkTfwyzoecYr+YT/AINrfip/ZPxn/aM+C9xc7YvHHw48M/EXTYJXwn274deIpdAvktQ3AuLqy+I0M06J881vpayMGS0JT9U/+C/HxU/4V9/wT81/wpBc+TffGb4leAPh4iRvtuG0/Tr26+I+qSLg7xbNF4Eh0+7cfIyailtIdt0FbrjL91ftFr5q6X5o5JR/e27yT+Ts3+TP4TiSSSTknkk9SfU0UUVyHWf2df8ABuH8If8AhFv2Xvi78Yru18jUPi38VotBsJmTm78LfDHRI7awuEkIBKDxN4s8Y2hQZVXsmYkliF/omr4i/wCCbnwh/wCFG/sLfsxfDyW1+x6lB8LND8Va9asmya38S/EQz/ELxFa3GQC89lrPie9sXY5GLZVQ+WqAfbtd0FywiuyX3vV/mcM3ecn5v7lp+h+f/wDwVR/5R4/tZ/8AZJ9T/wDTjplf5z9f6MH/AAVR/wCUeP7Wf/ZJ9T/9OOmV/nP1z1/ij/h/U6KHwy/xfoFfpP8Ase/8Eq/2nv23/hjrPxa+C938MYPCuh+ONU+H96njPxZqehaqde0jQ/DfiC7aCzsvDWsRSWBsPFOmCK4a6SR5xdRmBFiWST82K/tk/wCDcX/kxr4k/wDZ0njr/wBVZ8FqinFSlZ7Wb0dti6knGN1a90tfM/G//iHl/b7/AOgj8A//AA4uvf8AzC0f8Q8v7ff/AEEfgH/4cXXv/mFr+4yiuj2MOz/8Cf8AkYe2n/d+7/gn8Of/ABDy/t9/9BH4B/8Ahxde/wDmFr9qf+COf/BMX44/sJ+J/jN45+N/iHwDc6h4+0Dw34U8PaB4F1XVdfENppepXmralqur6jqOiaHDbM8z2Vrp9lZx3zSqL2e6ltfLto7j946KcaUItNXuvP8A4BMqspJp2s97L/ghX863/ByV/wAmnfA7/s4ey/8AVbeP6/opr+db/g5K/wCTTvgd/wBnD2X/AKrbx/TqfBL0/VCp/HH1/Rn8ZFFFFcR2hRX9t37GP/BI/wD4J7fGL9kL9m34lfEL9n2PW/HPjr4MeAPFHinxBB8T/jLosuqa9rPh6xvdS1FrDQ/iHpukWz3N1LJKbez0+3tIixWG3jQKo/OX/gs3/wAEoPhD+zJ8JfBf7QH7K/gjUfC3gvw9rB8K/GPw/J4l8W+L1tY/EV1FH4P8bpeeLda1y+0+zi1Yt4T1aGG7S0kutY8LyQWkc39pXU+jpSUebRqyel72dvLpczVWLly6p3au7Wuvn1tofzV1d02wn1XUbDS7V7WO51K9tbC3e+vbPTLJJ7yeO3he81LUZ7XT9PtVkkU3F7fXNvZ2kIee5nhgjeRaVFZmh/YV/wAE9P8Aggj4e+FuteH/AIxftjal4d+IvizS5bXV/DnwZ0Bjqvw90a/iKXNne+ONYuYYV8cXlpJ5bjw7ZWkXhKO5gb7dfeLtPuBBF/SqqqqqqqFVQFVVACqoGAqgYAAAAAAwBwK/GL/giJ+2h/w1B+ypY/Dvxdq32z4ufs6x6T4D8RG6m8zUNf8AAzW0sfw68WSFyZbiRtLsLnwtqtw7zXM+q+GpdUvpFfWrcP8As9XbTUVFOK0evnfzfdbHFUcnJqT1WnlbyXnuFFFFWQFFFFABRRRQAUUUUAFFFFABRRRQAUySOOaOSGaNJYpUeOWKRFeOSN1KvHIjAq6OpKujAqykgggkU+igD8EP28/+CE3wP/aDTWviJ+zWdG+AfxhuPtF9ceH7e0kh+D/jS/fc7rqGhadBNN4E1C5fbnV/CVnJpIIllvfCd9e3cupRfx9fH39nT4z/ALMHxC1H4YfHHwHrPgTxbYbpYINRiWXTNc04SvFFrfhnW7VptJ8R6HcvG6Q6ppF3dWomSW1meG8t7i3i/wBPSvmT9q79kf4KftlfCzUvhX8aPDMGqWUkdzP4Y8T2ccEHi7wHr0sPlweI/COsPFLLp99CyQm6tHWbStZtov7O1qxv9Pkkt2xnSUtY6P8AB/5eq+aNoVXHSWq/Ff5+j+TP8+j9kD9sv43fsUfFKy+Jnwd8QyW8U0lrb+MvBGpS3E3g34gaFBMXfRfE2lxyIkjIkk/9l6zbeTrOhXE8lzpd5AZbmO4/0Ef2Pf2s/hl+2j8DvDXxt+GFxJDZ6mX0rxT4XvZ4Zdb8C+MrCG3fW/Cet+SFV7iyNzb3dhfLFDDrGi3umaxbxRQ36RR/55/7Wv7M/jb9kL4//EL4B+PJIr7VPBmpxf2Xr9rBJb6f4r8LarbRan4Z8T2EUjy+TDq+kXNtNc2YnuW0rU1v9HnuJbrT52r9Tf8Ag3//AGktY+Ff7Y//AApC81CX/hBv2ifDmraNPp0srCytPHngvSNU8WeFNbRSSsd1Nplh4k8MYRV+1ya/ZCYsbO28vOlNxlyPZu1uz/4ff1uaVYKUeZbpXuuq/wCG2+4/uEoor8M/+C4f7fXin9k34L+GfhN8Itbm0D4x/HddagHifTpzDrHgT4daMttba/rekTxkS6d4i8QXuoW2g+HtUQCawt4fEep6bPaazpmnXcPTKSinJ7L+rHNGLk1Fbs+nv2tf+CtH7Gf7H+p6j4S8aeOr3x78TdMMkV98MvhVZWvirxJpV0gx9k8SahNqGmeFfC92jmM3Gma34gtNdjgkW5i0e4jK7vxf+In/AAcu+J5rm4g+E/7LGg6dZxs62uqfET4i6hrVzdJz5ctxoPhrw9oMVg3Tfbx+I9SBwdtyM8fzMeEvCfjD4neNNA8GeD9H1bxf458b6/ZaJoOi6ekl9rGv+INbvEt7S1i3tuluby7nHmTzyKi7nnuZkjWSRf6ff2d/+Dbf7foGl65+1J8ddT0TW763huL74f8Awc07SppNDMqLIbO6+IPii31Swv8AUIQ/kXkeneDJdNt7mKT7Fq+rWzxXJ51OrN+6rL5aerf6I6HClBe87vzvr6Jfq/mfLuof8HH37bNxI39nfC39mHT4D9xZPB/xRvrhf96d/jBBC3GOlqnr3wMr/iIx/br/AOhG/Zm/8IL4if8Az3K/aHSv+Den9gHT4Uiu7r47666qA1xqvxH0iGaQjqzrongvRrcM3fy4EX+6orY/4h/P+Cen/QG+L3/hzrn/AOVFPlrfz/j/APai5qH8v/kr/wDkj+IT4g+NdW+JPj3xv8RdfisbfXfH3i/xL411qDS4Z7fTIdW8U6ze67qMWnW9zc3lxBYx3l/MlpDcXd1PFbrGktzPIrSt/XR/wbWf8m8ftFf9ln0b/wBQfTK/lA+PXg/Rvh58c/jP4A8OLcp4e8DfFj4i+D9CS8nN1eJo3hnxhrGi6Wt3dFUNzcrY2UAnnKIZpQ8hVd2B/V//AMG1n/JvH7RX/ZZ9G/8AUH0yopfxF/29+RdX+G/+3fzP6Sa/Ar/g40/5MW8Af9nO+A//AFWvxhr99a/Ar/g40/5MW8Af9nO+A/8A1Wvxhron8Ev8LOen8cfX9Gfxg+AP+R78Ff8AY2+HP/TxZV/qZ1/lmeAP+R78Ff8AY2+HP/TxZV/qZ1lQ+1/27+prX+z/ANvfoFf5y3/BUf8A5SE/tbf9lh1//wBFWdf6NNf5y3/BUf8A5SE/tbf9lh1//wBFWdOv8Mf8X6CofFL/AA/qftb/AMGyf/IQ/bS/68/2e/8A0f8AGuv6vK/lD/4Nk/8AkIftpf8AXn+z3/6P+Ndf1eVdL+HH5/myKv8AEl8vyQUUUVoZn+e3/wAFmP8AlJf+1H/2HPh9/wCqg+HtfpB/wbT/APJbv2mf+yV+D/8A1Lrivzf/AOCzH/KS/wDaj/7Dnw+/9VB8Pa/SD/g2n/5Ld+0z/wBkr8H/APqXXFckf43/AG/L9Trl/B/7cj+h/YJX8P8A/wAHEd1Jcft6eHoXZitj+zv8PbWEEkhY38XfEi9KqP4VMt5KxAwNzM3Via/uAr+Hf/g4dVl/b50kkEB/2f8A4dspP8SjxH4+Qke25GX6g1tW+D5r9TGj8fyf6GH/AMG+9rFcf8FCNPlkUM9l8G/iZdQEjlJXGg2RZfQmG7mTPoxHev7pK/hj/wCDfEgf8FA4gTgt8E/iUB7n7V4XbA/AE/QGv7nKVH4P+3n+g63x/wDbq/UKKKK2MT+OT/g5S/5OM/Z4/wCyKar/AOp1rNfB3/BEv/lJ5+zH/wBdPjF/6oD4q194/wDByl/ycZ+zx/2RTVf/AFOtZr4O/wCCJf8Ayk8/Zj/66fGL/wBUB8Va5Jfxv+34/oda/g/9uP8AU/0DKKKK6zkCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP4Sf+C+Pwh/4Vt/wUA8R+Lba18jS/jZ8PvA/xHgaJNtqNTsrK4+HuuRIQNv2qW88Erq96mS5k1hLhwBcqT+Ktf16f8HKXwgOqfCv9nT462doTL4N8ceJvhjrtzEm53sfHmjQ+JNCa7IBK2un33gXV4beQlY0uddaJi0lzCK/kLriqq05ebv8Afr+dztpu8I+St92n+R+mv/BHf4qf8Km/4KKfs56jPc+RpfjXxFqnwr1SMvsW7/4WRoOpeGNBt3bIB2+L73w5dohz5ktrGgGWBH6qf8HLPxU+1eM/2Y/gja3O3+xPDHjb4p63aK+fOPijVbDwl4XuJEz8ptR4R8XRwtj5hezDPy1/Mx4P8V654E8W+FvHHhi8OneJfBviPRPFfh7UFRZGsNc8O6na6vpN4sbgo5tb+zt5wjgqxTawIJr3n9rf9rT4r/tpfGC6+NXxi/4RyHxRN4e0Pwtaab4R0290nw5pGh6DHcG0stMstR1TWr+NZ7291HVLt7rVLt5NQ1G7eIw25htoRTtTlDu0/l1/JA4XqRn0UWvn0/Bs+ZK9x/Zm+FE3x0/aI+CPwdiikkj+JPxS8EeEL8x7g1to2s+IbC112/Yp86xadoz39/O6fOkNtIyAsAD4dX7bf8EBvhAfiP8At9aR40urQzaX8EPhz428fySyR77Ua1q9pB8PNEtnJBT7Xnxlf6vYq3KvoslzGQ9sCFFc0oru193X8EypO0ZPsn9/T8bH90sEENtDDbW8UcFvbxRwQQQoscMMMSCOKKKNAqRxxoqoiIAqKoVQAAKlooruOA+D/wDgp9p0+qf8E+v2uLa2Rnki+C/inUWCgkiDR4odWunOM/LHa2UzsegVSTgDNf5x9f6jnxe+H1h8W/hP8T/hVqkixaZ8S/h7408AahK6l1isvGPhzUvDt1KUHLeVDqLyYHJ28c4r/MG8YeE9f8B+LfFHgfxVp82k+J/BviHWvCviPS7gFZ9N13w9qVzpOrWEwIBElpf2lxA/A+aM1zV1rF+TX43Omg9JLzT+9W/Q5yv7OP8Ag238Y6PffsofG7wFFdwv4h8MftBXvivUbFZENxBonjT4deBNK0O7kiB8xYrvUPA3iOGKUqEkaylRSWifH8Y9e5fAH9pX46fsueNG+IPwD+JGvfDfxVNZHTb670kWF7p+saaZUn/s7XvD+tWep+HvEFglxHHcxWmtaXf28F1HHcwxx3EaSLnCXJJNq61T+ZpOPPFxvZ6NfI/07qK/gph/4Lwf8FI4o0jf4reDbhlUBppvhL8PFkkIHLOINCghDHqRHEi56KBxUn/D+P8A4KQ/9FQ8E/8AhpvAX/ynrf20P733f8Ew9hPvH73/AJH96VFfwW/8P4/+CkP/AEVDwT/4abwF/wDKev1T/wCCQf8AwVb/AGr/ANq39qW7+CHx51bwh4t8M6x8O/E/iTTNQ0zwjpPhXWdC1rwzLpk8TQzaDFaWl/p9/Z3V5bXlpfWcs6z/AGK5tL22S3ura+aqxk0le7dtv+CJ0ZRTbcbJX0b/AMj+n+v51v8Ag5K/5NO+B3/Zw9l/6rbx/X9FNfzrf8HJX/Jp3wO/7OHsv/VbeP6qp8EvT9UTT+OPr+jP4yKKKK4jtP8ASO/4Jyf8mFfsf/8AZvPws/8AUT02vpP4q/DLwh8Z/ht45+E/j/TF1fwZ8Q/C+seEvEdgdqySaZrVlLZzTWkzJJ9k1GzMi3umX0amew1G3tb23Kz28bD5s/4Jyf8AJhX7H/8A2bz8LP8A1E9Nr7Sruj8Mf8K/JHDL4pf4n+bP8xr9qD9n3xh+yz8e/ib8BvG6O2s/D3xLdaZb6l5DW9v4i8P3Cx6h4X8U2MbFitj4l8PXem6zbRl2e3W8NrOVuIJkXwSv7Ef+Dhb9jH/hPPhj4Y/bE8EaT5vin4SxWvg74qpZw5uNU+Gmr6kw8P8AiCdY1LzSeCvE+ovaTuqNJ/Yvim6vLuZLHw9GI/47q5Jx5JNdN16P+rHXCXPFPrs/X+tfmfeX/BNz9sDUP2Kf2rPAXxWnubr/AIV/qs3/AAg/xc0y3Eso1D4deI7q1TVbxbWLL3V94WvbfT/F2lQJtkur/QodPMiW97cB/wDRh03UdP1jTrDV9JvbXUtL1WytdR03UbGeO6sr/T76CO5s72zuYWeG4tbq2ljnt54naOaKRJEZlYE/5Vlf20/8EDP20f8AheP7PN7+zb401b7T8Sf2dbW0tvDrXc++91/4OX05t/Dc0W9t8x8C37HwfdCNBDYaJJ4LjZ3nu5DWlGdm4PrqvXqvnv8AIzrQulNdNH6dH8vyZ++9FFFdJzBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRXkHxx+Pfwh/Zv8Ah/q/xP8AjV460PwH4O0eGV3vtXukS71O7SJ5YtH8P6VHv1LxDrt4EK2OjaPa3mo3TZMduUR3Q21eiDfRas/kB/4OOjpP/DbXwyFksI1Mfsz+DzrLQ7dzSH4lfFkWIutvW6WzVeZP3v2RrME+UIQPz0/4Jbx3sv8AwUK/ZKXT9/nj4waDJJ5ed32KGG8m1POCDs/s1Lvze3l78gjIPCft2ftU6p+2b+1B8S/jzd2Nzo+jeIb+00nwR4fu3jkuNA8CeHLSLSPDNhdGJ5YV1K5s7c6zri280tr/AG9qmqNaSNbNDj9F/wDg37/Z/wBU+J37aw+ME9jK3hH9nnwdrviC71B4meybxj440rU/BHhTRnbaU+2TabqXirxDa7iPLbwy0gIk8oNx/FVutnNNeia1/C52fDSs+kLP1aen3ux/cZX8N3/Bwp4mvtb/AG+4NGuZnaz8G/BD4eaHp0G4+XFHf6h4q8UXDqnCiSa58QSCSTBd0jhRmKxRqn9yNfxBf8HEHgy+8P8A7dOgeJ5YX/s7x78C/BOp2d1t/dPd6Hrni7w1f2YfvPaxaZp9zKvJWLULY5w4A3rfB81+phR+P5P9Dm/+DffwPo3i7/goFbazqtrDdXHw3+DHxF8caEZkWQW2sz3nhfwGLqMMCBNHpfjjVFicDdGzh0IdVI/uhr+Cv/ghR8X/AA98Jv8AgoJ4LsvEt/baXYfFvwT4v+EVnf3kqQ2seva6+j+JPDdlJI5AE+ua94S07w/p6DLT6nqtlbj/AFuR/epSo/B/287/AIfoOtfn8uVW/G/4hRRXKeNvHXgr4a+GdU8afEPxb4c8D+EdEga61fxN4s1rT/D+habAP47zVNUuLWzg3n5I1eYPLIVjiV5GVTsYn+aX+1n/AMnU/tMf9nA/GX/1Y3iSv6lv+Daz/k3j9or/ALLPo3/qD6ZX8p/7R/iLRPF/7Q3x58W+GtQh1fw54o+M/wAUfEWgarbCRbfU9E1vxxrmp6VqECzJFMIb2xuYLmISxRyBJVDojZUf1Yf8G1n/ACbx+0V/2WfRv/UH0yuSl/E/8C/U66v8P/wH9D+kmvwK/wCDjT/kxbwB/wBnO+A//Va/GGv31r8Cv+DjT/kxbwB/2c74D/8AVa/GGuifwS/ws56fxx9f0Z/GD4A/5HvwV/2Nvhz/ANPFlX+pnX+WZ4A/5HvwV/2Nvhz/ANPFlX+pnWVD7X/bv6mtf7P/AG9+gV/nRf8ABVWymsP+CiH7WUE6MjyfFW+vVDDBMOpaVpWo27/7rwXUTqe6sDX+i7X8I3/BfD4T3vw9/wCCgvizxg1q8OkfGnwF4A8f6ZOiYtXudJ0KH4c6zAjqNn2pb/wQdRvIifNX+1YLh1CXURaq69xPtL800TQfvtd4/k0z7w/4Nlr+CPxD+2PpjOourzRvgVfwxkjc0Gm33xZt7lwM5KxyaraqxAIBkUEjIz/WTX8GH/BDr9qXwx+zZ+2fZ6T4+1i10HwJ8c/Cl38LNQ1nUrhLXSdE8U3Gq6ZrfgjVdTuZGSO2tp9W02XwubqdltLL/hKDe3skFpbTXEP959Oi7wS7Np/fcVZWm33Sa+6z/IKKK53xZ4w8JeAvD+peLPHPijw94N8LaPAbnVvEnirWtO8P6DpduDgz6hq+rXNpYWcQOB5lxcRrkgA5IFamR/n+/wDBZj/lJf8AtR/9hz4ff+qg+HtfpB/wbT/8lu/aZ/7JX4P/APUuuK/J7/gqN8VPh98bP29P2iPib8K/E9h4z8BeJNf8KpoPifS0u007Vhofw78H+HNSmsTe21rNPaxaxpGoWsF4sP2W+jgW8sZrmxnt7mX9Yf8Ag2n/AOS3ftM/9kr8H/8AqXXFckda3/b0v1OuX8H/ALdj+h/YJX8X/wDwcieD7jTf2tvg143ERTT/ABX+z/p+hpLg7ZtV8IfEDxxcX+GIxuj0/wAU6GrKCdoKMQN4J/tAr+fz/g4b/Zz1D4n/ALK3gr44eH7CS+1j9njxjc3GurBEZJofh38Rk0zRPEF8FjDSyjTfE+k+CLiYbTFa6Y+q6hM8UNrKx3qq8H5Wf3f8C5hSdprzuvv2/E/B7/ghd4ytPCX/AAUg+ENlezpbw+N/DfxN8GpLIwSP7Xc+Bda1/T4GYkDfeX/h62srdeTJdXMEYGWBH98lf5c/we+KPiX4JfFb4c/F/wAHSpF4o+GfjTw5420QSlxbXF94d1W21OOxvVQhpdP1AW7WOowZ23Fjc3EDgpIwP+kp+y9+0z8Lf2tvg14T+NPwn1u21LQ/ENlANW0g3MMmt+DPEscEL6z4P8T2kZ8yw1zRbiTyZVkRYL+1a11fTJLrSdQsLy4ihJWcet7r0f8AlYuvF3UulrP1X+f6H0JRRRW5gfxyf8HKX/Jxn7PH/ZFNV/8AU61mvg7/AIIl/wDKTz9mP/rp8Yv/AFQHxVr7x/4OUv8Ak4z9nj/simq/+p1rNfB3/BEv/lJ5+zH/ANdPjF/6oD4q1yS/jf8Ab8f0Otfwf+3H+p/oGUUUV1nIFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAfKP7bv7Mek/tg/sw/FX4B6jcW2naj4u0RLrwhrl2jNDoHjrQLqDXPCGrTtFHJcJYJrVjbWmtC1U3NxoN5qlnFk3JB/zifif8MfHnwZ8f+Kvhd8TvDOpeEPHXgrV7nRPEXh/VYfKurK9tyCskbqWgvLC9gaG+0vU7OWfT9V025tdS065ubK6gnk/1JK+Lv2tP+Cfv7LX7aunW0fxw+HkV54o0yzax0L4j+F7tvDXxD0O1Lu6Wtv4gtI5E1XToZJZ5bbRfE1jr2hW1xcT3UOmJdStMcqlPns07Naa7NGtOpyXT1i9dN0z/ADcKK/ri8af8Gz3w9vb2eX4d/tY+MvDWnF2NtZeNPhZonji9SPPyRz6pofjL4ewSuF4aaPR4lY/MIFHy1zeh/wDBstpkV1HJ4l/bIvr6yDDzbTQ/gVb6XdSID8wj1G/+LWsQwsRwC2lzBTyQ3SsPZVP5fxVvzN/a0/5vwf8AkfyhojyOkcaNJJIypHGil3d3IVURVBZmZiAqgEkkAAk1/dV/wQ+/YZ8R/snfs8a38RPijos+g/GD9oC60XX9S0DUIDBq3g7wBoltdjwV4d1W2lXztP12+k1bV/Emu2LNFPaLqej6Pqlpbatod1Enr37JX/BHL9jH9kvXdL8c6R4Y1v4sfE3RporzSPHXxavbDXpfD+oRESLfeGPDGnabpHhTSby3nVJ9O1WfSNS8RaXJGj2OuROZHk/VatqdJxfNK1+iXT/gmNSqpLlje3VvS/lbsFFFFbGIV/Kn/wAFuv8Agld4x8S+LNc/bM/Zw8K3fiZ9YtY7v47/AA78PWb3WuQ6hp1qlv8A8LO8NaRao02rW17YW8EfjfTdPhk1K1vbb/hLBBf2+o+IrvSf6rKKmUVNWfyfVPuVGTg7r5ruux/lQEEEggggkEEYII4IIPIIPUUlf6In7S//AASg/Ye/an1LUfE3jv4R2/hXx5qskk9/8QfhbfP4D8TX11OzPPf6vb6fDP4W8RanO5DS6p4l8N6zqL7FX7UE3K35YeMf+DaP4S3tzK3gD9qX4i+GbRmJgg8Y/D7w145uY05wst1ouufDyKZgMZZLOAHBwi5wOZ0Zraz+dvwf+Z0qtB73i/NX/Ff5H8hVFf1TN/wbJXwchP207Ux54Zv2eZlcj1MY+NrKDjsJCPetnT/+DZTTI2U6r+2df3SfxR6f8ALewb6LNc/GXUh+Jg5/uil7Kp/L+K/zH7Wn/N+D/wAj+UCv22/4N/P+Uhejf9kh+J3/AKTaRX6yeGf+Da39nS0kjPjH9of41a9GCPNTw1pPgbwm7juI5NU0jxoIs843Ry498c/pX+x9/wAEsf2TP2JfGF78RPhFovjLVviBeaBd+GB4w8feK21/UrPRdQuLS51K20+w07T9C8O2c2oS2FmtxfRaIL9beF7S3uoLW7vYbm4UpqUW7JJ339exE6sHGSV22mtv8z9G6/nW/wCDkr/k074Hf9nD2X/qtvH9f0U18l/tlfsX/Bv9ub4V2fwl+NB8VWejaT4osPGOg694I1ex0XxRoOv2FjqWlrdafd6rpGv6TNDdaXrGpWF5Z6pouo2ksdys6QxX1rZ3dvvNOUZJbtWX4GEGoyi3snd/if5qdFf2uf8AEN/+w9/0VT9qz/wuPhF/84ynx/8ABuD+w6kiO3xQ/aplVHVmik8c/CURyqrAmNzF8EIpQjgbWMckcgUnY6Nhhzexn2X/AIEv8jp9tDu//AX/AJn6X/8ABOT/AJMK/Y//AOzefhZ/6iem19pVxPw1+HnhT4SfD3wR8LvAuntpXg34eeFNB8GeF9OkuJruW00Lw5pltpOmQz3lyz3F5ci0tYjc3lw73F1OZLid3lkdj21dSVkl2SX3JHK3dt92397ZzfjHwj4c+IHhLxP4F8YaTa674T8ZeH9Y8LeJdFvVL2mraDr2n3Gl6tp1wqlW8q7sbqeByjK6h9yMrhWH+bb+2v8Asv8AiP8AY8/aV+JvwI1/7Vc2fhnWXvfBmuXMYT/hKPAGtZ1Dwf4gVkRYHuLrSJYrXWI7YvBY+ILPV9MDtJYyY/0tq/O39uD/AIJi/s3ft86r4J8RfGC5+IPhfxX4E0+/0XTfFXwx1rw5oet6l4fvrn7cmga63ibwj4xsL/TNO1GS71DS1jsLW7sbrUdSMV35N9cQvFWHOla3Mtr9uq/U0pT5G735Xvbutn+h/nY19X/sR/tR+I/2Of2l/hp8dtC+1XOn+HdWXTvG+hWsgQ+Kfh7rZSw8X6AyOywSXM+mO99oz3O+Cy8Q6fo+psjPYpj+q3/iG/8A2Hv+iqftWf8AhcfCL/5xlH/EN/8AsPf9FU/as/8AC4+EX/zjKwVKommrXTuveX+Rs6tNpp3s9H7r/wAz94fB/i7w54/8J+GfHPg/VrXXvCfjHQNI8UeGtbsXL2eraDr1hb6ppOo2zEKxhvLG6guIwyq4WQK6qwKjo68c/Z9+B3g/9mv4M/D/AOBngC88RX/g/wCG+iHQtCvfFmpw6v4iurVr271CSbVNQtrLTbSad7q9nKR2WnWFjaw+VaWVla2kEMKex11rZX36+vU5Ha7ttfT06BRRRQAUUUUAFFFFABRRRQAV/GV/wWO/bp/a8+D/AO3z8Q/h78Kv2gviT8O/BPg/wv8ADaPQ/DHhDX59F0aJ9b8DaH4k1S7vbC0CW+q311qurXcjXmpJdXCW/kWcciWtvDEn9mtfnj+1H/wS1/Yy/a+8Z3fxK+L3w71Y/Ei/03T9JvvHHhLxj4k8NavfWOk2y2elpfafb383hm+nsbRI7SC+u9BnvzaQ29pLcyW1tbxRRUjKUbRdne+7X4ounKMZXkrq1tk9dOjP4ydO/wCCuX/BR3Sgotv2rPHkoXGP7S0vwVrBOOm5tX8L3xbpzuJz3zk11MH/AAWj/wCCmluAI/2oNTbAx+/+GXwUuj+JufhtKSfckmv378Vf8G3f7JGovLL4Q+Mv7QHhdpCWW31XUPAHiiygJ6LDHH4H8P3xiHGFn1GeUnOZjkAeN3//AAbOeBpJGOl/tc+LLOLPypf/AAg0fUpAOwaS38f6UrHpyIlHsO2HJW7v/wAD/wCCb89F9F84f8A/FDXv+Cw3/BSfxHayWeoftT+K7eKVSrPoPhP4aeFroBuCY77wx4J0i9hb0eK4R16qwNfCfxH+LXxS+MWunxP8WfiP45+JniHa8aa1488V654s1KGF2DNb293rl9fTW1qCqhLW3aK3jVESOJURVH9T2lf8GzvgGGdW1z9rbxfqNsGBeLSvhJoujTsv8QW4vPHevRoxGcMbZwvUq2MH7A+Ef/Bv7+wX8Ory11Pxlb/FL42XtuyTNZ+P/Gcek+HTcIQUZNI+HuleDbuS3DKGaz1TWNVt5iWjuVmgYw0ezqy0b085X/DUPaUo7L7o2/GyP49f2Xv2R/jx+2F8Q7P4c/A3wTf+I71p7b/hIPElxHPZ+DPBOm3EhV9a8Y+JDBLZ6PYRRpNLDb/v9W1V4XstD03VNReGzk/v8/YQ/Ys+H/7C3wF0X4QeDphrmvXVwfEXxI8dTWi2l/438a3lvBBe6kYA8zWGjWEEEGleHNHE8y6dpVrE1xNd6rdapqN99K/Dn4YfDn4Q+FrHwR8LPAvhP4d+ENNybLw34N0HTfDukRSsqLLctZaXbW0M17ceWrXd9Ost5eSgzXU80pZz3VbU6ahre8u/RehlUqOelrR7dX6/5BX4u/8ABa79g3xD+2F+z9ovjX4WaRJrXxq+A1zrOveHdBs49+o+NvBetW9n/wAJl4R02NNr3evK2k6Tr/hu1Jmlu7rS7/Q9Pga+8QxsP2ioq5JSTT2ZnGTi01uv6t8z/KsI1HRtRIIvdK1bSr0ggiex1HTdRsZ8EEHyrmzvbO5i5H7ue3nj/gkTj9lvg1/wXq/b7+EvhzTvDGr618NvjPZ6XbRWVnqfxe8JarqfiUWkCCOJLzxF4O8UeCtS1q5RAA+p+IJdW1W6fMt7e3UpZz/Uz+1l/wAEoP2Mv2wdVvvF3j/wDe+DPiTqRLX/AMTfhXqFv4R8V6rMRg3PiC2l0/VvCvia+bEaPqviHw3qes+RDFbRalFboIx+Vmt/8Gz/AMNJ715PDn7V3jnStOMhMdrrfww0DX71Ys8I9/YeLPDUEkgHBlXTY1J58kDiuf2dSL91/c7fen/wTp9pTkveXyav9zX/AAD85/HH/Bwt+334qsJrLw/afAv4aTSIyR6t4N+HeralqcBIYCVF+IfjHx1pDSrkEeZpLxEqu6IjcG/NLxl8V/2u/wBub4i6Povizxb8Xf2iPiBqt46eGvCUDav4k+zTzZE//CNeC9GhGieH7RVdpLxtG0fTbG3hMk90YoVkkH9UXwv/AODcb9lDwxfW2ofE/wCKvxh+Kf2Z0dtGspvD/wAP/D18B9+LUItM0/WfEhif+H+zfFOmTJz+/bjH7QfAf9l79nz9mPQH8NfAb4S+Dfhpp88UUWoXOhaaH1/Wlhx5LeIvFWoyX3ifxHLEQPKl1zV9Qlj6I6jin7OpL45WXa9/wVl95PtKcfgjd97W/F3f3H+aD438GeJvhx408X/Dzxppb6J4x8B+KNf8GeLNFkuLO7k0jxN4X1a70PXdLku9PuLuwun0/VLG6tGuLG6ubOZoTJbXE0LJI39d/wDwbWf8m8ftFf8AZZ9G/wDUH0yvqH48f8EH/wBjH4/fF7x/8Z9d8UfHvwZ4i+JXiXVPGPifR/AfjHwLa+GZPE2vXcupa/q1laeKvhl4t1a1m1vVri71W9gOsy2aXl3OLG2s7Ux20f3T+xh+xF8Fv2E/hrq/wx+C7+LtQ0/xD4muPFniLxD471iw1rxRrery2NnpkBu7nSNG8O6PBaWGn2Fva2VnpuiWECDz7iZZ7y6ubmVwpSjO7tZX63fl0CdWMoWV7u3Sy8+p9f1+BX/Bxp/yYt4A/wCznfAf/qtfjDX7618u/tffsh/CT9tr4Pz/AAV+Mh8TW3hv/hItI8WaXrHg7VLPR/E2geItFiv7S01TSbvU9K1zSTK+natq2mXEOqaNqdpJZ6lc4t0uVt7mDWSbjJLdppGMGoyi3snd/if5t3gD/ke/BX/Y2+HP/TxZV/qZ1+Evgb/g3n/Yd8EeMvC/jE+M/wBo3xWfC+vaXr6eG/FPjb4dv4c1qXSryG9hsNbj8PfCXw9rUumzywol3Fp2t6bcywlo1uowxNfu1UUoShzc1tbWs77X/wAy6s4z5eW+l73Vt7f5BX4//wDBZD9gXVP21v2fLDXPhtp0d78dfglcat4k8B2AMcU/jPw/qdvbL4w8ARzyNHGmoarHpumat4ce4YxHXNGg0rfZ2+u3t9B+wFFaNKSaez/r8DOLcWmt1/X4n+Vdqml6noep6houtadfaRrGkXt1pmq6TqlpcWGpaZqNjO9te6fqFjdxxXVle2dzFJb3VrcxRz288bxSxpIjKP0p+A3/AAWC/b6/Z78OaZ4M8MfGVvF/g7RbaKz0fw98UNA0nx2ul2duixW1jY+INSgTxhDp1pAkdtZaYPEZ02wtoo4LG0t4kVR/Y7+1p/wS7/Y7/bKvbnxJ8Ufh7PoHxFuYUgk+KXw2v4/CHji5WOMQxNrEwstQ8PeKJoIkhgtrnxb4e166tLaCK1s57e2UxH8lvEP/AAbQfDG5vZJPCn7VnjzRdOLkw2viH4Z+H/E16ke4lUkv9N8U+EoJXCYUyLpsKlgWESg7BzeyqRfuv5p2fzX/AA50+1pyXvK3k1dfJ/8ADH5Y+LP+C9//AAUV8SWEllpfjf4c+BpZEKHUfCfwv8Oz36hhtZoz4x/4S2zjcjOHWzDITujKsFK/mt8V/wBoD9oj9pvxJY3Hxc+KPxK+MGv3N9HBoel6/rmsa/DbX164gis/DHhmOR9L0p7qWQRRWGgaXaLNLKVSBpJDu/qo8B/8G2P7O2k3kFx8R/2gfi/41tonWR7Dwto/hHwDDdbW3eVcTX9t47ult5MBZRazW1wULeVdQuVdf19/Zs/YC/ZG/ZLWK6+CHwW8MeH/ABKkDQS+PdXW68WfECdZYzFdBPGHiafVNZ0y3vQSbvTNEuNL0iQ4C6eiIiK/Z1JfFKy83f8ABafeL2lOPwxu/JW/F6/cf5yvj34f+N/hb4q1LwN8RvCuueCfGWjRaXNrHhbxLp9xpOvaSNa0iw17TY9U0y7SO70+5uNJ1SwvGs7uKG7t1uFiuYYZ1kiT+iz/AINp/wDkt37TP/ZK/B//AKl1xX7IftXf8EWf2Sf2vfjT4i+PHjzxF8a/B3jfxda6LD4mi+G/ivwdpuhaxd6Do9joFjq02n+LPh54yntdRbR9M02yuf7OvbKxuBZpdPY/bp7y6ufbf2Hf+CaX7PH7Adx481H4Oah8R/EmvfEODSLHXPEPxM1/Qda1O20nRZbu4tNI0qPwz4V8H6VaWUl3eSXl28umXN9czx2we98i3ihVxpSjNPTlTet9bWfSwpVYyg1rzNLS2l7q+p+g9c/4s8KeHPHXhfxH4K8X6PZeIPCni7Q9V8NeJdC1GLzrDWNC1uxn03VdMvIsqXtr2xuZ7eYKytskJRlYBh0FFdBzn+fR/wAFLP8AgmV8Tv2FPiLqer6Xpur+Lf2cfEurTP8ADz4lRW8l2mjRXkzyWvgjx9Pbx+VpHirTUP2W0vbhbfTvF1rCNU0gx3Y1bRdF+JPgZ+0l8eP2aPE0vi/4D/FPxd8MtcuUhi1GTw5qJTTdagtnaS3tfEOgXkd3oHiO0gkd5IbPXdM1G1ikZpI4lclq/wBNvxB4e0DxZouqeGvFOh6R4l8O63ZzadrOga/ptlrGi6vp9ypS4sdT0vUYbmxv7OdCUmtrqCWGVSVdGHFfjF8df+CBv7Cnxc1G+13wZYePPgNrV68lw9v8M/EFrceEXu5SS8j+EvGGm+I4LC15+TTfDN/4bsIdqiCCJNyPzyotO8H52vZr0Z0RrJq015XtdP1X9fI/n10n/gvn/wAFFtOsY7S88a/DXXp0RVbU9W+FnhuG+mYAAySR6ENF00O2CWEWnxR5J2xqMAZuq/8ABeX/AIKP6grC0+JvgfQi2cNpXwn8CzMmf7o1vStZU47b1f3zX6jX3/Bs14NkuHbTf2vfE1paEny4L74NaVqFwozwHuoPiPpkTkDgkWcYJ5wOla2lf8G0HwxhkU63+1Z481CIEb00r4Z+H9GkZe4WS78U66qE9iYnA7qaXLW7v/wJFc1HtH/wF/5H80P7Sf7Wv7Qf7XnifQ/GP7Q/xBk+IXiHw1o8ugaFet4a8H+F49N0ea+m1GSxhsfBnh/w9YSI15cSzGa4tZrkltpnKBVH2N/wRKBP/BTz9mPAz+8+MR/D/hQHxV5r+g/wh/wbm/sUaJJFceKPiB+0H41mQqZLS48VeCtA0iYDBINvo3gCLV03HIJTXQQpAGGG8/ox+zd/wTc/Yw/ZN8SW/jb4J/BfTdB8eW1headD441vX/FXjHxNBb6hA1rqH9n3nivW9Xt9Dlv7R5LO7k0C00oz2c1xaSA29zcRykaU+ZSk1o03rd6f13FKrDlcYp6ppWVkr/P9D7looorpOYKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACivzp8Jf8FXv2DfFfxR8YfB2f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';
            var doc = new jsPDF();
            doc.addImage(imgData, 'JPEG', 10, 10, 40, 10);
            doc.setFontSize(8);
            doc.text(175,13,'Fecha de emisión: ', null, null, 'right');
            doc.text(180,13,f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear());
            doc.setFontSize(16);
            doc.setFontType("bold");
            doc.text(110, 27, 'HISTORIAL DE VACUNACIÓN', null, null, 'center');
            
            doc.setFontSize(10);
            doc.text(10, 35, 'Datos del menor');
            doc.text(10, 45, 'CURP:');
            doc.text(10, 50, 'Nombre:');
            doc.text(10, 55, 'Fecha de nacimiento:');           
            doc.text(10, 60, 'Sexo:');
           
            doc.setFontType("normal");
            doc.text(23, 45, menor.curp);
            doc.text(25, 50, menor.nombre+' '+menor.apellidos);                        
            doc.text(47 , 55, fn.getDate() + "/" + (fn.getMonth() +1) + "/" + fn.getFullYear());
            if(menor.sexo===1){doc.text(20, 60, 'MASCULINO');}
            if(menor.sexo===2){doc.text(20, 60, 'FEMENINO');}
            
            doc.setFontType("bold");
            doc.text(105, 35, 'Datos del tutor');
            doc.text(105, 45, 'CURP:');
            doc.text(105, 50, 'Nombre:');
            doc.text(105, 55, 'Dirección:');
            doc.text(105, 60, 'Colonia:');
            doc.text(105, 65, 'Municipio:');
            
            doc.setFontType("normal");
            doc.text(117, 45, menor.tutor.curp);
            doc.text(120, 50, menor.tutor.nombre+' '+menor.tutor.apellidos);
            doc.text(123, 55, menor.tutor.calle+' '+menor.tutor.numero);
            doc.text(119, 60, menor.tutor.colonia);
            doc.text(123, 65, menor.tutor.municipio);
            
            doc.setFontSize(12);
            doc.setFontType("bold");
            doc.text(110, 76, 'Vacunas aplicadas y por aplicar', null, null, 'center');
            
            var elem = document.getElementById("gvCartillaModal");
            var res = doc.autoTableHtmlToJson(elem);
            doc.autoTable(res.columns, res.data, {startY: 80,
                    margin: {horizontal: 10},
                    bodyStyles: {valign: 'top'},
                    styles: {overflow: 'linebreak', columnWidth: 'wrap'},
                    columnStyles: {text: {columnWidth: 'auto'}}
            });            
            //doc.autoPrint();
            //doc.save('historial' +menor.curp+ '.pdf');            
            var string = doc.output('datauristring');
            var iframe = "<iframe width='100%' height='100%' src='" + string + "'></iframe>"
            var x = window.open();
            x.document.open();
            x.document.write(iframe);
            x.document.close();
        };        

        $scope.muestraAlertaGenerica = function(modal,titulo, mensaje){
            $('#lblModalTitleGen').text(titulo);
            $('#lblModalBodyGen').text(mensaje);            
            $('#'+modal).modal('show');
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
                    $scope.muestraAlertaGenerica('myModalGen','Tutor no encontrado','La CURP del tutor no se encuentra registrada, verifique.');
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
            //console.log('Menor: '+$scope.menor+'Vacuna: '+$scope.vacuna+' Estatus: '+$scope.filtroEstatus);
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
                $scope.muestraAlertaGenerica('myModalGen','Acción no permitida','Esta vacuna no se puede modificar porque no ha sido aplicada');                 
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
                            $scope.muestraAlertaGenerica('myModalGen','Perfil guardado','El perfil del menor se guardó correctamente'); 
                        });                        
                    }else{
                        $scope.muestraAlertaGenerica('myModalGen','CURP no aceptada','La CURP del menor ya se encuentra registrada en el sistema');
                    }
                });
            };
        };        
    }
]);


appSicosvac.controller('ControladorActualizaCartilla',[
    '$rootScope','$scope','$log','$state','Tutor','Menor','Vacuna','VacunaMenor','CatalogoAplicacion','Inventario','Centro','InventarioDisponible',
    function($rootScope,$scope, $log, $state, Tutor, Menor, Vacuna, VacunaMenor, CatalogoAplicacion, Inventario, Centro, InventarioDisponible) { 
        
        $scope.ruta = function(ruta){
            $state.go(ruta);
        };
        
        $scope.muestraAlertaGenerica = function(modal,titulo, mensaje){
            $('#lblModalTitleGen').text(titulo);
            $('#lblModalBodyGen').text(mensaje);            
            $('#'+modal).modal('show');
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
                $scope.vacunaMenor  = VacunaMenor.get({idMenor:$scope.menor[0].idMenor,idVacuna:$scope.vacunaSeleccionada.idVacuna,idCatalogo:dosis.idCatalogo},function(){
                    if($scope.vacunaMenor.estatus==='Por aplicar'){
                        $scope.vacunaMenor.fechaAplicacion = new Date();
                        $scope.editaVM=true;                
                    }else{
                        $scope.vacunaMenor.fechaAplicacion = new Date($scope.vacunaMenor.fechaAplicacion);
                        $scope.muestraAlertaGenerica('myModalGen','Acción no permitida','Esta dosis ya fue aplicada');                 
                        $scope.estatusInicial = $scope.vacunaMenor.estatus;
                        $scope.editaVM=false;
                    }                   
                });
            }else{
                //console.log('No hay dosis seleccionada');
            }
        };      
        
        $scope.registraAplicacion = function(){
            $scope.vacunaMenor.fechaAplicacion = new Date($scope.vacunaMenor.fechaAplicacion);
            $scope.vacunaMenor.lugarAplicacion = $scope.inventario.centro.nombreCentro;
            $scope.vacunaMenor.aplicoCs = 'SI';
            $scope.vacunaMenor.estatus = 'Aplicada';
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
                        $scope.muestraAlertaGenerica('myModalGen','Menor no encontrado','La CURP que esta buscando no se ha encontrado, es posible que el menor no este registrado o que este mal escrito, revise');
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


appSicosvac.controller('ControladorAdministracionPersonal',['$scope','$rootScope','$state','Jurisdiccion','Centro','Administrador','Rol',
    function($scope,$rootScope,$state,Jurisdiccion,Centro,Administrador,Rol){
        
        $scope.ruta = function(ruta){
            $state.go(ruta);
        };
        
        $scope.muestraAlertaConfirmacion = function(modal,titulo, mensaje){
            $('#lblModalTitle').text(titulo);
            $('#lblModalBody').text(mensaje);            
            $('#'+modal).modal('show');
        };
        
        $scope.listaRoles = Rol.query();
        
        if($rootScope.usuario.principal.rol.descripcion==='ADMIN'){
            $scope.jurisdiccion = $rootScope.usuario.principal.centro.jurisdiccion;
            $scope.centro = $rootScope.usuario.principal.centro;            
            $scope.admin = true;
        }else{
            $scope.listaJurisdicciones = Jurisdiccion.query();                          
        }        
        
        
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
        
        $scope.eliminarUsuario = function(usuario){
            Administrador.delete(usuario,function(){        
                $('#modalConfirmaEliminar').modal('hide');
                $scope.ruta('administracionPersonal');
                $scope.limpiaFormulario();
                $scope.editaUsuario=false;
            });
        };        
        
        $scope.confirmaEliminacionUsuario = function(){
            $('#modalConfirmaEliminar').modal('show');
        };        
        
        $scope.limpiaFormulario = function(){
            $scope.administrador='';
            $scope.administraUsuario.$setPristine();            
        };
    }
]);


appSicosvac.controller('ControladorRegistroUsuarios',['$scope','$rootScope','$state','Jurisdiccion','Centro','Administrador','Rol',
    function($scope,$rootScope,$state,Jurisdiccion,Centro, Administrador,Rol){
        
        $scope.ruta = function(ruta){
            $state.go(ruta);
        };
        
        $scope.muestraAlertaConfirmacion = function(modal,titulo, mensaje){
            $('#lblModalTitle').text(titulo);
            $('#lblModalBody').text(mensaje);            
            $('#'+modal).modal('show');
        };
        
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
        
        //$scope.listaJurisdicciones = Jurisdiccion.query();              
        $scope.listaRoles = Rol.query();        
        
        if($rootScope.usuario.principal.rol.descripcion==='ADMIN'){
            $scope.jurisdiccion = $rootScope.usuario.principal.centro.jurisdiccion;
            $scope.centro = $rootScope.usuario.principal.centro;            
            $scope.llenaDatosCentro($scope.centro);
            $scope.admin = true;
        }else{
            $scope.listaJurisdicciones = Jurisdiccion.query();                          
        }           
        
        $scope.administrador = new Administrador();
        $scope.confirmaRegistroUsuario = function(){
            if(!$scope.centro){
                $scope.muestraAlertaConfirmacion('myModal','Error','Debe asignar un Centro de Responsabilidad');
            }else{
                if(!$scope.rol){
                    $scope.muestraAlertaConfirmacion('myModal','Error','Debe asignar un Rol al usuario');
                }else{
                    //Verificamos que si ya existe el usuario en la base de datos
                    $scope.usuarioNuevo = Administrador.get({usuario:$scope.administrador.username},function(){
                        if($scope.usuarioNuevo.username === $scope.administrador.username){
                            $('#myModal2').modal('show');
                            return;
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
                    }); 
                }
            }
        };
    }
]);

appSicosvac.controller('ControladorPerfilAdmin',['$scope','$rootScope','$state','$http','Administrador','servPasaObjeto',
    function($scope,$rootScope,$state, $http, Administrador,servPasaObjeto){
        $scope.ruta = function(ruta){
            $state.go(ruta);
        };

        $scope.muestraAlertaConfirmacion = function(modal,titulo, mensaje){
            $('#lblModalTitle').text(titulo);
            $('#lblModalBody').text(mensaje);            
            $('#'+modal).modal('show');
        };
              
        $scope.modPassword=false;
        $scope.confirmaPassword = function(){
            $scope.modPassword=true;
        };

        $scope.administrador = new Administrador(servPasaObjeto.get());
        
        var authenticate = function(callback) { 
        $http.get('usuario')
                .then(
                    function(response) {
                        if (response.data.authenticated) {
                            $rootScope.usuario = response.data;
                            console.log('OK: '+$rootScope.usuario);
                        } 
                    callback && callback();
                    },
                    function(response) {
                        console.log('Error: '+$rootScope.usuario);
                        callback && callback();
                    });
                };
        
        $scope.confirmaModificacionUsuario = function(){
            if($scope.modPassword===false){
                $scope.administrador.$save(function(){
                    $scope.muestraAlertaConfirmacion('myModal','Datos guardados','La información del perfil se actualizó correctamente');
                    $scope.modPassword=false;
                    authenticate();
                    //$rootScope.usuario = Administrador.get({usuario:value.username});
                });                    
            }else{
                if($scope.administrador.password === $scope.passwordConfirma){
                    $scope.administrador.$save(function(){
                        $scope.muestraAlertaConfirmacion('myModal','Datos guardados','El usuario se ha registrado correctamente');
                        $scope.modPassword=false;
                        authenticate();
                        //$rootScope.usuario = Administrador.get({usuario:value.username});
                   });    
                }else{
                    $('#myModal2').modal('show');
                }
            }
        };        
    }    
]);


appSicosvac.controller('navigation', function($rootScope,$scope,$http,$location,$state,servPasaObjeto) {
    var authenticate = function(callback) {    
    $http.get('usuario')
            .then(
                function(response) {
                    if (response.data.authenticated) {
                        console.log('Autenticado en authenticate '+response.data.authenticated);
                        //$rootScope.authenticated = true;
                        $rootScope.usuario = response.data;
                        if($rootScope.usuario.principal.estatus===1){
                            $rootScope.usuarioEncabezado = $rootScope.usuario.principal.nombre+' '+$rootScope.usuario.principal.apellidos;
                            $rootScope.authenticated = true;
                        }else{
                            $rootScope.authenticated = false;
                        }
                        console.log($rootScope.usuario.principal);
                        console.log($rootScope.authenticated);
                    } else {
                            console.log('No Autenticado en authenticate '+response.data.authenticated);
                            $rootScope.authenticated = false;
                    }
                callback && callback();
                },
                function(response) {
                    console.log('Error en authenticate');
                    $rootScope.authenticated = false;
                    callback && callback();
                });
    };
    authenticate();
    $scope.credentials = {};
    $scope.login = function() {
        $http.post('login', $.param($scope.credentials), {
          headers : {
            "content-type" : "application/x-www-form-urlencoded"
          }
        })
        .then(
                function(response) {
                    authenticate(function() {
                        if ($rootScope.authenticated) {
                            console.log('Autenticado');
                            //$location.path("/home");
                            //event.preventDefault(); //<---- Prueba
                            $state.go("home");
                            $scope.error = false;
                        } else {
                            console.log('No Autenticado');
                            //event.preventDefault(); //<---- Prueba
                            //$location.path("/login");
                            $state.go("login");
                            $scope.error = true;
                        }
                    });
                },
                function(response) {
                    console.log('Error en Autenticacion');
                    //$location.path("/login");
                    $state.go('login');
                    $scope.error = true;
                    $scope.mensaje='Error de autenticación';
                    $rootScope.authenticated = false;            
                });
    };       

    $scope.logout = function() {
        $http.post('logout', {})
            .then(
                function(response) {
                    console.log("Logout exitoso");
                    $rootScope.authenticated = false;
                    $location.path("/login");
                    //$state.go("login");
                },
                function(response) {
                    console.log("Error en logout");
                    $rootScope.authenticated = false;
                });
    };
    
        $scope.enviaObjetoAUrl = function(objeto) {
            servPasaObjeto.set(objeto);
        };
        
        $scope.modificarPerfilAdmin = function(){
            servPasaObjeto.set($rootScope.usuario.principal);
        };                
});
 
 appSicosvac.controller('NavController', function($http, $scope, AuthService, $state, $rootScope) {
	$scope.$on('LoginSuccessful', function() {
            console.log("LoginSuccessful");
		$scope.user = AuthService.user;
	});
	$scope.$on('LogoutSuccessful', function() {
            console.log("LogoutSuccessful");
		$scope.user = null;
	});
	$scope.logout = function() {
                //OK
		//AuthService.user = null;
		//$rootScope.$broadcast('LogoutSuccessful');
		//$state.go('login');           
		$http.post('logout',{})
                .then(
                        function(response){
                        // success callback
                            AuthService.user = null;
                            $rootScope.$broadcast('LogoutSuccessful');
                            $state.go('login');                 
                        }, 
                        function(res){
                        // failure call back
                            AuthService.user = null;
                            $rootScope.$broadcast('LogoutSuccessful');
                            $state.go('login');                 
                        }
                );                
	};
});

