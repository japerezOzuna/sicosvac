 /* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var appSicosvac = angular.module('appSicosvac',['ngRoute','ngResource','ui.bootstrap']);

appSicosvac.factory('myService', function() {
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

appSicosvac.factory("ServicioPasaObjeto", function() {
  return {
    data: {}
  };
});

appSicosvac.factory('Vacuna',[
    '$resource',
    function($resource){
        return $resource('vacunas/:idVacuna');
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
        return $resource('menores/:idTutor');
    }
]);

appSicosvac.controller('ControladorVacunas',[
    '$scope','$log','$window','Vacuna','VacunaMenor','CatalogoAplicacion','Recomendacion','Contraindicacion','EfectoAdverso','Menor','Inventario','Centro',
    function($scope, $log, $window, Vacuna, VacunaMenor, CatalogoAplicacion, Recomendacion, Contraindicacion, EfectoAdverso, Menor, Inventario, Centro){  
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
        
        /*Guardado de la información general de la vacuna*/
        $scope.vacuna = new Vacuna();
        $scope.guardarVacuna = function(){          
            if($scope.en_edicion===false){                
                $scope.vacuna.$save(function(){
                    $scope.idVacuna=$scope.vacuna.idVacuna;
                    $scope.guardaNuevoInventario($scope.idVacuna);
                    $scope.guardaAdicionales($scope.idVacuna);
                    $scope.limpiaformulario();
                });            
                $('#modalConfirmaAlta').modal('hide');
            }else{
                $scope.vacuna.$save(function(){
                    $('#modalConfirmaModificacion').modal('show');                    
                });
            }
        };
        
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
                    $scope.listaMenores = Menor.query(function(){
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
                   });
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
                $scope.listaMenores = Menor.query(function(){
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
               });
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
                $window.location.href = 'AdministracionVacunas.jsp';
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
    '$scope','$log','$routeParams','$window','Tutor','Menor','ServicioPasaObjeto','myService',
    function($scope, $log, $routeParams,$window, Tutor, Menor, ServicioPasaObjeto, myService){
        $scope.enviaObjetoAUrl = function(objeto) {
            //ServicioPasaObjeto.data=objeto;            
            myService.set(objeto);
        };
          
        $scope.modificarPerfilTutor = function(){
            myService.set($scope.tutor[0]);
            //confirm($scope.tutor[0].nombre);
            //$scope.nuevoTutor = myService.get();
            //confirm(myService.get().nombre);
            window.location ='ModificarPerfilTutor.jsp';
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
                    //$scope.datosTutor.$setPristine();
                    myService.set($scope.tutor[0].idTutor);
                    confirm(myService.get());
                }else{
                    $scope.muestraAlertaConfirmacion('modalConfirmaPerfil','Tutor no encontrado','La CURP del tutor no se encuentra registrada, verifique.');
                    $scope.datosTutor="";
                    $scope.datosTutor.$setDirty();
                }
            });
        };
        
        $scope.buscaMenor = function(menorBuscado){
            $scope.menor =  Menor.query({curp:menorBuscado},function(){
                if($scope.menor.length>0){
                    //confirm($scope.menor[0].nombre);
                    $scope.datosMenor = $scope.menor[0].nombre+' '+$scope.menor[0].apellidos+
                            '\n'+$scope.menor[0].calle+' '+$scope.menor[0].numero+', Colonia '+$scope.menor[0].colonia+
                            '\n'+$scope.menor[0].municipio+', '+$scope.menor[0].estado;
                    $scope.datosMenor.$setPristine();
                }else{
                    $scope.muestraAlertaConfirmacion('modalConfirmaPerfil','Menor no encontrado','La CURP del menor no se encuentra registrada, verifique.');
                    $scope.datosMenor="";;
                }
            });
        };
    }
]);

appSicosvac.controller('ControladorTutores',[
    '$scope','$log','$window','Tutor','Rol',
    function($scope, $log, $window, Tutor, Rol){ 

        $scope.muestraAlertaConfirmacion = function(modal,titulo, mensaje){
            $('#lblModalTitle').text(titulo);
            $('#lblModalBody').text(mensaje);            
            $('#'+modal).modal('show');
        };
        
        $scope.tutor = new Tutor();
        $scope.confirmaAltaPerfilTutor = function(){
            var usuarios=0, curps=0;
            $scope.rol = Rol.get({idRol:4});            
            if(($scope.tutor.usuario == $scope.usuarioConfirma) && $scope.tutor.usuario != '' && $scope.usuarioConfirma != ''){
                if(($scope.tutor.password == $scope.passwordConfirma) && $scope.tutor.password != ''  && $scope.passwordConfirma != ''){
                    $scope.tutoresPorUsuario = Tutor.query({usuario:$scope.tutor.usuario},function(){
                        usuarios = $scope.tutoresPorUsuario.length;
                        if(usuarios==0){
                            $scope.tutoresPorCurp = Tutor.query({curp:$scope.tutor.curp},function(){
                                curps=$scope.tutoresPorCurp.length;
                                if(curps==0){
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
    '$scope','$log','$routeParams','Tutor','Rol','ServicioPasaObjeto','myService',
    function($scope, $log, $routeParams, Tutor, Rol, ServicioPasaObjeto, myService){ 
        $scope.tutor=myService.get();
        confirm('Tutor: '+$scope.tutor);
        //$scope.tutor[0] = Tutor.query({idTutor:$routeParams.idTutor});
        //confirm($scope.tutor[0].nombre);
        $scope.modEmail=false;
        $scope.confirmaEmail = function(){
            $scope.modEmail=true;
        };
    }
]);

appSicosvac.controller('ControladorMenores',[
    '$scope','$log','$window','Tutor','Rol','Menor',
    function($scope, $log, $window, Tutor, Rol, Menor) { 

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
                    $scope.datosTutor.$setPristine();
                }else{
                    $scope.muestraAlertaConfirmacion('modalConfirmaAltaPerfilMenor','Tutor no encontrado','La CURP del tutor no se encuentra registrada, verifique.');
                    $scope.datosTutor="";
                    //$scope.datosTutor.$setDirty();
                }
            });
        };
        $scope.menor = new Menor();        
        $scope.guardaPerfilMenor = function(){
            if($scope.tutor.length>0){
                $scope.menoresPorCurp = Menor.query({curp:$scope.menor.curp},function(){
                    confirm($scope.menoresPorCurp.length);
                    if($scope.menoresPorCurp.length==0){
                        $scope.menor.crip='';
                        $scope.menor.tutor=$scope.tutor[0];
                        $scope.menor.$save(function(){
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