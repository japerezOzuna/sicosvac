/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('appInventarioCtrl', [])
.controller('ControladorInventario',[
    '$scope','$log','$window','Inventario','Vacuna','Jurisdiccion','Centro',
    function($scope, $log, $window, Inventario, Vacuna, Jurisdiccion, Centro){  
        $scope.listaJurisdicciones = Jurisdiccion.query();        
        //$scope.listaVacunas = Vacuna.query();
        //$scope.listaInventario = Inventario.query();
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
            //$scope.inventario.$save(function(){                
            //});
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
            if($scope.cantidades.length == 0){
                $scope.hayCantidades = false;
            }
        };        
    }
]);
