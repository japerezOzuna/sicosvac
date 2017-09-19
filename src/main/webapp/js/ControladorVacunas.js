/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('appVacunasCtrl', [])
.controller('ControladorVacunas',[
    '$scope','$log','$window','Vacuna','CatalogoAplicacion','Recomendacion','Contraindicacion','EfectoAdverso',
    function($scope, $log, $window, Vacuna, CatalogoAplicacion, Recomendacion, Contraindicacion, EfectoAdverso){  
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
            if ($scope.dosis.indexOf($scope.dose) == -1 
                    && $scope.dosis.indexOf($scope.edad) == -1) {                
                $scope.dosis.push([$scope.dose, $scope.edad]);                
                $scope.hayDosis = true;                
                $scope.errortextD = "";
            }else {
                $scope.errortextD = "La dosis ya se encuentra en la lista";
            }	
        };       
        $scope.eliminarDosis = function ( idx ) {
            $scope.dosis.splice(idx, 1);
            if($scope.dosis.length == 0){
                $scope.hayDosis = false;
            }
        };
        
        $scope.modEliminarDosis = function (dosis) {
            CatalogoAplicacion.delete(dosis,function(){                            
            var indice = $scope.listaDosis.findIndex(function(elem){
                    return elem.idCatalogo === dosis.idCatalogo;
                });
                $scope.listaContraindicaciones.splice(indice,1);
            });        
        };
        
        $scope.agregarRecomendacion = function(){
            $scope.errortextR = "";
            if (!$scope.recomendacion || !$scope.tiempoRecomendacion ) {return;}
            if ($scope.recomendaciones.indexOf($scope.recomendacion) == -1 
                    && $scope.recomendaciones.indexOf($scope.tiempoRecomendacion) == -1) {
                $scope.recomendaciones.push([$scope.recomendacion, $scope.tiempoRecomendacion]);
                $scope.hayRecomendaciones = true;
                $scope.errortextR = "";
            }else {
                $scope.errortextR = "La recomendación ya se encuentra en la lista";
            }	
        };       
        $scope.eliminarRecomendacion = function ( idx ) {
            $scope.recomendaciones.splice(idx, 1);
            if($scope.recomendaciones.length == 0){
                $scope.hayRecomendaciones = false;
            }
        };
        
        $scope.modEliminarRecomendacion = function (recomendacion) {
            Recomendacion.delete(recomendacion,function(){                            
            var indice = $scope.listaRecomendaciones.findIndex(function(elem){
                    return elem.idRecomendacion === recomendacion.idRecomendacion;
                });
                $scope.listaRecomendaciones.splice(indice,1);
            });
        };
        
        $scope.agregarContraindicacion = function(){
            $scope.errortextCI = "";
            if (!$scope.contraindicacion) {return;}
            if ($scope.contraindicaciones.indexOf($scope.contraindicacion) == -1) {
                $scope.contraindicaciones.push($scope.contraindicacion);
                $scope.hayContraindicaciones = true;
                $scope.errortextCI = "";
            }else {
                $scope.errortextCI = "La contraindicación ya se encuentra en la lista";
            }	
        };       
        $scope.eliminarContraindicacion = function ( idx ) {
            $scope.contraindicaciones.splice(idx, 1);
            if($scope.contraindicaciones.length == 0){
                $scope.hayContraindicaciones = false;
            }
        };       
        
        $scope.modEliminarContraindicacion = function (contraindicacion) {
            Contraindicacion.delete(contraindicacion,function(){                            
            var indice = $scope.listaContraindicaciones.findIndex(function(elem){
                    return elem.idContraindicacion === contraindicacion.idContraindicacion;
                });
                $scope.listaContraindicaciones.splice(indice,1);
            });
        };
        
        $scope.agregarEfecto = function(){
            $scope.errortextEA = "";
            if (!$scope.efectoAdverso) {return;}
            if ($scope.efectos.indexOf($scope.efectoAdverso) == -1) {
                $scope.efectos.push($scope.efectoAdverso);
                $scope.hayEfectos=true;
                $scope.errortextEA = "";
            }else {
                $scope.errortextEA = "El efecto ya se encuentra en la lista";
            }	
        };        

        $scope.eliminarEfecto = function ( idx ) {
            $scope.efectos.splice(idx, 1);
            if($scope.efectos.length==0){
                $scope.hayEfectos=false;
            }
        };

        $scope.modEliminarEfecto = function (efecto) {
            EfectoAdverso.delete(efecto,function(){                            
            var indice = $scope.listaEfectosAdversos.findIndex(function(elem){
                    return elem.idEfecto === efecto.idEfecto;
                });
                $scope.listaEfectosAdversos.splice(indice,1);
            });
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
            if($scope.en_edicion=false){
                $scope.vacuna.$save(function(){
                    //confirm('Vacuna guardada');                    
                    //confirm("dosis "+$scope.dosis.length);
                    /*Se guardan los datos adicionales*/
                    $scope.dosis.forEach(function(registroDosis){
                        $scope.regDosis = new CatalogoAplicacion();
                        $scope.regDosis.idVacuna = $scope.vacuna.idVacuna;
                        $scope.regDosis.dosis = registroDosis[0];
                        $scope.regDosis.edadMeses = registroDosis[1];
                        $scope.regDosis.estatus = 1;
                        $scope.regDosis.$save(function(){
                           $log.debug('Dosis guardada'); 
                        });
                    });
                    //confirm("recomendaciones "+$scope.recomendaciones.length);
                    $scope.recomendaciones.forEach(function(registroRecomendacion){
                        $scope.regRecomendacion = new Recomendacion();
                        $scope.regRecomendacion.vacuna = $scope.vacuna.idVacuna;
                        $scope.regRecomendacion.descripcion = registroRecomendacion[0];
                        $scope.regRecomendacion.tiempo = registroRecomendacion[1];
                        $scope.regRecomendacion.$save(function(){
                           $log.debug('Recomendacion guardada'); 
                        });                        
                    });
                    //confirm("contraindicaciones "+$scope.contraindicaciones.length);
                    $scope.contraindicaciones.forEach(function(registroContraindicacion){                        
                        $scope.regContraindicacion = new Contraindicacion();
                        $scope.regContraindicacion.vacuna = $scope.vacuna.idVacuna;
                        $scope.regContraindicacion.descripcion = registroContraindicacion;
                        $scope.regContraindicacion.$save(function(){
                           $log.debug('Contraindicacion guardada'); 
                        });                        
                    });
                    //confirm("efectos "+$scope.efectos.length);
                    $scope.efectos.forEach(function(registroEfectoAdverso){                        
                        $scope.regEfectoAdverso = new EfectoAdverso();
                        $scope.regEfectoAdverso.vacuna =  $scope.vacuna.idVacuna;
                        $scope.regEfectoAdverso.descripcion = registroEfectoAdverso;
                        $scope.regEfectoAdverso.$save(function(){
                           $log.debug('Efecto adverso guardado'); 
                        });                        
                    });                   
                }); 
                $('#modalConfirmaAlta').modal('hide');
                $scope.altaVacuna.$setPristine();
                angular.copy({},altaVacuna);
                $scope.dosis.length=0;
                $scope.recomendaciones.length=0;
                $scope.contraindicaciones.length=0;
                $scope.efectos.length=0;
            }else{
                $scope.vacuna.$save(function(){
                    $('#modalConfirmaModificacion').modal('show');                    
                });
            }

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
        
        $scope.eliminarVacuna = function(vacuna){
            Vacuna.delete(vacuna,function(){                                
                $window.location.href = 'AdministracionVacunas.jsp';
            });
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
